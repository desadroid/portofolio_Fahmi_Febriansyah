import React, { useState } from 'react';
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
  UserCheck
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
    showToast('Email fahmijha12@gmail.com disalin ke clipboard');
  };

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
            <span>Fahmi Febriansyah</span>
          </a>

          <nav>
            <ul className="nav-menu">
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
              <span>CV</span>
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
              <h1 className="hero-title">
                Fahmi Febriansyah
              </h1>
              <div className="hero-subtitle">
                Web Developer & Lulusan S1 Teknik Informatika
              </div>
              <p className="hero-bio">
                Lulusan S1 Teknik Informatika Universitas Indraprasta PGRI dengan latar belakang SMK Rekayasa Perangkat Lunak. Berfokus pada pengembangan aplikasi web, pengelolaan database, integrasi API, dan implementasi sistem operasional bisnis.
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

      {/* TOAST FEEDBACK */}
      {toastMessage && (
        <div className="toast-clean">
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
