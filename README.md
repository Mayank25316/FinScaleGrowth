# 🚀 FinScale Growth — Credit Repair Acquisitions Engine

[![Live Site](https://img.shields.io/badge/Live%20Demo-finscalegrowth.com-blue?style=for-the-badge&logo=vercel)](https://www.finscalegrowth.com/)
[![React Version](https://img.shields.io/badge/React-v19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite Tooling](https://img.shields.io/badge/Vite-v8.0-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![Compliance Score](https://img.shields.io/badge/Compliance-100%25%20CROA%20%2F%20TSR-green?style=for-the-badge&logo=shield)](https://www.ftc.gov/)

An ultra-premium, high-performance client acquisition landing page and booking system engineered specifically for US-registered **Credit Repair Associations (CRA)**. Built to establish immediate authority, capture high-intent search leads, and automate CRM routing with zero compliance friction.

🔗 **Explore the Live Platform:** [https://www.finscalegrowth.com/](https://www.finscalegrowth.com/)

---

## ✨ Core Features & Growth Architecture

### 🛡️ 1. 100% CROA & TSR Compliance
* **Regulatory Alignment:** Ad copy, landing page structures, and qualification criteria strictly adhere to the **Credit Repair Organizations Act (CROA)** and **Telemarketing Sales Rule (TSR)** frameworks.
* **Safe Client Intake Wording:** All copy emphasizes legitimate intake auditing, avoiding terms that trigger search platform flag scripts or regulatory review.

### 🎯 2. Custom Double-Intercept Forms
* **HubSpot CRM Integration:** Configured using HubSpot's public API endpoints, mapping leads directly to CRM databases without heavy external script embeds.
* **Prefill System:** Captures user response drivers dynamically and automatically carries them over to schedule audits, reducing funnel friction and boosting conversion rates.
* **Adblocker Protection:** Local error traps warn users if their browser blocks CRM analytics, ensuring reliable data tracking.

### ⚡ 3. Elite Page Performance & WebVitals
* **WebP Asset Optimization:** Core brand logos and portraits converted to WebP formats and dynamically sized, cutting image payloads by **95%+** (from ~300KB down to ~12KB).
* **Zero CLS (Cumulative Layout Shift):** Image containers are hardcoded with exact layout aspect ratios to prevent layout shifts during render.
* **Minified Build Stack:** Powered by Vite, assets are tree-shaken and compressed to ensure instant load times even on mobile connections.

---

## 🛠️ Technology Stack

* **Frontend Framework:** React 19 (Strict Mode)
* **Build System & HMR:** Vite
* **Styling & Theme System:** Vanilla CSS & CSS Variables (custom-curated dark mode grid and premium layout details)
* **Icons Library:** Lucide React
* **Deployment & Hosting:** Vercel (Edge Network Distribution)
* **DNS & Security:** Spaceship Registry + Cloudflare CDN + Let's Encrypt SSL

---

## 💻 Local Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then run:

### 1. Clone the Repository
```bash
git clone https://github.com/Mayank25316/FinScaleGrowth.git
cd FinScaleGrowth
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production
```bash
npm run build
```
This minifies and bundles all assets inside the `/dist` directory, ready to be hosted on Vercel, Netlify, or AWS.

---

## 📈 SEO Configuration

The project features rigorous on-page technical SEO optimizations:
* **Canonical Configuration:** Standardized headers with `<link rel="canonical" href="https://finscalegrowth.com/" />`.
* **Snippet Safety:** Titles and descriptions are limited to exactly **56** and **153** characters respectively to prevent truncation in search result snippets.
* **Spiders Indexing:** All visual sections utilize semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`) with high-contrast accessibility tags.
