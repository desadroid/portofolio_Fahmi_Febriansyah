<?php
/**
 * index.php — Front Controller (MVC Entry Point)
 *
 * All traffic is routed through this file.
 * URL Pattern: index.php?route=<route_name>
 *
 * Routes:
 *   (default / portfolio) → PortfolioController@index
 *   login                 → AdminController@handleLogin
 *   admin                 → AdminController@showDashboard
 *   save                  → AdminController@handleSave
 *   logout                → AdminController@logout
 */

session_start();

// ── Autoload MVC classes ──────────────────────────────────────────────
require_once __DIR__ . '/app/models/PortfolioModel.php';
require_once __DIR__ . '/app/controllers/PortfolioController.php';
require_once __DIR__ . '/app/controllers/AdminController.php';

// ── Bootstrap ────────────────────────────────────────────────────────
$model           = new PortfolioModel();
$portfolioCtrl   = new PortfolioController($model);
$adminCtrl       = new AdminController($model);

// ── Route Dispatcher ─────────────────────────────────────────────────
$route = $_GET['route'] ?? 'portfolio';

switch ($route) {
    case 'login':
        $adminCtrl->handleLogin();
        break;

    case 'admin':
        $adminCtrl->showDashboard();
        break;

    case 'save':
        $adminCtrl->handleSave();
        break;

    case 'logout':
        $adminCtrl->logout();
        break;

    case 'portfolio':
    default:
        $portfolioCtrl->index();
        break;
}
