import React, { useState } from 'react';
import { Camera, Play, X, MessageCircle, Sparkles, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { getWhatsAppUrl } from '../utils/constants';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'store' | 'products' | 'new-arrivals' | 'collections'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const tabs: { id: 'all' | 'store' | 'products' | 'new-arrivals' | 'collections'; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Interior' },
    { id: 'products', label: 'Racks & Stock' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'collections', label: 'Lookbook Shots' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#E8DFC8] scroll-mt-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 9. SOCIAL: INSTAGRAM */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left border-b border-[#E0D7C9] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
              <Camera className="w-3.5 h-3.5 text-[#E6C687]" />
              9. SOCIAL &amp; COMMUNITY
            </div>
            <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
              INSTAGRAM <span className="text-[#8C6D53] italic font-serif-title">@BUY_AND_BYE</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B635B] max-w-xl font-light">
              Follow our showroom drops, customer styles, and daily new arrivals on Instagram.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hi BUY & BYE, I saw your showroom gallery online and would like to visit today!")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D4C3B3] text-xs font-bold uppercase tracking-wider text-[#8C6D53] hover:text-[#6E5038] hover:bg-[#FAF7F2] transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#8C6D53]" />
            <span>Visit Puducherry Showroom</span>
          </a>
        </div>

        {/* Gallery Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={isActive}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#8C6D53] text-white shadow-md shadow-[#8C6D53]/20'
                    : 'bg-white text-[#6B635B] hover:text-[#1C1917] hover:bg-[#FAF7F2] border border-[#E0D7C9]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-500 cursor-pointer aspect-[4/5] flex flex-col justify-end shadow-md hover:shadow-xl hover:shadow-[#8C6D53]/15"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Video Badge */}
              {item.type === 'video' && (
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#D4C3B3] text-[#8C6D53] text-[11px] font-bold">
                  <Play className="w-3 h-3 fill-[#8C6D53] text-[#8C6D53]" />
                  <span>Reel {item.duration && `• ${item.duration}`}</span>
                </div>
              )}

              {/* Zoom Icon */}
              <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-white text-[#8C6D53] border border-[#D4C3B3]">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Box */}
              <div className="relative z-10 p-5 text-left space-y-1">
                <h3 className="font-serif-title font-bold text-lg text-white group-hover:text-[#F3ECE3] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E5DCD3] font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/85 backdrop-blur-xl animate-in fade-in duration-200"
            role="dialog"
            onClick={() => setActiveLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white border border-[#E0D7C9] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#1C1917] hover:text-[#8C6D53] border border-[#E0D7C9] shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#FAF7F2]">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="p-6 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#EFEBE4]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D53]">
                      {activeLightboxItem.category}
                    </span>
                    {activeLightboxItem.type === 'video' && (
                      <span className="px-2 py-0.5 rounded bg-[#F5EFE6] text-[#8C6D53] text-[10px] font-bold">
                        Store Reel
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif-title font-bold text-xl text-[#1C1917]">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B635B] mt-1 font-light">
                    {activeLightboxItem.caption}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(`Hi BUY & BYE, I saw this photo (${activeLightboxItem.title}) in your gallery. Is this item currently in stock at your Puducherry store?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn-sandal inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8C6D53] text-white text-xs font-extrabold uppercase tracking-wider whitespace-nowrap shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire Photo on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
