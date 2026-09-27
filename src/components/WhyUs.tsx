import React from 'react';
import { ShieldCheck, Sparkles, Wallet, Clock, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../utils/constants';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'QUALITY',
      subtitle: 'Hand-inspected fabrics.',
      description: 'Tested materials and durable stitching made to last.',
    },
    {
      icon: Sparkles,
      title: 'TRENDS',
      subtitle: 'Weekly new arrivals.',
      description: 'Fresh resort shirts, drop-shoulder tees, and denim.',
    },
    {
      icon: Wallet,
      title: 'VALUE',
      subtitle: 'Look rich. Spend less.',
      description: 'Premium aesthetic without inflated price tags.',
    },
    {
      icon: Clock,
      title: 'OPEN DAILY',
      subtitle: '10 AM – 10 PM.',
      description: '300 JN Street, Puducherry. Instant WhatsApp assistance.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
            8. TRUST
          </div>
          <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
            WHY <span className="text-[#8C6D53] italic font-serif-title">BUY &amp; BYE</span>?
          </h2>
          <p className="text-base text-[#6B635B] font-light leading-relaxed">
            We believe dressing exceptionally well should be accessible to every man in Puducherry.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-500 flex flex-col justify-between text-left group hover:shadow-xl hover:shadow-[#8C6D53]/10"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5EFE6] border border-[#D4C3B3] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8C6D53] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#8C6D53] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-serif-title font-bold text-2xl text-[#1C1917] tracking-wide uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-[#8C6D53] mt-1 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#6B635B] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFEBE4] flex items-center gap-2 text-[11px] text-[#6B635B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D53]" />
                  <span className="font-semibold text-[#1C1917]">BUY &amp; BYE Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
