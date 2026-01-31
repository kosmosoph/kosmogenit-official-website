import { Mail, Instagram, Music, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

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

  // Translate - Music, Videos, Tour, Merch, About, News
  // const quickLinks = [
  //   { name: 'Music', href: '#streaming' },
  //   { name: 'Videos', href: '#media' },
  //   { name: 'Tour', href: '#tour' },
  //   { name: 'Merch', href: '#merch' },
  //   { name: 'About', href: '#bio' },
  //   { name: 'News', href: '#news' },
  // ];

  const quickLinks = [
    { name: "Muzika", href: "#streaming" },
    { name: "Video", href: "#media" },
    { name: "Koncerti", href: "#tour" },
    { name: "Prodavnica", href: "#merch" },
    { name: "Biografija", href: "#bio" },
    { name: "Vesti", href: "#news" },
  ];
  return (
    <footer className="bg-black text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter">
              KOSMOGENIT
            </h3>
            <p className="text-white/50 leading-relaxed text-sm lg:text-base">
              {/* Translate - Official website for music, tour dates, and exclusive content. */}
              Zvanična prezentacija: muzika, koncerti i ekskluzivni materijali.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            {/* Translate - Links */}
            <h4 className="text-lg font-bold tracking-wide uppercase">
              Linkovi
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/50 hover:text-[#FFD700] transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            {/* Translate - Contact */}
            <h4 className="text-lg font-bold tracking-wide uppercase">
              Kontakt
            </h4>
            <div className="space-y-4 text-white/50 text-sm">
              <a
                href="mailto:info@kosmogenit.com"
                className="flex items-center gap-3 hover:text-[#FFD700] transition-colors duration-300"
              >
                <Mail size={18} />
                <span>info@kosmogenit.com</span>
              </a>
              <p className="leading-relaxed">
                Booking:
                <br />
                <a
                  href="mailto:booking@kosmogenit.com"
                  className="hover:text-[#FFD700] transition-colors duration-300"
                >
                  booking@kosmogenit.com
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            {/* Translate - Follow */}
            <h4 className="text-lg font-bold tracking-wide uppercase">Prati</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300 transform hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <IconComponent
                      size={20}
                      className="text-white group-hover:text-black transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {currentYear} KOSMOGENIT. All rights reserved.</p>
            <div className="flex gap-8">
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-300 uppercase tracking-wider text-xs"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-300 uppercase tracking-wider text-xs"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
