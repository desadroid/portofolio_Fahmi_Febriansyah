<?php
/**
 * API Configuration & Environment Loader
 */

// Enable CORS for API consumers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Callback-Token, x-callback-token');
header('Content-Type: application/json; charset=UTF-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Load environment variables from .env if present
function loadEnv($path = __DIR__ . '/.env'): array {
    $env = [];
    if (file_exists($path)) {
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if (strpos($line, '#') === 0) continue;
            if (strpos($line, '=') !== false) {
                list($key, $val) = explode('=', $line, 2);
                $key = trim($key);
                $val = trim($val, " \t\n\r\0\x0B\"'");
                $env[$key] = $val;
                if (!isset($_SERVER[$key])) {
                    $_SERVER[$key] = $val;
                }
            }
        }
    }
    return $env;
}

$GLOBALS['API_ENV'] = loadEnv();

function getEnvVar($key, $default = '') {
    return $GLOBALS['API_ENV'][$key] ?? $_SERVER[$key] ?? getenv($key) ?: $default;
}

function jsonResponse($data, int $statusCode = 200, array $extraMeta = []): void {
    http_response_code($statusCode);
    
    $response = [
        'status'  => ($statusCode >= 200 && $statusCode < 300) ? 'success' : 'error',
        'code'    => $statusCode,
        'data'    => $data,
        'meta'    => array_merge([
            'timestamp' => time(),
            'version'   => 'v1',
            'author'    => 'Fahmi Febriansyah'
        ], $extraMeta)
    ];

    echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}
