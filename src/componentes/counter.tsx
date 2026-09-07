import { useState, useEffect } from 'react';

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="group">
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/20 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-soft-lg">
      <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
        {String(value).padStart(2, '0')}
      </p>
      <p className="text-sm text-foreground/50 uppercase tracking-widest font-medium">
        {label}
      </p>
    </div>
  </div>
);

export default function Counter() {
  const [time, setTime] = useState<TimeUnits>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

useEffect(() => {
    const startDate = new Date(2025, 8, 7).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Nuestro Tiempo Juntos
          </h3>
          <p className="text-foreground/60 text-lg">Eres lo mejor de lo mejor 💜</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <TimeUnit value={time.days} label="Días" />
          <TimeUnit value={time.hours} label="Horas" />
          <TimeUnit value={time.minutes} label="Minutos" />
          <TimeUnit value={time.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
}