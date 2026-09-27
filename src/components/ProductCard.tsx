import React, { useState } from 'react';
import { MessageCircle, Tag, Heart, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/constants';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const whatsappUrl = getProductWhatsAppUrl(product.name, product.category);

  return (
    <div
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E0D7C9] hover:border-[#8C6D53] transition-all duration-500 hover:shadow-2xl hover:shadow-[#8C6D53]/15 text-left"
      id={`product-card-${product.id}`}
    >
      {/* Long Photo Banner Box (Static image, non-clickable) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2] select-none">
        <img
          src={product.image}
          alt={`${product.name} - BUY & BYE Menswear`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

        {/* Top Badges & Heart */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 text-[10px] font-extrabold tracking-wider uppercase bg-[#8C6D53] text-white rounded-lg shadow-md">
              {product.category}
            </span>
            {product.tag && (
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase bg-white/90 text-[#1C1917] backdrop-blur-md rounded-lg shadow-sm">
                {product.tag}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 rounded-full backdrop-blur-xl transition-all ${
              isLiked
                ? 'bg-[#8C6D53] text-white shadow-md'
                : 'bg-white/80 text-[#6B635B] hover:text-[#8C6D53] border border-[#E0D7C9]'
            }`}
            aria-label="Wishlist item"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Clothes Name Overlay on Photo Banner */}
        <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5 text-left">
          <h3 className="font-serif-title font-bold text-xl sm:text-2xl text-white group-hover:text-[#F5EFE6] transition-colors leading-snug">
            {product.name}
          </h3>
          
          {product.fitting && (
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#E6C687] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
              Fit: {product.fitting}
            </span>
          )}
        </div>
      </div>

      {/* Card Content Details & Enquire CTA */}
      <div className="p-5 space-y-4 text-left bg-white">
        {product.description && (
          <p className="text-xs text-[#6B635B] font-light line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E958C]">Sizes:</span>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#FAF7F2] text-[#4A433D] border border-[#E0D7C9]"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Enquire CTA Button (No price displayed) */}
        <div className="pt-2 border-t border-[#EFEBE4]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn-sandal w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
            id={`product-whatsapp-${product.id}`}
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
