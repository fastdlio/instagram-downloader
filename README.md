# FastDL — Open-Source Instagram Downloader 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Official_Service-FastDL.io-rose?style=flat-square&logo=google-chrome)](https://fastdl.io/)

A modern, high-performance, and privacy-first **Instagram Downloader** web application built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **TypeScript**. 

This open-source project showcases the frontend architecture and public media resolver principles behind **[FastDL.io](https://fastdl.io/)** — the premier online [Instagram Downloader](https://fastdl.io/) used by millions worldwide to save public Instagram media in original high definition.

---

### 🌐 Official Cloud Platform: [https://fastdl.io/](https://fastdl.io/)

Looking for a production-ready cloud tool with global CDN delivery, multi-photo carousel extraction, and zero setup? Try the official platform:

👉 **[Launch FastDL.io in Browser](https://fastdl.io/)**

---

## ✨ Key Features

- **Full HD & 4K Media Extraction**: Downloads Instagram Reels, standard videos, carousels, and high-resolution photos in maximum available quality.
- **Zero Login or Cookies Required**: Extracts publicly available media anonymously without requiring users to log into their Instagram accounts or share sensitive session tokens.
- **Next.js 15 App Router Architecture**: Built with modern serverless Route Handlers (`/api/download`), server-side rendering, and responsive client components.
- **Clipboard One-Click Paste**: Automatic clipboard integration allowing users to paste Instagram links with a single click.
- **Built-in Media Player Preview**: Inspect videos and images before downloading directly within the user interface.
- **100% Responsive & Cross-Platform**: Optimized for mobile (iOS, Android), tablet, and desktop viewports.
- **SEO & Structured Data Ready**: Includes Schema.org `WebApplication` and `Organization` JSON-LD markup out of the box.

---

## 🛠️ Supported Media Types

| Media Type | Supported | Description |
|---|:---:|---|
| **Instagram Reels** | ✅ | Save viral Reels with crisp audio in MP4 format. |
| **Video Posts & IGTV** | ✅ | Download long-form and short-form video content in original bitrates. |
| **Photos & Carousels** | ✅ | High-resolution JPG image download without quality compression. |
| **Audio Tracks** | ✅ | Stream and retrieve source audio feeds from public posts. |

For advanced batch downloads and private profile rendering, explore the enterprise features at **[FastDL](https://fastdl.io/)**.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.18.0 or higher
- **Package Manager**: `npm`, `yarn`, or `pnpm`

### 1. Clone the repository

```bash
git clone https://github.com/fastdlio/instagram-downloader.git
cd instagram-downloader
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to test the application.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
fastdl-instagram-downloader/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── download/
│   │   │       └── route.ts     # Serverless Instagram public media API resolver
│   │   ├── globals.css          # Tailwind CSS base directives and theme styles
│   │   ├── layout.tsx           # SEO metadata, OpenGraph & JSON-LD Schema markup
│   │   └── page.tsx             # Interactive landing page with media preview
│   ├── components/
│   │   ├── DownloaderForm.tsx   # Input form with clipboard paste & instant validation
│   │   ├── FAQ.tsx              # Accordion FAQ section targeting core user queries
│   │   ├── Features.tsx         # Responsive feature cards highlighting USPs
│   │   ├── Footer.tsx           # Brand attribution, legal disclaimer & backlinks
│   │   ├── Header.tsx           # Top navigation with direct link to FastDL.io
│   │   ├── HowItWorks.tsx       # 3-step visual onboarding guide
│   │   └── MediaResult.tsx      # Card renderer for video playback and HD download
│   └── lib/
│       ├── instagram.ts         # Public Instagram shortcode parser & HTML scraper
│       └── utils.ts             # Tailwind merge utilities & regex helpers
├── next.config.ts               # Next.js configuration and remote image patterns
├── tailwind.config.ts           # Custom brand color gradients (FastDL aesthetic)
├── tsconfig.json                # TypeScript compiler configuration
└── package.json                 # Project dependencies and deployment scripts
```

---

## 🔌 API Reference

### Extract Media Endpoint

`POST /api/download`

#### Request Headers
```http
Content-Type: application/json
```

#### Request Body
```json
{
  "url": "https://www.instagram.com/reel/C3xL92wSxyz/"
}
```

#### Response Example (`200 OK`)
```json
{
  "success": true,
  "shortcode": "C3xL92wSxyz",
  "items": [
    {
      "id": "C3xL92wSxyz",
      "type": "video",
      "downloadUrl": "https://scontent.cdninstagram.com/v/...",
      "thumbnailUrl": "https://scontent.cdninstagram.com/v/...",
      "title": "Inspiring landscape reel",
      "author": "creator_handle",
      "width": 1080,
      "height": 1920
    }
  ]
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is through the [Vercel Platform](https://vercel.com/new):

1. Push your repository to GitHub under your profile (e.g. `fastdlio/instagram-downloader`).
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy with global edge acceleration.

### Deploy to Cloudflare Workers / Pages

This repository is compatible with `@opennextjs/cloudflare` for serverless deployment on Cloudflare edge runtime.

---

## ⚖️ Legal & E-E-A-T Disclaimer

- **Trademark Notice**: FastDL is an independent open-source project and is **not affiliated, sponsored, authorized, or certified by Instagram™ or Meta Platforms, Inc.**
- **Terms of Use**: This software is intended solely for educational, backup, and personal use with publicly available media. Users must ensure they own the media or have obtained explicit permission from the original copyright holder before downloading or redistributing any content.
- **Privacy Assurance**: This project does not harvest, store, or log user session credentials or personal identifiers.

For official terms and policies, please review the [FastDL Terms of Service](https://fastdl.io/).

---

## 🌐 Official FastDL Network & Social Profiles

Connect with the official FastDL ecosystem:

- 🌍 **Canonical Website**: [https://fastdl.io/](https://fastdl.io/)
- 🐦 **X (Twitter)**: [@fastdlio](https://x.com/fastdlio)
- 📌 **Pinterest**: [https://www.pinterest.com/fastdlio/](https://www.pinterest.com/fastdlio/)
- 💻 **GitHub**: [https://github.com/fastdlio](https://github.com/fastdlio)
- 📬 **Contact Email**: [contact@fastdl.io](mailto:contact@fastdl.io)

---

## 📄 License

This project is open-source and licensed under the **[MIT License](LICENSE)**.
