<?php
declare(strict_types=1);

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'httponly' => true,
    'samesite' => 'Lax',
]);
session_start();

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');
header('Cache-Control: no-store');

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $databaseDir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'database';
    if (!is_dir($databaseDir)) {
        mkdir($databaseDir, 0777, true);
    }

    $pdo = new PDO('sqlite:' . $databaseDir . DIRECTORY_SEPARATOR . 'smart_shop.sqlite');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('PRAGMA foreign_keys = ON');
    $pdo->exec(file_get_contents($databaseDir . DIRECTORY_SEPARATOR . 'schema.sql'));
    ensureColumn($pdo, 'orders', 'payment_status', "TEXT NOT NULL DEFAULT 'Demo only'");
    ensureColumn($pdo, 'orders', 'transaction_ref', "TEXT NOT NULL DEFAULT ''");
    ensureColumn($pdo, 'order_items', 'product_name', "TEXT NOT NULL DEFAULT ''");
    ensureColumn($pdo, 'order_items', 'image', "TEXT NOT NULL DEFAULT ''");
    $pdo->exec('CREATE INDEX IF NOT EXISTS idx_products_category_stock ON products(category_id, stock)');
    $pdo->exec('CREATE INDEX IF NOT EXISTS idx_orders_user_created ON orders(user_id, created_at)');
    seedDatabase($pdo);
    return $pdo;
}

function ensureColumn(PDO $pdo, string $table, string $column, string $definition): void
{
    $columns = $pdo->query('PRAGMA table_info(' . $table . ')')->fetchAll(PDO::FETCH_ASSOC);
    foreach ($columns as $existing) {
        if ($existing['name'] === $column) {
            return;
        }
    }
    $pdo->exec('ALTER TABLE ' . $table . ' ADD COLUMN ' . $column . ' ' . $definition);
}

