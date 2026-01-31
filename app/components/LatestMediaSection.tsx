import { Youtube, ExternalLink } from "lucide-react";

export function LatestMediaSection() {
  return (
    <section id="media" className="py-24 sm:py-32 lg:py-40 bg-white relative">
      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-black/10" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
            VIDEO
            {/* VIDEOS */}
          </h2>
          <p className="text-xl sm:text-2xl text-black/50 max-w-2xl">
            Pogledaj najnoviji video
            {/* Watch the latest content */}
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl">
          {/* YouTube Video Embed Placeholder */}
          <div className="relative aspect-video bg-black mb-12 group overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFD700] to-[#FFD700]/60">
              <div className="text-center space-y-6 p-8">
                <Youtube
                  size={80}
                  className="text-black mx-auto mb-4 opacity-50"
                />
                <p className="text-black text-2xl lg:text-3xl font-bold">
                  Najnoviji video
                  {/* Latest Music Video */}
                </p>
                <p className="text-black/70 text-base lg:text-lg">
                  Embed your YouTube video ID here
                </p>
              </div>
            </div>
            {/* Uncomment and add your YouTube video ID below */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/6is4axtAZgI?si=YNPMnXGBKwyJ8AtA"
              title="KOSMOGENIT Latest Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowFullScreen"
            />
          </div>

          {/* Channel Link */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a
              href="https://www.youtube.com/@kosmogenit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFD700] text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
            >
              <Youtube size={24} />
              <span>YouTube Kanal</span>
              {/* <span>YouTube Channel</span> */}
            </a>
            <a
              href="https://youtube.com/playlist?list=PLSGYUyXL3dTl-sh7Co7VTpnWXtNYytwQ3&si=Cnx5ouK3b72_zolo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
            >
              {/* <span>More Videos</span> */}
              <span>Još Videa</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-black/5 leading-none">
            04
          </span>
        </div>
      </div>
    </section>
  );
}
