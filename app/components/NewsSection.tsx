export function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: "JAN 25, 2026",
      title: 'New Single "Cosmic Dreams" Out Now',
      excerpt:
        "The highly anticipated new single is now available on all streaming platforms.",
    },
    {
      id: 2,
      date: "JAN 18, 2026",
      title: "Spring 2026 Tour Announced",
      excerpt:
        "KOSMOGENIT announces a massive European tour spanning 15 cities.",
    },
    {
      id: 3,
      date: "JAN 10, 2026",
      title: "Behind The Scenes: Studio Sessions",
      excerpt: "Go behind the scenes of the upcoming album recording process.",
    },
  ];

  return (
    <section id="news" className="py-24 sm:py-32 lg:py-40 bg-white relative">
      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-black/10" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
            {/* Translate - NEWS */}
            NOVOSTI
          </h2>
          <p className="text-xl sm:text-2xl text-black/50 max-w-2xl">
            {/* Translate - Latest updates */}
            Najnovije vesti
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {newsItems.map((news) => (
            <article key={news.id} className="group space-y-6">
              {/* Date */}
              <time className="block text-sm text-black/40 uppercase tracking-wider font-bold">
                {news.date}
              </time>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#FFD700] transition-colors duration-300 leading-tight">
                {news.title}
              </h3>

              {/* Excerpt */}
              <p className="text-base lg:text-lg text-black/60 leading-relaxed">
                {news.excerpt}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="inline-block text-black hover:text-[#FFD700] transition-colors duration-300 font-bold uppercase tracking-wider text-sm border-b-2 border-black hover:border-[#FFD700] pb-1"
              >
                {/* Translate - Read More */}
                Pročitaj Više
              </a>
            </article>
          ))}
        </div>

        {/* All News Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-10 py-5 bg-[#FFD700] text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
          >
            {/* Translate - All News */}
            Sve Vesti
          </a>
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-black/5 leading-none">
            08
          </span>
        </div>
      </div>
    </section>
  );
}
