import { memo } from "react";

const TimelineEntry = memo(function TimelineEntry({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="relative group">
      {/* Timeline card */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-soft-lg">
        {/* Date badge */}
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <p className="text-sm font-semibold text-primary">{date}</p>
        </div>

        {/* Image placeholder */}
        <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 overflow-hidden flex items-center justify-center backdrop-blur-sm">
          <div className="text-4xl">📸</div>
        </div>

        {/* Content */}
        <h4 className="font-serif text-2xl font-bold text-primary mb-3 text-balance">
          {title}
        </h4>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>

      {/* Timeline dot */}
      <div className="absolute -right-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
    </div>
  );
});

export default function Timeline() {
  const memories = [
    {
      date: "Septiembre 07, 2025",
      title: "Primer día juntos",
      description:
        "El día que en el que te pedí que fueras mi novia, el día que nos convertimos en novios, la primera vez que te arme un ramo de lirios. Estuve nervioso ese día pero también muy feliz, porque sabía que estaba dando un paso importante con la persona que amo. Ese día marcó el comienzo de nuestra hermosa historia juntos.",
    },
    {
      date: "Septiembre 07, 2025",
      title: "Primer día juntos",
      description:
        "Our first road trip together, filled with laughter, spontaneous stops, and the kind of conversations that make you realize you've found your person. Every mile felt like a memory being made.",
    },
    {
      date: "December 2026",
      title: "Winter Magic",
      description:
        "Holiday season with you was pure magic. The snow, the lights, your smile—everything felt like a scene from a romantic movie. I fell even deeper in love with you.",
    },
    {
      date: "March 2026",
      title: "Growing Together",
      description:
        "We've learned so much about each other, supporting each other's dreams and celebrating victories both big and small. Our love keeps growing stronger with every passing day.",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-24 px-6 bg-gradient-to-b from-accent/5 to-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Nuestra Historia
          </h3>
          <p className="text-foreground/60 text-lg">
            Los momentos que han definido nuestro amor, desde el primer
            encuentro hasta hoy. Cada recuerdo es una maravilla que guardo con
            mucho amor en mi corazoncito.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute -right-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent/20" />

          {/* Entries */}
          <div className="space-y-12">
            {memories.map((memory, index) => (
              <div key={index} className="relative">
                <TimelineEntry
                  date={memory.date}
                  title={memory.title}
                  description={memory.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
