<?php
// public/index.php

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use App\Controllers\ContactController;

// 1. Carica Variabili d'Ambiente
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// 2. Gestione CORS (Indispensabile per React)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 3. Simple Router
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Supponiamo che la chiamata sia verso /api/contact
// Adatta questo path in base alla tua cartella server (es. /aran-promo/api/contact)
if (strpos($uri, '/api/contact') !== false && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller = new ContactController();
    $controller->store();
} else {
    http_response_code(404);
    echo json_encode(["message" => "Endpoint not found"]);
}