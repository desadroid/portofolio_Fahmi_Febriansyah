<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Admin | Portofolio Fahmi</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .login-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    .login-card { max-width: 420px; width: 100%; text-align: center; }
    .login-logo {
      font-family: 'Outfit', sans-serif;
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #8b5cf6, #06b6d4);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 0.25rem;
    }
    .login-title { font-size: 1.5rem; margin-bottom: 0.4rem; }
    .login-desc { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem; }
    .form-group { text-align: left; margin-bottom: 1.5rem; }
    label {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
    input[type="password"] {
      width: 100%;
      padding: 0.85rem 1.2rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      color: var(--text-color);
      font-family: inherit;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
    }
    input[type="password"]:focus {
      border-color: var(--accent-1);
      background: rgba(255,255,255,0.05);
      box-shadow: 0 0 15px rgba(var(--accent-rgb-1), 0.15);
    }
    .login-btn { width: 100%; justify-content: center; margin-top: 0.5rem; }
    .error-msg {
      background: rgba(239,68,68,0.1);
      border: 1px solid rgba(239,68,68,0.2);
      color: #ef4444;
      padding: 0.75rem 1rem;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .back-home {
      display: inline-block;
      margin-top: 1.5rem;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.88rem;
      transition: color 0.3s;
    }
    .back-home:hover { color: var(--accent-1); }
  </style>
</head>
<body>
  <canvas id="bg-canvas"></canvas>

  <div class="login-container">
    <div class="glass-card login-card">
      <div class="login-logo">FF.</div>
      <h1 class="login-title">Control Panel</h1>
      <p class="login-desc">Silakan masuk untuk mengelola konten portofolio Anda.</p>

      <?php if (!empty($error)): ?>
        <div class="error-msg"><?php echo htmlspecialchars($error); ?></div>
      <?php endif; ?>

      <form action="index.php?route=login" method="POST">
        <div class="form-group">
          <label for="password">Kata Sandi</label>
          <input type="password" name="password" id="password" placeholder="Masukkan password admin" required autofocus>
        </div>
        <button type="submit" class="btn btn-primary login-btn">Masuk &rarr;</button>
      </form>

      <a href="index.php" class="back-home">&larr; Kembali ke Beranda</a>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
