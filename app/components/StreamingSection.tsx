import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaDeezer,
  FaSoundcloud,
  FaAmazon,
} from "react-icons/fa";
import { SiTidal, SiBandcamp } from "react-icons/si";

export function StreamingSection() {
  const streamingServices = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/6eAauxy9U0rYzwHXeC6EBh",
      icon: FaSpotify,
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/us/artist/kosmogenit/1730072177",
      icon: FaApple,
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/channel/UCPkKi4e8jKKGxx_k5gX7FMw",
      icon: FaYoutube,
    },
    {
      name: "Deezer",
      url: "https://www.deezer.com/sr/artist/253857302",
      icon: FaDeezer,
    },
    { name: "Tidal", url: "https://tidal.com/artist/45658902", icon: SiTidal },
    {
      name: "Amazon Music",
      url: "https://music.amazon.com/artists/B0CV9W3HNR/kosmogenit",
      icon: FaAmazon,
    },
    // { name: 'Bandcamp', url: 'https://kosmogenit.bandcamp.com', icon: SiBandcamp },
    // { name: 'SoundCloud', url: 'https://soundcloud.com/kosmogenit', icon: FaSoundcloud },
  ];

  return (
    <section
      id="streaming"
      className="py-24 sm:py-32 lg:py-40 bg-white relative"
    >
      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-black/10" />

      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
            STREAMING
          </h2>
          <p className="text-xl sm:text-2xl text-black/50 max-w-2xl">
            Slušaj KOSMOGENIT na svojoj omiljenoj platformi
            {/* Listen on your favorite platform */}
          </p>
        </div>

        {/* Streaming Links - Minimalist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {streamingServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 lg:p-10 border border-black/10 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <IconComponent className="text-4xl lg:text-5xl text-black group-hover:text-black transition-colors duration-300" />
                    <span className="text-xl lg:text-2xl font-bold tracking-wide text-black group-hover:text-black">
                      {service.name}
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-black/30 group-hover:text-black transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-black/5 leading-none">
            02
          </span>
        </div>
      </div>
    </section>
  );
}