function seedDatabase(PDO $pdo): void
{
    $userCount = (int)$pdo->query('SELECT COUNT(*) FROM users')->fetchColumn();
    if ($userCount === 0) {
        $pdo->prepare('INSERT INTO users (name, email, password_hash, role, mood, avatar) VALUES (?, ?, ?, ?, ?, ?)')
            ->execute(['Admin User', 'admin@smartshop.test', password_hash('admin123', PASSWORD_DEFAULT), 'admin', 'productive', 'AU']);
        $pdo->prepare('INSERT INTO users (name, email, password_hash, role, mood, avatar) VALUES (?, ?, ?, ?, ?, ?)')
            ->execute(['Demo Customer', 'demo@smartshop.test', password_hash('demo123', PASSWORD_DEFAULT), 'user', 'creative', 'DC']);
    }

    $categories = [
        ['Smartphones', 'Latest phones with AI cameras and fast charging'],
        ['Wearables', 'Watches, bands, trackers, and wellness devices'],
        ['Home Tech', 'Smart speakers, lighting, and connected appliances'],
        ['Gaming', 'Consoles, accessories, and performance gear'],
        ['Fashion', 'Modern lifestyle products and accessories'],
        ['Laptops', 'Work, study, creator, and gaming laptops'],
        ['Beauty', 'Personal care, grooming, and wellness picks'],
        ['Kitchen', 'Smart kitchen and daily home essentials'],
        ['Books', 'Career, creativity, finance, and learning books'],
        ['Sports', 'Fitness, outdoor, and active lifestyle products'],
        ['Appliances', 'Large and small appliances for modern homes'],
        ['Toys', 'STEM toys, collectibles, and family gifts'],
    ];
    foreach ($categories as $category) {
        $pdo->prepare('INSERT OR IGNORE INTO categories (name, description) VALUES (?, ?)')->execute($category);
    }

    $audioCategory = (int)$pdo->query("SELECT id FROM categories WHERE name = 'Wearables'")->fetchColumn();
    $audioProducts = [
        [$audioCategory, 'Echo Bass Headphones', 3499, 42, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85', 'music,study,travel,focused', 'Over-ear wireless headphones with cushioned earcups, clear calls, and balanced everyday sound.'],
        [$audioCategory, 'StudioTune Wireless Headphones', 4499, 28, 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85', 'music,work,study,calm', 'Comfortable wireless headphones with soft ear cushions and a foldable travel-ready design.'],
    ];
    foreach ($audioProducts as $product) {
        $pdo->prepare('INSERT INTO products (category_id, name, price, stock, image, mood_tags, description)
            SELECT ?, ?, ?, ?, ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = ?)')
            ->execute([...$product, $product[1]]);
    }

    $productCount = (int)$pdo->query('SELECT COUNT(*) FROM products p JOIN categories c ON c.id = p.category_id')->fetchColumn();
    if ($productCount >= 120) {
        return;
    }

    $products = [
        [1, 'Astra X1 AI Phone', 52999, 24, 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80', 'productive,travel,creative', 'AI camera assistant, adaptive battery, and on-device translation for daily work.'],
        [1, 'Nova Fold Lite', 74999, 12, 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=900&q=80', 'premium,creative', 'A slim folding display with multitasking gestures and bright AMOLED visuals.'],
        [2, 'PulseFit Pro Watch', 12999, 40, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', 'fitness,focused,calm', 'Tracks health, sleep, training load, calls, and notifications with long battery life.'],
        [2, 'Muse Audio Buds', 6999, 55, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80', 'calm,travel,study', 'Noise cancellation, spatial audio, and a low-latency mode for entertainment.'],
        [3, 'Halo Smart Speaker', 8999, 30, 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=900&q=80', 'calm,home,party', 'Voice control for music, lights, routines, reminders, and home automation.'],
        [3, 'LumaSync Light Kit', 4999, 80, 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80', 'party,home,creative', 'App controlled smart lights with scenes, schedules, and music sync.'],
        [4, 'Vortex GamePad Elite', 5999, 65, 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80', 'gaming,energetic', 'Responsive triggers, haptics, programmable buttons, and cross-platform support.'],
        [4, 'Nebula RGB Keyboard', 8499, 28, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80', 'gaming,productive', 'Mechanical keys, hot-swappable switches, macro profiles, and vivid lighting.'],
        [5, 'UrbanFlex Smart Backpack', 3499, 42, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80', 'travel,study,work', 'Water resistant everyday backpack with laptop safety and USB charging support.'],
        [5, 'Aura Minimal Sneakers', 4499, 36, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', 'casual,energetic', 'Lightweight comfort sneakers with a clean modern design for daily use.'],
    ];
    foreach ($products as $product) {
        $pdo->prepare('INSERT INTO products (category_id, name, price, stock, image, mood_tags, description)
            SELECT ?, ?, ?, ?, ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = ?)')
            ->execute([...$product, $product[1]]);
    }

    $catalogNames = [
        1 => ['Galaxy Max Phone', 'Pixel Air Phone', 'Zenith Camera Phone', 'Swift 5G Phone', 'Orbit Mini Phone', 'Titan Pro Phone', 'Flash Charge Phone', 'Prime View Phone', 'Echo Lens Phone', 'Neo Smart Phone'],
        2 => ['FitCore Band', 'Active Loop Watch', 'SleepSense Ring', 'AirBeat Buds', 'RunMate Tracker', 'Wellness Pro Watch', 'Focus Pods', 'Hydra Smart Bottle', 'Stride Watch', 'Pulse Earbuds'],
        3 => ['Smart Plug Duo', 'SecureCam Mini', 'Voice Hub Plus', 'Aroma Diffuser AI', 'DoorBell Vision', 'Climate Sensor', 'Robot Mop Lite', 'Smart Curtain Kit', 'Home Mesh Router', 'Energy Monitor'],
        4 => ['RapidFire Mouse', 'Arena Headset', 'Console Dock', 'Stream Deck Mini', 'Pro Trigger Kit', 'Cooling Stand', 'Arcade Stick', 'Game Capture HD', 'Speed Mat XL', 'VR Link Cable'],
        5 => ['Trail Jacket', 'Metro Sunglasses', 'Daily Wallet', 'Cloud Hoodie', 'Classic Denim', 'Flex Joggers', 'Smart Belt', 'Weekender Duffel', 'Cotton Polo', 'Rain Shell'],
        6 => ['CreatorBook 14', 'OfficeBook Slim', 'GameForge Laptop', 'StudyMate Chromebook', 'UltraDock Station', 'Vision Monitor', 'TypePro Mouse', 'WorkCam HD', 'Laptop Cooling Pad', 'USB-C Hub'],
        7 => ['Glow Serum', 'Hydra Face Wash', 'Grooming Kit', 'Salon Dryer', 'Wellness Massager', 'Skin Analyzer', 'Beard Trimmer', 'Nail Care Set', 'Aroma Oil Pack', 'Travel Vanity Kit'],
        8 => ['Air Fryer Smart', 'BlendMax Mixer', 'CoffeeCraft Pro', 'Steel Lunch Box', 'Smart Kettle', 'Water Purifier', 'Induction Cooktop', 'Meal Prep Set', 'Chef Knife Kit', 'Storage Jar Set'],
        9 => ['AI Career Guide', 'Startup Playbook', 'Design Thinking Book', 'Finance Basics', 'Python Fast Track', 'Marketing Handbook', 'Mindful Work', 'Exam Prep Notes', 'Productivity Journal', 'English Builder'],
        10 => ['Yoga Mat Pro', 'Dumbbell Pair', 'Cricket Bat Elite', 'Football Street', 'Cycle Helmet', 'Resistance Band Set', 'Trekking Pole', 'Gym Gloves', 'Skipping Rope', 'Hydration Pack'],
        11 => ['CoolAir AC', 'WashPro Machine', 'FrostFree Fridge', 'QuickHeat Geyser', 'PowerVac Cleaner', 'Steam Iron', 'Room Heater', 'DishClean Mini', 'Tower Fan', 'Air Purifier'],
        12 => ['STEM Robot Kit', 'Puzzle Cube Set', 'Art Studio Box', 'Drone Junior', 'Building Blocks', 'Board Game Night', 'RC Racer', 'Science Lab Kit', 'Plush Gift Set', 'Story Projector'],
    ];
    $images = [
        1 => 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        2 => 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=900&q=80',
        3 => 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80',
        4 => 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',
        5 => 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
        6 => 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
        7 => 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
        8 => 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
        9 => 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80',
        10 => 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
        11 => 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80',
        12 => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80',
    ];
    $moods = ['focused', 'creative', 'calm', 'travel', 'gaming', 'party', 'fitness', 'study', 'work', 'energetic', 'home', 'premium'];
    $stmt = $pdo->prepare('INSERT INTO products (category_id, name, price, stock, image, mood_tags, description) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $categoryIds = [];
    foreach ($pdo->query('SELECT id, name FROM categories') as $row) {
        $categoryIds[$row['name']] = (int)$row['id'];
    }
    $categoryOrder = [
        'Smartphones' => 1,
        'Wearables' => 2,
        'Home Tech' => 3,
        'Gaming' => 4,
        'Fashion' => 5,
        'Laptops' => 6,
        'Beauty' => 7,
        'Kitchen' => 8,
        'Books' => 9,
        'Sports' => 10,
        'Appliances' => 11,
        'Toys' => 12,
    ];
    foreach ($categoryOrder as $categoryName => $templateId) {
        if (empty($categoryIds[$categoryName])) {
            continue;
        }
        $categoryId = $categoryIds[$categoryName];
        $existingInCategory = (int)$pdo->query('SELECT COUNT(*) FROM products WHERE category_id = ' . $categoryId)->fetchColumn();
        $neededInCategory = max(0, 10 - $existingInCategory);
        if ($neededInCategory === 0) {
            continue;
        }
        foreach ($catalogNames[$templateId] as $index => $name) {
            if ($neededInCategory <= 0) {
                break;
            }
            $price = (($templateId * 1900) + (($index + 2) * 777)) % 89000 + 499;
            $tags = $moods[($templateId + $index) % count($moods)] . ',' . $moods[($templateId + $index + 4) % count($moods)] . ',value';
            $description = $name . ' with trusted quality, fast delivery, verified reviews, and SmartCart AI matching for your shopping mood.';
            $stmt->execute([$categoryId, $name . ' ' . ($index + 1), $price, 15 + (($templateId * $index) % 90), $images[$templateId], $tags, $description]);
            $neededInCategory--;
        }
    }

    if ((int)$pdo->query('SELECT COUNT(*) FROM reviews')->fetchColumn() === 0) {
        $reviews = [
            [2, 1, 5, 'Camera and battery are excellent. The AI translation helped during travel.'],
            [2, 1, 4, 'Fast and premium, but I wanted more color options.'],
            [2, 3, 5, 'Very accurate fitness tracking and comfortable for daily use.'],
            [2, 5, 4, 'Speaker sounds rich and the smart home routines are useful.'],
        ];
        foreach ($reviews as $review) {
            $pdo->prepare('INSERT INTO reviews (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)')->execute($review);
        }
    }
}

function input(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return $_POST;
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function jsonResponse(array $data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function currentUser(PDO $pdo): ?array
{
    if (empty($_SESSION['user_id'])) {
        return null;
    }
    $stmt = $pdo->prepare('SELECT id, name, email, role, mood, avatar, created_at FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    return $user ?: null;
}

function requireUser(PDO $pdo): array
{
    $user = currentUser($pdo);
    if (!$user) {
        jsonResponse(['ok' => false, 'message' => 'Authentication required.'], 401);
    }
    return $user;
}

function productRows(PDO $pdo, string $where = '', array $params = []): array
{
    $sql = 'SELECT p.*, c.name AS category_name,
            COALESCE(AVG(r.rating), 0) AS rating,
            COUNT(r.id) AS review_count
            FROM products p
            JOIN categories c ON c.id = p.category_id
            LEFT JOIN reviews r ON r.product_id = p.id ' . $where . '
            GROUP BY p.id
            ORDER BY p.created_at DESC, p.id DESC';
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function addHistory(PDO $pdo, int $userId, ?int $productId, string $action, string $details = ''): void
{
    $pdo->prepare('INSERT INTO history (user_id, product_id, action, details) VALUES (?, ?, ?, ?)')
        ->execute([$userId, $productId, $action, $details]);
}
