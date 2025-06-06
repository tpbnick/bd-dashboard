# BD Dashboard

[![Deploy to GitHub Pages](https://github.com/tpbnick/bd-dashboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/tpbnick/bd-dashboard/actions/workflows/deploy.yml)

A modern, responsive dashboard application built with React, TypeScript, Tailwind CSS, and DaisyUI.

## 🚀 Live Demo

**[View Live Dashboard →](https://tpbnick.github.io/bd-dashboard/)**

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Heroicons
- **Deployment**: GitHub Pages

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/tpbnick/bd-dashboard.git
cd bd-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Top navigation bar
│   └── Sidebar.tsx     # Collapsible sidebar navigation
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard page
│   └── Settings.tsx    # Settings and theme management
├── types/              # TypeScript type definitions
│   └── global.d.ts     # Global type declarations
└── assets/             # Static assets (images, etc.)
```

## 🎨 Theme System

The application includes 30+ themes powered by DaisyUI:

- Light/Dark themes
- Colorful themes (cupcake, bumblebee, emerald, etc.)
- Professional themes (corporate, business, etc.)
- Creative themes (synthwave, cyberpunk, dracula, etc.)

Theme preferences are automatically saved to localStorage and persist across sessions.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions on every push to the `main` branch.

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
