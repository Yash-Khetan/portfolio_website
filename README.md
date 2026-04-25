# Yash Khetan - Personal Portfolio

A modern, interactive personal portfolio website showcasing my projects, skills, and experience as a full-stack developer. Designed with a clean aesthetic and engaging animations to provide an excellent user experience.

## ✨ Features

- **Modern & Responsive UI**: Fully responsive design built with [Tailwind CSS](https://tailwindcss.com/).
- **Smooth Animations**: High-quality page transitions and micro-interactions using [Framer Motion](https://www.framer.com/motion/).
- **Interactive 3D Elements**: Features an animated 3D avatar powered by [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) and Drei.
- **Dynamic Content**: Easy to update projects, skills, and contact information.
- **Dark/Light Mode**: Seamless theming support for user preference.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lottie React](https://lottiereact.com/)
- **3D Rendering**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Yash-Khetan/portfolio_website.git
cd portfolio_website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root of your project. Vite requires environment variables to be prefixed with `VITE_` to expose them to the client-side code.

Add your links and configuration:
```env
# Contact & Socials
VITE_GITHUB_URL=https://github.com/YourUsername
VITE_LINKEDIN_URL=https://linkedin.com/in/YourUsername
VITE_GMAIL=your.email@gmail.com

# Project Live URLs
VITE_UPAY_URL=https://your-upay-link.vercel.app/
VITE_DOCUMIND_URL=https://your-documind-link.vercel.app/

# Project GitHub Repository URLs
VITE_UPAY_GITHUB=https://github.com/YourUsername/Upay
VITE_DOCUMIND_GITHUB=https://github.com/YourUsername/DocuMind
VITE_CODE_DUELS_GITHUB=https://github.com/YourUsername/code-duels
VITE_DEVINSPECT_GITHUB=https://github.com/YourUsername/Dev-Inspect-
```

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 📦 Build for Production

To create an optimized production build:
```bash
npm run build
```
The compiled assets will be available in the `dist` folder, ready to be deployed.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
