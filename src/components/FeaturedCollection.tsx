import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { EDITORIAL_LOOKS } from '../data/editorial';
import { getWhatsAppUrl } from '../utils/constants';

interface FeaturedCollectionProps {
  onSelectLookCategory?: (category: string) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ onSelectLookCategory }) => {
  const [activeLookIndex, setActiveLookIndex] = useState<number>(0);
  const [zoomPhoto, setZoomPhoto] = useState<string | null>(null);
  const currentLook = EDITORIAL_LOOKS[activeLookIndex];

  return (
    <section id="featured" className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#E8DFC8] scroll-mt-14 relative">
      {/* Full Photo Lightbox Overlay */}
      {zoomPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setZoomPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setZoomPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <Sparkles className="w-6 h-6" />
          </button>
          <img
            src={zoomPhoto}
            alt="Enlarged style preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - 5. INSPIRATION: THE BUY & BYE EDIT */}
        <div className="text-left mb-12 sm:mb-16 space-y-3 border-b border-[#E0D7C9] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
            5. INSPIRATION
          </div>
          <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
            THE BUY &amp; BYE <span className="text-[#8C6D53] italic font-serif-title">EDIT</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B635B] max-w-xl font-light">
            Curated outfit combinations designed for Puducherry coastal weekends, office meetings, and festive celebrations.
          </p>
        </div>

        {/* Lookbook Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
          {EDITORIAL_LOOKS.map((look, idx) => {
            const isSelected = activeLookIndex === idx;
            return (
              <button
                key={look.id}
                onClick={() => setActiveLookIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white shadow-xl border-[#8C6D53] scale-[1.02]'
                    : 'bg-[#FAF7F2] border-[#E0D7C9] hover:border-[#D4C3B3] text-[#6B635B] hover:text-[#1C1917]'
                }`}
              >
                <span className={`text-[10px] uppercase tracking-wider font-extrabold block mb-1 ${isSelected ? 'text-[#8C6D53]' : 'text-[#9E958C]'}`}>
                  0{idx + 1} • {look.tag}
                </span>
                <span className="font-serif-title font-bold text-lg sm:text-xl text-[#1C1917] block leading-snug">
                  “{look.title}”
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E0D7C9] shadow-xl">
          
          {/* Main Image */}
          <div
            onClick={() => setZoomPhoto(currentLook.image)}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#F5EFE6] group shadow-md border border-[#E8DFC8] cursor-zoom-in"
            title="Click to view full photo demo"
          >
            <img
              src={currentLook.image}
              alt={currentLook.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent opacity-85" />
            
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="px-3 py-1 text-xs font-black uppercase tracking-wider bg-[#8C6D53] text-white rounded-lg inline-block mb-2.5 shadow-md">
                {currentLook.tag}
              </span>
              <h3 className="font-serif-title font-bold text-3xl sm:text-4xl text-white">
                “{currentLook.title}”
              </h3>
              <p className="text-sm text-[#F3ECE3] font-light mt-1.5 max-w-lg leading-relaxed">
                {currentLook.statement}
              </p>
            </div>
          </div>

          {/* Right Column: Details & Enquire CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            {currentLook.secondaryImage && (
              <div
                onClick={() => currentLook.secondaryImage && setZoomPhoto(currentLook.secondaryImage)}
                className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E0D7C9] cursor-zoom-in group"
                title="Click to zoom fabric detail photo"
              >
                <img
                  src={currentLook.secondaryImage}
                  alt="Detail close-up"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover object-center flex-shrink-0 border border-[#D4C3B3] group-hover:scale-105 transition-transform"
                />
                <div>
                  <span className="text-[11px] text-[#8C6D53] uppercase font-bold tracking-wider block">
                    Fabric & Texture Detail
                  </span>
                  <p className="text-sm font-semibold text-[#1C1917]">
                    Premium breathable weaves & tailored drape.
                  </p>
                  <span className="text-xs text-[#6B635B] block mt-1 font-light">
                    Try this complete outfit in our Puducherry store today.
                  </span>
                </div>
              </div>
            )}

            {/* Featured Product Items in This Look */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D53] block">
                Included Outfit Pieces:
              </span>
              <div className="space-y-2">
                {currentLook.featuredProducts.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E0D7C9]"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8C6D53] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#1C1917]">{p.name}</span>
                    </div>
                    <span className="text-[11px] text-[#6B635B] uppercase font-bold px-2 py-0.5 rounded bg-[#F5EFE6] border border-[#E0D7C9]">
                      {p.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(`Hi BUY & BYE, I love the '${currentLook.title}' look shown on your website. Can you show me what items you have in store for this style?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn-sandal flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire Fit on WhatsApp</span>
              </a>

              {onSelectLookCategory && (
                <button
                  type="button"
                  onClick={() => onSelectLookCategory(currentLook.recommendedCategory)}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFE6] border border-[#D4C3B3] text-[#1C1917] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Explore Items</span>
                  <ArrowRight className="w-4 h-4 text-[#8C6D53]" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
