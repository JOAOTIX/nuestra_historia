import { useState, useEffect } from 'react';
import '../App.css';

export default function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-primary/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <button 
          onClick={toggleTheme}
          className="font-serif text-2xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
          title="Alternar tema"
        >
          {isDarkMode ? 'Cambiar a claro ✨' : 'Cambiar a oscuro 🌙'}
        </button>
        
        <div className="flex gap-8 items-center">
          <a 
            href="#historia" 
            onClick={(e) => handleScroll(e, 'timeline')}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
          >
            Nuestra Historia
          </a>
          <a 
            href="#fotos" 
            onClick={(e) => handleScroll(e, 'gallery')}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
          >
            Tus Fotos
          </a>
          <a 
            href="#amor" 
            onClick={(e) => handleScroll(e, 'letter')}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
          >
            Cartita
          </a>
        </div>
      </div>
    </nav>
  );
}