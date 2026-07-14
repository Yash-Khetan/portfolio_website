import { useState, useEffect, useCallback } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`bg-white dark:bg-[#09090b] min-h-screen overflow-x-hidden selection:bg-accent selection:text-white transition-colors duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <Achievements />
          <Education />
          <CurrentlyBuilding />
          <Testimonials />
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
