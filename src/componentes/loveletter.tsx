import { memo } from "react";

const LoveLetter = memo(function LoveLetter() {
  return (
    <section
      id="letter"
      className="relative py-24 px-6 bg-gradient-to-b from-accent/5 to-background"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Te Amo mi señoritam bomnitam 💜
          </h3>
        </div>

        {/* Letter card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300" />

          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-background to-accent/5 border border-border/30 backdrop-blur-sm shadow-soft-xl">
            <div className="space-y-8">
              {/* Opening */}
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  <span className="font-serif text-3xl text-primary">M</span>i
                  vida,
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  ¿Como estas?, espero te encuentres bien y que esta página te saque una sonrisa y te recuerde lo mucho que te amo.
                  Esta es una manera de decirte lo mucho que significas para mí, aunque las palabras nunca serán suficientes para expresar todo lo que siento por ti. 
                </p>
              </div>

              {/* Body paragraphs */}
              <p className="text-foreground/70 leading-relaxed">
                Eres la mujer de mi vida, mi compañera de aventuras, mi confidente y mi mejor amiga. Desde el momento en el que comenzaste a susurrar ese 20 de Junio del 2025 y te ví por primera vez, super que debía de conseguir tu número y conocerte más. Desde ese día super que quería pasar el resto de mi vida contigo, y cada día que pasa me doy cuenta de lo afortunado que soy de tenerte en mi vida.
              </p>

              <p className="text-foreground/70 leading-relaxed">
                Me fascina la idea de despertarme cada mañana y saber que eres mi novia, mi señoritam bomnitam, una mujer tan increíble que me has hecho sentir amado, valorado y feliz. Eres mi inspiración diaria, mi alegría constante y mi paz en medio del caos. No puedo imaginar mi vida sin ti, y no quiero hacerlo.
              </p>

              <p className="text-foreground/70 leading-relaxed">
                Te amo con todo mi alma y mi ser, quiero que sepas que siempre estaré aquí para ti, apoyándote, amándote y cuidándote en cada paso del camino. Espero poder pasar muchos años más a tu lado, construyendo una vida llena de amor, risas y felicidad juntos. Me encanta que podamos crear recuerdos y momentos juntos, cada día a tu lado me hace más feliz y me enamoro más de ti, eres lo mejor de lo mejor 💜
              </p>

              {/* Closing */}
              <div className="space-y-3 pt-8 border-t border-border/20">
                <p className="font-serif text-2xl text-primary">
                  Siempre tuyo 💜.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-3">
          <div className="w-1 h-1 rounded-full bg-primary/30" />
          <div className="w-1 h-1 rounded-full bg-primary/60" />
          <div className="w-1 h-1 rounded-full bg-primary/30" />
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-foreground/50 font-light italic">
            Esta página es un pequeño recordatorio de lo mucho que te amo y lo agradecido que estoy de tenerte en mi vida, la haces más bonita cada día.
          </p>
        </div>
      </div>
    </section>
  );
});

export default LoveLetter;
