import React, { useState, useMemo } from 'react';
import { Sparkles, Search, MessageCircle, ArrowRight, X, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { getWhatsAppUrl } from '../utils/constants';

interface NewArrivalsProps {
  onQuickView: (product: Product) => void;
  selectedCategoryFilter?: string | null;
  onClearCategoryFilter?: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  onQuickView,
  selectedCategoryFilter,
  onClearCategoryFilter,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Catalogue' },
    { id: 'Shirts', label: 'Shirts' },
    { id: 'T-Shirts', label: 'T-Shirts' },
    { id: 'Jeans', label: 'Jeans' },
    { id: 'Trousers', label: 'Trousers' },
    { id: 'Formal Wear', label: 'Formal' },
    { id: 'Traditional / Ethnic Wear', label: 'Ethnic' },
  ];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (selectedCategoryFilter) {
      list = list.filter(
        (p) => p.category.toLowerCase() === selectedCategoryFilter.toLowerCase()
      );
    } else if (activeTab !== 'all') {
      list = list.filter((p) => p.category === activeTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.tag && p.tag.toLowerCase().includes(q)) ||
          (p.fabric && p.fabric.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeTab, selectedCategoryFilter, searchQuery]);

  return (
    <section id="new-arrivals" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8] scroll-mt-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#1C1917] text-[#E6C687] border border-[#3D3731]">
              ⚡ EXCLUSIVE SHOWROOM COLLECTION
            </div>
            <h2 className="font-serif-title font-bold tracking-tight text-[#1C1917] uppercase text-4xl sm:text-5xl md:text-6xl">
              NEW <span className="text-[#8C6D53] italic font-serif-title">ARRIVALS</span>
            </h2>
            <p className="text-base text-[#6B635B] font-light">
              Fresh weekly menswear drops &amp; curated style edits.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hi BUY & BYE, can you share photos or updates on your latest arrivals this week?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D4C3B3] hover:bg-[#F5EFE6] text-[#8C6D53] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-[#8C6D53]/20" />
            <span>Ask for Latest In-Stock Photos</span>
          </a>
        </div>

        {/* Catalogue Section Header */}
        <div id="catalogue-items-grid" className="scroll-mt-16 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input Box */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C6D53]" />
              <input
                type="text"
                placeholder="Search by shirt name, denim fit, fabric..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-[#E0D7C9] text-sm text-[#1C1917] placeholder-[#9E958C] focus:outline-none focus:border-[#8C6D53] transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B635B] hover:text-[#1C1917]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Count Pill */}
            <div className="px-4 py-3.5 rounded-xl bg-white border border-[#E0D7C9] text-xs text-[#6B635B] flex items-center justify-between sm:justify-start gap-2 whitespace-nowrap font-medium shadow-sm">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C6D53]" />
              <span>Showing <strong className="text-[#8C6D53] font-bold">{filteredProducts.length}</strong> items</span>
            </div>
          </div>

          {/* Selected Category Alert */}
          {selectedCategoryFilter ? (
            <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] flex items-center justify-between gap-4">
              <span className="text-xs text-[#6B635B]">
                Filtered Category: <strong className="text-[#1C1917] uppercase font-bold">{selectedCategoryFilter}</strong>
              </span>
              <button
                onClick={onClearCategoryFilter}
                className="text-xs font-bold text-[#8C6D53] hover:underline flex items-center gap-1"
              >
                Clear Filter <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Category Tabs Bar */
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth" role="tablist">
              {categories.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`px-4.5 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all uppercase tracking-wider ${
                      isActive
                        ? 'bg-[#8C6D53] text-white shadow-md shadow-[#8C6D53]/20'
                        : 'bg-white text-[#6B635B] hover:text-[#1C1917] hover:bg-[#F5EFE6] border border-[#E0D7C9]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E0D7C9] shadow-sm">
            <p className="text-[#6B635B] text-sm">No items matching your search criteria.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
                if (onClearCategoryFilter) onClearCategoryFilter();
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#8C6D53] text-white font-bold text-xs shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Bottom Inventory Banner */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-[#E0D7C9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B635B]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8C6D53] animate-pulse"></span>
            <span className="text-[#3D3731] font-medium">
              Can't find a specific pattern or size? We carry 500+ items live inside our Jawaharlal Nehru St store.
            </span>
          </div>
          <a
            href={getWhatsAppUrl("Hi BUY & BYE, do you have more options available at your store right now?")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C6D53] hover:text-[#6E5038] font-bold flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Ask Store Inventory</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
