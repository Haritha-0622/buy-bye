import React from 'react';
import { MessageCircle, Navigation, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO, getStoreVisitWhatsAppUrl } from '../utils/constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5EFE6] border-b border-[#E8DFC8] relative overflow-hidden text-center">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
          11. CONVERSION
        </div>

        {/* Heading */}
        <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-6xl md:text-7xl leading-none">
          YOUR NEXT LOOK <span className="text-[#8C6D53] italic font-serif-title">STARTS HERE.</span>
        </h2>

        {/* Copy */}
        <p className="text-xl sm:text-3xl text-[#4A433D] font-serif-title font-normal max-w-2xl mx-auto leading-relaxed">
          “Look Rich. Spend Less. Premium Puducherry Menswear.”
        </p>

        <p className="text-sm sm:text-base text-[#6B635B] max-w-lg mx-auto font-light">
          Visit BUY &amp; BYE at 300, Jawaharlal Nehru St, Puducherry. Open daily 10:00 AM – 10:00 PM.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getStoreVisitWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn-sandal w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-2xl text-xs font-extrabold bg-[#8C6D53] hover:bg-[#72543E] text-white transition-all shadow-xl shadow-[#8C6D53]/20 active:scale-95 uppercase tracking-wider"
            id="final-cta-whatsapp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>CHAT ON WHATSAPP NOW</span>
          </a>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-2xl text-xs font-bold bg-white hover:bg-[#FAF7F2] border border-[#D4C3B3] text-[#1C1917] transition-all active:scale-95 uppercase tracking-wider shadow-md"
            id="final-cta-directions"
          >
            <Navigation className="w-5 h-5 text-[#8C6D53]" />
            <span>GET STORE DIRECTIONS</span>
          </a>
        </div>

        <div className="pt-8 flex items-center justify-center gap-2 text-xs text-[#6B635B]">
          <MapPin className="w-4 h-4 text-[#8C6D53]" />
          <span>300, Jawaharlal Nehru St, Illango Nagar, Puducherry – 605001</span>
        </div>
      </div>
    </section>
  );
};
