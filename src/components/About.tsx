import React from 'react';
import { Server, Database, Code, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a dedicated backend developer currently pursuing my degree in Computer Science. 
              My passion lies in building robust, scalable, and maintainable backend systems using Java 
              and Spring Boot.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              With a strong foundation in software engineering principles and a keen interest in 
              distributed systems, I strive to create efficient solutions that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              As a student developer, I'm constantly learning and improving my skills, staying 
              up-to-date with the latest technologies and best practices in the field.
            </p>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold mb-6">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Server className="text-teal-500 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                <p>Building robust APIs and services using Java & Spring Boot</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Database className="text-teal-500 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-2">Database Design</h4>
                <p>Creating efficient database schemas and optimizing queries</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Code className="text-teal-500 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-2">RESTful APIs</h4>
                <p>Designing and implementing RESTful services</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <GraduationCap className="text-teal-500 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                <p>Always expanding my knowledge and skills as a student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;