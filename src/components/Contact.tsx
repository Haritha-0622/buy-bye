import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Instagram, Facebook, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO, getWhatsAppUrl } from '../utils/constants';

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('New Arrivals & Sizes');
  const [customNote, setCustomNote] = useState('');

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi BUY & BYE, I'm inquiring about ${inquiryType}.${
      customNote.trim() ? ` Note: ${customNote.trim()}` : ''
    } Could you assist me with available options in your Puducherry store?`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8] scroll-mt-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F3ECE3] border border-[#D4C3B3] text-[#8C6D53]">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6D53]" />
                GET IN TOUCH
              </span>
              <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
                CONNECT WITH <span className="text-[#8C6D53] italic font-serif-title">US</span>
              </h2>
              <p className="text-base text-[#6B635B] font-light max-w-md">
                Questions about sizes, colors, store directions, or stock availability? Contact us directly.
              </p>
            </div>

            {/* Direct Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="p-6 rounded-2xl bg-white border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                id="contact-call-link"
              >
                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-[#8C6D53] group-hover:scale-110 group-hover:bg-[#8C6D53] group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D53] block">
                    Direct Store Phone
                  </span>
                  <span className="text-base font-extrabold text-[#1C1917] group-hover:text-[#8C6D53] transition-colors">
                    {STORE_INFO.phone}
                  </span>
                  <span className="text-xs text-[#6B635B] block mt-0.5 font-light">
                    10 AM – 10 PM Daily
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl("Hi BUY & BYE, I would like to get more information about your collections.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                id="contact-whatsapp-link"
              >
                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-[#8C6D53] group-hover:scale-110 group-hover:bg-[#8C6D53] group-hover:text-white transition-all duration-300">
                  <MessageCircle className="w-5 h-5 fill-[#8C6D53]/20 group-hover:fill-white" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D53] block">
                    WhatsApp Chat
                  </span>
                  <span className="text-base font-extrabold text-[#1C1917] group-hover:text-[#8C6D53] transition-colors">
                    {STORE_INFO.whatsappNumber}
                  </span>
                  <span className="text-xs text-[#8C6D53] font-semibold block mt-0.5">
                    Fastest Response
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${STORE_INFO.email}`}
                className="p-6 rounded-2xl bg-white border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                id="contact-email-link"
              >
                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-[#8C6D53] group-hover:scale-110 group-hover:bg-[#8C6D53] group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D53] block">
                    Official Email
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1C1917] break-all group-hover:text-[#8C6D53] transition-colors">
                    {STORE_INFO.email}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                id="contact-instagram-link"
              >
                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-[#8C6D53] group-hover:scale-110 group-hover:bg-[#8C6D53] group-hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D53] block">
                    Instagram Handle
                  </span>
                  <span className="text-sm font-extrabold text-[#1C1917] group-hover:text-[#8C6D53] transition-colors">
                    @{STORE_INFO.instagramHandle}
                  </span>
                  <span className="text-xs text-[#6B635B] block mt-0.5 font-light">
                    New Reels &amp; Drops
                  </span>
                </div>
              </a>

            </div>

            {/* Facebook */}
            <div className="p-4 rounded-2xl bg-white border border-[#E0D7C9] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-[#8C6D53]" />
                <span className="text-sm font-medium text-[#4A433D]">
                  Follow us on Facebook: <strong className="text-[#1C1917]">{STORE_INFO.facebookName}</strong>
                </span>
              </div>
              <a
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#8C6D53] hover:underline"
              >
                Open Page
              </a>
            </div>
          </div>

          {/* Right Column: One-Click WhatsApp Assistant Form */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#E0D7C9] shadow-xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C6D53]">
                  Quick WhatsApp Assistant
                </span>
                <span className="text-[11px] text-emerald-700 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                  Active Store Response
                </span>
              </div>

              <h3 className="font-serif-title font-bold text-3xl text-[#1C1917] mb-2">
                Send a 1-Click Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#6B635B] font-light mb-6">
                Pick a topic below to start an instant WhatsApp chat with our Puducherry store team.
              </p>

              <form onSubmit={handleQuickWhatsApp} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#8C6D53] uppercase tracking-wider mb-2.5">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      'New Arrivals & Sizes',
                      'Shirts & Linens',
                      'Jeans & Trousers',
                      'Formal Blazers',
                      'Festive Ethnic Fits',
                      'Store Visit Assistance',
                    ].map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setInquiryType(topic)}
                        className={`p-3 rounded-xl text-xs font-extrabold text-left transition-all border ${
                          inquiryType === topic
                            ? 'bg-[#8C6D53] text-white border-[#8C6D53] shadow-md'
                            : 'bg-[#FAF7F2] text-[#4A433D] border-[#E0D7C9] hover:border-[#D4C3B3]'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8C6D53] uppercase tracking-wider mb-2">
                    Optional Details (e.g. Size M, color, timing)
                  </label>
                  <textarea
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="E.g., Looking for a resort linen shirt in size XL and slim jeans in size 34..."
                    className="w-full rounded-xl bg-[#FAF7F2] border border-[#E0D7C9] px-4 py-3 text-sm text-[#1C1917] placeholder-[#9E958C] focus:outline-none focus:border-[#8C6D53] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="shimmer-btn-sandal w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>START INSTANT WHATSAPP CHAT</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEBE4] flex items-center justify-between text-[11px] text-[#6B635B]">
              <span>Direct connection with Puducherry store staff</span>
              <span>Puducherry – 605001</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
