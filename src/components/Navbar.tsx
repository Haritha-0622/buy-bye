import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Search, Sparkles } from 'lucide-react';
import { STORE_INFO, getWhatsAppUrl } from '../utils/constants';

interface NavbarProps {
  onSearchClick?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'The Edit', href: '#featured' },
    { label: 'Showroom Value', href: '#value' },
    { label: 'Visit Store', href: '#visit-us' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Prominent Announcement Bar */}
      <div className="bg-[#1C1917] text-[#FAF7F2] py-2 px-4 text-center border-b border-[#3D3731]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
          <span className="inline-flex items-center gap-1.5 text-[#E6C687]">
            <Sparkles className="w-3.5 h-3.5" />
            BUY &amp; BYE SHOWROOM • PUDUCHERRY
          </span>
          <span className="hidden md:inline text-[#8C6D53]">•</span>
          <span className="hidden md:inline font-normal text-[#D4C3B3]">LOOK RICH. SPEND LESS.</span>
          <span className="hidden sm:inline text-[#8C6D53]">•</span>
          <span className="hidden sm:inline text-[#FAF7F2]/90 font-medium">300 JN STREET, PUDUCHERRY</span>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-[#D4C3B3] shadow-md py-3'
            : 'bg-[#FAF7F2]/90 backdrop-blur-md border-[#E0D7C9] py-3.5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3 text-left"
            id="brand-logo-link"
          >
            <div className="flex items-center">
              <img
                src="/logo-transparent.png"
                alt="BUY &amp; BYE Men's Clothing Logo"
                className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-[#D4C3B3] pl-3 py-0.5">
              <span className="text-[10px] font-bold text-[#8C6D53] tracking-widest uppercase">
                PUDUCHERRY
              </span>
              <span className="text-[9px] text-[#6B635B] font-medium tracking-wide">
                JN Street Showroom
              </span>
            </div>
          </a>

          {/* Desktop Minimalist Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span className="w-1 h-1 rounded-full bg-[#D4C3B3]" />}
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-extrabold uppercase tracking-wider text-[#4A433D] hover:text-[#8C6D53] transition-colors relative py-1"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="hidden sm:flex items-center gap-3">
            {onSearchClick && (
              <button
                onClick={onSearchClick}
                className="p-2.5 rounded-full bg-[#F5EFE6] hover:bg-[#E8DFC8] text-[#3D3731] border border-[#E0D7C9] transition-all hover:border-[#8C6D53]"
                title="Search Catalogue"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-[#8C6D53]" />
              </button>
            )}

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="p-2.5 rounded-full bg-[#F5EFE6] hover:bg-[#E8DFC8] text-[#8C6D53] border border-[#E0D7C9] transition-all hover:border-[#8C6D53]"
              title={`Call ${STORE_INFO.displayPhone}`}
              aria-label="Call Store"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl("Hi BUY & BYE, I'm checking your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn-sandal inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-full bg-[#8C6D53] hover:bg-[#72543E] text-white shadow-md shadow-[#8C6D53]/20 transition-all active:scale-95"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            {onSearchClick && (
              <button
                onClick={onSearchClick}
                className="p-2 rounded-full bg-[#F5EFE6] border border-[#E0D7C9] text-[#8C6D53]"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#F5EFE6] border border-[#E0D7C9] text-[#1C1917]"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#8C6D53]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DFC8] bg-[#FAF7F2] px-5 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#3D3731] hover:text-[#8C6D53] hover:bg-[#F5EFE6] rounded-xl transition-all text-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E8DFC8]">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#F5EFE6] border border-[#D4C3B3] text-[#1C1917] text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C6D53]" />
              Call Store
            </a>
            <a
              href={getWhatsAppUrl("Hi BUY & BYE, I'd like to check product availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#8C6D53] text-white text-xs font-bold shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};
