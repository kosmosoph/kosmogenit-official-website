import { ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function MerchSection() {
  const merchItems = [
    {
      id: 1,
      name: "Limited Edition T-Shirt",
      price: "29.99",
      image:
        "https://images.unsplash.com/photo-1687585612054-2fd94d0aec00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwbWVyY2hhbmRpc2UlMjB0c2hpcnQlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzkzODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "Vinyl Record",
      price: "34.99",
      image:
        "https://images.unsplash.com/photo-1584679109458-00d11923b5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMG11c2ljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY5NzkzODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Exclusive Hoodie",
      price: "54.99",
      image:
        "https://images.unsplash.com/photo-1687585612054-2fd94d0aec00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwbWVyY2hhbmRpc2UlMjB0c2hpcnQlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzkzODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Poster Pack",
      price: "24.99",
      image:
        "https://images.unsplash.com/photo-1669459881627-06c2a4948e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMGNvbmNlcnQlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2OTc5Mzg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="merch" className="py-24 sm:py-32 lg:py-40 bg-white relative">
      {/* Vertical Line Accent */}
      <div className="absolute left-8 lg:left-16 top-16 bottom-16 w-1 bg-black/10" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
            {/* Translate - MERCH */}
            PRODAVNICA
          </h2>
          <p className="text-xl sm:text-2xl text-black/50 max-w-2xl">
            {/* Translate - Official merchandise */}
            Oficijelna prodavnica
          </p>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchItems.map((item) => (
            <div key={item.id} className="group">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-black/5 mb-6">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-lg lg:text-xl font-bold text-black">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-black">${item.price}</p>
                  <button className="px-6 py-2 bg-[#FFD700] text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 font-bold">
                    {/* Translate - Buy */}
                    Kupi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
          >
            <ShoppingBag size={24} />
            {/* Translate - <span>Visit Store</span> */}
            <span>Poseti Prodavnicu</span>
          </a>
        </div>

        {/* Large Number */}
        <div className="mt-16 text-right">
          <span className="text-[120px] lg:text-[180px] font-bold text-black/5 leading-none">
            06
          </span>
        </div>
      </div>
    </section>
  );
}
