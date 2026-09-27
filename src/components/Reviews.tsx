import React from 'react';
import { Star, ExternalLink, ShieldCheck, ThumbsUp, MapPin, Quote } from 'lucide-react';
import { STORE_INFO } from '../utils/constants';

export const Reviews: React.FC = () => {
  const customerQuotes = [
    {
      name: 'Karthik Raja',
      location: 'Puducherry Resident',
      rating: 5,
      text: 'Best menswear shop on JN Street! Got 3 Cuban collar resort shirts and oversized tees for less than ₹2,000 total. Quality is top-notch.',
      tag: 'Verified Buyer'
    },
    {
      name: 'Vignesh M.',
      location: 'Local Shopper',
      rating: 5,
      text: 'Superb collection of jeans and relaxed fit trousers. Their staff help with fitting immediately. Highly recommended for affordable stylish wear.',
      tag: 'Regular Customer'
    },
    {
      name: 'Arun Kumar',
      location: 'Visitor from Chennai',
      rating: 5,
      text: 'Stumbled upon BUY & BYE during my weekend in Pondy. The aesthetic fits and colors are awesome. Very friendly store owner!',
      tag: 'Verified Review'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 6. SOCIAL PROOF / PRODUCTS: BESTSELLERS */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
            <Star className="w-3.5 h-3.5 fill-[#E6C687] text-[#E6C687]" />
            6. SOCIAL PROOF &amp; BESTSELLERS
          </div>

          <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
            BESTSELLERS &amp; <span className="text-[#8C6D53] italic font-serif-title">REVIEWS</span>
          </h2>

          <p className="text-base text-[#6B635B] font-light">
            Loved by 10,000+ men across Puducherry • 4.9 ★ Google Rating
          </p>
        </div>

        {/* Rating Summary Card Box */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E0D7C9] shadow-xl relative overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#F5EFE6] border border-[#D4C3B3] flex flex-col items-center justify-center text-[#8C6D53]">
                <span className="font-serif-title font-bold text-4xl text-[#1C1917]">4.9</span>
                <div className="flex text-[#B8860B] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B8860B]" />
                  ))}
                </div>
              </div>
              <div className="text-left space-y-1">
                <h3 className="font-serif-title font-bold text-2xl text-[#1C1917] uppercase">TOP RATED STORE</h3>
                <p className="text-xs text-[#8C6D53] font-bold">Based on 21+ Verified Google Reviews in Puducherry</p>
                <p className="text-xs text-[#6B635B]">100% Genuine In-Store Customer Feedback</p>
              </div>
            </div>

            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn-sandal inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md"
              id="view-google-reviews-btn"
            >
              <span>READ ALL GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Customer Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerQuotes.map((q, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E0D7C9] flex flex-col justify-between text-left space-y-4 hover:border-[#8C6D53] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#B8860B]">
                    {[...Array(q.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B8860B]" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#F5EFE6] text-[#8C6D53] border border-[#E0D7C9]">
                    {q.tag}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#D4C3B3]" />
                <p className="text-xs sm:text-sm text-[#4A433D] font-light leading-relaxed italic">
                  "{q.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFEBE4]">
                <h4 className="font-bold text-[#1C1917] text-sm">{q.name}</h4>
                <p className="text-[11px] text-[#6B635B]">{q.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
