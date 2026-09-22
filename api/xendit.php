<?php
/**
 * Xendit API Integration Service
 * Communicates with Xendit API v2 for Invoicing
 */

require_once __DIR__ . '/config.php';

class XenditService {
    private string $secretKey;
    private string $baseUrl = 'https://api.xendit.co/v2/invoices';
    private string $storageFile = __DIR__ . '/storage/invoices.json';

    public function __construct() {
        $this->secretKey = getEnvVar('XENDIT_SECRET_KEY', '');
    }

    public function isConfigured(): bool {
        return !empty($this->secretKey) && strpos($this->secretKey, 'your_secret_key') === false;
    }

    /**
     * Create an invoice via Xendit API
     */
    public function createInvoice(int $amount, string $payerEmail = '', string $description = '', string $successRedirectUrl = '', string $failureRedirectUrl = ''): array {
        if (!$this->isConfigured()) {
            return [
                'success' => false,
                'error'   => 'Xendit Secret Key belum dikonfigurasi di api/.env'
            ];
        }

        $externalId = 'INV-' . time() . '-' . rand(100, 999);
        $payload = [
            'external_id'      => $externalId,
            'amount'           => $amount,
            'payer_email'      => !empty($payerEmail) ? $payerEmail : 'donor@example.com',
            'description'      => !empty($description) ? $description : 'Simulasi Pembayaran Portofolio Fahmi Febriansyah',
            'invoice_duration' => 86400, // 24 hours
            'currency'         => 'IDR'
        ];

        if (!empty($successRedirectUrl)) {
            $separator = (strpos($successRedirectUrl, '?') !== false) ? '&' : '?';
            $payload['success_redirect_url'] = $successRedirectUrl . $separator . 'payment_status=PAID&external_id=' . urlencode($externalId);
        }
        if (!empty($failureRedirectUrl)) {
            $payload['failure_redirect_url'] = $failureRedirectUrl;
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->baseUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
        curl_setopt($ch, CURLOPT_USERPWD, $this->secretKey . ':');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Accept: application/json'
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            return [
                'success' => false,
                'error'   => 'Koneksi ke Xendit gagal: ' . $curlError
            ];
        }

        $result = json_decode($response, true);
        if ($httpCode >= 200 && $httpCode < 300 && isset($result['id'])) {
            $this->saveInvoiceRecord([
                'id'          => $result['id'],
                'external_id' => $result['external_id'],
                'amount'      => $result['amount'],
                'status'      => $result['status'],
                'invoice_url' => $result['invoice_url'],
                'created'     => $result['created'],
                'description' => $payload['description']
            ]);

            return [
                'success'     => true,
                'data'        => $result,
                'invoice_url' => $result['invoice_url'],
                'invoice_id'  => $result['id'],
                'status'      => $result['status']
            ];
        }

        return [
            'success'   => false,
            'http_code' => $httpCode,
            'error'     => $result['message'] ?? 'Gagal membuat invoice di Xendit'
        ];
    }

    /**
     * Get Invoice details from Xendit
     */
    public function getInvoice(string $invoiceId): array {
        if (!$this->isConfigured()) {
            return ['success' => false, 'error' => 'Kunci Xendit belum dikonfigurasi.'];
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->baseUrl . '/' . urlencode($invoiceId));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_USERPWD, $this->secretKey . ':');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json'
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $result = json_decode($response, true);
        if ($httpCode >= 200 && $httpCode < 300) {
            $this->updateInvoiceStatus($invoiceId, $result['status'] ?? 'PENDING');
            return ['success' => true, 'data' => $result];
        }

        return [
            'success'   => false,
            'http_code' => $httpCode,
            'error'     => $result['message'] ?? 'Invoice tidak ditemukan'
        ];
    }

    /**
     * Get Invoice by External ID from Xendit
     */
    public function getInvoiceByExternalId(string $externalId): array {
        if (!$this->isConfigured()) {
            return ['success' => false, 'error' => 'Kunci Xendit belum dikonfigurasi.'];
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->baseUrl . '?external_id=' . urlencode($externalId));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_USERPWD, $this->secretKey . ':');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json'
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $result = json_decode($response, true);
        if ($httpCode >= 200 && $httpCode < 300 && !empty($result) && isset($result[0])) {
            $inv = $result[0];
            $this->updateInvoiceStatus($inv['id'], $inv['status'] ?? 'PENDING');
            return ['success' => true, 'data' => $inv];
        }

        return [
            'success'   => false,
            'http_code' => $httpCode,
            'error'     => 'Invoice dengan external_id tersebut tidak ditemukan'
        ];
    }

    /**
     * Expire / Cancel an invoice in Xendit
     */
    public function expireInvoice(string $invoiceId): array {
        if (!$this->isConfigured()) {
            return ['success' => false, 'error' => 'Kunci Xendit belum dikonfigurasi.'];
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.xendit.co/invoices/' . urlencode($invoiceId) . '/expire!');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_USERPWD, $this->secretKey . ':');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json'
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            return ['success' => false, 'error' => 'Koneksi ke Xendit gagal: ' . $curlError];
        }

        $result = json_decode($response, true);
        if ($httpCode >= 200 && $httpCode < 300 && isset($result['id'])) {
            $this->updateInvoiceStatus($result['id'], $result['status'] ?? 'EXPIRED');
            return [
                'success' => true,
                'message' => 'Invoice berhasil dibatalkan (EXPIRED)',
                'data'    => $result
            ];
        }

        return [
            'success'   => false,
            'http_code' => $httpCode,
            'error'     => $result['message'] ?? 'Gagal membatalkan invoice di Xendit'
        ];
    }

    /**
     * Handle Xendit Webhook
     */
    public function handleWebhook(array $payload, string $receivedToken): array {
        $expectedToken = getEnvVar('XENDIT_CALLBACK_TOKEN', '');
        
        // Optional verification if callback token is set
        if (!empty($expectedToken) && $receivedToken !== $expectedToken) {
            return [
                'success' => false,
                'error'   => 'Token callback webhook tidak valid'
            ];
        }

        $invoiceId = $payload['id'] ?? '';
        $status = $payload['status'] ?? '';

        if (!empty($invoiceId) && !empty($status)) {
            $this->updateInvoiceStatus($invoiceId, $status);
            return [
                'success' => true,
                'message' => 'Status invoice ' . $invoiceId . ' diperbarui menjadi ' . $status
            ];
        }

        return ['success' => false, 'error' => 'Payload webhook tidak lengkap'];
    }

    private function saveInvoiceRecord(array $item): void {
        $records = $this->getStoredInvoices();
        array_unshift($records, $item);
        $records = array_slice($records, 0, 20); // Keep last 20
        @file_put_contents($this->storageFile, json_encode($records, JSON_PRETTY_PRINT));
    }

    private function updateInvoiceStatus(string $id, string $status): void {
        $records = $this->getStoredInvoices();
        foreach ($records as &$rec) {
            if (($rec['id'] ?? '') === $id) {
                $rec['status'] = $status;
                break;
            }
        }
        @file_put_contents($this->storageFile, json_encode($records, JSON_PRETTY_PRINT));
    }

    public function getStoredInvoices(): array {
        if (!file_exists($this->storageFile)) {
            return [];
        }
        $content = @file_get_contents($this->storageFile);
        return json_decode($content, true) ?: [];
    }
}
