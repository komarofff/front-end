<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data_file = 'projects-data.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Чтение данных
    if (file_exists($data_file)) {
        echo file_get_contents($data_file);
    } else {
        echo json_encode(['portfolio' => [], 'vue' => [], 'javascript' => []]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Сохранение данных
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (json_last_error() === JSON_ERROR_NONE) {
        file_put_contents($data_file, json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(['message' => 'Data saved successfully']);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
    }
}
?>