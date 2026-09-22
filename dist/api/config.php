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

// Load environment variables from .env across candidate locations
function loadEnv(): array {
    $env = [];
    $docRoot = !empty($_SERVER['DOCUMENT_ROOT']) ? rtrim($_SERVER['DOCUMENT_ROOT'], '/\\') : '';

    $candidates = [
        // 1. Specific cPanel user paths (e.g. /home/desadroi/apikey/.env)
        '/home/desadroi/apikey/.env',
        '/home/desadroi/api key/.env',
        '/home/desadroid/apikey/.env',
        '/home/desadroid/api key/.env',

        // 2. Relative to Document Root
        $docRoot ? $docRoot . '/../../apikey/.env' : null,
        $docRoot ? $docRoot . '/../apikey/.env' : null,
        $docRoot ? $docRoot . '/apikey/.env' : null,
        $docRoot ? $docRoot . '/../api key/.env' : null,
        $docRoot ? $docRoot . '/api key/.env' : null,

        // 3. Relative to __DIR__ (levels up)
        dirname(__DIR__, 2) . '/apikey/.env',
        dirname(__DIR__, 2) . '/api key/.env',
        dirname(__DIR__, 3) . '/apikey/.env',
        dirname(__DIR__, 3) . '/api key/.env',
        dirname(__DIR__) . '/../apikey/.env',
        dirname(__DIR__) . '/../api key/.env',

        // 4. Alongside project root
        dirname(__DIR__) . '/apikey/.env',
        dirname(__DIR__) . '/api key/.env',
        dirname(__DIR__) . '/.env',

        // 5. Local fallback (api/.env)
        __DIR__ . '/.env'
    ];

    $loadedPaths = [];

    foreach ($candidates as $path) {
        if ($path && file_exists($path) && is_readable($path)) {
            $real = realpath($path);
            if ($real && in_array($real, $loadedPaths, true)) continue;
            if ($real) $loadedPaths[] = $real;

            $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            if ($lines !== false) {
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
                        if (!isset($_ENV[$key])) {
                            $_ENV[$key] = $val;
                        }
                        putenv("{$key}={$val}");
                    }
                }
            }
        }
    }

    $GLOBALS['API_ENV_LOADED_FROM'] = $loadedPaths;
    return $env;
}

$GLOBALS['API_ENV'] = loadEnv();

function getEnvVar($key, $default = '') {
    return $GLOBALS['API_ENV'][$key] ?? $_SERVER[$key] ?? $_ENV[$key] ?? (getenv($key) !== false ? getenv($key) : $default);
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
