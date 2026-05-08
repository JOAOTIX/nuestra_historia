export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-background via-background to-accent/10 pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`space-y-8 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Image Placeholder */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-soft-xl bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-2">
                  <div className="text-6xl">📸</div>
                  <p className="text-foreground/50 font-serif text-lg">Your Photo Here</p>
                </div>
              </div>
              {/* Soft glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Main Greeting */}
          <div className="space-y-4">
            <h2 className="font-serif text-6xl md:text-7xl font-bold text-primary tracking-tight text-balance">
              Para Anahi
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-foreground/60 font-light text-balance leading-relaxed">
              Feliz primer año mi vida🫂
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed font-light">
            Te amo más de lo que las palabras pueden expresar. Este es solo el comienzo de nuestra hermosa historia juntos.
          </p>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <svg 
              className="w-6 h-6 mx-auto text-primary/40" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
