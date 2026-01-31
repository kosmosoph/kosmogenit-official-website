import { Instagram, Music, Facebook } from "lucide-react";

export function SocialMediaSection() {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@kosmogenit",
      url: "https://instagram.com/kosmogenit",
      icon: Instagram,
      followers: "250K",
    },
    {
      name: "TikTok",
      handle: "@kosmogenit",
      url: "https://tiktok.com/@kosmogenit",
      icon: Music,
      followers: "500K",
    },
    {
      name: "Facebook",
      handle: "kosmogenit",
      url: "https://facebook.com/kosmogenit",
      icon: Facebook,
      followers: "150K",
    },
  ];

  return (
    <section
      id="social"
      className="py-24 sm:py-32 lg:py-40 bg-[#FFD700] relative overflow-hidden"
    >
      {/* Large Circle Background */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-white/30" />

      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-black/20" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none text-black">
            {/* CONNECT */}
            <span>POVEŽI SE</span>
          </h2>
          <p className="text-xl sm:text-2xl text-black/70 max-w-2xl">
            {/* Follow KOSMOGENIT on social media */}
            Prati KOSMOGENIT na društvenim mrežama
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 lg:p-10 hover:bg-black transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col space-y-6">
                  {/* Icon */}
                  <IconComponent
                    size={48}
                    className="text-black group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />

                  {/* Name */}
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-sm text-black/50 group-hover:text-white/70 transition-colors duration-300 uppercase tracking-wider">
                      {social.handle}
                    </p>
                  </div>

                  {/* Followers */}
                  <div className="pt-4 border-t border-black/10 group-hover:border-white/20">
                    <p className="text-3xl font-bold text-black group-hover:text-white transition-colors duration-300">
                      {social.followers}
                    </p>
                    <p className="text-xs text-black/50 group-hover:text-white/70 transition-colors duration-300 uppercase tracking-wider mt-1">
                      Followers
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-black/10 leading-none">
            03
          </span>
        </div>
      </div>
    </section>
  );
}
