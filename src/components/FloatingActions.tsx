import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { STORE_INFO, getStoreVisitWhatsAppUrl } from '../utils/constants';

export const FloatingActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick Store Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E0D7C9] p-3 px-4 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2.5">
        {/* CALL */}
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#FAF7F2] border border-[#D4C3B3] text-[#1C1917] text-xs font-bold active:scale-95 transition-transform"
          id="mobile-action-call"
        >
          <Phone className="w-4 h-4 text-[#8C6D53]" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={getStoreVisitWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-btn-sandal flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#8C6D53] text-white text-xs font-extrabold shadow-md active:scale-95 transition-transform uppercase tracking-wider"
          id="mobile-action-whatsapp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WHATSAPP</span>
        </a>

        {/* DIRECTIONS */}
        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#FAF7F2] border border-[#D4C3B3] text-[#1C1917] text-xs font-bold active:scale-95 transition-transform"
          id="mobile-action-directions"
        >
          <Navigation className="w-4 h-4 text-[#8C6D53]" />
          <span>DIRECTIONS</span>
        </a>
      </div>
    </aside>
  );
};
