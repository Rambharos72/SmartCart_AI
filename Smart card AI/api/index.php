<?php
declare(strict_types=1);

require __DIR__ . '/db.php';

function validAddress(mixed $address): bool
{
    if (!is_array($address)) return false;
    foreach (['name', 'phone', 'line1', 'city', 'state', 'postal_code'] as $field) {
        if (trim((string)($address[$field] ?? '')) === '') return false;
    }
    return preg_match('/^[0-9+() -]{8,18}$/', (string)$address['phone']) === 1
        && preg_match('/^[0-9]{5,10}$/', (string)$address['postal_code']) === 1;
}

function assistantResults(PDO $pdo, string $prompt): array
{
    $prompt = trim($prompt);
    $budget = null;
    if (preg_match('/(?:₹|rs\.?|inr)\s*([0-9][0-9,]*)|([0-9][0-9,]*)\s*(?:rupees?|rs\.?|inr)/iu', $prompt, $match)) {
        $budget = (float)str_replace(',', '', $match[1] !== '' ? $match[1] : $match[2]);
    }

    $audioIntent = preg_match('/headphones?|headsets?|earphones?|earbuds?|\bbuds\b|\baudio\b/iu', $prompt) === 1;
    $tokens = preg_split('/[^\p{L}\p{N}]+/u', strtolower($prompt), -1, PREG_SPLIT_NO_EMPTY) ?: [];
    $stop = ['i','have','a','an','the','for','want','need','looking','under','below','within','rupees','rs','inr','my','me','please','show','suggest','recommend','buy','with','budget'];
    $tokens = array_values(array_diff($tokens, $stop));
    $rows = productRows($pdo, 'WHERE p.stock > 0', []);
    $ranked = [];
    foreach ($rows as $product) {
        $haystack = strtolower($product['name'] . ' ' . $product['description'] . ' ' . $product['mood_tags'] . ' ' . $product['category_name']);
        $score = 0;
        if ($audioIntent && preg_match('/headphone|headset|earphone|earbud|\bbuds\b|\baudio\b|\bpods\b|\bsound\b/i', $haystack)) $score += 10;
        foreach ($tokens as $token) {
            if (strlen($token) > 2 && str_contains($haystack, $token)) $score += 3;
        }
        if ($budget !== null && (float)$product['price'] <= $budget) $score += 4;
        $score += min(2, (float)$product['rating'] / 3);
        if ($score > 0) {
            $product['assistant_reason'] = $audioIntent
                ? 'Matches your audio request' . ($budget !== null && (float)$product['price'] <= $budget ? ' and is within your budget.' : '.')
                : ($budget !== null && (float)$product['price'] <= $budget ? 'In stock and within your budget.' : 'Matches the words in your request.');
            $product['_score'] = $score;
            $ranked[] = $product;
        }
    }
    usort($ranked, static fn(array $a, array $b): int => ($b['_score'] <=> $a['_score']) ?: ((float)$a['price'] <=> (float)$b['price']));
    $suggestions = array_slice($ranked, 0, 5);
    foreach ($suggestions as &$product) unset($product['_score']);
    unset($product);

    if (!$suggestions) {
        $message = 'I could not find an in-stock match. Try a product type such as headphones, or tell me your budget.';
    } elseif ($budget !== null && !array_filter($suggestions, static fn(array $p): bool => (float)$p['price'] <= $budget)) {
        $message = 'I found related products, but none are within ₹' . number_format($budget, 0) . '. Here are the closest in-stock options.';
    } else {
        $message = 'Here are in-stock options matched to your request' . ($budget !== null ? ' and budget of ₹' . number_format($budget, 0) : '') . '. These are local catalog matches, not an external AI service.';
    }
    return ['budget' => $budget, 'products' => $suggestions, 'message' => $message];
}

