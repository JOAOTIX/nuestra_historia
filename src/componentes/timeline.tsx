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
      date: "Diciembre 09, 2025",
      title: "El ramo de Lirios",
      description:
        "El día que te arme un ramo de lirios, me encanto poder ver esa sonrisa tan preciosa que tienes mi corazoncito fue un excelente día, te lo arme con mucho amor y me sneti tan bien de poder darte algo que te gustara y que te hiciera inmensamente feliz, fue lo mejor poder estar a tu lado ese día y poder compartir ese momento tan especial contigo, espero poder seguir compartiendo momentos tan hermosos como ese a tu lado mi vida. Te amo mucho mi corazoncito.",
    },
    {
      date: "Marzo 17, 2026",
      title: "Cumpleaños de tu noviecito",
      description:
        "El día en el cual celebramos mi cumpleaños y pude presentarte a mi familia materna, fue muy importante para mí que pudieras conocer a las personas que han sido importantes en mi vida, y me alegra mucho que hayas podido compartir ese momento tan especial conmigo. Fue un día lleno de alegría, risas y amor, y estoy muy agradecido de haberlo vivido a tu lado.",
    },
    {
      date: "Junio 17, 2026",
      title: "Tu cumpleaños mi amor",
      description:
        "Tu cumpleaños mi bb, el día en el que te di una sorpresa y te pude dar cartitas hechas a puño y mi letra fea jsjsjs, me encanto pasar poder estar presente esta vez en tu cumpleaños en el cual pudimos celebrar juntos y seguir compartiendo momentos especiales a tu lado mi corazoncito, espero que podamos seguir celebrando muchos cumpleaños más juntos y creando recuerdos inolvidables.",
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
