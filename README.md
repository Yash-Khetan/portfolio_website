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
Copy the example env file and fill in your own values:
```bash
cp .env.example .env
```
Open `.env` and add your personal URLs and credentials. See `.env.example` for all required variables.

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
