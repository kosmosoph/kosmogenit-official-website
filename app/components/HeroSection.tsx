import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function HeroSection() {
  const scrollToStreaming = () => {
    const element = document.getElementById("streaming");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start pt-24 overflow-hidden bg-white"
    >
      {/* Large Golden Circle - Background Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full bg-[#FFD700] z-0" />

      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-32 bottom-32 w-1 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                KOSMO
                <br />
                GENIT
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl tracking-wide max-w-lg">
                Dobrodošli na zvaničnu web prezentaciju umetnika pod imenom
                Kosmogenit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToStreaming}
                className="px-10 py-5 bg-[#FFD700] text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
              >
                {/* Listen Now */}
                Slušaj Sada
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("tour")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-5 border-2 border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
              >
                {/* Tour Dates */}
                Koncerti
              </button>
            </div>

            {/* Small descriptive text */}
            <p className="text-sm text-black/50 max-w-md leading-relaxed">
              {/* Experience the evolution of sound with KOSMOGENIT's unique blend of contemporary music and artistic vision. */}
              Autentična pop muzika nastala kroz spoj poezije, akustike i
              elektronike.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:pl-12">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <ImageWithFallback
                src="./kosmogenit-hero.jpg"
                // src="https://images.unsplash.com/photo-1669459881627-06c2a4948e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMGNvbmNlcnQlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2OTc5Mzg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="KOSMOGENIT"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Large Number Overlay */}
        <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 text-[120px] lg:text-[200px] font-bold text-black/5 leading-none pointer-events-none">
          01
        </div>
      </div>
    </section>
  );
}
