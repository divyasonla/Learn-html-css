export interface PracticeProject {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  instructions: string;
  starterCode: string;
  solutionCode: string;
}

export const practiceProjects: PracticeProject[] = [
  {
    id: "login-form",
    title: "Login Form",
    description: "Build a clean, styled login form with email and password fields",
    difficulty: "beginner",
    tags: ["HTML", "CSS", "Forms"],
    instructions: `## Login Form Project

Create a centered login form with:
1. A title "Sign In"
2. Email input with label
3. Password input with label
4. A "Remember me" checkbox
5. A submit button
6. Styled with CSS (centered, rounded, shadows)`,
    starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Add your styles here */
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: #f0f4f8;
  }
</style>
</head>
<body>
  <!-- Build your login form here -->
  
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: #f0f4f8;
  }
  .login-form {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 400px;
  }
  .login-form h2 {
    text-align: center;
    color: #0d9488;
    margin-bottom: 24px;
  }
  .form-group {
    margin-bottom: 16px;
  }
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
    color: #333;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
  }
  input:focus {
    outline: none;
    border-color: #0d9488;
  }
  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }
  button {
    width: 100%;
    padding: 14px;
    background: #0d9488;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background: #0f766e;
  }
</style>
</head>
<body>
  <form class="login-form">
    <h2>Sign In</h2>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="you@example.com" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="••••••••" required>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" id="remember">
      <label for="remember" style="margin:0;font-weight:normal">Remember me</label>
    </div>
    <button type="submit">Sign In</button>
  </form>
</body>
</html>`,
  },
  {
    id: "navbar",
    title: "Navigation Bar",
    description: "Create a responsive navigation bar with logo and links",
    difficulty: "beginner",
    tags: ["HTML", "CSS", "Flexbox"],
    instructions: `## Navbar Project

Create a navigation bar with:
1. A logo/brand name on the left
2. Navigation links on the right
3. Hover effects on links
4. Sticky positioning
5. Clean styling`,
    starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; }
  /* Add your navbar styles */
</style>
</head>
<body>
  <!-- Build your navbar here -->
  
  <main style="padding: 20px;">
    <h1>Page Content</h1>
    <p>Scroll down to test sticky navbar.</p>
    <div style="height: 2000px;"></div>
  </main>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background: #0d9488;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .logo {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 24px;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    transition: background 0.3s;
  }
  .nav-links a:hover {
    background: rgba(255,255,255,0.2);
  }
</style>
</head>
<body>
  <nav>
    <div class="logo">MyBrand</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <main style="padding: 20px;">
    <h1>Page Content</h1>
    <p>Scroll down to test sticky navbar.</p>
    <div style="height: 2000px;"></div>
  </main>
</body>
</html>`,
  },
  {
    id: "card-ui",
    title: "Cards UI",
    description: "Design a responsive card grid layout",
    difficulty: "beginner",
    tags: ["HTML", "CSS", "Grid"],
    instructions: `## Cards UI Project

Create a card grid with:
1. At least 4 cards
2. Each card has an image area, title, description, and button
3. Responsive grid (1 column mobile, 2-3 columns desktop)
4. Hover effects with shadow
5. Rounded corners`,
    starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #f5f5f5;
  }
  /* Add your card styles */
</style>
</head>
<body>
  <h1 style="text-align:center; margin-bottom:20px;">Our Services</h1>
  <!-- Build your card grid here -->
  
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #f5f5f5;
  }
  h1 { text-align: center; margin-bottom: 30px; color: #333; }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
  .card-image {
    height: 160px;
    background: linear-gradient(135deg, #0d9488, #06b6d4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
  .card-body { padding: 20px; }
  .card-body h3 { margin-bottom: 8px; color: #333; }
  .card-body p { color: #666; margin-bottom: 16px; line-height: 1.5; }
  .card-btn {
    display: inline-block;
    padding: 10px 20px;
    background: #0d9488;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
  }
</style>
</head>
<body>
  <h1>Our Services</h1>
  <div class="card-grid">
    <div class="card">
      <div class="card-image">🎨</div>
      <div class="card-body">
        <h3>Design</h3>
        <p>Beautiful, modern designs that engage users.</p>
        <a href="#" class="card-btn">Learn More</a>
      </div>
    </div>
    <div class="card">
      <div class="card-image" style="background: linear-gradient(135deg, #ea580c, #f59e0b);">💻</div>
      <div class="card-body">
        <h3>Development</h3>
        <p>Clean, efficient code that performs well.</p>
        <a href="#" class="card-btn">Learn More</a>
      </div>
    </div>
    <div class="card">
      <div class="card-image" style="background: linear-gradient(135deg, #2563eb, #7c3aed);">📱</div>
      <div class="card-body">
        <h3>Mobile</h3>
        <p>Responsive experiences for every device.</p>
        <a href="#" class="card-btn">Learn More</a>
      </div>
    </div>
    <div class="card">
      <div class="card-image" style="background: linear-gradient(135deg, #059669, #10b981);">🚀</div>
      <div class="card-body">
        <h3>Launch</h3>
        <p>Deploy and scale with confidence.</p>
        <a href="#" class="card-btn">Learn More</a>
      </div>
    </div>
  </div>
</body>
</html>`,
  },
];
