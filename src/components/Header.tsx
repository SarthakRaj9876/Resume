import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const handleResumeClick = () => {
    // Replace with your actual resume URL
    window.open('/Sarthak_Raj_Resume.pdf', '_blank');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-slate-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-500">
          <span onClick={() => scrollToSection('hero')} className="cursor-pointer">
            S.Dev
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-teal-500 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={handleResumeClick}
                className="px-4 py-2 border-2 border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                Resume
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800 dark:text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg font-medium hover:text-teal-500 transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={handleResumeClick}
              className="inline-block px-4 py-2 border-2 border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white transition-colors duration-300 text-lg"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header