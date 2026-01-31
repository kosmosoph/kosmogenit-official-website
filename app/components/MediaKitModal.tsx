import { X, Download, Image, FileText, Music } from 'lucide-react';

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MediaKitModal({ isOpen, onClose }: MediaKitModalProps) {
  if (!isOpen) return null;

  const singles = [
    { id: 1, title: 'Cosmic Dreams', year: '2026' },
    { id: 2, title: 'Golden Hour', year: '2025' },
    { id: 3, title: 'Midnight Echo', year: '2025' },
    { id: 4, title: 'Stellar Waves', year: '2024' },
    { id: 5, title: 'Neon Pulse', year: '2024' },
  ];

  const handleDownload = (itemName: string) => {
    // Placeholder za download funkcionalnost
    console.log(`Downloading: ${itemName}`);
    alert(`Downloading: ${itemName}`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-black/10 p-6 sm:p-8 flex justify-between items-start z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-2">
              MEDIA KIT
            </h2>
            <p className="text-black/50">Download press materials</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 transition-colors duration-300"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-12">
          {/* General Materials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight uppercase flex items-center gap-3">
              <FileText size={24} className="text-[#FFD700]" />
              Opšti materijali
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleDownload('Biography')}
                className="group p-6 border-2 border-black/10 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300 text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-black text-lg mb-1">Biografija</p>
                    <p className="text-sm text-black/50 group-hover:text-black/70">Official bio (PDF)</p>
                  </div>
                  <Download size={20} className="text-black/30 group-hover:text-black" />
                </div>
              </button>

              <button
                onClick={() => handleDownload('Biography - Short Version')}
                className="group p-6 border-2 border-black/10 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300 text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-black text-lg mb-1">Kratka biografija</p>
                    <p className="text-sm text-black/50 group-hover:text-black/70">Short bio (PDF)</p>
                  </div>
                  <Download size={20} className="text-black/30 group-hover:text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* Press Photos */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight uppercase flex items-center gap-3">
              <Image size={24} className="text-[#FFD700]" />
              Promotivne slike
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleDownload('Press Photos - High Res')}
                className="group p-6 border-2 border-black/10 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300 text-left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-black text-lg">Slike (Hi-Res)</p>
                    <Download size={20} className="text-black/30 group-hover:text-black" />
                  </div>
                  <p className="text-sm text-black/50 group-hover:text-black/70">ZIP, 25MB</p>
                </div>
              </button>

              <button
                onClick={() => handleDownload('Press Photos - Web')}
                className="group p-6 border-2 border-black/10 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300 text-left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-black text-lg">Slike (Web)</p>
                    <Download size={20} className="text-black/30 group-hover:text-black" />
                  </div>
                  <p className="text-sm text-black/50 group-hover:text-black/70">ZIP, 8MB</p>
                </div>
              </button>

              <button
                onClick={() => handleDownload('Logo Package')}
                className="group p-6 border-2 border-black/10 hover:border-[#FFD700] hover:bg-[#FFD700] transition-all duration-300 text-left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-black text-lg">Logo</p>
                    <Download size={20} className="text-black/30 group-hover:text-black" />
                  </div>
                  <p className="text-sm text-black/50 group-hover:text-black/70">SVG + PNG</p>
                </div>
              </button>
            </div>
          </div>

          {/* Singles Press Materials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight uppercase flex items-center gap-3">
              <Music size={24} className="text-[#FFD700]" />
              Press materijali za singlove
            </h3>
            <div className="space-y-3">
              {singles.map((single) => (
                <div
                  key={single.id}
                  className="border-2 border-black/10 p-6 hover:border-black/20 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{single.title}</h4>
                      <p className="text-sm text-black/50">{single.year}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button
                      onClick={() => handleDownload(`${single.title} - Press Release`)}
                      className="px-4 py-3 bg-black/5 hover:bg-[#FFD700] text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center"
                    >
                      Press Release
                    </button>
                    <button
                      onClick={() => handleDownload(`${single.title} - Cover Art`)}
                      className="px-4 py-3 bg-black/5 hover:bg-[#FFD700] text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center"
                    >
                      Cover Art
                    </button>
                    <button
                      onClick={() => handleDownload(`${single.title} - Photos`)}
                      className="px-4 py-3 bg-black/5 hover:bg-[#FFD700] text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center"
                    >
                      Slike
                    </button>
                    <button
                      onClick={() => handleDownload(`${single.title} - Full Kit`)}
                      className="px-4 py-3 bg-[#FFD700] hover:bg-black hover:text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center"
                    >
                      Sve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download All */}
          <div className="pt-8 border-t border-black/10">
            <button
              onClick={() => handleDownload('Complete Media Kit')}
              className="w-full px-10 py-6 bg-[#FFD700] text-black text-lg uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold flex items-center justify-center gap-3"
            >
              <Download size={24} />
              <span>Preuzmi kompletan Media Kit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
