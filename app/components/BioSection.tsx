import { Download } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useState } from "react";
import { MediaKitModal } from "@/components/MediaKitModal";

export function BioSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="bio"
      className="py-24 sm:py-32 lg:py-40 bg-black text-white relative overflow-hidden"
    >
      {/* Large Circle Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full bg-[#FFD700]/20" />

      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-white/20" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
            {/* Translate - ABOUT */}
            BIOGRAFIJA
          </h2>
          <p className="text-xl sm:text-2xl text-white/50 max-w-2xl">
            {/* Translate - Meet the artist */}
            Upoznaj izvođača
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl leading-relaxed text-white/90">
                {/* <span className="text-[#FFD700] font-bold">KOSMOGENIT</span> Translate - is a pioneering music artist pushing the boundaries of contemporary sound. */}
                <span className="text-[#FFD700] font-bold">KOSMOGENIT</span> je
                inovativni muzički umetnik koji pomera granice savremenog pop
                zvuka.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-white/70">
                {/* Translate - With a unique blend of genres and a distinctive artistic vision, KOSMOGENIT has captivated audiences worldwide, creating music that resonates across cultures and generations. */}
                Jedinstveni spoj žanrova i prepoznatljivi umetnički izraz, kroz
                koji KOSMOGENIT oslikava prostore ljudske duše, spajajući
                nostalgiju, afro, latino i orijentalne ritmove, akustiku i
                savremenu produkciju u autentični muzički opus pod nazivom
                "SNOVEST".
              </p>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-6 py-8">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">500K+</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Monthly Listeners</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">10+</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Countries</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">3</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Albums</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">25+</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Singles</p>
              </div>
            </div> */}

            {/* Download Media Kit */}
            <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFD700] text-black uppercase tracking-widest hover:bg-white transition-all duration-300 font-bold">
              <Download size={20} />
              <span>Media Kit</span>
            </button>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584679109458-00d11923b5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMG11c2ljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY5NzkzODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="KOSMOGENIT"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-white/5 leading-none">
            05
          </span>
        </div>
      </div>

       {/* Media Kit Modal */}
       <MediaKitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
