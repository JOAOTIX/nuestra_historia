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
      {/* 
        Cambios aquí: 
        1. flex-col para móviles, md:flex-row para PC.
        2. gap-4 para separar arriba y abajo en móviles. 
      */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        <button 
          onClick={toggleTheme}
          // Cambié text-2xl a texto un poco más pequeño en móviles (text-xl) para que encaje mejor
          className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity cursor-pointer text-center"
          title="Alternar tema"
        >
          {isDarkMode ? 'Cambiar a claro ✨' : 'Cambiar a oscuro 🌙'}
        </button>
        
        {/* 
          Cambios aquí: 
          1. flex-wrap por si los enlaces no caben en pantallas muy pequeñas.
          2. gap-4 en móviles, md:gap-8 en PC. 
          3. justify-center para que queden centrados.
        */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
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
            Nuestras Fotos
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