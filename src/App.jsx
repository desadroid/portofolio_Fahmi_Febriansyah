import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Mail, 
  Phone, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  X, 
  Menu,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  HeartHandshake
} from 'lucide-react';

export default function App() {
  const [activeCert, setActiveCert] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fahmijha12@gmail.com');
    showToast('Email fahmijha12@gmail.com berhasil disalin!');
  };

  const experiences = [
    {
      title: 'Mitra Driver Pengantaran (Sambil Kuliah)',
      organization: 'ShopeeFood',
      badge: 'Perjuangan & Kemandirian',
      badgeClass: 'badge-shopee',
      date: '2022 - 2025',
      desc: 'Bekerja sebagai mitra pengemudi ShopeeFood di sela-sela jadwal perkuliahan S1 Teknik Informatika. Pengalaman nyata ini bukan sekadar mencari nafkah mandiri, tetapi menjadi kawah candradimuka yang menempa kedisiplinan waktu, daya tahan mental di lapangan, dan kegigihan luar biasa untuk menuntaskan kuliah hingga resmi lulus sarjana.',
      highlights: [
        'Kemandirian finansial membiayai operasional dan kebutuhan akademik secara mandiri',
        'Manajemen waktu presisi antara tugas coding, jadwal kelas, dan jam narik di jalanan',
        'Membentuk karakter pekerja keras, tangguh, pantang menyerah, dan beretika santun kepada pelanggan'
      ]
    },
    {
      title: 'Founder & Owner',
      organization: 'Desadroid IT Consultant',
      badge: 'Inisiatif Bisnis & Konsultasi',
      badgeClass: 'badge-desadroid',
      date: '2023 - Sekarang',
      desc: 'Desadroid IT Consultant adalah inisiatif layanan konsultasi teknologi dan penyedia software kustom yang saya dirikan. Fokus utama Desadroid adalah mendampingi pelaku usaha, UMKM, dan institusi lokal dalam mengadopsi solusi digital praktis—mulai dari pembuatan website bisnis, sistem pencatatan operasional, hingga optimasi alur kerja digital.',
      highlights: [
        'Mendengarkan kendala bisnis klien dan merumuskan solusi web/aplikasi yang efisien dan tepat sasaran',
        'Membangun aplikasi web kustom dari perancangan antarmuka, backend, database, hingga online',
        'Memberikan pendampingan teknis dan konsultasi digital secara transparan dan mudah dipahami'
      ]
    },
    {
      title: 'Developer Aplikasi Manajemen Bengkel Mobil',
      organization: 'Bengkel DPM Ciangsana Bogor',
      badge: 'Solusi Nyata Lapangan',
      badgeClass: 'badge-workshop',
      date: '2024',
      desc: 'Merancang dan membangun aplikasi web manajemen bengkel mobil untuk Bengkel DPM di Ciangsana, Bogor. Sistem ini hadir langsung untuk mengatasi hambatan pencatatan manual buku servis, merapikan arsip pengerjaan kendaraan pelanggan, dan mengontrol ketersediaan suku cadang agar tidak terjadi selisih stok.',
      highlights: [
        'Digitalisasi riwayat servis mobil pelanggan untuk mempercepat pencarian data saat servis berkala',
        'Manajemen stok sparepart terintegrasi guna memantau pengeluaran dan pemasukan barang secara rapi',
        'Otomatisasi pembuatan dokumen servis dan estimasi biaya pengerjaan yang lebih profesional'
      ]
    }
  ];

  const educations = [
    {
      degree: 'S1 Teknik Informatika',
      institution: 'Universitas Indraprasta PGRI (Unindra)',
      year: 'Lulus Tahun Ini (2026)',
      desc: 'Berhasil menyelesaikan studi sarjana dengan fokus pada Rekayasa Perangkat Lunak, Struktur Data, Pemrograman Berorientasi Objek (OOP), Basis Data Relasional, dan Analisis Pemecahan Masalah Komputasi.'
    },
    {
      degree: 'SMK Rekayasa Perangkat Lunak (RPL)',
      institution: 'SMK Bina Mandiri Multimedia Cileungsi',
      year: '2020 - 2023',
      desc: 'Membentuk fondasi logika pemrograman sejak usia muda, pemrograman web dinamis (HTML, CSS, JavaScript, PHP, MySQL), algoritma dasar, serta kerja tim kejuruan IT.'
    }
  ];

  const certificates = [
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      date: 'Juni 2026',
      image: './certificates/Introduction to Artificial Intelligence.PNG',
      desc: 'Pemahaman konsep fundamental kecerdasan buatan, algoritma pembelajaran mesin, dan implementasi AI di dunia nyata.'
    },
    {
      title: 'AI Ethics',
      issuer: 'IBM SkillsBuild',
      date: 'Juni 2026',
      image: './certificates/AI Ethics.PNG',
      desc: 'Sertifikasi prinsip etika dalam pengembangan AI: keadilan data, transparansi model, privasi, dan tanggung jawab sosial pengembang.'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'IBM SkillsBuild',
      date: 'Juni 2026',
      image: './certificates/Introduction to Generative AI.PNG',
      desc: 'Mempelajari arsitektur Generative AI, Large Language Models (LLM), prompt engineering, dan pemanfaatannya dalam produktivitas modern.'
    },
    {
      title: 'Juara 3 Web Developer Framework',
      issuer: 'SMK Bina Mandiri Multimedia',
      date: 'Classmeeting Kejuruan',
      image: null,
      desc: 'Prestasi dalam kompetisi pengembangan web berbasis framework antar-siswa kejuruan Rekayasa Perangkat Lunak di sekolah.'
    }
  ];

  return (
    <div className={mobileMenuOpen ? 'mobile-nav-open' : ''}>
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="nav-brand">
            <span className="brand-dot"></span>
            <span>Fahmi Febriansyah</span>
          </a>

          <nav>
            <ul className="nav-menu">
              <li><a href="#tentang" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tentang</a></li>
              <li><a href="#pengalaman" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pengalaman</a></li>
              <li><a href="#pendidikan" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pendidikan</a></li>
              <li><a href="#keahlian" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Keahlian</a></li>
              <li><a href="#sertifikat" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sertifikat</a></li>
              <li><a href="#kontak" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Kontak</a></li>
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a href="cv.html" target="_blank" rel="noreferrer" className="nav-cta">
              <FileText size={16} />
              <span>Lihat CV</span>
            </a>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        
        {/* HERO SECTION */}
        <section className="hero" id="hero">
          <div className="hero-grid">
            <div>
              <div className="hero-greeting">
                <span>👋 Halo, Salam Kenal!</span>
              </div>
              <h1 className="hero-title">
                Saya <span>Fahmi Febriansyah</span>, Web Developer & Lulusan S1 Teknik Informatika.
              </h1>
              <p className="hero-bio">
                Lulusan S1 Teknik Informatika Universitas Indraprasta PGRI (Unindra) dengan fondasi SMK Rekayasa Perangkat Lunak. Terbiasa memecahkan masalah nyata menjadi aplikasi web yang bermanfaat, beretos kerja tinggi, jujur, serta siap berkontribusi penuh dalam tim pengembangan software.
              </p>
              <div className="hero-actions">
                <a href="#kontak" className="btn-primary">
                  <Mail size={18} />
                  <span>Hubungi Saya</span>
                </a>
                <a href="https://github.com/Fahmi-febriansyah" target="_blank" rel="noreferrer" className="btn-secondary">
                  <ExternalLink size={18} />
                  <span>GitHub Pribadi</span>
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
                <div className="hero-status-pill">
                  <span className="pulse-dot"></span>
                  <span>Siap Bekerja & Berkolaborasi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PENGALAMAN & PERJALANAN NYATA */}
        <section id="pengalaman">
          <span className="section-tag">Perjalanan Nyata</span>
          <h2 className="section-title">Pengalaman Kerja & Inisiatif</h2>
          <p className="section-desc">
            Bagi saya, pengalaman bukan hanya tentang jabatan, melainkan tentang tanggung jawab, kegigihan menyelesaikan masalah di lapangan, dan etos kerja keras untuk terus maju.
          </p>

          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="exp-header">
                  <div>
                    <span className={`exp-badge ${exp.badgeClass}`}>{exp.badge}</span>
                    <h3 className="exp-title" style={{ marginTop: '0.5rem' }}>{exp.title}</h3>
                    <div className="exp-subtitle">{exp.organization}</div>
                  </div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} className="highlight-icon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PENDIDIKAN */}
        <section id="pendidikan">
          <span className="section-tag">Jejak Akademik</span>
          <h2 className="section-title">Riwayat Pendidikan</h2>
          <p className="section-desc">
            Pendidikan formal yang telah membentuk dasar logika algoritma dan pemahaman rekayasa perangkat lunak saya dari tingkat menengah kejuruan hingga perguruan tinggi.
          </p>

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

        {/* KEAHLIAN & TEKNOLOGI */}
        <section id="keahlian">
          <span className="section-tag">Kompetensi</span>
          <h2 className="section-title">Keahlian & Kemampuan Praktis</h2>
          <p className="section-desc">
            Teknologi dan kemampuan yang telah saya pelajari, terapkan dalam proyek nyata, serta terus saya kembangkan secara konsisten.
          </p>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-cat-title">
                <Code2 size={20} color="#2563eb" />
                <span>Web Dasar & Backend</span>
              </h3>
              <div className="skill-chips">
                <span className="skill-chip featured">HTML5</span>
                <span className="skill-chip featured">CSS3</span>
                <span className="skill-chip featured">JavaScript</span>
                <span className="skill-chip featured">PHP</span>
                <span className="skill-chip featured">MySQL</span>
                <span className="skill-chip">MongoDB</span>
                <span className="skill-chip">RESTful API</span>
                <span className="skill-chip">Responsive Web</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-cat-title">
                <CreditCard size={20} color="#059669" />
                <span>Integrasi Pembayaran & Transaksi</span>
              </h3>
              <div className="skill-chips">
                <span className="skill-chip featured">Xendit Payment Gateway</span>
                <span className="skill-chip">Staging / Sandbox Testing</span>
                <span className="skill-chip">Webhook Handling</span>
                <span className="skill-chip">Checkout Flow</span>
                <span className="skill-chip">Manajemen Dokumen Servis</span>
                <span className="skill-chip">Kontrol Stok Sparepart</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-cat-title">
                <HeartHandshake size={20} color="#d97706" />
                <span>Soft Skills & Karakter Kerja</span>
              </h3>
              <div className="skill-chips">
                <span className="skill-chip featured">Critical Thinking</span>
                <span className="skill-chip featured">Komunikasi Efektif</span>
                <span className="skill-chip featured">Public Speaking</span>
                <span className="skill-chip featured">Kerja Keras & Pantang Menyerah</span>
                <span className="skill-chip">Kerja Sama Tim</span>
                <span className="skill-chip">Problem Solving Lapangan</span>
              </div>
            </div>
          </div>
        </section>

        {/* PENCAPAIAN & SERTIFIKAT */}
        <section id="sertifikat">
          <span className="section-tag">Bukti Kompetensi</span>
          <h2 className="section-title">Pencapaian & Sertifikasi</h2>
          <p className="section-desc">
            Sertifikasi resmi dan prestasi yang membuktikan komitmen saya untuk terus belajar dan memperluas wawasan di bidang teknologi.
          </p>

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
                      <Sparkles size={16} />
                      <span>Klik untuk Lihat Asli</span>
                    </div>
                  </div>
                ) : (
                  <div className="cert-thumbnail-wrapper" style={{ padding: '2rem 1.5rem', textAlign: 'center', background: '#fef3c7' }}>
                    <Award size={48} color="#d97706" style={{ margin: '0 auto 0.5rem' }} />
                    <div style={{ fontWeight: 700, color: '#92400e', fontSize: '0.9rem' }}>Juara 3 SMK RPL</div>
                  </div>
                )}
                
                <div className="cert-content">
                  <div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <h3 className="cert-name">{cert.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                      {cert.desc}
                    </p>
                  </div>
                  <div className="cert-date">📅 {cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KONTAK & AJAKAN BEKERJA SAMA */}
        <section id="kontak">
          <div className="contact-box">
            <span className="section-tag">Mari Terhubung</span>
            <h2>Tertarik untuk Bekerja Sama?</h2>
            <p>
              Saya sangat terbuka untuk peluang kerja sebagai Web Developer, proyek pengembangan aplikasi, maupun diskusi teknologi. Jangan ragu untuk menghubungi saya langsung.
            </p>

            <div className="contact-channels">
              <button onClick={handleCopyEmail} className="channel-btn" style={{ color: '#2563eb' }}>
                <Copy size={18} />
                <span>fahmijha12@gmail.com</span>
              </button>

              <a href="https://wa.me/6289669709021" target="_blank" rel="noreferrer" className="channel-btn" style={{ color: '#059669' }}>
                <Phone size={18} />
                <span>WhatsApp (089669709021)</span>
              </a>

              <a href="https://www.linkedin.com/in/fahmifebriansyah/" target="_blank" rel="noreferrer" className="channel-btn">
                <ExternalLink size={18} />
                <span>LinkedIn Profile</span>
              </a>

              <a href="https://github.com/Fahmi-febriansyah" target="_blank" rel="noreferrer" className="channel-btn">
                <Code2 size={18} />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Fahmi Febriansyah. Dibuat dengan React.js & dedikasi tinggi.</p>
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

      {/* TOAST FEEDBACK */}
      {toastMessage && (
        <div className="toast-clean">
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
