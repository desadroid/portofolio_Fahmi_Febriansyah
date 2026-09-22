<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard | Portofolio Fahmi</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .admin-container {
      padding-top: 8rem;
      padding-bottom: 6rem;
      max-width: 1000px;
      margin: 0 auto;
      width: 90%;
    }
    .admin-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 1.5rem;
    }
    .admin-header h1 {
      font-size: 2.2rem;
      background: var(--accent-gradient-1);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .logout-btn {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
      background: rgba(239,68,68,0.15);
      border: 1px solid rgba(239,68,68,0.3);
      color: #ef4444;
    }
    .logout-btn:hover { background: #ef4444; color: #fff; transform: translateY(-2px); }
    .tabs-nav { display: flex; gap: 0.75rem; margin-bottom: 2rem; overflow-x: auto; padding-bottom: 0.5rem; }
    .tab-btn {
      padding: 0.75rem 1.5rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      color: var(--text-color);
      border-radius: 12px;
      cursor: pointer;
      font-weight: 600;
      white-space: nowrap;
      transition: all 0.3s ease;
    }
    .tab-btn:hover, .tab-btn.active { border-color: var(--accent-1); background: rgba(var(--accent-rgb-1), 0.1); }
    .tab-btn.active { background: var(--accent-gradient-1); color: var(--btn-text); border-color: transparent; }
    .tab-content { display: none; }
    .tab-content.active { display: block; animation: fadeIn 0.35s ease; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
    .form-group { margin-bottom: 1.5rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    label { display:block; font-size:0.82rem; font-weight:700; color:var(--text-color); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em; }
    input, textarea, select {
      width: 100%;
      padding: 0.85rem 1.2rem;
      background: rgba(255,255,255,0.02);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      color: var(--text-color);
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      transition: all 0.3s ease;
    }
    input:focus, textarea:focus, select:focus {
      border-color: var(--accent-1);
      background: rgba(255,255,255,0.04);
      box-shadow: 0 0 15px rgba(var(--accent-rgb-1), 0.1);
    }
    textarea { resize: vertical; min-height: 120px; }
    .repeater-item { background: rgba(255,255,255,0.01); border: 1px solid var(--card-border); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .repeater-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.04); padding-bottom: 0.5rem; }
    .repeater-title { font-weight: 700; color: var(--accent-2); font-size: 0.95rem; }
    .remove-row-btn { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #ef4444; padding: 0.35rem 0.85rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
    .remove-row-btn:hover { background: #ef4444; color: #fff; }
    .add-row-btn { background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.2); color: var(--accent-2); padding: 0.6rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; transition: all 0.2s ease; }
    .add-row-btn:hover { background: var(--accent-gradient-2); color: var(--btn-text); border-color: transparent; transform: translateY(-2px); }
    .alert { padding: 1rem 1.5rem; border-radius: 12px; font-weight: 600; margin-bottom: 2rem; text-align: center; }
    .alert-success { background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.25); color: #10b981; }
    .alert-error { background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.25); color: #ef4444; }
    .submit-bar { margin-top: 3rem; display: flex; justify-content: flex-end; gap: 1.5rem; border-top: 1px solid var(--card-border); padding-top: 1.5rem; }
    .subhead { margin: 2rem 0 1rem; font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem; color: var(--accent-1); }
    .stats-3col { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .stat-box { background: rgba(255,255,255,0.01); border: 1px solid var(--card-border); padding: 1rem; border-radius: 12px; }
  </style>
</head>
<body>
  <canvas id="bg-canvas"></canvas>

  <div class="admin-container">
    <!-- Header -->
    <div class="admin-header">
      <div>
        <h1>Dashboard Admin</h1>
        <p style="color:var(--text-muted);font-size:0.9rem">Kelola konten portofolio Anda secara real-time</p>
      </div>
      <a href="index.php?route=logout" class="btn logout-btn">Keluar</a>
    </div>

    <!-- Alerts -->
    <?php if (!empty($successMsg)): ?>
      <div class="alert alert-success"><?php echo htmlspecialchars($successMsg); ?></div>
    <?php endif; ?>
    <?php if (!empty($errorMsg)): ?>
      <div class="alert alert-error"><?php echo htmlspecialchars($errorMsg); ?></div>
    <?php endif; ?>

    <!-- Tabs -->
    <div class="tabs-nav">
      <button class="tab-btn active" onclick="switchTab(event,'tab-hero')">Beranda / Hero</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-about')">Tentang Saya</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-skills')">Keahlian</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-education')">Pendidikan</button>
    </div>

    <!-- Form — posts to MVC save route -->
    <form action="index.php?route=save" method="POST" id="admin-form">

      <!-- TAB 1: HERO -->
      <div id="tab-hero" class="tab-content active glass-card">
        <div class="form-group">
          <label>URL Foto Profil (Hero & About)</label>
          <input type="url" name="hero_photo_url" value="<?php echo htmlspecialchars($data['hero']['photo_url'] ?? ''); ?>" placeholder="https://example.com/foto-fahmi.jpg">
        </div>
        <div class="form-group">
          <label>Status Badge (teks kecil berkedip)</label>
          <input type="text" name="hero_status" value="<?php echo htmlspecialchars($data['hero']['status'] ?? ''); ?>" placeholder="Tersedia untuk Kolaborasi">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Prefix Judul ("Halo, Saya ")</label>
            <input type="text" name="hero_title_1" value="<?php echo htmlspecialchars($data['hero']['title_1'] ?? 'Halo, Saya '); ?>">
          </div>
          <div class="form-group">
            <label>Nama Utama</label>
            <input type="text" name="hero_name" value="<?php echo htmlspecialchars($data['hero']['name'] ?? $data['about']['name'] ?? ''); ?>">
          </div>
        </div>
        <div class="form-group">
          <label>Judul Role / Profesi</label>
          <input type="text" name="hero_title_2" value="<?php echo htmlspecialchars($data['hero']['title_2'] ?? ''); ?>" placeholder="Web & Backend Developer">
        </div>
        <div class="form-group">
          <label>Deskripsi Hero</label>
          <textarea name="hero_description"><?php echo htmlspecialchars($data['hero']['description'] ?? ''); ?></textarea>
        </div>
      </div>

      <!-- TAB 2: ABOUT -->
      <div id="tab-about" class="tab-content glass-card">
        <div class="form-row">
          <div class="form-group">
            <label>Label Tag Section</label>
            <input type="text" name="about_title" value="<?php echo htmlspecialchars($data['about']['title'] ?? 'Latar Belakang'); ?>">
          </div>
          <div class="form-group">
            <label>Sub-judul Profil</label>
            <input type="text" name="about_job_title" value="<?php echo htmlspecialchars($data['about']['job_title'] ?? ''); ?>">
          </div>
        </div>
        <div class="form-group">
          <label>Judul Biografi</label>
          <input type="text" name="about_biography_title" value="<?php echo htmlspecialchars($data['about']['biography_title'] ?? ''); ?>">
        </div>
        <div class="form-group">
          <label>Paragraf Biografi 1 (gunakan **teks** untuk tebal)</label>
          <textarea name="about_biography_p1"><?php echo htmlspecialchars($data['about']['biography_p1'] ?? ''); ?></textarea>
        </div>
        <div class="form-group">
          <label>Paragraf Biografi 2</label>
          <textarea name="about_biography_p2"><?php echo htmlspecialchars($data['about']['biography_p2'] ?? ''); ?></textarea>
        </div>

        <h3 class="subhead">Sosial Media</h3>
        <div class="form-row">
          <div class="form-group">
            <label>Link GitHub</label>
            <input type="url" name="about_social_github" value="<?php echo htmlspecialchars($data['about']['socials']['github'] ?? ''); ?>">
          </div>
          <div class="form-group">
            <label>Link LinkedIn</label>
            <input type="url" name="about_social_linkedin" value="<?php echo htmlspecialchars($data['about']['socials']['linkedin'] ?? ''); ?>">
          </div>
        </div>
        <div class="form-group">
          <label>Link Instagram (kosongkan jika tidak mau ditampilkan)</label>
          <input type="url" name="about_social_instagram" value="<?php echo htmlspecialchars($data['about']['socials']['instagram'] ?? ''); ?>">
        </div>

        <h3 class="subhead">Statistik (3 Item)</h3>
        <div class="stats-3col">
          <?php for ($i = 0; $i < 3; $i++):
            $numVal = $data['about']['stats'][$i]['num'] ?? '';
            $lblVal = $data['about']['stats'][$i]['label'] ?? '';
          ?>
          <div class="stat-box">
            <div class="form-group">
              <label>Nilai</label>
              <input type="text" name="stats_num[]" value="<?php echo htmlspecialchars($numVal); ?>" placeholder="95%">
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label>Label</label>
              <input type="text" name="stats_label[]" value="<?php echo htmlspecialchars($lblVal); ?>" placeholder="Problem Solving">
            </div>
          </div>
          <?php endfor; ?>
        </div>
      </div>

      <!-- TAB 3: SKILLS -->
      <div id="tab-skills" class="tab-content">
        <div id="skills-repeater-container">
          <?php
          $skillCount = 0;
          foreach ($data['skills'] ?? [] as $index => $sg):
            $tagsVal = implode(', ', $sg['tags'] ?? []);
          ?>
          <div class="repeater-item glass-card">
            <div class="repeater-header">
              <span class="repeater-title">Grup Keahlian #<?php echo $index + 1; ?></span>
              <button type="button" class="remove-row-btn" onclick="removeRow(this)">Hapus</button>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Nama Kategori</label>
                <input type="text" name="skills[<?php echo $index; ?>][category]" value="<?php echo htmlspecialchars($sg['category']); ?>" required>
              </div>
              <div class="form-group">
                <label>Icon</label>
                <select name="skills[<?php echo $index; ?>][icon]">
                  <option value="database" <?php echo ($sg['icon'] ?? '') === 'database' ? 'selected' : ''; ?>>Database (Backend)</option>
                  <option value="code" <?php echo ($sg['icon'] ?? '') === 'code' ? 'selected' : ''; ?>>Code (Frontend)</option>
                  <option value="info" <?php echo ($sg['icon'] ?? '') === 'info' ? 'selected' : ''; ?>>Info (Soft Skills)</option>
                </select>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label>Tags (pisahkan dengan koma)</label>
              <input type="text" name="skills[<?php echo $index; ?>][tags]" value="<?php echo htmlspecialchars($tagsVal); ?>">
            </div>
          </div>
          <?php $skillCount = $index + 1; endforeach; ?>
        </div>
        <button type="button" class="add-row-btn" id="add-skill-btn">
          <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          Tambah Kategori
        </button>
      </div>

      <!-- TAB 4: EDUCATION -->
      <div id="tab-education" class="tab-content">
        <div id="education-repeater-container">
          <?php
          $eduCount = 0;
          foreach ($data['education'] ?? [] as $index => $edu):
          ?>
          <div class="repeater-item glass-card">
            <div class="repeater-header">
              <span class="repeater-title">Pendidikan #<?php echo $index + 1; ?></span>
              <button type="button" class="remove-row-btn" onclick="removeRow(this)">Hapus</button>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Tahun / Durasi</label>
                <input type="text" name="education[<?php echo $index; ?>][year]" value="<?php echo htmlspecialchars($edu['year'] ?? ''); ?>" required>
              </div>
              <div class="form-group">
                <label>Gelar / Bidang Studi</label>
                <input type="text" name="education[<?php echo $index; ?>][degree]" value="<?php echo htmlspecialchars($edu['degree'] ?? ''); ?>" required>
              </div>
            </div>
            <div class="form-group">
              <label>Nama Lembaga</label>
              <input type="text" name="education[<?php echo $index; ?>][institution]" value="<?php echo htmlspecialchars($edu['institution'] ?? ''); ?>">
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label>Deskripsi</label>
              <textarea name="education[<?php echo $index; ?>][description]"><?php echo htmlspecialchars($edu['description'] ?? ''); ?></textarea>
            </div>
          </div>
          <?php $eduCount = $index + 1; endforeach; ?>
        </div>
        <button type="button" class="add-row-btn" id="add-edu-btn">
          <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          Tambah Riwayat Pendidikan
        </button>
      </div>

      <!-- Submit -->
      <div class="submit-bar">
        <a href="index.php" class="btn btn-secondary">← Lihat Website</a>
        <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
      </div>
    </form>
  </div>

  <script>
    // Tab switcher
    function switchTab(evt, id) {
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      evt.currentTarget.classList.add('active');
    }

    // Remove repeater row with fade
    function removeRow(btn) {
      if (!confirm('Hapus item ini?')) return;
      const item = btn.closest('.repeater-item');
      item.style.transition = 'opacity 0.25s ease';
      item.style.opacity = '0';
      setTimeout(() => item.remove(), 270);
    }

    // Counters
    let sI = <?php echo $skillCount; ?>, eI = <?php echo $eduCount; ?>, pI = <?php echo $projCount; ?>;

    document.addEventListener('DOMContentLoaded', () => {
      // Add skill group
      document.getElementById('add-skill-btn').addEventListener('click', () => {
        const c = document.getElementById('skills-repeater-container');
        const d = document.createElement('div');
        d.className = 'repeater-item glass-card';
        d.innerHTML = `
          <div class="repeater-header">
            <span class="repeater-title">Grup Keahlian Baru</span>
            <button type="button" class="remove-row-btn" onclick="removeRow(this)">Hapus</button>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Nama Kategori</label>
              <input type="text" name="skills[${sI}][category]" placeholder="Contoh: DevOps & Cloud" required></div>
            <div class="form-group"><label>Icon</label>
              <select name="skills[${sI}][icon]">
                <option value="database">Database (Backend)</option>
                <option value="code">Code (Frontend)</option>
                <option value="info" selected>Info (Soft Skills)</option>
              </select></div>
          </div>
          <div class="form-group" style="margin-bottom:0"><label>Tags (pisahkan dengan koma)</label>
            <input type="text" name="skills[${sI}][tags]" placeholder="Docker, Linux, AWS"></div>`;
        c.appendChild(d); sI++;
      });

      // Add education
      document.getElementById('add-edu-btn').addEventListener('click', () => {
        const c = document.getElementById('education-repeater-container');
        const d = document.createElement('div');
        d.className = 'repeater-item glass-card';
        d.innerHTML = `
          <div class="repeater-header">
            <span class="repeater-title">Pendidikan Baru</span>
            <button type="button" class="remove-row-btn" onclick="removeRow(this)">Hapus</button>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Tahun</label>
              <input type="text" name="education[${eI}][year]" placeholder="2021 - 2024" required></div>
            <div class="form-group"><label>Gelar / Bidang</label>
              <input type="text" name="education[${eI}][degree]" placeholder="Teknik Informatika" required></div>
          </div>
          <div class="form-group"><label>Nama Lembaga</label>
            <input type="text" name="education[${eI}][institution]" placeholder="Universitas..."></div>
          <div class="form-group" style="margin-bottom:0"><label>Deskripsi</label>
            <textarea name="education[${eI}][description]"></textarea></div>`;
        c.appendChild(d); eI++;
      });

      // Add project
      document.getElementById('add-proj-btn').addEventListener('click', () => {
        const c = document.getElementById('projects-repeater-container');
        const d = document.createElement('div');
        d.className = 'repeater-item glass-card';
        d.innerHTML = `
          <div class="repeater-header">
            <span class="repeater-title">Project Baru</span>
            <button type="button" class="remove-row-btn" onclick="removeRow(this)">Hapus</button>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Judul Project</label>
              <input type="text" name="projects[${pI}][title]" placeholder="Nama project..." required></div>
            <div class="form-group"><label>Link</label>
              <input type="text" name="projects[${pI}][link]" value="#"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Label Card</label>
              <input type="text" name="projects[${pI}][code]" placeholder="API Gateway"></div>
            <div class="form-group"><label>Sub-label Card</label>
              <input type="text" name="projects[${pI}][subcode]" placeholder="Laravel + Stripe"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Tags</label>
              <input type="text" name="projects[${pI}][tags]" placeholder="BACKEND, PHP, MYSQL"></div>
            <div class="form-group"><label>Gradient (CSS)</label>
              <input type="text" name="projects[${pI}][color_gradient]" value="linear-gradient(135deg, #8b5cf6, #06b6d4)"></div>
          </div>
          <div class="form-group" style="margin-bottom:0"><label>Deskripsi</label>
            <textarea name="projects[${pI}][description]"></textarea></div>`;
        c.appendChild(d); pI++;
      });
    });
  </script>
  <script src="script.js"></script>
</body>
</html>
