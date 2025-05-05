import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0].id);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent backend projects that demonstrate my skills and expertise.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project tabs for larger screens */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="space-y-2 sticky top-24">
              {projectsData.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                    selectedProject === project.id 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-white dark:bg-slate-700 hover:bg-teal-100 dark:hover:bg-slate-600'
                  }`}
                >
                  <p className="font-medium">{project.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Project tabs for mobile */}
          <div className="lg:hidden flex overflow-x-auto pb-4 space-x-4">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedProject === project.id 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-white dark:bg-slate-700 hover:bg-teal-100 dark:hover:bg-slate-600'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Project details */}
          <div className="lg:w-3/4">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className={`bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden ${
                  selectedProject === project.id ? 'block' : 'hidden'
                }`}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-lg mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      GitHub Repo
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;