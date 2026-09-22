<?php
/**
 * React.js Application Entry Point for Apache XAMPP
 * Serves the compiled React production application directly.
 */
if (file_exists(__DIR__ . '/dist/index.html')) {
    include __DIR__ . '/dist/index.html';
    exit;
} else {
    echo "Aplikasi React sedang disiapkan. Silakan jalankan 'npm run build'.";
}
