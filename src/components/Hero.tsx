import React from 'react';
import { ArrowDownCircle, Github as GitHub, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Updated Google Drive direct link format
  // Make sure the image is shared with "Anyone with the link can view"
  const fileId = "1lvHeGB_ffSVjeDhK5yONEFW7ZUginXG_";
  const profileImageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="text-sm font-medium text-teal-500 mb-3">Hello, I'm</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sarthak Raj
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-400 font-medium mb-6">
              Java & Spring Boot Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I'm a passionate backend developer specializing in building robust and 
              scalable applications using Java and Spring Boot. Currently a student,
              seeking opportunities to apply my skills.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/SarthakRaj9876" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:text-teal-500 transition-colors duration-300"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:text-teal-500 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 bg-teal-500 text-white rounded font-medium hover:bg-teal-600 transition-colors duration-300 flex items-center justify-center"
              >
                View Projects <ArrowDownCircle size={18} className="ml-2" />
              </button>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-teal-500 text-teal-500 rounded font-medium hover:bg-teal-500 hover:text-white transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500">
              <img 
                src={profileImageUrl}
                alt="Sarthak Raj" 
                className="w-full h-full object-contain object-center scale-110" 
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute bottom-4 left-0 right-0 text-center bg-teal-500 text-white py-1 px-2 text-sm font-medium">
                Student Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero