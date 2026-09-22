<?php
/**
 * AdminController.php
 * Controller — Handles authentication, CRUD logic, and admin dashboard routing.
 */
class AdminController
{
    private PortfolioModel $model;

    public function __construct(PortfolioModel $model)
    {
        $this->model = $model;
    }

    /**
     * Show login page, or redirect to dashboard if already authenticated.
     */
    public function showLogin(): void
    {
        if ($this->isLoggedIn()) {
            $this->redirect('?route=admin');
        }

        $error = '';
        require_once __DIR__ . '/../views/login.php';
    }

    /**
     * Process the login form POST.
     */
    public function handleLogin(): void
    {
        if ($this->isLoggedIn()) {
            $this->redirect('?route=admin');
        }

        $error = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $password = $_POST['password'] ?? '';
            if ($password === 'fahmi123') {
                $_SESSION['admin'] = true;
                $this->redirect('?route=admin');
            } else {
                $error = 'Kata sandi salah! Coba lagi.';
            }
        }

        // Render login view with potential error message
        require_once __DIR__ . '/../views/login.php';
    }

    /**
     * Show the admin dashboard. Gate with auth check.
     */
    public function showDashboard(): void
    {
        $this->requireAuth();

        $data        = $this->model->getData();
        $successMsg  = '';
        $errorMsg    = '';

        require_once __DIR__ . '/../views/admin.php';
    }

    /**
     * Handle the admin form POST — save updated data to JSON.
     */
    public function handleSave(): void
    {
        $this->requireAuth();

        $data        = $this->model->getData();
        $successMsg  = '';
        $errorMsg    = '';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $updatedData = $this->buildDataFromPost();

            if ($this->model->saveData($updatedData)) {
                $data       = $updatedData;
                $successMsg = 'Perubahan berhasil disimpan!';
            } else {
                $errorMsg = 'Gagal menyimpan. Pastikan data.json writable (cek permission file).';
            }
        }

        require_once __DIR__ . '/../views/admin.php';
    }

    /**
     * Destroy session and redirect to login.
     */
    public function logout(): void
    {
        $_SESSION = [];
        session_destroy();
        $this->redirect('?route=login');
    }

    // ─────────────────────────────────────────────
    // Private Helpers
    // ─────────────────────────────────────────────

    private function isLoggedIn(): bool
    {
        return isset($_SESSION['admin']) && $_SESSION['admin'] === true;
    }

    private function requireAuth(): void
    {
        if (!$this->isLoggedIn()) {
            $this->redirect('?route=login');
        }
    }

    private function redirect(string $url): void
    {
        header("Location: $url");
        exit;
    }

    /**
     * Map raw $_POST data into the structured data array saved to JSON.
     */
    private function buildDataFromPost(): array
    {
        $p = $_POST;

        // --- Hero ---
        $built = [
            "hero" => [
                "photo_url"   => $p['hero_photo_url']   ?? '',
                "status"      => $p['hero_status']      ?? '',
                "title_1"     => $p['hero_title_1']     ?? 'Halo, Saya ',
                "name"        => $p['hero_name']        ?? '',
                "title_2"     => $p['hero_title_2']     ?? '',
                "description" => $p['hero_description'] ?? ''
            ],
            "about" => [
                "title"           => $p['about_title']           ?? '',
                "name"            => $p['hero_name']             ?? '',   // synced
                "job_title"       => $p['about_job_title']       ?? '',
                "biography_title" => $p['about_biography_title'] ?? '',
                "biography_p1"    => $p['about_biography_p1']    ?? '',
                "biography_p2"    => $p['about_biography_p2']    ?? '',
                "stats"           => [],
                "socials" => [
                    "github"    => $p['about_social_github']    ?? '',
                    "linkedin"  => $p['about_social_linkedin']  ?? '',
                    "instagram" => $p['about_social_instagram'] ?? ''
                ]
            ],
            "skills"    => [],
            "education" => []
        ];

        // --- Stats (fixed 3 items) ---
        if (isset($p['stats_num']) && is_array($p['stats_num'])) {
            for ($i = 0; $i < count($p['stats_num']); $i++) {
                $num   = trim($p['stats_num'][$i]   ?? '');
                $label = trim($p['stats_label'][$i] ?? '');
                if ($num !== '' || $label !== '') {
                    $built['about']['stats'][] = ['num' => $num, 'label' => $label];
                }
            }
        }

        // --- Skills ---
        if (isset($p['skills']) && is_array($p['skills'])) {
            foreach ($p['skills'] as $item) {
                $category = trim($item['category'] ?? '');
                if ($category === '') continue;
                $tags = array_values(array_filter(array_map('trim', explode(',', $item['tags'] ?? ''))));
                $built['skills'][] = [
                    'category' => $category,
                    'icon'     => $item['icon'] ?? 'info',
                    'tags'     => $tags
                ];
            }
        }

        // --- Education ---
        if (isset($p['education']) && is_array($p['education'])) {
            foreach ($p['education'] as $item) {
                $degree = trim($item['degree'] ?? '');
                if ($degree === '') continue;
                $built['education'][] = [
                    'year'        => trim($item['year']        ?? ''),
                    'degree'      => $degree,
                    'institution' => trim($item['institution'] ?? ''),
                    'description' => trim($item['description'] ?? '')
                ];
            }
        }

        return $built;
    }
}
