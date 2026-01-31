import { MapPin, Ticket } from "lucide-react";

export function TourDatesSection() {
  const tourDates = [
    {
      id: 1,
      date: "MAR 15",
      year: "2026",
      venue: "The Grand Hall",
      city: "Belgrade",
      country: "Serbia",
      status: "available",
    },
    {
      id: 2,
      date: "MAR 22",
      year: "2026",
      venue: "Arena Center",
      city: "Zagreb",
      country: "Croatia",
      status: "available",
    },
    {
      id: 3,
      date: "MAR 29",
      year: "2026",
      venue: "Music Palace",
      city: "Ljubljana",
      country: "Slovenia",
      status: "available",
    },
    {
      id: 4,
      date: "APR 5",
      year: "2026",
      venue: "Central Stadium",
      city: "Sarajevo",
      country: "Bosnia",
      status: "few",
    },
    {
      id: 5,
      date: "APR 12",
      year: "2026",
      venue: "Metropolitan Arena",
      city: "Sofia",
      country: "Bulgaria",
      status: "soldout",
    },
  ];

  return (
    <section
      id="tour"
      className="py-24 sm:py-32 lg:py-40 bg-[#FFD700] relative overflow-hidden"
    >
      {/* Large Circle Background */}
      <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-white/30" />

      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-black/20" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none text-black">
            {/* Translate -TOUR */}
            KONCERTI
          </h2>
          <p className="text-xl sm:text-2xl text-black/70 max-w-2xl">
            {/* Translate -Live performances */}
            Nastupi uživo
          </p>
        </div>

        {/* Tour Dates List */}
        <div className="space-y-6">
          {tourDates.map((show) => (
            <div
              key={show.id}
              className="group bg-white p-6 lg:p-8 hover:bg-black transition-all duration-300 border-l-4 border-black"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Date */}
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl lg:text-5xl font-bold text-black group-hover:text-white transition-colors duration-300">
                    {show.date}
                  </span>
                  <span className="text-xl text-black/50 group-hover:text-white/50 transition-colors duration-300">
                    {show.year}
                  </span>
                </div>

                {/* Venue Info */}
                <div className="flex-1 space-y-1">
                  <p className="text-xl lg:text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">
                    {show.venue}
                  </p>
                  <div className="flex items-center gap-2 text-black/60 group-hover:text-white/70 transition-colors duration-300">
                    <MapPin size={16} />
                    <span>
                      {show.city}, {show.country}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <div>
                  {show.status === "soldout" ? (
                    <span className="inline-block px-8 py-3 bg-black text-white uppercase tracking-wider text-sm font-bold group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      {/* Translate -Sold Out */}
                      Rasprodato
                    </span>
                  ) : (
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white border-2 border-black hover:bg-[#FFD700] hover:text-black hover:border-black transition-all duration-300 uppercase tracking-wider text-sm font-bold group-hover:bg-white group-hover:text-black"
                    >
                      <Ticket size={18} />
                      {/* Translate - <span>Tickets</span> */}
                      <span>Karte</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Dates Link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-10 py-5 border-2 border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
          >
            {/* Translate - All Dates */}
            Svi Datumi
          </a>
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-black/10 leading-none">
            07
          </span>
        </div>
      </div>
    </section>
  );
}
