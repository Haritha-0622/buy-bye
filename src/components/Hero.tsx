import React, { useState } from 'react';
import { MessageCircle, ArrowDown, MapPin, Sparkles, Star, ChevronRight, CheckCircle2, ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';
import { STORE_INFO, getWhatsAppUrl } from '../utils/constants';

interface HeroProps {
  onShopClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroVisuals = [
    {
      img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=85',
      title: 'Resort Linen & Cuban Shirts',
      subtitle: 'Lightweight breathable weaves designed for Pondy warmth',
      badge: 'SUMMER ESSENTIAL'
    },
    {
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
      title: 'Structured Casual Blazers',
      subtitle: 'Effortless elegance for evening dinners & work outings',
      badge: 'STATEMENT FIT'
    },
    {
      img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=85',
      title: 'Vintage Denim & Utility Pants',
      subtitle: 'Heavyweight weaves with perfect relaxed drape',
      badge: 'BESTSELLER'
    }
  ];

  const handleShopClick = () => {
    if (onShopClick) {
      onShopClick();
    } else {
      const target = document.querySelector('#new-arrivals');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#FAF7F2] overflow-hidden border-b border-[#E8DFC8]"
      aria-label="Hero Section"
    >
      {/* Background Soft Accent Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#EFEBE4] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#E4D5C7]/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-7 z-10">
            
            {/* Top Tag & Rating Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] shadow-md border border-[#3D3731]">
                ⚡ EXCLUSIVE MENSWEAR DROPS
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F3ECE3] border border-[#D4C3B3] text-[#8C6D53]">
                <Sparkles className="w-3 h-3 text-[#8C6D53]" />
                PUDUCHERRY
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white border border-[#E0D7C9] text-[#4A433D] shadow-sm">
                <Star className="w-3 h-3 text-[#B8860B] fill-[#B8860B]" />
                <span className="font-bold text-[#1C1917]">4.9</span> / 5.0
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-5xl sm:text-7xl md:text-8xl leading-[0.92]">
                LOOK RICH.
                <span className="block text-[#8C6D53] italic font-serif-title font-normal">
                  SPEND LESS.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#6B635B] font-light">
                Curated premium menswear designed for modern attitudes.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={handleShopClick}
                className="shimmer-btn-sandal inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#8C6D53] hover:bg-[#72543E] text-white transition-all shadow-lg shadow-[#8C6D53]/20 active:scale-[0.98] group"
                id="hero-shop-cta"
              >
                <span>EXPLORE</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={getWhatsAppUrl("Hi BUY & BYE, I would like to check your collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white hover:bg-[#F5EFE6] border border-[#D4C3B3] text-[#1C1917] transition-all active:scale-[0.98] shadow-sm"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4 text-[#8C6D53]" />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DFC8] max-w-lg">
              <div className="space-y-0.5">
                <div className="font-bold text-[#1C1917] text-base sm:text-lg">10,000+ Men</div>
                <div className="text-xs text-[#6B635B]">Styled in Puducherry</div>
              </div>
              <div className="space-y-0.5 border-x border-[#E0D7C9] px-3">
                <div className="font-bold text-[#8C6D53] text-base sm:text-lg">Open Daily</div>
                <div className="text-xs text-[#6B635B]">10 AM – 10 PM</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#1C1917] text-base sm:text-lg">JN Street</div>
                <div className="text-xs text-[#6B635B]">Puducherry Store</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sandal & Beige Card Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E0D7C9] shadow-2xl aspect-[4/5] sm:aspect-[3/4] group">
                <img
                  src={heroVisuals[activeSlide].img}
                  alt={heroVisuals[activeSlide].title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/20 to-transparent opacity-80" />

                {/* Top Pill */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-[#E0D7C9] rounded-full text-xs text-[#1C1917] flex items-center gap-2 font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                  Store Open Today
                </div>

                {/* Info Card Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E8DFC8] text-left shadow-2xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-extrabold bg-[#F3ECE3] text-[#8C6D53] rounded border border-[#D4C3B3]">
                      {heroVisuals[activeSlide].badge}
                    </span>
                    <span className="text-xs text-[#6B635B] font-medium">BUY & BYE</span>
                  </div>
                  <h3 className="text-[#1C1917] font-serif-title font-bold text-xl sm:text-2xl">{heroVisuals[activeSlide].title}</h3>
                  <p className="text-xs text-[#6B635B] mt-0.5 font-light">{heroVisuals[activeSlide].subtitle}</p>

                  {/* Thumbnail selector dots */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#EFEBE4]">
                    {heroVisuals.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === idx ? 'w-8 bg-[#8C6D53]' : 'w-2 bg-[#D4C3B3] hover:bg-[#8C6D53]'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Sandal Marquee Ticker Strip at bottom */}
      <div className="bg-[#8C6D53] text-[#FAF7F2] py-2.5 overflow-hidden font-sans-title text-xs font-extrabold uppercase tracking-widest border-t border-[#7A5D45]">
        <div className="flex whitespace-nowrap animate-in fade-in duration-500 justify-around gap-8">
          <span>✨ RESORT LINEN SHIRTS</span>
          <span>•</span>
          <span>HEAVYWEIGHT DROP-SHOULDER TEES</span>
          <span>•</span>
          <span>VINTAGE TINT JAPANESE FIT DENIM</span>
          <span>•</span>
          <span>SMART CHINO TROUSERS</span>
          <span>•</span>
          <span>FESTIVE ETHNIC OUTFITS</span>
        </div>
      </div>
    </section>
  );
};
