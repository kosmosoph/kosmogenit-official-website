import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Translate - Home, Music, Videos, Bio, Merch, Tour
  // const navItems = [
  //   { id: 'hero', label: 'Home' },
  //   { id: 'streaming', label: 'Music' },
  //   { id: 'media', label: 'Videos' },
  //   { id: 'bio', label: 'Bio' },
  //   { id: 'merch', label: 'Merch' },
  //   { id: 'tour', label: 'Tour' },
  //   { id: 'news', label: 'News' },
  // ];

  const navItems = [
    { id: "hero", label: "Početna" },
    { id: "streaming", label: "Muzika" },
    { id: "media", label: "Video" },
    { id: "bio", label: "Biografija" },
    { id: "merch", label: "Prodavnica" },
    { id: "tour", label: "Koncerti" },
    { id: 'news', label: 'Novosti' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl sm:text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity duration-300"
          >
            KOSMOGENIT
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm uppercase tracking-widest transition-colors duration-300 hover:text-[#FFD700] ${
                  activeSection === item.id ? "text-[#FFD700]" : "text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:text-[#FFD700] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-black/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-widest transition-colors duration-300 hover:text-[#FFD700] hover:bg-black/5 ${
                  activeSection === item.id
                    ? "text-[#FFD700] bg-black/5"
                    : "text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
