import './App.css';
import { useState, useEffect } from 'react';
import Navigation from './componentes/navigation';
import Hero from './componentes/hero';
import Counter from './componentes/counter';
import Timeline from './componentes/timeline';
import Gallery from './componentes/gallery';
import LoveLetter from './componentes/loveletter';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  const loadData = async () => {
    setIsLoaded(true);
  };
  loadData();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero isLoaded={isLoaded} />
      <Counter />
      <Timeline />
      <Gallery />
      <LoveLetter />
    </main>
  );
}
