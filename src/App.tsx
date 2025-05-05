import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Initialize theme based on localStorage or system preference
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark') {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'light') {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    initializeTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          setTheme('dark');
          document.documentElement.classList.add('dark');
        } else {
          setTheme('light');
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App