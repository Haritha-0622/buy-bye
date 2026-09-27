import React from 'react';
import { Phone, MessageCircle, Mail, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { STORE_INFO, getWhatsAppUrl } from '../utils/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'Style Edit', href: '#featured' },
    { label: 'Showroom Gallery', href: '#gallery' },
    { label: 'About Us', href: '#about' },
    { label: 'Visit Store', href: '#visit-us' },
  ];

  return (
    <footer className="bg-[#FAF7F2] text-[#6B635B] border-t border-[#E8DFC8] pt-16 pb-24 md:pb-12 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E0D7C9]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <img
                src="/logo-transparent.png"
                alt="BUY &amp; BYE Men's Clothing"
                className="h-14 w-auto object-contain mb-3"
              />
              <p className="font-serif-title font-semibold text-[#8C6D53] text-lg tracking-wide">
                “{STORE_INFO.tagline}”
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#9E958C] mt-0.5 font-bold">
                Men’s Clothing • Puducherry Store
              </p>
            </div>

            <p className="text-xs text-[#6B635B] leading-relaxed font-light max-w-sm">
              Quality shirts, tees, denim, trousers &amp; festive wear at honest prices.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white hover:bg-[#F5EFE6] text-[#8C6D53] border border-[#E0D7C9] transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl("Hi BUY & BYE, reaching out from your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white hover:bg-[#F5EFE6] text-[#8C6D53] border border-[#E0D7C9] transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="p-3 rounded-xl bg-white hover:bg-[#F5EFE6] text-[#8C6D53] border border-[#E0D7C9] transition-all shadow-sm"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${STORE_INFO.email}`}
                className="p-3 rounded-xl bg-white hover:bg-[#F5EFE6] text-[#8C6D53] border border-[#E0D7C9] transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D53]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#8C6D53] transition-colors block py-0.5 text-[#4A433D]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D53]">
              Showroom Contact
            </h4>
            <div className="space-y-3 text-xs text-[#4A433D]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8C6D53] flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8C6D53] flex-shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-[#8C6D53]">
                  Phone: {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#8C6D53] flex-shrink-0" />
                <a
                  href={getWhatsAppUrl("Hi BUY & BYE, reaching out from your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8C6D53]"
                >
                  WhatsApp: {STORE_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8C6D53] flex-shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-[#8C6D53] break-all">
                  {STORE_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B635B]">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} <strong className="text-[#1C1917] font-bold">BUY &amp; BYE Puducherry</strong>. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5 font-semibold">
            <span>Puducherry – 605001</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#8C6D53] hover:text-[#6E5038] font-bold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
