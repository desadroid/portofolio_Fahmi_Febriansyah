import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Mail, 
  Phone, 
  ExternalLink, 
  FileText, 
  Copy, 
  X, 
  Menu,
  Award,
  CreditCard,
  UserCheck,
  Send,
  RefreshCw,
  Check,
  Terminal,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  PartyPopper,
  XCircle,
  AlertCircle,
  Globe,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeCert, setActiveCert] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // === API EXPLORER STATE ===
  const endpoints = [
    { label: 'Profile', path: '/api/profile', method: 'GET' },
    { label: 'Experience', path: '/api/experience', method: 'GET' },
    { label: 'Skills', path: '/api/skills', method: 'GET' },
    { label: 'Certificates', path: '/api/certificates', method: 'GET' }
  ];
  const [selectedEndpoint, setSelectedEndpoint] = useState('/api/profile');
  const [apiResponse, setApiResponse] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);
  const [apiTime, setApiTime] = useState(null);

  // === XENDIT PAYMENT SIMULATOR STATE ===
  const [paymentAmount, setPaymentAmount] = useState(10000);
  const [payerEmail, setPayerEmail] = useState('pembayar@example.com');
  const [paymentDesc, setPaymentDesc] = useState('Simulasi Pembayaran Portofolio Fahmi');
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [createdInvoice, setCreatedInvoice] = useState(null);
  const [statusChecking, setStatusChecking] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [isPolling, setIsPolling] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiParticles, setConfettiParticles] = useState([]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fahmijha12@gmail.com');
    showToast('Email fahmijha12@gmail.com disalin ke clipboard');
  };

  const getBaseApiUrl = () => {
    // Dynamically resolve baseUrl for XAMPP /Portofolio/ or standalone dev
    const path = window.location.pathname;
    if (path.includes('/Portofolio/')) {
      return '/Portofolio';
    }
    return '';
  };

  // Confetti Particle Generator
  const triggerConfetti = () => {
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#14b8a6'];
    const particles = Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      driftX: (Math.random() - 0.5) * 320 + 'px',
      fallDuration: (Math.random() * 2 + 2.5).toFixed(2) + 's',
      fallDelay: (Math.random() * 0.5).toFixed(2) + 's',
      spinDeg: Math.floor(Math.random() * 720 - 360) + 'deg',
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.floor(Math.random() * 7 + 6) + 'px',
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    }));
    setConfettiParticles(particles);
    setTimeout(() => setConfettiParticles([]), 5500);
  };

  // Execute API Request
  const handleFetchApi = async (targetPath = selectedEndpoint) => {
    setApiLoading(true);
    const startTime = performance.now();
    try {
      const epObj = endpoints.find(e => e.path === targetPath) || { path: targetPath, method: 'GET' };
      const url = `${getBaseApiUrl()}${epObj.path}`;
      const options = {
        method: epObj.method || 'GET',
        headers: { 'Accept': 'application/json' }
      };

      if (epObj.method === 'POST') {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(epObj.sampleBody || {});
      }

      let res = await fetch(url, options);

      // Automatic fallback if server mod_rewrite is misconfigured: /api/index.php?route=...
      if (res.status === 404 && url.includes('/api/')) {
        const routeParam = epObj.path.replace(/^\/api\//, '');
        const fallbackUrl = `${getBaseApiUrl()}/api/index.php?route=${encodeURIComponent(routeParam)}`;
        try {
          const fallbackRes = await fetch(fallbackUrl, options);
          if (fallbackRes.ok || fallbackRes.status < 500) {
            res = fallbackRes;
          }
        } catch (_) {}
      }

      const duration = Math.round(performance.now() - startTime);
      const text = await res.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseErr) {
        throw new Error(`Server merespons non-JSON (HTTP ${res.status}). Pastikan folder 'api' dan '.htaccess' telah di-upload ke server.`);
      }

      setApiStatus(res.status);
      setApiTime(duration);
      setApiResponse(json);
    } catch (err) {
      setApiStatus(500);
      setApiTime(0);
      setApiResponse({ error: 'Gagal terhubung ke API endpoint', detail: err.message });
    } finally {
      setApiLoading(false);
    }
  };

  // Initial mount: load profile and detect return redirect from Xendit
  useEffect(() => {
    handleFetchApi('/api/profile');

    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment_status');
    const externalId = params.get('external_id');
    const invoiceId = params.get('invoice_id');

    if (paymentStatus === 'PAID' || externalId || invoiceId) {
      setTimeout(() => {
        const el = document.getElementById('payment-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);

      const query = externalId
        ? `external_id=${encodeURIComponent(externalId)}`
        : `invoice_id=${encodeURIComponent(invoiceId)}`;

      fetch(`${getBaseApiUrl()}/api/payment/status?${query}`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 'success' && json.data) {
            setCreatedInvoice(json.data);
            if (json.data.status === 'PAID' || paymentStatus === 'PAID') {
              setShowCelebration(true);
              triggerConfetti();
              showToast('Pembayaran berhasil diverifikasi otomatis!');
            }
          }
        })
        .catch(err => {
          console.error('Verifikasi status otomatis gagal:', err);
        })
        .finally(() => {
          // Clean URL parameters smoothly without page reload
          window.history.replaceState({}, document.title, window.location.pathname + '#payment-section');
        });
    }
  }, []);

  // Auto-polling when invoice is in PENDING state
  useEffect(() => {
    if (!createdInvoice || createdInvoice.status !== 'PENDING') {
      setIsPolling(false);
      return;
    }

    setIsPolling(true);
    const interval = setInterval(async () => {
      try {
        const query = createdInvoice.invoice_id
          ? `invoice_id=${encodeURIComponent(createdInvoice.invoice_id)}`
          : `external_id=${encodeURIComponent(createdInvoice.external_id)}`;
        const res = await fetch(`${getBaseApiUrl()}/api/payment/status?${query}`);
        const json = await res.json();
        if (res.ok && json.data && json.data.status === 'PAID') {
          setCreatedInvoice(prev => ({
            ...prev,
            status: 'PAID',
            paid_at: json.data.paid_at,
            payment_method: json.data.payment_method
          }));
          setIsPolling(false);
          setShowCelebration(true);
          triggerConfetti();
          showToast('Pembayaran berhasil dikonfirmasi secara otomatis!');
          clearInterval(interval);
        }
      } catch (err) {
        // Silently skip during polling
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      setIsPolling(false);
    };
  }, [createdInvoice?.invoice_id, createdInvoice?.status]);

  // Create Xendit Invoice
  const handleCreateInvoice = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    try {
      const redirectUrl = window.location.origin + window.location.pathname;
      const baseUrl = getBaseApiUrl();
      let url = `${baseUrl}/api/payment/create-invoice`;
      let res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          amount: parseInt(paymentAmount, 10),
          payer_email: payerEmail,
          description: paymentDesc,
          redirect_url: redirectUrl
        })
      });

      if (res.status === 404) {
        const fallbackUrl = `${baseUrl}/api/index.php?route=payment/create-invoice`;
        const fbRes = await fetch(fallbackUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            amount: parseInt(paymentAmount, 10),
            payer_email: payerEmail,
            description: paymentDesc,
            redirect_url: redirectUrl
          })
        });
        if (fbRes.ok || fbRes.status < 500) {
          res = fbRes;
        }
      }

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error(`Server merespons non-JSON (HTTP ${res.status}). Pastikan folder 'api' telah di-upload.`);
      }

      if (res.ok && data.status === 'success') {
        setCreatedInvoice(data.data);
        showToast('Tagihan Xendit berhasil dibuat!');
      } else {
        showToast(data.data?.error || data.error || 'Gagal membuat tagihan Xendit');
      }
    } catch (err) {
      showToast('Koneksi ke backend gagal: ' + err.message);
    } finally {
      setPaymentLoading(false);
    }
  };

  // Check Xendit Invoice Status
  const handleCheckStatus = async () => {
    if (!createdInvoice?.invoice_id && !createdInvoice?.external_id) return;
    setStatusChecking(true);
    try {
      const query = createdInvoice.invoice_id
        ? `invoice_id=${encodeURIComponent(createdInvoice.invoice_id)}`
        : `external_id=${encodeURIComponent(createdInvoice.external_id)}`;
      const baseUrl = getBaseApiUrl();
      let url = `${baseUrl}/api/payment/status?${query}`;
      let res = await fetch(url);
      if (res.status === 404) {
        const fallbackUrl = `${baseUrl}/api/index.php?route=payment/status&${query}`;
        const fbRes = await fetch(fallbackUrl);
        if (fbRes.ok || fbRes.status < 500) {
          res = fbRes;
        }
      }
      const data = await res.json();
      if (res.ok && data.data) {
        setCreatedInvoice(prev => ({
          ...prev,
          status: data.data.status,
          paid_at: data.data.paid_at,
          payment_method: data.data.payment_method
        }));
        if (data.data.status === 'PAID') {
          setShowCelebration(true);
          triggerConfetti();
          showToast('Status invoice: LUNAS (PAID)');
        } else {
          showToast(`Status invoice: ${data.data.status}`);
        }
      } else {
        showToast('Status belum berubah atau invoice tidak ditemukan');
      }
    } catch (err) {
      showToast('Gagal memeriksa status: ' + err.message);
    } finally {
      setStatusChecking(false);
    }
  };

  // Cancel / Expire Xendit Invoice
  const handleCancelInvoice = async () => {
    const invId = createdInvoice?.invoice_id || createdInvoice?.id;
    if (!invId) return;
    if (!window.confirm('Batalkan tagihan pembayaran ini di sistem Xendit?')) return;
    setCancelLoading(true);
    try {
      const baseUrl = getBaseApiUrl();
      let url = `${baseUrl}/api/payment/cancel`;
      let res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ invoice_id: invId })
      });
      if (res.status === 404) {
        const fallbackUrl = `${baseUrl}/api/index.php?route=payment/cancel`;
        const fbRes = await fetch(fallbackUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ invoice_id: invId })
        });
        if (fbRes.ok || fbRes.status < 500) {
          res = fbRes;
        }
      }
      const json = await res.json();
      if (res.ok && json.status === 'success') {
        setCreatedInvoice(prev => ({
          ...prev,
          status: 'EXPIRED'
        }));
        setIsPolling(false);
        showToast('Tagihan berhasil dibatalkan di Xendit (EXPIRED).');
      } else {
        showToast(json.data?.error || json.error || 'Gagal membatalkan tagihan');
      }
    } catch (err) {
      showToast('Koneksi gagal: ' + err.message);
    } finally {
      setCancelLoading(false);
    }
  };

  const projects = [
    {
      title: 'Aplikasi Event Organizer & E-Ticketing Konser',
      category: 'Web App & E-Ticketing',
      image: './projects/tiket.png',
      desc: 'Platform pemesanan tiket konser terintegrasi yang memfasilitasi transaksi tiket instan tanpa login panjang, dilengkapi portal checkout cepat dan panel admin monitoring gate check-in.',
      features: [
        'Pemesanan tiket cepat tanpa proses pendaftaran rumit untuk meminimalisir abandonment rate pembeli.',
        'Otomatisasi pengiriman e-ticket dengan QR Code unik langsung ke WhatsApp & Email pelanggan.',
        'Dashboard admin terpusat untuk kontrol alokasi kuota tiket (VIP, Presale, Regular) dan validasi check-in pengunjung di pintu masuk.'
      ],
      tags: ['React.js', 'Vite', 'RESTful API', 'WhatsApp Gateway', 'QR Code Engine', 'Node/PHP'],
      links: [
        { label: 'Portal Pemesanan Tiket (User)', url: 'https://tiket.desadroid.shop/' },
        { label: 'Dashboard Pengelola (Admin)', url: 'https://konser.desadroid.shop/' }
      ]
    },
    {
      title: 'Web Company Profile & Kargo - PT. Warna Logistic',
      category: 'Corporate & Logistik',
      image: './projects/warnalogistic.png',
      desc: 'Website representasi korporat dan operasional resmi penyedia jasa ekspedisi kargo pengiriman darat, laut, udara, serta trucking Jabodetabek ke seluruh pelosok Indonesia.',
      features: [
        'Kalkulator estimasi ongkos kirim kargo berdasarkan berat barang dan rute tujuan pengiriman.',
        'Katalog spesifikasi armada logistik (Blindvan, CDD, Fuso, Tronton, Wingbox) dan fasilitas operasional.',
        'Implementasi Schema.org JSON-LD dan Local SEO untuk dominasi pencarian ekspedisi di wilayah Jabodetabek.'
      ],
      tags: ['PHP', 'Responsive CSS', 'SEO Local', 'Schema JSON-LD', 'Google Maps Geo'],
      links: [
        { label: 'Kunjungi Website Live', url: 'https://project.desadroid.shop/warnalogistic/' }
      ]
    },
    {
      title: 'Katalog Digital & Profil Bisnis - Intime Furniture',
      category: 'Katalog Interior',
      image: './projects/intime.jpg',
      desc: 'Platform katalog digital dan profil bisnis untuk pengrajin custom furniture & interior guna memodernisasi pemasaran produk ke pasar digital.',
      features: [
        'Katalog showcase portofolio hasil produksi (kitchen set, meja kantor, lemari custom, backdrop TV minimalis).',
        'Informasi detail spesifikasi material pengerjaan (Multiplek, HPL Taco, Solid Wood, Duco) dan estimasi pengerjaan.',
        'Integrasi tombol direct CTA WhatsApp untuk estimasi RAB dan konsultasi desain custom secara personal.'
      ],
      tags: ['Web Frontend', 'Catalog UI/UX', 'WhatsApp Direct CRM', 'Responsive Layout'],
      links: [
        { label: 'Lihat Desain & Kontak', url: '#kontak' }
      ]
    },
    {
      title: 'Sistem Informasi Manajemen Bengkel Mobil (Bengkel DPM Ciangsana)',
      category: 'Sistem Informasi Manajemen',
      image: './projects/bengkel.jpg',
      desc: 'Aplikasi manajemen bengkel mobil untuk mendigitalkan rekam servis kendaraan, kontrol stok keluar-masuk sparepart, dan otomatisasi administrasi nota pengerjaan.',
      features: [
        'Digitalisasi dokumen dan riwayat servis berkala kendaraan pelanggan.',
        'Kartu kontrol inventaris untuk monitoring stok sparepart keluar-masuk secara akurat.',
        'Otomatisasi pembuatan nota dan invoice estimasi pengerjaan servis mobil.'
      ],
      tags: ['PHP', 'MySQL', 'Database Architecture', 'Invoice Generator', 'Stock Control'],
      links: [
        { label: 'Lihat Pengalaman Terkait', url: '#pengalaman' }
      ]
    }
  ];

  const experiences = [
    {
      title: 'Owner & Web Developer',
      organization: 'Desadroid IT Consultant',
      date: '2023 - Sekarang',
      desc: 'Desadroid IT Consultant adalah layanan konsultasi IT dan penyedia solusi pembuatan software/website kustom untuk kebutuhan bisnis dan UMKM.',
      tasks: [
        'Menganalisis kebutuhan sistem klien dan merancang solusi aplikasi web yang sesuai.',
        'Mengembangkan aplikasi web dari frontend, backend, integrasi database, hingga deployment.',
        'Memberikan dukungan teknis dan pemeliharaan sistem bagi klien.'
      ]
    },
    {
      title: 'Web Developer',
      organization: 'Bengkel DPM Ciangsana Bogor (Mobil)',
      date: '2024',
      desc: 'Mengembangkan aplikasi manajemen bengkel mobil berbasis web untuk digitalisasi dan efisiensi operasional bengkel.',
      tasks: [
        'Membangun sistem pencatatan dokumen dan riwayat servis kendaraan pelanggan.',
        'Membuat modul manajemen stok sparepart untuk mencatat keluar-masuk barang secara akurat.',
        'Mengotomatisasi pembuatan nota dan invoice servis kendaraan.'
      ]
    },
    {
      title: 'Mitra Driver',
      organization: 'ShopeeFood Indonesia',
      date: '2022 - 2025',
      desc: 'Menjalankan operasional pengantaran pesanan makanan untuk pelanggan ShopeeFood di area operasional.',
      tasks: [
        'Mengelola pengantaran pesanan secara efisien dan tepat waktu.',
        'Berkomunikasi dengan merchant dan pelanggan terkait status pesanan.',
        'Menjaga rating dan performa pelayanan pengantaran.'
      ]
    }
  ];

  const educations = [
    {
      degree: 'S1 Teknik Informatika',
      institution: 'Universitas Indraprasta PGRI (Unindra)',
      year: 'Lulus 2026',
      desc: 'Fokus pada Rekayasa Perangkat Lunak, Struktur Data, Algoritma Pemrograman, Pemrograman Berorientasi Objek (OOP), dan Basis Data Relasional.'
    },
    {
      degree: 'SMK Rekayasa Perangkat Lunak (RPL)',
      institution: 'SMK Bina Mandiri Multimedia Cileungsi',
      year: '2020 - 2023',
      desc: 'Mempelajari dasar-dasar pemrograman, algoritma, pemrograman web (HTML, CSS, JavaScript, PHP, MySQL), dan basis data.'
    }
  ];

  const certificates = [
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      date: 'Juni 2026',
      image: './certificates/Introduction to Artificial Intelligence.PNG',
      desc: 'Konsep dasar kecerdasan buatan, machine learning, dan implementasi teknologi AI.'
    },
    {
      title: 'AI Ethics',
      issuer: 'IBM SkillsBuild',
      date: 'Juni 2026',
      image: './certificates/AI Ethics.PNG',
      desc: 'Prinsip etika pengembangan AI meliputi keadilan data, transparansi model, dan privasi.'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'IBM SkillsBuild',
      date: 'Juni 2026',
      image: './certificates/Introduction to Generative AI.PNG',
      desc: 'Arsitektur Generative AI, Large Language Models (LLM), dan prompt engineering.'
    },
    {
      title: 'Juara 3 Web Developer Framework',
      issuer: 'SMK Bina Mandiri Multimedia',
      date: 'Classmeeting Kejuruan',
      image: null,
      desc: 'Kompetisi pengembangan web berbasis framework antar-siswa kejuruan RPL.'
    }
  ];

  return (
    <div className={mobileMenuOpen ? 'mobile-nav-open' : ''}>
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="nav-brand">
            <span className="nav-brand-title">Fahmi Febriansyah</span>
            <span className="nav-brand-role">Web Developer</span>
          </a>

          <nav className={`nav-menu-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              <li><a href="#pengalaman" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pengalaman</a></li>
              <li><a href="#proyek" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Proyek</a></li>
              <li><a href="#pendidikan" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pendidikan</a></li>
              <li><a href="#keahlian" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Keahlian</a></li>
              <li><a href="#api-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>REST API</a></li>
              <li><a href="#payment-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Xendit Demo</a></li>
              <li><a href="#sertifikat" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sertifikat</a></li>
              <li><a href="#kontak" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Kontak</a></li>
            </ul>
            <div className="mobile-menu-cta">
              <a href="cv.html" target="_blank" rel="noreferrer" className="btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
                <FileText size={16} />
                <span>Lihat Curriculum Vitae (CV)</span>
              </a>
            </div>
          </nav>

          <div className="nav-right-actions">
            <a href="cv.html" target="_blank" rel="noreferrer" className="nav-cta desktop-cv-btn">
              <FileText size={15} />
              <span>CV</span>
            </a>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigasi menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        
        {/* HERO SECTION */}
        <section className="hero" id="hero">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                Fahmi Febriansyah
              </h1>
              <div className="hero-subtitle">
                Web Developer & Lulusan S1 Teknik Informatika
              </div>
              <p className="hero-bio">
                Lulusan S1 Teknik Informatika Universitas Indraprasta PGRI dengan latar belakang SMK Rekayasa Perangkat Lunak. Berfokus pada pengembangan aplikasi web, pengelolaan database, integrasi REST API, dan implementasi sistem operasional bisnis.
              </p>
              <div className="hero-actions">
                <a href="#kontak" className="btn-primary">
                  <Mail size={18} />
                  <span>Kontak</span>
                </a>
                <a href="https://github.com/Fahmi-febriansyah" target="_blank" rel="noreferrer" className="btn-secondary">
                  <ExternalLink size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://github.com/desadroid?tab=repositories" target="_blank" rel="noreferrer" className="btn-secondary">
                  <Code2 size={18} />
                  <span>Desadroid GitHub</span>
                </a>
              </div>
            </div>

            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-card">
                <img 
                  src="./foto_profil.jpg" 
                  alt="Fahmi Febriansyah" 
                  className="hero-avatar-img"
                  onError={(e) => { e.target.src = 'foto_profil.jpg'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PENGALAMAN KERJA */}
        <section id="pengalaman">
          <span className="section-tag">Pengalaman</span>
          <h2 className="section-title">Pengalaman Kerja</h2>

          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-subtitle">{exp.organization}</div>
                  </div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <ul className="exp-tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROYEK & PORTOFOLIO SISTEM */}
        <section id="proyek">
          <span className="section-tag">Portofolio</span>
          <h2 className="section-title">Proyek & Karya</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.8rem', fontSize: '0.96rem' }}>
            Dokumentasi aplikasi web dan sistem informasi yang dibangun dan dikembangkan oleh Fahmi Febriansyah.
          </p>

          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                {proj.image && (
                  <div className="project-thumb-box">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="project-thumb-img" 
                      loading="lazy" 
                    />
                  </div>
                )}

                <div className="project-card-body">
                  <div className="project-badge-row">
                    <span className="project-category">{proj.category}</span>
                  </div>

                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>

                  <ul className="project-features">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="project-feature-item">
                        <span className="project-feature-bullet">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {proj.links.map((lnk, lIdx) => (
                      <a
                        key={lIdx}
                        href={lnk.url}
                        target={lnk.url.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className={lIdx === 0 && lnk.url.startsWith('http') ? 'btn-primary' : 'btn-secondary'}
                        style={{ fontSize: '0.84rem', padding: '0.5rem 0.9rem' }}
                      >
                        <span>{lnk.label}</span>
                        {lnk.url.startsWith('http') && <ExternalLink size={14} />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PENDIDIKAN */}
        <section id="pendidikan">
          <span className="section-tag">Pendidikan</span>
          <h2 className="section-title">Riwayat Pendidikan</h2>

          <div className="education-grid">
            {educations.map((edu, idx) => (
              <div key={idx} className="education-card">
                <span className="edu-year">{edu.year}</span>
                <h3 className="edu-title">{edu.degree}</h3>
                <div className="edu-inst">{edu.institution}</div>
                <p className="edu-desc">{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEAHLIAN */}
        <section id="keahlian">
          <span className="section-tag">Keahlian</span>
          <h2 className="section-title">Keahlian & Teknologi</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-cat-title">
                <Code2 size={20} color="#2563eb" />
                <span>Web Dasar & Backend</span>
              </h3>
              <div className="skill-chips">
                <span className="skill-chip">HTML</span>
                <span className="skill-chip">CSS</span>
                <span className="skill-chip">JavaScript</span>
                <span className="skill-chip">PHP</span>
                <span className="skill-chip">MySQL</span>
                <span className="skill-chip">MongoDB</span>
                <span className="skill-chip">REST API</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-cat-title">
                <CreditCard size={20} color="#059669" />
                <span>Payment Gateway & Sistem</span>
              </h3>
              <div className="skill-chips">
                <span className="skill-chip">Payment Gateway (Xendit Staging)</span>
                <span className="skill-chip">Webhook</span>
                <span className="skill-chip">Manajemen Dokumen Servis</span>
                <span className="skill-chip">Manajemen Stok Sparepart</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-cat-title">
                <UserCheck size={20} color="#d97706" />
                <span>Karakter & Soft Skills</span>
              </h3>
              <div className="skill-chips">
                <span className="skill-chip">Critical Thinking</span>
                <span className="skill-chip">Public Speaking</span>
                <span className="skill-chip">Komunikasi yang Baik</span>
                <span className="skill-chip">Bekerja Keras</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            PUBLIC REST API EXPLORER & DOKUMENTASI
           ================================================================== */}
        <section id="api-section">
          <span className="section-tag">Backend Portfolio API</span>
          <h2 className="section-title">RESTful API Data Diri</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.96rem' }}>
            Spesifikasi dan tester interaktif endpoint JSON backend untuk data portofolio diri, pengalaman, keahlian teknis, dan sertifikasi.
          </p>

          <div className="api-explorer-card">
            <div className="api-tabs-row">
              {endpoints.map((ep, i) => (
                <button
                  key={i}
                  className={`api-tab-btn ${selectedEndpoint === ep.path ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedEndpoint(ep.path);
                    handleFetchApi(ep.path);
                  }}
                >
                  <span className={`http-method ${ep.method.toLowerCase()}`} style={{ marginRight: '6px', fontSize: '0.68rem', padding: '1px 5px' }}>
                    {ep.method}
                  </span>
                  {ep.label}
                </button>
              ))}
            </div>

            <div className="api-request-bar">
              <span className={`api-method-badge ${endpoints.find(e => e.path === selectedEndpoint)?.method === 'POST' ? 'post' : ''}`}>
                {endpoints.find(e => e.path === selectedEndpoint)?.method || 'GET'}
              </span>
              <span className="api-url-text">
                {window.location.origin}{getBaseApiUrl()}{selectedEndpoint}
              </span>
              <button 
                className="api-send-btn" 
                onClick={() => handleFetchApi(selectedEndpoint)}
                disabled={apiLoading}
              >
                {apiLoading ? <RefreshCw size={14} className="spin-icon" /> : <Send size={14} />}
                <span>{apiLoading ? 'Memuat...' : 'Kirim Request'}</span>
              </button>
            </div>

            <div className="api-response-panel">
              <div className="api-response-header">
                <div className="api-status-tag ok">
                  <span>Status:</span>
                  <span>{apiStatus ? `${apiStatus} OK` : 'Siap'}</span>
                </div>
                <div>
                  Waktu Respons: {apiTime !== null ? `${apiTime} ms` : '-'}
                </div>
              </div>
              <pre className="api-json-pre">
                {apiResponse ? JSON.stringify(apiResponse, null, 2) : 'Klik tombol "Kirim Request" untuk melihat respons JSON.'}
              </pre>
            </div>
          </div>

          {/* DOKUMENTASI TEKNIS API LENGKAP */}
          <div className="api-doc-card">
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>Dokumentasi Spesifikasi REST API</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
              Format request, parameter, dan deskripsi teknis endpoint portofolio backend.
            </p>

            <div className="api-doc-table-wrapper">
              <table className="api-doc-table">
                <thead>
                  <tr>
                    <th>Metode</th>
                    <th>Endpoint</th>
                    <th>Parameter / Payload</th>
                    <th>Deskripsi & Dokumentasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="http-method get">GET</span></td>
                    <td><code>/api/profile</code></td>
                    <td>-</td>
                    <td>Mengambil biodata, riwayat pendidikan, dan kontak profil pengembang.</td>
                  </tr>
                  <tr>
                    <td><span className="http-method get">GET</span></td>
                    <td><code>/api/experience</code></td>
                    <td>-</td>
                    <td>Mengambil daftar pengalaman kerja, peran, dan rincian tanggung jawab.</td>
                  </tr>
                  <tr>
                    <td><span className="http-method get">GET</span></td>
                    <td><code>/api/skills</code></td>
                    <td>-</td>
                    <td>Mengambil daftar keahlian teknis (Web, Database, Payment Gateway, Soft Skills).</td>
                  </tr>
                  <tr>
                    <td><span className="http-method get">GET</span></td>
                    <td><code>/api/certificates</code></td>
                    <td>-</td>
                    <td>Mengambil data sertifikasi resmi IBM SkillsBuild dan piagam kejuaraan.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SIMULASI PAYMENT GATEWAY (XENDIT SANDBOX)
           ================================================================== */}
        <section id="payment-section">
          <span className="section-tag">Integrasi Finansial</span>
          <h2 className="section-title">Simulasi Payment Gateway (Xendit)</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.96rem' }}>
            Demonstrasi alur pembuatan tagihan pembayaran menggunakan API resmi Xendit Sandbox (Akun Desadroid). Tagihan yang dibuat dapat diuji coba pembayarannya menggunakan simulator Xendit.
          </p>

          <div className="payment-grid">
            <div className="payment-form-col">
              <h3>Buat Tagihan Pembayaran</h3>
              <p>Pilih nominal tagihan untuk menguji alur pembuatan invoice Xendit.</p>

              <form onSubmit={handleCreateInvoice}>
                <div className="form-group">
                  <label className="form-label">Pilih Nominal Tagihan (IDR)</label>
                  <div className="preset-amount-row">
                    {[10000, 25000, 50000, 100000].map((nominal) => (
                      <button
                        type="button"
                        key={nominal}
                        className={`preset-btn ${paymentAmount === nominal ? 'active' : ''}`}
                        onClick={() => setPaymentAmount(nominal)}
                      >
                        Rp {nominal.toLocaleString('id-ID')}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="1000"
                    step="1000"
                    className="form-input"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    placeholder="Nominal kustom (min. Rp 1.000)"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Pembayar (Sandbox)</label>
                  <input
                    type="email"
                    className="form-input"
                    value={payerEmail}
                    onChange={(e) => setPayerEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Deskripsi Tagihan</label>
                  <input
                    type="text"
                    className="form-input"
                    value={paymentDesc}
                    onChange={(e) => setPaymentDesc(e.target.value)}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={paymentLoading}
                >
                  <CreditCard size={18} />
                  <span>{paymentLoading ? 'Memproses ke Xendit...' : 'Buat Invoice Xendit'}</span>
                </button>
              </form>
            </div>

            <div className={`payment-result-box ${createdInvoice?.status === 'PAID' ? 'paid-active' : createdInvoice?.status === 'EXPIRED' ? 'expired-active' : ''}`}>
              {createdInvoice ? (
                <div>
                  <div className="invoice-header">
                    <span style={{ fontSize: '0.88rem', fontWeight: 700 }}>Invoice Tagihan Xendit</span>
                    {createdInvoice.status === 'PAID' ? (
                      <span className="status-pill paid">
                        <Check size={13} /> PAID
                      </span>
                    ) : createdInvoice.status === 'EXPIRED' ? (
                      <span className="status-pill expired">
                        <XCircle size={13} /> EXPIRED
                      </span>
                    ) : (
                      <span className="status-pill pending">
                        <span className="status-dot-pulse"></span> PENDING
                      </span>
                    )}
                  </div>

                  {createdInvoice.status === 'PAID' ? (
                    <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle2 size={24} color="#059669" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#065f46' }}>
                          Pembayaran Berhasil Dikonfirmasi!
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#047857' }}>
                          Status transaksi terverifikasi LUNAS via Xendit API.
                        </div>
                      </div>
                    </div>
                  ) : createdInvoice.status === 'EXPIRED' ? (
                    <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <AlertCircle size={24} color="#dc2626" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#991b1b' }}>
                          Tagihan Telah Dibatalkan / Kedaluwarsa
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#b91c1c' }}>
                          Status invoice telah diubah menjadi EXPIRED di Xendit. Tautan pembayaran ditutup.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="polling-badge" style={{ marginBottom: '1rem', width: '100%', justifyContent: 'center' }}>
                      <RefreshCw size={13} className={isPolling ? 'spin-icon' : ''} />
                      <span>{isPolling ? 'Memeriksa status otomatis setiap 3 detik...' : 'Menunggu penyelesaian pembayaran...'}</span>
                    </div>
                  )}

                  <div className="invoice-meta-row">
                    <span className="invoice-meta-label">ID Tagihan:</span>
                    <span className="invoice-meta-value" style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {createdInvoice.invoice_id || createdInvoice.id}
                    </span>
                  </div>

                  {createdInvoice.external_id && (
                    <div className="invoice-meta-row">
                      <span className="invoice-meta-label">External ID:</span>
                      <span className="invoice-meta-value" style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                        {createdInvoice.external_id}
                      </span>
                    </div>
                  )}

                  <div className="invoice-meta-row">
                    <span className="invoice-meta-label">Nominal:</span>
                    <span className="invoice-meta-value" style={{ color: createdInvoice.status === 'PAID' ? '#059669' : createdInvoice.status === 'EXPIRED' ? '#dc2626' : 'inherit', fontWeight: 700 }}>
                      Rp {parseInt(createdInvoice.amount, 10).toLocaleString('id-ID')}
                    </span>
                  </div>

                  <div className="invoice-meta-row">
                    <span className="invoice-meta-label">Metode Pembayaran:</span>
                    <span className="invoice-meta-value">
                      {createdInvoice.payment_method || 'QRIS / Virtual Account / E-Wallet'}
                    </span>
                  </div>

                  {createdInvoice.paid_at && (
                    <div className="invoice-meta-row">
                      <span className="invoice-meta-label">Waktu Pembayaran:</span>
                      <span className="invoice-meta-value" style={{ fontSize: '0.82rem' }}>
                        {new Date(createdInvoice.paid_at).toLocaleString('id-ID')}
                      </span>
                    </div>
                  )}

                  {createdInvoice.status === 'PAID' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.4rem' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setShowCelebration(true);
                          triggerConfetti();
                        }}
                        className="btn-primary"
                        style={{ justifyContent: 'center', fontSize: '0.88rem', background: '#059669', borderColor: '#059669' }}
                      >
                        <Sparkles size={16} />
                        <span>Lihat Animasi Bukti Pembayaran</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCreatedInvoice(null)}
                        className="btn-secondary"
                        style={{ justifyContent: 'center', fontSize: '0.88rem' }}
                      >
                        <span>Uji Coba Pembayaran Baru</span>
                      </button>
                    </div>
                  ) : createdInvoice.status === 'EXPIRED' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.4rem' }}>
                      <button
                        type="button"
                        onClick={() => setCreatedInvoice(null)}
                        className="btn-primary"
                        style={{ justifyContent: 'center', fontSize: '0.88rem' }}
                      >
                        <span>Buat Tagihan Baru</span>
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.4rem' }}>
                      <a
                        href={createdInvoice.invoice_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ justifyContent: 'center', fontSize: '0.88rem' }}
                      >
                        <span>Buka Pembayaran Xendit</span>
                        <ExternalLink size={16} />
                      </a>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                        <button
                          type="button"
                          onClick={handleCheckStatus}
                          className="btn-secondary"
                          style={{ justifyContent: 'center', fontSize: '0.86rem' }}
                          disabled={statusChecking}
                        >
                          <RefreshCw size={14} className={statusChecking ? 'spin-icon' : ''} />
                          <span>{statusChecking ? 'Cek...' : 'Cek Status'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCancelInvoice}
                          className="btn-danger-outline"
                          style={{ justifyContent: 'center', fontSize: '0.86rem' }}
                          disabled={cancelLoading}
                        >
                          <XCircle size={14} />
                          <span>{cancelLoading ? 'Batal...' : 'Batalkan Tagihan'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem 1rem' }}>
                  <CreditCard size={40} style={{ margin: '0 auto 0.8rem', opacity: 0.5 }} />
                  <div style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Belum Ada Tagihan Aktif</div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Isi form di sebelah kiri untuk menghasilkan URL tagihan simulasi dari API Xendit Sandbox.
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SERTIFIKAT & PENCAPAIAN */}
        <section id="sertifikat">
          <span className="section-tag">Sertifikasi</span>
          <h2 className="section-title">Pencapaian & Sertifikat</h2>

          <div className="cert-grid">
            {certificates.map((cert, idx) => (
              <div 
                key={idx} 
                className="cert-card"
                onClick={() => cert.image && setActiveCert(cert)}
              >
                {cert.image ? (
                  <div className="cert-thumbnail-wrapper">
                    <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
                    <div className="cert-preview-overlay">
                      <span>Lihat Sertifikat</span>
                    </div>
                  </div>
                ) : (
                  <div className="cert-thumbnail-wrapper" style={{ padding: '2rem 1.5rem', textAlign: 'center', background: '#f8fafc' }}>
                    <Award size={44} color="#2563eb" style={{ margin: '0 auto 0.5rem' }} />
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.88rem' }}>Juara 3 SMK RPL</div>
                  </div>
                )}
                
                <div className="cert-content">
                  <div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <h3 className="cert-name">{cert.title}</h3>
                    <p style={{ fontSize: '0.86rem', color: '#64748b', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                      {cert.desc}
                    </p>
                  </div>
                  <div className="cert-date">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KONTAK */}
        <section id="kontak">
          <div className="contact-box">
            <span className="section-tag">Kontak</span>
            <h2>Hubungi Saya</h2>
            <p>
              Tersedia untuk peluang kerja, freelance, dan kolaborasi proyek web development.
            </p>

            <div className="contact-channels">
              <button onClick={handleCopyEmail} className="channel-btn">
                <Copy size={18} />
                <span>fahmijha12@gmail.com</span>
              </button>

              <a href="https://wa.me/6289669709021" target="_blank" rel="noreferrer" className="channel-btn">
                <Phone size={18} />
                <span>089669709021 (WhatsApp)</span>
              </a>

              <a href="https://www.linkedin.com/in/fahmifebriansyah/" target="_blank" rel="noreferrer" className="channel-btn">
                <ExternalLink size={18} />
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com/Fahmi-febriansyah" target="_blank" rel="noreferrer" className="channel-btn">
                <ExternalLink size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Fahmi Febriansyah. All rights reserved.</p>
        </div>
      </footer>

      {/* MODAL SERTIFIKAT */}
      {activeCert && (
        <div className="modal-backdrop" onClick={() => setActiveCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveCert(null)} aria-label="Tutup">
              <X size={20} />
            </button>
            <img src={activeCert.image} alt={activeCert.title} className="modal-image" />
            <div className="modal-info">
              <h3>{activeCert.title}</h3>
              <p>{activeCert.issuer} • {activeCert.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* CONFETTI ANIMATION */}
      {confettiParticles.length > 0 && (
        <div className="confetti-container" aria-hidden="true">
          {confettiParticles.map((p) => (
            <span
              key={p.id}
              className="confetti-particle"
              style={{
                left: `${p.left}%`,
                backgroundColor: p.color,
                width: p.size,
                height: p.shape === 'rect' ? `${parseInt(p.size, 10) * 1.6}px` : p.size,
                borderRadius: p.shape === 'circle' ? '50%' : '2px',
                '--drift-x': p.driftX,
                '--fall-duration': p.fallDuration,
                '--fall-delay': p.fallDelay,
                '--spin-deg': p.spinDeg
              }}
            />
          ))}
        </div>
      )}

      {/* CELEBRATION MODAL */}
      {showCelebration && (
        <div className="celebration-backdrop" onClick={() => setShowCelebration(false)}>
          <div className="celebration-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowCelebration(false)} aria-label="Tutup modal">
              <X size={18} />
            </button>

            <div className="celebration-badge-glow">
              <div className="celebration-glow-ring"></div>
              <div className="celebration-icon-circle">
                <svg className="checkmark-svg" viewBox="0 0 52 52">
                  <circle className="checkmark-circle" cx="26" cy="26" r="23" />
                  <path className="checkmark-check" d="M14 27l8 8 16-16" />
                </svg>
              </div>
            </div>

            <h3 className="celebration-title">Pembayaran Terverifikasi!</h3>
            <p className="celebration-subtitle">
              Simulasi transaksi via Xendit Sandbox berhasil dikonfirmasi secara real-time.
            </p>

            <div className="celebration-amount">
              Rp {parseInt(createdInvoice?.amount || paymentAmount, 10).toLocaleString('id-ID')}
            </div>

            <div className="celebration-details">
              <div className="celebration-row">
                <span className="celebration-label">Status</span>
                <span className="celebration-value" style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={15} /> LUNAS (PAID)
                </span>
              </div>
              {createdInvoice?.external_id && (
                <div className="celebration-row">
                  <span className="celebration-label">External ID</span>
                  <span className="celebration-value">{createdInvoice.external_id}</span>
                </div>
              )}
              {(createdInvoice?.invoice_id || createdInvoice?.id) && (
                <div className="celebration-row">
                  <span className="celebration-label">Invoice ID</span>
                  <span className="celebration-value">{createdInvoice.invoice_id || createdInvoice.id}</span>
                </div>
              )}
              <div className="celebration-row">
                <span className="celebration-label">Metode</span>
                <span className="celebration-value">{createdInvoice?.payment_method || 'QRIS / Virtual Account'}</span>
              </div>
              <div className="celebration-row">
                <span className="celebration-label">Merchant</span>
                <span className="celebration-value">desadroid</span>
              </div>
            </div>

            <button 
              type="button" 
              className="celebration-btn"
              onClick={() => setShowCelebration(false)}
            >
              <Sparkles size={16} />
              <span>Tutup & Lanjutkan Eksplorasi</span>
            </button>
          </div>
        </div>
      )}

      {/* TOAST FEEDBACK */}
      {toastMessage && (
        <div className="toast-clean">
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
