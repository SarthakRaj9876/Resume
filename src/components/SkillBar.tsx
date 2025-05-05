import React, { useState, useEffect } from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate the skill bar on mount
    const timer = setTimeout(() => {
      setWidth(level);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-600 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;