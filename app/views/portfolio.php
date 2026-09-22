<?php
/**
 * View: portfolio.php
 * Bright, Clean, Modern & Professional Portfolio
 * Highlighting Backend Engineering Excellence without code block clutter.
 */

function parse_md(string $text): string {
    return preg_replace('/\*\*(.*?)\*\*/', '<strong style="color:var(--text-main);font-weight:600">$1</strong>', htmlspecialchars($text));
}

$name = $data['about']['name'] ?? 'Fahmi Febriansyah';
$jobTitle = $data['about']['job_title'] ?? 'Software Engineer & IT Consultant';
$photoUrl = !empty($data['hero']['photo_url']) ? $data['hero']['photo_url'] : 'foto_profil.jpg';
$githubUrl = $data['about']['socials']['github'] ?? 'https://github.com/Fahmi-febriansyah?tab=repositories';
$linkedinUrl = $data['about']['socials']['linkedin'] ?? 'https://www.linkedin.com/in/fahmifebriansyah/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php echo htmlspecialchars($name); ?> — <?php echo htmlspecialchars($jobTitle); ?>. Focused on scalable web backends, database optimization, and cloud server infrastructure.">
  <title><?php echo htmlspecialchars($name); ?> | Backend &amp; Systems Engineer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Minimalist Clean Top Navigation -->
  <header class="top-navbar" id="navbar">
    <div class="nav-wrapper">
      <a href="#hero" class="nav-brand" aria-label="Home">
        <span class="brand-dot" aria-hidden="true"></span>
        <span>fahmi<span class="brand-accent">.dev</span></span>
      </a>

      <nav>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="#hero" class="nav-link active">Overview</a></li>
          <li><a href="#systems" class="nav-link">Architecture</a></li>
          <li><a href="#venture" class="nav-link">Desadroid</a></li>
          <li><a href="#capabilities" class="nav-link">Stack</a></li>
          <li><a href="#credentials" class="nav-link">Background</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="cv.html" target="_blank" class="nav-cv-btn" title="Curriculum Vitae / Resume">
          <span>CV / Resume</span>
          <svg viewBox="0 0 24 24" style="width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>

        <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme">
          <svg class="sun-icon" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-2c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 14c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.27 6.68c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.27 3.86c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.41zm12.05 12.05c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.41zM5 12c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zm18-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zM7.05 18.36c-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.41-1.41c.4-.39.4-1.02 0-1.41zM18.36 7.05c.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-1.41 1.41c-.39.38-.39 1.02 0 1.41z"/></svg>
          <svg class="moon-icon" viewBox="0 0 24 24"><path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10C2.2 6.8 6.5 2.5 11.7 2.1c.5 0 .9.3 1.1.7.2.4.1.9-.2 1.2-2.1 2.1-2.1 5.5 0 7.6.4.4.4 1 0 1.4-.4.4-.9.4-1.3.1-3-2.3-7.5-2.3-10.5 0-.4.3-.9.4-1.2.1-.4-.2-.6-.7-.6-1.1.3-5.2 4.6-9.5 9.8-9.5 5.5 0 10 4.5 10 10 0 .5-.3.9-.7 1.1-.3.1-.6.2-.9.2z"/></svg>
        </button>

        <button class="hamburger-btn" id="hamburger-menu" aria-label="Toggle Navigation Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <main>

    <!-- HERO SECTION (CLEAN EDITORIAL + SQUARE PROFILE PHOTO) -->
    <section class="hero-section" id="hero">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Left: Identity & Strong Backend Positioning -->
          <div>
            <div class="hero-status-pill">
              <span class="status-dot"></span>
              <span>Available for Backend Engineering &amp; Advisory</span>
            </div>

            <h1 class="hero-headline">
              Architecting Fast, Resilient &amp; Scalable Web Backends.
            </h1>

            <p class="hero-lead">
              I am <strong><?php echo htmlspecialchars($name); ?></strong>, a <?php echo htmlspecialchars($jobTitle); ?> and founder of <strong>Desadroid Studio</strong>. I design high-throughput API architectures, optimize relational database performance, and deploy secure Linux server environments.
            </p>

            <div class="hero-badges-bar">
              <span class="tech-pill">Laravel &amp; PHP</span>
              <span class="tech-pill">MySQL &amp; Query Tuning</span>
              <span class="tech-pill">Node.js &amp; Express</span>
              <span class="tech-pill">RESTful API Design</span>
              <span class="tech-pill">Linux &amp; Web Hosting</span>
            </div>

            <div class="hero-cta-group">
              <a href="#systems" class="btn-modern primary">
                <span>Explore Architecture</span>
                <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>

              <a href="<?php echo htmlspecialchars($githubUrl); ?>" target="_blank" class="btn-modern secondary">
                <span>GitHub Repositories</span>
                <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>

              <button class="btn-modern ghost" id="btn-copy-email-hero" data-email="fahmijha12@gmail.com">
                <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                <span>Copy Email</span>
              </button>
            </div>
          </div>

          <!-- Right: Dedicated Square Profile Photo Card -->
          <div>
            <div class="square-portrait-card">
              <div class="square-photo-wrap">
                <img src="<?php echo htmlspecialchars($photoUrl); ?>" alt="<?php echo htmlspecialchars($name); ?>" class="square-photo-img" loading="eager">
              </div>
              <div class="square-photo-meta">
                <div class="square-meta-name"><?php echo htmlspecialchars($name); ?></div>
                <div class="square-meta-role">Software Engineer &amp; IT Consultant</div>
                <div class="square-meta-loc">
                  <span>📍 Bogor &amp; Jakarta, Indonesia &bull; UTC+7</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CREATIVE BACKEND ARCHITECTURE & SYSTEMS SHOWCASE (VISUAL BENTO GRID) -->
    <section id="systems">
      <div class="container">
        <span class="section-tag">System Architecture</span>
        <h2 class="section-title">Backend Engineering &amp; High Uptime Systems</h2>
        <p class="section-subtitle">
          Great backend engineering is about reliable data flow, fast queries, and zero race conditions under load.
        </p>

        <div class="bento-grid">
          
          <!-- Bento 1: Relational Database Architecture (Large) -->
          <div class="bento-card bento-col-8">
            <div>
              <div class="bento-header">
                <div class="bento-icon-box">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2c4.42 0 8 1.57 8 2.5S16.42 9 12 9 4 7.43 4 6.5 7.58 4 12 4zm0 5c4.42 0 8 1.57 8 2.5s-3.58 2.5-8 2.5-8-1.57-8-2.5 3.58-2.5 8-2.5zm0 5c4.42 0 8 1.57 8 2.5s-3.58 2.5-8 2.5-8-1.57-8-2.5 3.58-2.5 8-2.5zm0 5c4.42 0 8-1.57 8-2.5v.5c0 .93-3.58 2.5-8 2.5s-8-1.57-8-2.5v-.5c0 .93 3.58 2.5 8 2.5z"/></svg>
                </div>
                <span class="bento-badge">ACID Compliant</span>
              </div>
              <h3 class="bento-title">Relational Database Design &amp; Query Optimization</h3>
              <p class="bento-desc">
                Architecting 3rd-normal-form relational databases with strict foreign key constraints. Crafting composite indexing strategies that target exact filtering patterns, eliminating slow full-table scans, and implementing row-level pessimistic locking (<span class="mono">FOR UPDATE</span>) to prevent checkout concurrency race conditions.
              </p>
            </div>

            <!-- Visual Flow -->
            <div class="arch-flow-diagram">
              <div class="arch-node">
                <div class="arch-node-title">High-Volume Request</div>
                <div class="arch-node-sub">Concurrent Checkouts</div>
              </div>
              <span class="arch-arrow">&rarr;</span>
              <div class="arch-node">
                <div class="arch-node-title">Row Lock / Isolation</div>
                <div class="arch-node-sub">Pessimistic Lock</div>
              </div>
              <span class="arch-arrow">&rarr;</span>
              <div class="arch-node">
                <div class="arch-node-title">Composite Index</div>
                <div class="arch-node-sub">0.04ms Lookup</div>
              </div>
              <span class="arch-arrow">&rarr;</span>
              <div class="arch-node">
                <div class="arch-node-title">ACID Commit</div>
                <div class="arch-node-sub">Zero Inconsistency</div>
              </div>
            </div>
          </div>

          <!-- Bento 2: High Throughput / Metrics (Small) -->
          <div class="bento-card bento-col-4">
            <div>
              <div class="bento-header">
                <div class="bento-icon-box" style="background:#ecfdf5;border-color:#a7f3d0;color:#059669;">
                  <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                </div>
                <span class="bento-badge" style="color:#059669;background:#ecfdf5;border-color:#a7f3d0;">Performance</span>
              </div>
              <h3 class="bento-title">System Metrics</h3>
              <p class="bento-desc">
                Measured efficiency on custom Laravel &amp; Node.js platforms.
              </p>
            </div>

            <div class="bento-metrics-mini">
              <div class="metric-mini-item">
                <div class="metric-mini-val">&lt;50ms</div>
                <div class="metric-mini-lbl">API Latency</div>
              </div>
              <div class="metric-mini-item">
                <div class="metric-mini-val">0.04ms</div>
                <div class="metric-mini-lbl">Indexed Scan</div>
              </div>
              <div class="metric-mini-item">
                <div class="metric-mini-val">100%</div>
                <div class="metric-mini-lbl">Data Integrity</div>
              </div>
            </div>
          </div>

          <!-- Bento 3: RESTful API & Security (Half) -->
          <div class="bento-card bento-col-6">
            <div>
              <div class="bento-header">
                <div class="bento-icon-box">
                  <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                </div>
                <span class="bento-badge">API Security</span>
              </div>
              <h3 class="bento-title">Defensive API &amp; Middleware Architecture</h3>
              <p class="bento-desc">
                Robust RESTful API design adhering to clean resource hierarchies. Enforcing token-based authentication (JWT/OAuth), role-based authorization (RBAC), rate-limiting middleware, strict request validation schemas, and idempotent payment webhooks.
              </p>
            </div>
            <div class="bento-tags">
              <span class="bento-tag">JWT Bearer Auth</span>
              <span class="bento-tag">Idempotent Keys</span>
              <span class="bento-tag">Rate Limiting</span>
              <span class="bento-tag">Sanitized Inputs</span>
            </div>
          </div>

          <!-- Bento 4: Linux & Server Infrastructure (Half) -->
          <div class="bento-card bento-col-6">
            <div>
              <div class="bento-header">
                <div class="bento-icon-box">
                  <svg viewBox="0 0 24 24"><path d="M4 1h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 14h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2 3h2v2H6v-2zm0-14h2v2H6V4z"/></svg>
                </div>
                <span class="bento-badge">DevOps &amp; Infra</span>
              </div>
              <h3 class="bento-title">Linux Server Hosting &amp; Reverse Proxying</h3>
              <p class="bento-desc">
                End-to-end server orchestration on Ubuntu/Debian distributions. Configuring Nginx reverse proxies with SSL/TLS auto-renewals, HTTP/2 multiplexing, tuned PHP-FPM dynamic process pools, and automated symlink-based deployment scripts for zero downtime.
              </p>
            </div>
            <div class="bento-tags">
              <span class="bento-tag">Ubuntu / Debian</span>
              <span class="bento-tag">Nginx &amp; Apache</span>
              <span class="bento-tag">PHP-FPM Pools</span>
              <span class="bento-tag">Let's Encrypt SSL</span>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- FLAGSHIP CASE STUDY: DESADROID STUDIO -->
    <section id="venture">
      <div class="container">
        <div class="venture-box">
          <div class="venture-split">
            <div>
              <span class="venture-tag-pill">Flagship Venture &bull; Founder &amp; Lead Consultant</span>
              <h2 class="venture-title">Desadroid Studio</h2>
              <p class="venture-desc">
                At Desadroid, I have led the end-to-end technical engineering of customized digital platforms for clients. Rather than relying on rigid templates, every solution is built with bespoke relational database structures, secure backend services, and dedicated Linux server hosting configured to the client's operational demands.
              </p>
              
              <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
                <a href="https://github.com/desadroid?tab=repositories" target="_blank" class="btn-modern primary">
                  <span>Inspect Desadroid Repositories</span>
                  <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <div class="venture-stats-column">
              <div class="venture-stat-item">
                <div class="venture-stat-num">End-to-End</div>
                <div class="venture-stat-lbl">Database Architecture to Server Provisioning</div>
              </div>
              <div class="venture-stat-item">
                <div class="venture-stat-num">100%</div>
                <div class="venture-stat-lbl">Custom Backend Logic &amp; Reliable Delivery</div>
              </div>
              <div class="venture-stat-item">
                <div class="venture-stat-num">A+</div>
                <div class="venture-stat-lbl">Security, Scalability &amp; Client Communication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECHNICAL CAPABILITIES & TOOLSET -->
    <section id="capabilities">
      <div class="container">
        <span class="section-tag">Engineering Toolset</span>
        <h2 class="section-title">Technical Capabilities &amp; Skills</h2>
        <p class="section-subtitle">
          Battle-tested frameworks and technologies I leverage to build robust digital platforms.
        </p>

        <!-- Filter Controls -->
        <div class="filter-bar">
          <button class="filter-btn active" data-filter="all">All Stack</button>
          <button class="filter-btn" data-filter="backend">Backend &amp; DB</button>
          <button class="filter-btn" data-filter="infra">DevOps &amp; Infra</button>
          <button class="filter-btn" data-filter="frontend">Web Core</button>
        </div>

        <!-- Capabilities Grid -->
        <div class="capabilities-grid" id="capabilities-grid">
          
          <div class="capability-card" data-category="backend">
            <div>
              <div class="cap-meta">
                <span class="cap-category">BACKEND</span>
                <span class="cap-tech">PHP / Laravel</span>
              </div>
              <h3 class="cap-title">Laravel &amp; Modern PHP</h3>
              <p class="cap-body">MVC pattern, service layer abstraction, Eloquent relational mapping, migration versioning, and secure routing.</p>
            </div>
          </div>

          <div class="capability-card" data-category="backend">
            <div>
              <div class="cap-meta">
                <span class="cap-category">DATABASE</span>
                <span class="cap-tech">MySQL</span>
              </div>
              <h3 class="cap-title">MySQL &amp; Query Optimization</h3>
              <p class="cap-body">Schema normalization, composite indexing, transaction isolation, and foreign key integrity management.</p>
            </div>
          </div>

          <div class="capability-card" data-category="backend">
            <div>
              <div class="cap-meta">
                <span class="cap-category">RUNTIME</span>
                <span class="cap-tech">Node.js</span>
              </div>
              <h3 class="cap-title">Node.js &amp; Express</h3>
              <p class="cap-body">Asynchronous microservices, JWT authentication pipelines, JSON API design, and webhook listeners.</p>
            </div>
          </div>

          <div class="capability-card" data-category="infra">
            <div>
              <div class="cap-meta">
                <span class="cap-category">INFRASTRUCTURE</span>
                <span class="cap-tech">Linux / Nginx</span>
              </div>
              <h3 class="cap-title">Linux Hosting &amp; Web Servers</h3>
              <p class="cap-body">Ubuntu server administration, Apache/Nginx virtual host configurations, SSL certificates, and socket management.</p>
            </div>
          </div>

          <div class="capability-card" data-category="infra">
            <div>
              <div class="cap-meta">
                <span class="cap-category">VERSIONING</span>
                <span class="cap-tech">Git &amp; CI</span>
              </div>
              <h3 class="cap-title">Git &amp; Deployment Workflows</h3>
              <p class="cap-body">Branching strategies, collaborative pull requests, release tagging, and automated webhook deployments.</p>
            </div>
          </div>

          <div class="capability-card" data-category="frontend">
            <div>
              <div class="cap-meta">
                <span class="cap-category">FRONTEND</span>
                <span class="cap-tech">JavaScript</span>
              </div>
              <h3 class="cap-title">Modern JavaScript (ES6+)</h3>
              <p class="cap-body">Vanilla DOM interaction, asynchronous HTTP fetch requests, state handling, and interactive UI components.</p>
            </div>
          </div>

          <div class="capability-card" data-category="frontend">
            <div>
              <div class="cap-meta">
                <span class="cap-category">FRONTEND</span>
                <span class="cap-tech">CSS3 &amp; HTML5</span>
              </div>
              <h3 class="cap-title">Responsive UI &amp; Tailwind</h3>
              <p class="cap-body">Semantic markup, flexbox/grid architectures, design token systems, and responsive layout choreography.</p>
            </div>
          </div>

          <div class="capability-card" data-category="infra">
            <div>
              <div class="cap-meta">
                <span class="cap-category">CONSULTING</span>
                <span class="cap-tech">Architecture</span>
              </div>
              <h3 class="cap-title">Technical IT Advisory</h3>
              <p class="cap-body">System specification analysis, relational entity mapping, tech stack selection, and stakeholder communication.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ACADEMIC CREDENTIALS & TRAJECTORY -->
    <section id="credentials">
      <div class="container">
        <span class="section-tag">Academic Background</span>
        <h2 class="section-title">Credentials &amp; Education</h2>
        <p class="section-subtitle">
          Solid educational grounding in software engineering principles, computer science, and algorithmic logic.
        </p>

        <div class="credentials-grid">
          <?php foreach ($data['education'] ?? [] as $edu): ?>
            <div class="credential-card">
              <span class="credential-year"><?php echo htmlspecialchars($edu['year']); ?></span>
              <h3 class="credential-degree"><?php echo htmlspecialchars($edu['degree']); ?></h3>
              <div class="credential-institution"><?php echo htmlspecialchars($edu['institution']); ?></div>
              <p class="credential-summary"><?php echo htmlspecialchars($edu['description']); ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <!-- DIRECT CONTACT SECTION -->
    <section id="contact">
      <div class="container">
        <div class="contact-card">
          <span class="section-tag">Direct Communication</span>
          <h2>Let's Engineer Something High-Performing.</h2>
          <p>
            Whether you are looking to hire a dedicated backend engineer, need technical IT consulting for your business, or wish to discuss software architecture, feel free to reach out.
          </p>

          <div class="contact-btn-row">
            <button class="btn-modern primary" id="btn-copy-email-contact" data-email="fahmijha12@gmail.com">
              <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
              <span>Copy fahmijha12@gmail.com</span>
            </button>

            <?php if (!empty($linkedinUrl)): ?>
            <a href="<?php echo htmlspecialchars($linkedinUrl); ?>" target="_blank" class="btn-modern secondary">
              <span>LinkedIn Profile</span>
              <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <?php endif; ?>

            <a href="cv.html" target="_blank" class="btn-modern ghost">
              <span>Open Resume (PDF-Ready)</span>
              <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Clean Minimalist Footer -->
  <footer>
    <div class="container">
      <p>&copy; <?php echo date('Y'); ?> <?php echo htmlspecialchars($name); ?> &bull; Engineered with Precision &bull; All rights reserved.</p>
    </div>
  </footer>

  <!-- Toast Notification Pill -->
  <div id="toast" class="toast-pill" role="alert" aria-live="polite">
    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    <span id="toast-msg">Email copied to clipboard!</span>
  </div>

  <script src="script.js"></script>
</body>
</html>
