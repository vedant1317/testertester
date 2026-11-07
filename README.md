# Vercel Static Webpage Template

A modern, fast, zero-dependency static webpage ready for 1-click deployment to [Vercel](https://vercel.com).

## 🚀 Features

- **Zero Build Step**: Pure HTML5, modern CSS, and vanilla JavaScript.
- **Vercel Optimized**: Includes `vercel.json` with clean URLs and security headers.
- **Dark & Light Mode**: Built-in theme switch with persistent `localStorage` preference.
- **Responsive Design**: Mobile-first, fully responsive layout.
- **Interactive Demos**: Live counter, copy-to-clipboard, and toast notification system.

---

## 🛠 Local Preview

You can open `index.html` directly in your browser, or serve it locally with any simple HTTP server:

```bash
# Using Python
python3 -m http.server 3000

# Using Node / npx
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel

### Method 1: Using the Vercel CLI (Fastest)

1. Run the following command in this directory:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts (hit `Enter` to accept defaults).
3. To deploy to production:
   ```bash
   npx vercel --prod
   ```

### Method 2: Via Git & Vercel Dashboard

1. Commit and push your code to GitHub, GitLab, or Bitbucket:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Leave all build and output settings at their defaults (Vercel automatically detects static sites).
5. Click **Deploy**.

---

## 📂 Project Structure

```text
├── index.html       # Semantic HTML5 markup
├── style.css        # CSS variables, responsive layout, dark/light theme
├── script.js        # Theme toggler, counter, toast notifications
├── vercel.json      # Vercel configuration (clean URLs & security headers)
├── .gitignore       # Ignores .vercel local cache
└── README.md        # Deployment instructions
```

