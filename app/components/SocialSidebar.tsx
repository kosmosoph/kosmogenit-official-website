import { Instagram, Music, Facebook } from "lucide-react";

export function SocialSidebar() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/kosmogenit",
      icon: Instagram,
    },
    { name: "TikTok", url: "https://tiktok.com/@kosmogenit", icon: Music },
    {
      name: "Facebook",
      url: "https://facebook.com/kosmogenit",
      icon: Facebook,
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black bg-white hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300 transform hover:scale-110 group"
            aria-label={social.name}
          >
            <IconComponent
              size={20}
              className="text-black group-hover:text-black transition-colors duration-300"
              strokeWidth={2}
            />
          </a>
        );
      })}
    </div>
  );
}
