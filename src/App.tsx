import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewArrivals } from './components/NewArrivals';
import { FeaturedCollection } from './components/FeaturedCollection';
import { Reviews } from './components/Reviews';
import { ValueShowcase } from './components/ValueShowcase';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { VisitStore } from './components/VisitStore';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategoryFilter(categoryName);
    const target = document.querySelector('#new-arrivals');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearCategoryFilter = () => {
    setSelectedCategoryFilter(null);
  };

  const handleShopClick = () => {
    setSelectedCategoryFilter(null);
    const target = document.querySelector('#new-arrivals');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    const target = document.querySelector('#new-arrivals');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      const input = target.querySelector('input');
      if (input) {
        setTimeout(() => input.focus(), 400);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col selection:bg-[#D4C3B3] selection:text-[#1C1917] pb-16 md:pb-0">
      {/* 1. BRAND: BUY & BYE */}
      <Navbar onSearchClick={handleSearchClick} />

      {/* Main Ordered Flow */}
      <main className="flex-grow">
        {/* 2. PROMISE: LOOK RICH. SPEND LESS. */}
        <Hero onShopClick={handleShopClick} />

        {/* 3. PRODUCT: NEW ARRIVALS */}
        <NewArrivals
          onQuickView={(product) => setSelectedProduct(product)}
          selectedCategoryFilter={selectedCategoryFilter}
          onClearCategoryFilter={handleClearCategoryFilter}
        />

        {/* 5. INSPIRATION: THE BUY & BYE EDIT */}
        <FeaturedCollection onSelectLookCategory={handleSelectCategory} />

        {/* 6. SOCIAL PROOF / PRODUCTS: BESTSELLERS */}
        <Reviews />

        {/* 7. VALUE: LOOK GOOD. SPEND LESS. (EVERYTHING UNDER ₹99 - ₹499) */}
        <ValueShowcase />

        {/* 8. TRUST: WHY BUY & BYE? */}
        <WhyUs />
        <About />

        {/* 9. SOCIAL: INSTAGRAM */}
        <Gallery />

        {/* 10. PHYSICAL STORE: COME SAY HELLO */}
        <VisitStore />
        <Contact />

        {/* 11. CONVERSION: YOUR NEXT LOOK STARTS HERE. */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Action Bar */}
      <FloatingActions />

      {/* Product Detail Quick View Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
