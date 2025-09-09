# Kamal Shrestha - Personal Website

A modern, clean, and responsive personal website built with Next.js 15, showcasing the professional journey of Kamal Shrestha, Senior Applied Research Engineer specializing in AI, NLP, and Large Language Models.

## 🌟 Features

### Core Features
- **Modern Design**: Clean, minimal, and professional aesthetic
- **Dark/Light Theme**: Toggle between light and dark modes with system preference detection
- **Font Selection**: Choose from 4 different font families (Inter, System, Serif, Mono)
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **SEO Optimized**: Comprehensive meta tags, sitemap, and robots.txt
- **Performance Optimized**: Next.js 15 with App Router, optimized fonts, and images

### Sections
- **Hero Section**: Introduction with key highlights and social links
- **About**: Detailed profile, education, skills, and achievements
- **Experience**: Professional journey with detailed role descriptions
- **Projects**: Research projects and academic work showcase
- **Publications**: Academic papers and research contributions
- **Contact**: Contact information and collaboration opportunities

### Technical Features
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Scroll to Top**: Floating button for easy navigation
- **Loading States**: Custom loading and 404 pages
- **Theme Persistence**: Remembers user preferences across sessions
- **Font Persistence**: Saves font selection in localStorage
- **Mobile Navigation**: Collapsible mobile menu

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables for theming
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Build Tool**: Turbo (Turborepo monorepo)
- **Package Manager**: npm

## 📁 Project Structure

```
website/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/
│       │   ├── components/
│       │   │   ├── sections/   # Page sections (Hero, About, etc.)
│       │   │   ├── providers/  # Context providers (Theme, Font)
│       │   │   ├── ui/         # Reusable UI components
│       │   │   └── Navigation.tsx
│       │   ├── globals.css     # Global styles and CSS variables
│       │   ├── layout.tsx      # Root layout with metadata
│       │   ├── page.tsx        # Homepage
│       │   ├── loading.tsx     # Loading component
│       │   ├── not-found.tsx   # 404 page
│       │   ├── sitemap.ts      # SEO sitemap
│       │   └── robots.ts       # SEO robots.txt
│       └── package.json
├── packages/
│   ├── tailwind-config/        # Shared Tailwind configuration
│   ├── typescript-config/      # Shared TypeScript configurations
│   ├── eslint-config/          # Shared ESLint rules
│   └── ui/                     # Shared UI components
└── turbo.json                  # Turborepo configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-types` - Run TypeScript type checking

## 🎨 Customization

### Theme Colors
Colors are defined using CSS variables in `apps/web/app/globals.css`. Modify the `:root` and `.dark` selectors to change the color scheme.

### Fonts
The website supports 4 font families:
- **Inter**: Default modern sans-serif
- **System**: System default fonts
- **Serif**: Traditional serif fonts
- **Mono**: Monospace fonts for code

### Content
Update the content in the respective section components:
- `components/sections/Hero.tsx` - Hero section
- `components/sections/About.tsx` - About section
- `components/sections/Experience.tsx` - Professional experience
- `components/sections/Projects.tsx` - Projects and research
- `components/sections/Publications.tsx` - Academic publications
- `components/sections/Contact.tsx` - Contact information

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested across different screen sizes.

## 🔍 SEO Features

- Comprehensive meta tags with Open Graph and Twitter Cards
- Structured data for better search engine understanding
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized images with proper alt tags

## 🚀 Deployment

The website is configured for deployment on Vercel with the included `vercel.json` configuration.

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the Next.js configuration
3. Deploy with the default settings

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 About Kamal Shrestha

Kamal Shrestha (कमल श्रेष्ठ) is a Senior Applied Research Engineer at BOSCH Global Software Technology, specializing in Artificial Intelligence, Natural Language Processing, and Large Language Models. He holds an M.Tech in Computer Engineering from IIT Hyderabad and is passionate about advancing AI research and applications.

**Motto**: "Discipline Equals Freedom"

### Connect
- **LinkedIn**: [shresthakamal](https://www.linkedin.com/in/shresthakamal)
- **GitHub**: [shresthakamal](https://github.com/shresthakamal)
- **Medium**: [@shresthakamal](https://medium.com/@shresthakamal)
- **Website**: [shresthakamal.com.np](https://shresthakamal.com.np)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.