import React from 'react';
import { MapPin, Sparkles, Shirt, Award, ArrowUpRight } from 'lucide-react';
import { STORE_INFO, getStoreVisitWhatsAppUrl } from '../utils/constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#E8DFC8] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Store Visual & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E0D7C9] shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80"
                alt="BUY & BYE Men's Wear Showroom Puducherry"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/20 to-transparent" />

              {/* Inset Label */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E0D7C9] text-left shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D53] block">
                      Physical Storefront
                    </span>
                    <span className="text-[#1C1917] text-sm font-semibold">
                      300, Jawaharlal Nehru St, Illango Nagar
                    </span>
                  </div>
                  <span className="text-xs text-[#6B635B] font-bold bg-[#F5EFE6] px-2.5 py-1 rounded-lg border border-[#D4C3B3]">
                    Puducherry – 605001
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Brand Badge */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 p-4 rounded-2xl bg-white border border-[#D4C3B3] shadow-xl hidden sm:block">
              <span className="text-2xl font-serif-title font-bold text-[#1C1917] block leading-none">
                4.9 ★
              </span>
              <span className="text-[10px] text-[#8C6D53] uppercase tracking-wider font-bold">
                Google Rating
              </span>
            </div>
          </div>

          {/* Right: Copy & Brand Pillars */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F3ECE3] border border-[#D4C3B3] text-[#8C6D53]">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6D53]" />
                Our Story &amp; Space
              </span>
              <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-3xl sm:text-4xl md:text-5xl">
                ABOUT <span className="text-[#8C6D53] italic font-serif-title">BUY &amp; BYE</span>
              </h2>
            </div>

            {/* Minimalist Brand Copy */}
            <p className="text-base sm:text-lg text-[#4A433D] font-light leading-relaxed">
              BUY &amp; BYE delivers stylish, premium menswear at fair prices in Puducherry — from everyday casuals to sharp formals and festive wear.
            </p>

            {/* 3 Core Highlight Badges as specified: Puducherry, Men's Fashion, Quality & Value */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E0D7C9] text-left hover:border-[#8C6D53] transition-all duration-300 group">
                <MapPin className="w-5 h-5 text-[#8C6D53] mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-serif-title font-bold text-sm text-[#1C1917]">Puducherry</div>
                <div className="text-[11px] text-[#6B635B]">Prime JN Street location</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E0D7C9] text-left hover:border-[#8C6D53] transition-all duration-300 group">
                <Shirt className="w-5 h-5 text-[#8C6D53] mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-serif-title font-bold text-sm text-[#1C1917]">Men's Fashion</div>
                <div className="text-[11px] text-[#6B635B]">Youthful &amp; versatile cuts</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E0D7C9] text-left hover:border-[#8C6D53] transition-all duration-300 group">
                <Award className="w-5 h-5 text-[#8C6D53] mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-serif-title font-bold text-sm text-[#1C1917]">Quality &amp; Value</div>
                <div className="text-[11px] text-[#6B635B]">"Look Rich. Spend Less."</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn-sandal inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <span>Find Us on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={getStoreVisitWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#D4C3B3] text-[#1C1917] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Plan Your Visit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