try {
    $pdo = db();
    $action = (string)($_GET['action'] ?? '');
    $data = input();

    switch ($action) {
        case 'session':
            jsonResponse(['ok' => true, 'user' => currentUser($pdo)]);

        case 'request-otp':
            $email = strtolower(trim((string)($data['email'] ?? '')));
            $purpose = ($data['purpose'] ?? 'login') === 'signup' ? 'signup' : 'login';
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) jsonResponse(['ok' => false, 'message' => 'Enter a valid email address.'], 422);
            if ($purpose === 'signup') {
                $check = $pdo->prepare('SELECT 1 FROM users WHERE email = ?');
                $check->execute([$email]);
                if ($check->fetchColumn()) jsonResponse(['ok' => false, 'message' => 'That email already has an account. Log in instead.'], 409);
            }
            $_SESSION['otp'] = (string)random_int(100000, 999999);
            $_SESSION['otp_email'] = $email;
            $_SESSION['otp_purpose'] = $purpose;
            $_SESSION['otp_expires'] = time() + 300;
            jsonResponse(['ok' => true, 'message' => 'Demo code generated. No email or SMS is sent.', 'demo_otp' => $_SESSION['otp']]);

        case 'signup':
            $name = trim((string)($data['name'] ?? ''));
            $email = strtolower(trim((string)($data['email'] ?? '')));
            $password = (string)($data['password'] ?? '');
            $otp = trim((string)($data['otp'] ?? ''));
            if ($name === '' || strlen($name) > 80 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 6) {
                jsonResponse(['ok' => false, 'message' => 'Enter a name, valid email, and password with at least 6 characters.'], 422);
            }
            if (empty($_SESSION['otp']) || $_SESSION['otp'] !== $otp || $_SESSION['otp_email'] !== $email || $_SESSION['otp_purpose'] !== 'signup' || $_SESSION['otp_expires'] < time()) {
                jsonResponse(['ok' => false, 'message' => 'The demo code is invalid or expired. Request another code.'], 422);
            }
            $stmt = $pdo->prepare('INSERT INTO users (name, email, password_hash, avatar) VALUES (?, ?, ?, ?)');
            $stmt->execute([$name, $email, password_hash($password, PASSWORD_DEFAULT), strtoupper(substr($name, 0, 2))]);
            session_regenerate_id(true);
            $_SESSION['user_id'] = (int)$pdo->lastInsertId();
            unset($_SESSION['otp'], $_SESSION['otp_email'], $_SESSION['otp_purpose'], $_SESSION['otp_expires']);
            jsonResponse(['ok' => true, 'user' => currentUser($pdo)]);

        case 'login':
            $email = strtolower(trim((string)($data['email'] ?? '')));
            $otp = trim((string)($data['otp'] ?? ''));
            if (empty($_SESSION['otp']) || $_SESSION['otp'] !== $otp || $_SESSION['otp_email'] !== $email || $_SESSION['otp_purpose'] !== 'login' || $_SESSION['otp_expires'] < time()) {
                jsonResponse(['ok' => false, 'message' => 'The demo code is invalid or expired. Request another code.'], 422);
            }
            $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->execute([$email]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!$user || !password_verify((string)($data['password'] ?? ''), $user['password_hash'])) {
                jsonResponse(['ok' => false, 'message' => 'Email or password is incorrect.'], 401);
            }
            session_regenerate_id(true);
            $_SESSION['user_id'] = (int)$user['id'];
            unset($_SESSION['otp'], $_SESSION['otp_email'], $_SESSION['otp_purpose'], $_SESSION['otp_expires']);
            jsonResponse(['ok' => true, 'user' => currentUser($pdo)]);

        case 'logout':
            $_SESSION = [];
            if (ini_get('session.use_cookies')) {
                $params = session_get_cookie_params();
                setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
            }
            session_destroy();
            jsonResponse(['ok' => true]);

        case 'profile':
            $user = requireUser($pdo);
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $name = trim((string)($data['name'] ?? $user['name']));
                $mood = trim((string)($data['mood'] ?? $user['mood']));
                if ($name === '' || strlen($name) > 80 || strlen($mood) > 40) jsonResponse(['ok' => false, 'message' => 'Check the name and preference fields.'], 422);
                $pdo->prepare('UPDATE users SET name = ?, mood = ?, avatar = ? WHERE id = ?')
                    ->execute([$name, $mood, strtoupper(substr($name, 0, 2)), $user['id']]);
                $user = currentUser($pdo);
            }
            jsonResponse(['ok' => true, 'user' => $user]);

        case 'categories':
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $user = requireUser($pdo);
                if ($user['role'] !== 'admin') jsonResponse(['ok' => false, 'message' => 'Administrator access required.'], 403);
                $name = trim((string)($data['name'] ?? ''));
                if ($name === '' || strlen($name) > 60) jsonResponse(['ok' => false, 'message' => 'Category name must be 1–60 characters.'], 422);
                $pdo->prepare('INSERT INTO categories (name, description) VALUES (?, ?)')->execute([$name, trim((string)($data['description'] ?? ''))]);
            }
            jsonResponse(['ok' => true, 'categories' => $pdo->query('SELECT * FROM categories ORDER BY name')->fetchAll(PDO::FETCH_ASSOC)]);

        case 'products':
            $queryText = trim((string)($_GET['q'] ?? ''));
            $query = '%' . $queryText . '%';
            $category = (int)($_GET['category'] ?? 0);
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $user = requireUser($pdo);
                if ($user['role'] !== 'admin') jsonResponse(['ok' => false, 'message' => 'Administrator access required.'], 403);
                $name = trim((string)($data['name'] ?? ''));
                $price = filter_var($data['price'] ?? null, FILTER_VALIDATE_FLOAT);
                $stock = filter_var($data['stock'] ?? null, FILTER_VALIDATE_INT);
                $categoryId = (int)($data['category_id'] ?? 0);
                if ($name === '' || strlen($name) > 140 || $price === false || $price <= 0 || $stock === false || $stock < 0 || $categoryId < 1) {
                    jsonResponse(['ok' => false, 'message' => 'Check the product name, category, price, and stock.'], 422);
                }
                $pdo->prepare('INSERT INTO products (category_id, name, price, stock, image, mood_tags, description) VALUES (?, ?, ?, ?, ?, ?, ?)')
                    ->execute([$categoryId, $name, $price, $stock, trim((string)($data['image'] ?? '')), trim((string)($data['mood_tags'] ?? '')), trim((string)($data['description'] ?? ''))]);
            }
            $where = 'WHERE (p.name LIKE ? OR p.description LIKE ? OR p.mood_tags LIKE ?)';
            $params = [$query, $query, $query];
            if ($category > 0) { $where .= ' AND p.category_id = ?'; $params[] = $category; }
            jsonResponse(['ok' => true, 'products' => productRows($pdo, $where, $params)]);

        case 'view':
            $user = requireUser($pdo);
            addHistory($pdo, (int)$user['id'], (int)($data['product_id'] ?? 0), 'Viewed product');
            jsonResponse(['ok' => true]);

        case 'cart':
            $user = requireUser($pdo);
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $productId = (int)($data['product_id'] ?? 0);
                $qty = max(1, min(20, (int)($data['quantity'] ?? 1)));
                $product = $pdo->prepare('SELECT stock FROM products WHERE id = ?');
                $product->execute([$productId]);
                $stock = $product->fetchColumn();
                if ($stock === false) jsonResponse(['ok' => false, 'message' => 'Product not found.'], 404);
                if ((int)$stock < 1) jsonResponse(['ok' => false, 'message' => 'This item is currently out of stock.'], 409);
                $check = $pdo->prepare('SELECT quantity FROM carts WHERE user_id = ? AND product_id = ?');
                $check->execute([$user['id'], $productId]);
                $next = (int)$check->fetchColumn() + $qty;
                if ($next > (int)$stock) jsonResponse(['ok' => false, 'message' => 'Only ' . (int)$stock . ' units are available.'], 409);
                $pdo->prepare('INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?) ON CONFLICT(user_id, product_id) DO UPDATE SET quantity = quantity + excluded.quantity')
                    ->execute([$user['id'], $productId, $qty]);
                addHistory($pdo, (int)$user['id'], $productId, 'Added to cart');
            }
            $stmt = $pdo->prepare('SELECT c.quantity, p.* FROM carts c JOIN products p ON p.id = c.product_id WHERE c.user_id = ? ORDER BY c.id DESC');
            $stmt->execute([$user['id']]);
            jsonResponse(['ok' => true, 'cart' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);

        case 'cart-update':
            $user = requireUser($pdo);
            $productId = (int)($data['product_id'] ?? 0);
            $qty = (int)($data['quantity'] ?? 0);
            $stockStmt = $pdo->prepare('SELECT stock FROM products WHERE id = ?');
            $stockStmt->execute([$productId]);
            $stock = $stockStmt->fetchColumn();
            if ($stock === false || $qty < 1 || $qty > (int)$stock) jsonResponse(['ok' => false, 'message' => 'Choose a quantity available in stock.'], 422);
            $pdo->prepare('UPDATE carts SET quantity = ? WHERE user_id = ? AND product_id = ?')->execute([$qty, $user['id'], $productId]);
            jsonResponse(['ok' => true]);

        case 'cart-remove':
            $user = requireUser($pdo);
            $pdo->prepare('DELETE FROM carts WHERE user_id = ? AND product_id = ?')->execute([$user['id'], (int)($data['product_id'] ?? 0)]);
            jsonResponse(['ok' => true]);

        case 'wishlist':
            $user = requireUser($pdo);
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $productId = (int)($data['product_id'] ?? 0);
                $pdo->prepare('INSERT OR IGNORE INTO wishlists (user_id, product_id) VALUES (?, ?)')->execute([$user['id'], $productId]);
                addHistory($pdo, (int)$user['id'], $productId, 'Added to wishlist');
            }
            $stmt = $pdo->prepare('SELECT p.* FROM wishlists w JOIN products p ON p.id = w.product_id WHERE w.user_id = ? ORDER BY w.id DESC');
            $stmt->execute([$user['id']]);
            jsonResponse(['ok' => true, 'wishlist' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);

        case 'wishlist-remove':
            $user = requireUser($pdo);
            $pdo->prepare('DELETE FROM wishlists WHERE user_id = ? AND product_id = ?')->execute([$user['id'], (int)($data['product_id'] ?? 0)]);
            jsonResponse(['ok' => true]);

        case 'checkout':
            $user = requireUser($pdo);
            $address = $data['address'] ?? null;
            $paymentMethod = trim((string)($data['payment_method'] ?? ''));
            $methods = ['UPI', 'Credit / Debit Card', 'Net Banking', 'Wallet', 'Cash on Delivery'];
            if (!validAddress($address)) jsonResponse(['ok' => false, 'message' => 'Complete the delivery name, phone, address, city, state, and postal code.'], 422);
            if (!in_array($paymentMethod, $methods, true)) jsonResponse(['ok' => false, 'message' => 'Choose a valid demo payment method.'], 422);
            $stmt = $pdo->prepare('SELECT c.quantity, p.* FROM carts c JOIN products p ON p.id = c.product_id WHERE c.user_id = ?');
            $stmt->execute([$user['id']]);
            $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (!$items) jsonResponse(['ok' => false, 'message' => 'Your cart is empty.'], 422);
            foreach ($items as $item) {
                if ((int)$item['stock'] < (int)$item['quantity']) jsonResponse(['ok' => false, 'message' => $item['name'] . ' no longer has enough stock. Update your cart and try again.'], 409);
            }
            $total = array_reduce($items, static fn(float $sum, array $item): float => $sum + ((float)$item['price'] * (int)$item['quantity']), 0.0);
            $tracking = 'SCAI-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 8));
            $transactionRef = 'DEMO-' . strtoupper(bin2hex(random_bytes(5)));
            $paymentStatus = $paymentMethod === 'Cash on Delivery' ? 'Pay on delivery' : 'Demo approved (not charged)';
            try {
                $pdo->beginTransaction();
                foreach ($items as $item) {
                    $update = $pdo->prepare('UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?');
                    $update->execute([(int)$item['quantity'], (int)$item['id'], (int)$item['quantity']]);
                    if ($update->rowCount() !== 1) throw new DomainException($item['name'] . ' stock changed. Refresh the cart and try again.', 409);
                }
                $pdo->prepare('INSERT INTO orders (user_id, total, tracking_code, address, payment_method, payment_status, transaction_ref) VALUES (?, ?, ?, ?, ?, ?, ?)')
                    ->execute([$user['id'], $total, $tracking, json_encode($address, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $paymentMethod, $paymentStatus, $transactionRef]);
                $orderId = (int)$pdo->lastInsertId();
                $line = $pdo->prepare('INSERT INTO order_items (order_id, product_id, quantity, price, product_name, image) VALUES (?, ?, ?, ?, ?, ?)');
                foreach ($items as $item) $line->execute([$orderId, $item['id'], $item['quantity'], $item['price'], $item['name'], $item['image']]);
                $pdo->prepare('DELETE FROM carts WHERE user_id = ?')->execute([$user['id']]);
                addHistory($pdo, (int)$user['id'], null, 'Placed demo order', 'Order #' . $orderId);
                $pdo->commit();
            } catch (Throwable $exception) {
                if ($pdo->inTransaction()) $pdo->rollBack();
                throw $exception;
            }
            jsonResponse(['ok' => true, 'order_id' => $orderId, 'tracking_code' => $tracking, 'payment_status' => $paymentStatus]);

        case 'orders':
            $user = requireUser($pdo);
            $sql = $user['role'] === 'admin'
                ? 'SELECT o.*, u.name AS customer FROM orders o JOIN users u ON u.id = o.user_id ORDER BY o.created_at DESC'
                : 'SELECT o.*, u.name AS customer FROM orders o JOIN users u ON u.id = o.user_id WHERE o.user_id = ? ORDER BY o.created_at DESC';
            $stmt = $pdo->prepare($sql);
            $stmt->execute($user['role'] === 'admin' ? [] : [$user['id']]);
            jsonResponse(['ok' => true, 'orders' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);

        case 'order-status':
            $user = requireUser($pdo);
            if ($user['role'] !== 'admin') jsonResponse(['ok' => false, 'message' => 'Administrator access required.'], 403);
            $status = trim((string)($data['status'] ?? ''));
            $allowed = ['Processing', 'Packed', 'Shipped', 'Out for delivery', 'Delivered'];
            if (!in_array($status, $allowed, true)) jsonResponse(['ok' => false, 'message' => 'Choose a valid order status.'], 422);
            $pdo->prepare('UPDATE orders SET status = ? WHERE id = ?')->execute([$status, (int)($data['order_id'] ?? 0)]);
            jsonResponse(['ok' => true]);

        case 'invoice':
            $user = requireUser($pdo);
            $orderId = (int)($_GET['order_id'] ?? 0);
            $stmt = $pdo->prepare('SELECT o.*, u.name, u.email FROM orders o JOIN users u ON u.id = o.user_id WHERE o.id = ? AND (o.user_id = ? OR ? = "admin")');
            $stmt->execute([$orderId, $user['id'], $user['role']]);
            $order = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!$order) jsonResponse(['ok' => false, 'message' => 'Order not found.'], 404);
            $items = $pdo->prepare("SELECT oi.*, COALESCE(NULLIF(oi.product_name, ''), p.name) AS name FROM order_items oi LEFT JOIN products p ON p.id = oi.product_id WHERE oi.order_id = ?");
            $items->execute([$orderId]);
            jsonResponse(['ok' => true, 'order' => $order, 'items' => $items->fetchAll(PDO::FETCH_ASSOC)]);

        case 'review':
            $user = requireUser($pdo);
            $productId = (int)($data['product_id'] ?? 0);
            $rating = (int)($data['rating'] ?? 0);
            $comment = trim((string)($data['comment'] ?? ''));
            if ($rating < 1 || $rating > 5 || $comment === '' || strlen($comment) > 1000) jsonResponse(['ok' => false, 'message' => 'Add a comment and choose a rating from 1 to 5.'], 422);
            $pdo->prepare('INSERT INTO reviews (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)')->execute([$user['id'], $productId, $rating, $comment]);
            addHistory($pdo, (int)$user['id'], $productId, 'Reviewed product');
            jsonResponse(['ok' => true]);

        case 'reviews':
            $productId = (int)($_GET['product_id'] ?? 0);
            $stmt = $pdo->prepare('SELECT r.*, u.name FROM reviews r JOIN users u ON u.id = r.user_id WHERE r.product_id = ? ORDER BY r.created_at DESC');
            $stmt->execute([$productId]);
            $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $summary = 'No reviews yet.';
            if ($reviews) {
                $avg = array_sum(array_column($reviews, 'rating')) / count($reviews);
                $comments = strtolower(implode(' ', array_column($reviews, 'comment')));
                $signals = [];
                foreach (['battery', 'camera', 'comfort', 'sound', 'fast', 'premium', 'useful'] as $word) if (str_contains($comments, $word)) $signals[] = $word;
                $summary = 'Quick review insight: average ' . number_format($avg, 1) . '/5. Customers mention ' . ($signals ? implode(', ', array_unique($signals)) : 'overall value') . '.';
            }
            jsonResponse(['ok' => true, 'reviews' => $reviews, 'summary' => $summary]);

        case 'recommendations':
            $user = requireUser($pdo);
            $mood = strtolower(trim((string)($_GET['mood'] ?? $user['mood'] ?? 'focused')));
            $stmt = $pdo->prepare('SELECT p.*, c.name AS category_name, COALESCE(AVG(r.rating), 0) AS rating, COUNT(r.id) AS review_count FROM products p JOIN categories c ON c.id = p.category_id LEFT JOIN reviews r ON r.product_id = p.id WHERE p.stock > 0 AND LOWER(p.mood_tags) LIKE ? GROUP BY p.id ORDER BY rating DESC, p.created_at DESC LIMIT 6');
            $stmt->execute(['%' . $mood . '%']);
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (!$products) $products = productRows($pdo, 'WHERE p.stock > 0', []);
            $products = array_slice($products, 0, 6);
            foreach ($products as &$product) $product['assistant_reason'] = 'In stock and tagged for ' . $mood . '.';
            unset($product);
            addHistory($pdo, (int)$user['id'], null, 'Asked product guide', 'Mood: ' . $mood);
            jsonResponse(['ok' => true, 'mood' => $mood, 'products' => $products, 'message' => 'Rule-based suggestions matched to your selected mood and available stock.']);

        case 'assistant':
            $user = requireUser($pdo);
            $prompt = trim((string)($data['prompt'] ?? ''));
            if ($prompt === '' || strlen($prompt) > 500) jsonResponse(['ok' => false, 'message' => 'Write a request of 1–500 characters.'], 422);
            $result = assistantResults($pdo, $prompt);
            addHistory($pdo, (int)$user['id'], null, 'Used product guide', $prompt);
            jsonResponse(['ok' => true] + $result);

        case 'history':
            $user = requireUser($pdo);
            $stmt = $pdo->prepare('SELECT h.*, p.name AS product_name FROM history h LEFT JOIN products p ON p.id = h.product_id WHERE h.user_id = ? ORDER BY h.created_at DESC LIMIT 30');
            $stmt->execute([$user['id']]);
            jsonResponse(['ok' => true, 'history' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);

        case 'admin-stats':
            $user = requireUser($pdo);
            if ($user['role'] !== 'admin') jsonResponse(['ok' => false, 'message' => 'Administrator access required.'], 403);
            jsonResponse(['ok' => true, 'stats' => [
                'users' => (int)$pdo->query('SELECT COUNT(*) FROM users')->fetchColumn(),
                'products' => (int)$pdo->query('SELECT COUNT(*) FROM products')->fetchColumn(),
                'orders' => (int)$pdo->query('SELECT COUNT(*) FROM orders')->fetchColumn(),
                'revenue' => (float)$pdo->query("SELECT COALESCE(SUM(total), 0) FROM orders WHERE status <> 'Cancelled'")->fetchColumn(),
            ]]);

        default:
            jsonResponse(['ok' => false, 'message' => 'Unknown API action.'], 404);
    }
} catch (DomainException $exception) {
    jsonResponse(['ok' => false, 'message' => $exception->getMessage()], $exception->getCode() >= 400 ? $exception->getCode() : 422);
} catch (Throwable $exception) {
    error_log('SmartCart API failure: ' . $exception->getMessage());
    jsonResponse(['ok' => false, 'message' => 'Something went wrong. Please try again.'], 500);
}
