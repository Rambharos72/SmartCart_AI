<?php
declare(strict_types=1);

require __DIR__ . '/db.php';

$pdo = db();
$pdo->exec('DELETE FROM products WHERE id > 10 AND id NOT IN (SELECT product_id FROM order_items)');
echo json_encode(['ok' => true, 'message' => 'Generated catalog normalized.']);
