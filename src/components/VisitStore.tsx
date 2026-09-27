import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { STORE_INFO, getStoreVisitWhatsAppUrl } from '../utils/constants';

export const VisitStore: React.FC = () => {
  return (
    <section id="visit-us" className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#E8DFC8] scroll-mt-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 10. PHYSICAL STORE: COME SAY HELLO */}
        <div className="text-left mb-12 sm:mb-16 space-y-3 border-b border-[#E0D7C9] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
            <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
            10. PHYSICAL STORE
          </div>
          <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
            COME SAY <span className="text-[#8C6D53] italic font-serif-title">HELLO</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B635B] max-w-xl font-light">
            Visit our physical storefront at 300, Jawaharlal Nehru Street, Puducherry.
          </p>
        </div>

        {/* Location Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-[#E0D7C9] flex flex-col justify-between text-left space-y-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C6D53] block mb-1">
                  Physical Storefront Puducherry
                </span>
                <h3 className="font-serif-title font-bold text-3xl sm:text-4xl text-[#1C1917]">
                  {STORE_INFO.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#6B635B] font-bold mt-1">
                  {STORE_INFO.tagline}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#E0D7C9]">
                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-[#8C6D53] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#8C6D53] tracking-wider">
                    Full Address
                  </h4>
                  <p className="text-base text-[#1C1917] font-semibold mt-1 leading-snug">
                    300, Jawaharlal Nehru St,
                    <br />
                    Illango Nagar, Puducherry – 605001
                  </p>
                  <span className="text-xs text-[#6B635B] font-medium mt-1 inline-block">
                    Prime Shopping Location • Easy Parking Nearby
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#E0D7C9]">
                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-[#8C6D53] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#8C6D53] tracking-wider">
                    Store Timings
                  </h4>
                  <p className="text-base text-[#1C1917] font-extrabold mt-1">
                    OPEN ALL 7 DAYS A WEEK
                  </p>
                  <p className="text-sm text-[#8C6D53] font-bold">
                    10:00 AM – 10:00 PM Daily
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3.5 pt-4 border-t border-[#EFEBE4]">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn-sandal w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.98]"
                id="visit-get-directions-btn"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#1C1917] font-bold text-xs border border-[#D4C3B3] transition-colors"
                  id="visit-call-now-btn"
                >
                  <Phone className="w-4 h-4 text-[#8C6D53]" />
                  <span>CALL STORE</span>
                </a>

                <a
                  href={getStoreVisitWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#1C1917] font-bold text-xs border border-[#D4C3B3] transition-colors"
                  id="visit-whatsapp-us-btn"
                >
                  <MessageCircle className="w-4 h-4 text-[#8C6D53] fill-[#8C6D53]/20" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map Frame */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-white border border-[#E0D7C9] relative min-h-[420px] flex flex-col shadow-xl">
            <iframe
              title="BUY & BYE Google Maps Location"
              src="https://maps.google.com/maps?q=300%2C%20Jawaharlal%20Nehru%20St%2C%20Illango%20Nagar%2C%20Puducherry%20605001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full flex-grow min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="p-5 bg-[#FAF7F2] border-t border-[#E0D7C9] flex items-center justify-between text-xs text-[#6B635B]">
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-4 h-4 text-[#8C6D53] flex-shrink-0" />
                <span className="font-semibold text-[#1C1917] truncate">
                  300, JN St, Illango Nagar, Puducherry
                </span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C6D53] hover:text-[#6E5038] font-bold inline-flex items-center gap-1.5 whitespace-nowrap ml-3"
              >
                <span>Open Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
