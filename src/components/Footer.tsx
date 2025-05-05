import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Public-facing email specifically for portfolio/GitHub projects
  // This email can be openly shared as it's specifically for public contact
  const publicEmail = 'contact.sarthakraj@gmail.com'; // Replace with your actual public-facing email
  
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-teal-500 mb-2">S.Dev</h3>
            <p className="text-slate-400">Java & Spring Boot Developer</p>
          </div>
          
          <ul className="flex space-x-6 mb-6 md:mb-0">
            <li>
              <a 
                href="https://github.com/SarthakRaj9876" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a 
                href={`mailto:${publicEmail}`}
                className="text-slate-400 hover:text-teal-500 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </li>
          </ul>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Sarthak Raj. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-slate-400 hover:text-teal-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-teal-500 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-slate-500">
        
      </div>
    </footer>
  );
};

export default Footer