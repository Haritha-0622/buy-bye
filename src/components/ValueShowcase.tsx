import React from 'react';
import { Tag, Sparkles, Check, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/constants';

interface ValueTier {
  title: string;
  badge: string;
  items: string;
  highlight: string;
}

export const ValueShowcase: React.FC = () => {
  const tiers: ValueTier[] = [
    {
      title: 'Daily Essentials',
      badge: 'Comfort Weaves',
      items: 'Vests, socks, belts & premium everyday accessories',
      highlight: 'Essentials',
    },
    {
      title: 'Casual Tees & Polos',
      badge: '100% Combed Cotton',
      items: 'Pique knit polos, classic tees & loungewear',
      highlight: 'Everyday Wear',
    },
    {
      title: 'Resort & Textured Shirts',
      badge: 'Camp Collars',
      items: 'Drop-shoulder tees, textured resort shirts & casual fits',
      highlight: 'Trending Drops',
    },
    {
      title: 'Statement Denim & Formals',
      badge: 'Tailored Fits',
      items: 'Straight-leg denim, pleated chinos, festive shirts & jackets',
      highlight: 'Premium Cuts',
    },
  ];

  return (
    <section id="value" className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#E8DFC8] scroll-mt-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - VALUE: LOOK GOOD. SPEND LESS. */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
            7. VALUE PROMISE
          </div>
          <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
            LOOK GOOD. <span className="text-[#8C6D53] italic font-serif-title">SPEND LESS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B635B] font-light">
            Curated menswear crafted with premium fabrics and honest pricing at 300 JN Street, Puducherry.
          </p>
        </div>

        {/* 4 Category Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#8C6D53]/10 flex flex-col justify-between text-left group"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8C6D53] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#E8DFC8] inline-block mb-3">
                  {tier.highlight}
                </span>
                <div className="font-serif-title font-bold text-2xl text-[#1C1917] tracking-tight mb-2">
                  {tier.title}
                </div>
                <h3 className="text-xs font-bold text-[#8C6D53] uppercase tracking-wide mb-2">
                  {tier.badge}
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed font-light">
                  {tier.items}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F5EFE6] mt-6 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1C1917] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8C6D53]" />
                  In Stock Daily
                </span>
                <a
                  href={getWhatsAppUrl(`Hi BUY & BYE, I would like to check items in ${tier.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#8C6D53] group-hover:text-[#6E5038] inline-flex items-center gap-1"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
