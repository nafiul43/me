# 🚀 Personal Portfolio - Nafiul Islam Tony

[![Astro](https://img.shields.io/badge/Astro-5.15-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A high-performance, SEO-optimized portfolio showcasing 13+ years of engineering leadership and full-stack development expertise.

**Live Site:** [nafiulislam.site](https://nafiulislam.site)

---

## ✨ Features

### 🎨 **Design & UX**
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Dark Mode** - System-aware theme with manual toggle
- **Smooth Animations** - Starfield background with optimized CSS animations
- **Accessible** - WCAG 2.1 AA compliant with semantic HTML

### ⚡ **Performance**
- **Lighthouse Score: 95+** - Optimized for Core Web Vitals
- **Lazy Loading** - Images and non-critical CSS loaded on-demand
- **CDN Integration** - S3-backed asset delivery with optimal caching
- **Minified Assets** - Compressed CSS/JS for faster load times
- **Font Optimization** - Self-hosted Inter fonts with preloading

### 🔍 **SEO & Analytics**
- **Structured Data** - Schema.org markup for rich search results
- **Sitemap Generation** - Automatic XML sitemap
- **Meta Tags** - Comprehensive OG and Twitter card support
- **Error Tracking** - Sentry integration for monitoring

### 🛠️ **Developer Experience**
- **TypeScript** - Full type safety across the codebase
- **Component-Based** - Modular Astro components
- **Environment Variables** - Centralized configuration
- **Automated Deployment** - S3 deployment script with cache headers

---

## 🏗️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Astro 5.15](https://astro.build) |
| **Styling** | [TailwindCSS 4.1](https://tailwindcss.com) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |
| **Icons** | [Astro Icon](https://github.com/natemoo-re/astro-icon) + Iconify |
| **Fonts** | Self-hosted Inter, Material Icons |
| **Monitoring** | [Sentry](https://sentry.io) |
| **Hosting** | AWS S3 + CloudFront |
| **CI/CD** | Custom deployment script |

---

## 📁 Project Structure

```
me/
├── public/                 # Static assets
│   ├── fonts/             # Self-hosted fonts (Inter)
│   ├── styles/            # Lazy-loaded CSS (starfield, 404)
│   └── _headers           # HTTP cache headers
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── modules/       # Page sections (Home, Projects, etc.)
│   │   └── sidebar/       # Navigation components
│   ├── data/              # Content data (projects, jobs, skills)
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   ├── styles/            # Global CSS & fonts
│   └── utils/             # Helper functions
├── deploy.sh              # S3 deployment script
├── astro.config.mjs       # Astro configuration
├── tailwind.config.ts     # TailwindCSS configuration
└── .env.example           # Environment variables template
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nafiul43/me.git
   cd me
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your values:
   ```bash
   # CDN Configuration
   PUBLIC_CDN_BASE_URL=https://your-cdn-url.com
   
   # Sentry (optional)
   SENTRY_AUTH_TOKEN=your_token_here
   
   # AWS (for deployment)
   AWS_ACCESS_KEY_ID=your_key
   AWS_SECRET_ACCESS_KEY=your_secret
   AWS_DEFAULT_REGION=your-region
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```
   
   Open [http://localhost:4321](http://localhost:4321)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm deploy` | Deploy to S3 with optimized cache headers |
| `pnpm astro check` | Run TypeScript type checking |

---

## 🚢 Deployment

### AWS S3 Deployment

The project includes an automated deployment script with optimized caching:

```bash
pnpm run deploy //Not pnpm deploy - its reserved by pnpm
```

**Cache Strategy:**
- **Assets** (JS/CSS/Fonts): 1 year immutable
- **HTML**: 1 hour with revalidation
- **Root files**: 1 day

### Manual Deployment

1. Build the project:
   ```bash
   pnpm build
   ```

2. Deploy `dist/` folder to your hosting provider

---

## 🎨 Customization

### Update Content

Edit data files in `src/data/`:
- `about.ts` - Personal information
- `projects.ts` - Project portfolio
- `jobs.ts` - Work experience
- `skills.ts` - Technical skills
- `schools.ts` - Education

### Change CDN

Update `PUBLIC_CDN_BASE_URL` in `.env` to switch asset hosting:
```bash
PUBLIC_CDN_BASE_URL=https://new-cdn-url.com
```

### Modify Theme

Colors and styles are in:
- `src/styles/global.css` - Global styles
- `tailwind.config.ts` - TailwindCSS theme

---

## 🔧 Performance Optimizations

### Implemented

✅ **Lazy-loaded starfield CSS** (-20KB initial bundle)  
✅ **Deferred Sentry initialization** (-365ms critical path)  
✅ **Optimized font loading** (preload critical fonts only)  
✅ **Image optimization** (lazy loading, async decoding)  
✅ **Minified inline scripts** (theme, lazy-loaders)  
✅ **CDN preconnect** (DNS prefetch for S3)  

### Results

- **Lighthouse Performance:** 95+
- **First Contentful Paint:** < 1.0s
- **Largest Contentful Paint:** < 1.5s
- **Total Blocking Time:** < 100ms

---

## 📊 Monitoring

Error tracking and performance monitoring via [Sentry](https://sentry.io):

- **Client-side errors** captured automatically
- **Performance metrics** tracked
- **Source maps** disabled in production

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Nafiul Islam Tony**  
Frontend Lead & Full Stack Engineer

- 🌐 Website: [nafiulislam.site](https://nafiulislam.site)
- 💼 LinkedIn: [linkedin.com/in/nafiul](https://linkedin.com/in/nafiul)
- 🐙 GitHub: [@nafiul43](https://github.com/nafiul43)
- 📧 Email: nafiul.islam.tony@gmail.com

---

## 🙏 Acknowledgments

- **Astro Team** - For the amazing framework
- **Tailwind Labs** - For TailwindCSS
- **Iconify** - For the icon system
- **Sentry** - For error tracking

