import { useState } from "react";

// 1. Actualizamos el componente para recibir 'image' y 'title'
const PhotoCard = ({ image, title }: { image: string; title: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        {/* 2. Reemplazamos el emoji 📷 por tu imagen */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent flex items-end justify-center p-6 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        {/* 3. Mostramos el título personalizado en lugar de "Memory #X" */}
        <p className="text-white font-serif text-lg font-semibold text-balance text-center drop-shadow-md">
          {title}
        </p>
      </div>

      {/* Soft glow */}
      <div className="absolute inset-0 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
      />
    </div>
  );
};

export default function Gallery() {
  // 4. Creamos tu lista de fotos (puedes agregar más o quitar si lo deseas)
  const photos = [
    {
      image: "https://res.cloudinary.com/dcezpnhfc/image/upload/v1787969770/IMG_20260322_182409_ii8ffu.jpg",
      title: "Primer día en la playa juntos",
    },
    {
      image: "https://res.cloudinary.com/dcezpnhfc/image/upload/v1787969770/IMG_20260614_162212_120_mjn6fv.webp",
      title: "Voli voli voli voli",
    },
    {
      image: "https://res.cloudinary.com/dcezpnhfc/image/upload/v1787969769/IMG_20251005_153549_fduu7i.jpg",
      title: "Paseo en el parque de las leyendas",
    },
    {
      image: "https://res.cloudinary.com/dcezpnhfc/image/upload/v1787969771/IMG_20251204_214236_ezowxc.jpg",
      title: "Celebrando nuestro rico KFC juntos",
    },
    {
      image: "https://res.cloudinary.com/dcezpnhfc/image/upload/v1787969771/IMG_20260718_203701_betkd1.jpg",
      title: "Nuestro primer paseo en Real Plaza juntos",
    },
    {
      image: "https://res.cloudinary.com/dcezpnhfc/image/upload/v1787969770/IMG_20260617_222029_ots6ce.jpg",
      title: "Momentos inolvidables en junto a ti",
    },
  ];

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
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
            Cada foto es un recuerdo de todos los momentos increíbles que hemos compartido juntos. Desde nuestras primeras aventuras hasta las risas más recientes, estas imágenes son un tesoro que guardo con mucho amor en mi corazoncito💜.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 5. Usamos map para recorrer tu lista de fotos */}
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-105 origin-center"
            >
              <PhotoCard image={photo.image} title={photo.title} />
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