import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 border-2 border-slate-200 dark:border-slate-700"
      aria-label="Toggle dark mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;