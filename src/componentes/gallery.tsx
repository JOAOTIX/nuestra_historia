import { useState } from "react";

const PhotoPlaceholder = ({ index }: { index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        <div className="text-6xl">📷</div>
      </div>

      {/* Overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent flex items-end justify-center p-6 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-white font-serif text-lg font-semibold text-balance">
          Memory #{index + 1}
        </p>
      </div>

      {/* Soft glow */}
      <div className="absolute inset-0 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-300" />
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      />
    </div>
  );
};

export default function Gallery() {
  const photoCount = 6;

  return (
    <section
      id="gallery"
      className="relative py-24 px-6 bg-gradient-to-b from-background to-accent/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Nuestras Fotos
          </h3>
          <p className="text-foreground/60 text-lg">
            Cada foto es un recuerdo de todos los momentos increíbles que hemos compartido juntos. Desde nuestras primeras aventuras hasta las risas más recientes, estas imágenes son un tesoro que guardo con mucho amor en mi corazoncito💜.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: photoCount }).map((_, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-105 origin-center"
            >
              <PhotoPlaceholder index={index} />
            </div>
          ))}
        </div>

        {/* Gallery footer message */}
        <div className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/20 backdrop-blur-sm">
          <p className="text-foreground/70 font-serif text-xl leading-relaxed max-w-2xl mx-auto">
            Cada una de estas fotos es un capítulo de nuestra historia, un recuerdo que atesoro con todo mi corazón. Gracias por ser parte de cada momento, por hacer que cada día a tu lado sea tan especial. Te amo más de lo que las palabras pueden expresar.
          </p>
        </div>
      </div>
    </section>
  );
}
