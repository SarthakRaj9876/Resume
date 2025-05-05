import React from 'react';
import SkillBar from './SkillBar';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are my technical skills and expertise levels in various technologies and tools
            that I use for backend development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillsData.map((category) => (
            <div key={category.category} className="mb-8">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-slate-200 dark:border-slate-700">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Github', 'Eclipse', 'Postman', 'Vs code', 'Maven'].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;