<?php
/**
 * Public RESTful API & Payment Gateway Router
 * Author: Fahmi Febriansyah
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/xendit.php';

// Parse route from query string or REQUEST_URI
$route = $_GET['route'] ?? '';
if (empty($route)) {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/api(?:/index\.php)?(?:/(.*))?$#', $uri, $matches)) {
        $route = $matches[1] ?? '';
    }
}
$route = trim($route, '/');
if ($route === 'index.php') {
    $route = '';
}
$method = $_SERVER['REQUEST_METHOD'];

// Portfolio Data
$portfolioData = [
    'profile' => [
        'name'        => 'Fahmi Febriansyah',
        'title'       => 'Web Developer & Lulusan S1 Teknik Informatika',
        'location'    => 'Bogor, Jawa Barat, Indonesia',
        'bio'         => 'Lulusan S1 Teknik Informatika Universitas Indraprasta PGRI dengan latar belakang SMK Rekayasa Perangkat Lunak. Berfokus pada pengembangan web, backend, integrasi REST API, dan implementasi sistem bisnis.',
        'contacts'    => [
            'email'    => 'fahmijha12@gmail.com',
            'whatsapp' => '089669709021',
            'github'   => 'https://github.com/Fahmi-febriansyah',
            'linkedin' => 'https://www.linkedin.com/in/fahmifebriansyah/'
        ],
        'education'   => [
            [
                'degree'      => 'S1 Teknik Informatika',
                'institution' => 'Universitas Indraprasta PGRI (Unindra)',
                'year'        => 'Lulus 2026',
                'focus'       => 'Rekayasa Perangkat Lunak, Struktur Data, Algoritma, Basis Data'
            ],
            [
                'degree'      => 'SMK Rekayasa Perangkat Lunak (RPL)',
                'institution' => 'SMK Bina Mandiri Multimedia Cileungsi',
                'year'        => '2020 - 2023',
                'focus'       => 'Dasar Pemrograman, HTML, CSS, JavaScript, PHP, MySQL'
            ]
        ]
    ],
    'experience' => [
        [
            'role'         => 'Owner & Web Developer',
            'organization' => 'Desadroid IT Consultant',
            'period'       => '2023 - Sekarang',
            'type'         => 'Business & Technology Consulting',
            'description'  => 'Layanan konsultasi teknologi dan penyedia software kustom untuk membantu digitalisasi operasional bisnis dan UMKM.',
            'responsibilities' => [
                'Menganalisis kebutuhan sistem klien dan merancang arsitektur aplikasi web.',
                'Mengembangkan aplikasi web dari frontend, backend, database hingga hosting.',
                'Memberikan konsultasi teknis dan pemeliharaan sistem.'
            ]
        ],
        [
            'role'         => 'Web Developer',
            'organization' => 'Bengkel DPM Ciangsana Bogor (Mobil)',
            'period'       => '2024',
            'type'         => 'Client Project',
            'description'  => 'Membangun aplikasi manajemen bengkel mobil untuk efisiensi operasional dan pencatatan riwayat servis kendaraan.',
            'responsibilities' => [
                'Digitalisasi dokumen dan riwayat servis kendaraan pelanggan.',
                'Modul inventaris untuk kontrol stok sparepart keluar-masuk secara akurat.',
                'Otomatisasi pembuatan nota dan invoice estimasi pengerjaan.'
            ]
        ],
        [
            'role'         => 'Mitra Driver',
            'organization' => 'ShopeeFood Indonesia',
            'period'       => '2022 - 2025',
            'type'         => 'Operational Delivery',
            'description'  => 'Menjalankan operasional pengantaran makanan dengan fokus pada efisiensi waktu, manajemen rute, dan pelayanan prima.',
            'responsibilities' => [
                'Pengantaran pesanan tepat waktu dan koordinasi dengan merchant.',
                'Manajemen waktu antara jadwal operasional dan perkuliahan S1.',
                'Menjaga rating kepuasan pelanggan.'
            ]
        ]
    ],
    'skills' => [
        'web_and_backend' => [
            'HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP', 'MySQL', 'MongoDB', 'RESTful API'
        ],
        'integrations_and_payments' => [
            'Payment Gateway (Xendit Staging & Sandbox)', 'Webhook Processing', 'Invoice Automation', 'Stock Inventory Management'
        ],
        'soft_skills' => [
            'Critical Thinking', 'Public Speaking', 'Komunikasi Efektif', 'Disiplin & Tangguh'
        ]
    ],
    'certificates' => [
        [
            'title'  => 'Introduction to Artificial Intelligence',
            'issuer' => 'IBM SkillsBuild',
            'date'   => 'Juni 2026',
            'code'   => 'ALM-COURSE_4058918'
        ],
        [
            'title'  => 'AI Ethics',
            'issuer' => 'IBM SkillsBuild',
            'date'   => 'Juni 2026',
            'code'   => 'ALM-COURSE_4058927'
        ],
        [
            'title'  => 'Introduction to Generative AI',
            'issuer' => 'IBM SkillsBuild',
            'date'   => 'Juni 2026',
            'code'   => 'ALM-COURSE_4058859'
        ],
        [
            'title'  => 'Juara 3 Web Developer Framework',
            'issuer' => 'SMK Bina Mandiri Multimedia',
            'date'   => 'Classmeeting Kejuruan RPL'
        ]
    ]
];

// Routing Table
switch ($route) {
    case '':
    case 'index':
        jsonResponse([
            'message'   => 'Selamat datang di Public REST API Portofolio Fahmi Febriansyah',
            'endpoints' => [
                'GET /api/profile'                 => 'Data profil, biografi, dan pendidikan',
                'GET /api/experience'              => 'Daftar pengalaman kerja dan proyek',
                'GET /api/skills'                  => 'Daftar keahlian teknis dan integrasi',
                'GET /api/certificates'            => 'Sertifikasi resmi dan penghargaan',
                'POST /api/payment/create-invoice' => 'Membuat invoice pembayaran via Xendit Sandbox',
                'GET /api/payment/status'          => 'Mengecek status invoice Xendit (?invoice_id=... atau ?external_id=...)',
                'POST /api/payment/cancel'         => 'Membatalkan / expire tagihan invoice Xendit yang pending',
                'GET /api/payment/history'         => 'Daftar riwayat invoice simulasi'
            ]
        ]);
        break;

    case 'profile':
        if ($method !== 'GET') jsonResponse(['error' => 'Method not allowed'], 405);
        jsonResponse($portfolioData['profile']);
        break;

    case 'experience':
        if ($method !== 'GET') jsonResponse(['error' => 'Method not allowed'], 405);
        jsonResponse($portfolioData['experience']);
        break;

    case 'skills':
        if ($method !== 'GET') jsonResponse(['error' => 'Method not allowed'], 405);
        jsonResponse($portfolioData['skills']);
        break;

    case 'certificates':
        if ($method !== 'GET') jsonResponse(['error' => 'Method not allowed'], 405);
        jsonResponse($portfolioData['certificates']);
        break;

    // === XENDIT PAYMENT GATEWAY ENDPOINTS ===
    case 'payment/create-invoice':
        if ($method !== 'POST') jsonResponse(['error' => 'Method not allowed. Use POST'], 405);

        $input = json_decode(file_get_contents('php://input'), true);
        $amount = (int)($input['amount'] ?? 10000);
        $payerEmail = filter_var($input['payer_email'] ?? '', FILTER_VALIDATE_EMAIL) ?: 'simulasi@example.com';
        $description = trim($input['description'] ?? 'Simulasi Donasi / Pembayaran Portofolio Fahmi');
        $redirectUrl = trim($input['redirect_url'] ?? '');

        if ($amount < 1000) {
            jsonResponse(['error' => 'Nominal minimal pembayaran adalah Rp 1.000'], 400);
        }

        $xendit = new XenditService();
        $result = $xendit->createInvoice($amount, $payerEmail, $description, $redirectUrl, $redirectUrl);

        if ($result['success']) {
            jsonResponse([
                'message'     => 'Invoice Xendit berhasil dibuat',
                'invoice_id'  => $result['invoice_id'],
                'invoice_url' => $result['invoice_url'],
                'status'      => $result['status'],
                'amount'      => $amount,
                'external_id' => $result['data']['external_id'] ?? ''
            ], 201);
        } else {
            jsonResponse([
                'error'   => $result['error'] ?? 'Gagal membuat invoice',
                'details' => $result
            ], 500);
        }
        break;

    case 'payment/status':
        if ($method !== 'GET') jsonResponse(['error' => 'Method not allowed. Use GET'], 405);
        
        $invoiceId = trim($_GET['invoice_id'] ?? '');
        $externalId = trim($_GET['external_id'] ?? '');

        if (empty($invoiceId) && empty($externalId)) {
            jsonResponse(['error' => 'Parameter invoice_id atau external_id diperlukan'], 400);
        }

        $xendit = new XenditService();
        if (!empty($invoiceId)) {
            $result = $xendit->getInvoice($invoiceId);
        } else {
            $result = $xendit->getInvoiceByExternalId($externalId);
        }

        if ($result['success']) {
            $inv = $result['data'];
            jsonResponse([
                'invoice_id'     => $inv['id'],
                'external_id'    => $inv['external_id'] ?? '',
                'status'         => $inv['status'],
                'amount'         => $inv['amount'],
                'invoice_url'    => $inv['invoice_url'] ?? '',
                'paid_at'        => $inv['paid_at'] ?? null,
                'payment_method' => $inv['payment_method'] ?? null,
                'description'    => $inv['description'] ?? ''
            ]);
        } else {
            jsonResponse(['error' => $result['error'] ?? 'Invoice tidak ditemukan'], 404);
        }
        break;

    case 'payment/history':
        if ($method !== 'GET') jsonResponse(['error' => 'Method not allowed. Use GET'], 405);
        $xendit = new XenditService();
        jsonResponse($xendit->getStoredInvoices());
        break;

    case 'payment/cancel':
    case 'payment/expire':
        if (!in_array($method, ['POST', 'GET'])) {
            jsonResponse(['error' => 'Method not allowed. Use POST or GET'], 405);
        }

        $input = json_decode(file_get_contents('php://input'), true) ?: [];
        $invoiceId = trim($input['invoice_id'] ?? $_POST['invoice_id'] ?? $_GET['invoice_id'] ?? '');

        if (empty($invoiceId)) {
            jsonResponse(['error' => 'Parameter invoice_id diperlukan untuk pembatalan invoice'], 400);
        }

        $xendit = new XenditService();
        $result = $xendit->expireInvoice($invoiceId);

        if ($result['success']) {
            jsonResponse([
                'message'    => 'Tagihan Xendit berhasil dibatalkan (EXPIRED)',
                'invoice_id' => $result['data']['id'] ?? $invoiceId,
                'status'     => $result['data']['status'] ?? 'EXPIRED'
            ], 200);
        } else {
            jsonResponse([
                'error'   => $result['error'] ?? 'Gagal membatalkan invoice',
                'details' => $result
            ], 500);
        }
        break;

    case 'payment/webhook':
        if ($method !== 'POST') jsonResponse(['error' => 'Method not allowed. Use POST'], 405);
        
        $token = $_SERVER['HTTP_X_CALLBACK_TOKEN'] ?? $_SERVER['HTTP_X_CALLBACK_TOKEN'] ?? '';
        $payload = json_decode(file_get_contents('php://input'), true);

        $xendit = new XenditService();
        $res = $xendit->handleWebhook($payload ?: [], $token);

        if ($res['success']) {
            jsonResponse($res, 200);
        } else {
            jsonResponse($res, 400);
        }
        break;

    default:
        jsonResponse([
            'error'   => 'Endpoint tidak ditemukan',
            'route'   => $route,
            'hint'    => 'Gunakan /api/profile, /api/experience, /api/skills, atau /api/certificates'
        ], 404);
        break;
}
