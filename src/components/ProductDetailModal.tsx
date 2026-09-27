import React, { useState } from 'react';
import { X, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO, getProductWhatsAppUrl } from '../utils/constants';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '');

  const whatsappUrl = getProductWhatsAppUrl(
    selectedSize ? `${product.name} (Size: ${selectedSize})` : product.name,
    product.category
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1917]/75 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >

      <div
        className="relative w-full max-w-2xl bg-white border border-[#E0D7C9] rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#FAF7F2] text-[#1C1917] hover:text-[#8C6D53] border border-[#E0D7C9] shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Details & WhatsApp Action */}
        <div className="flex flex-col justify-between overflow-y-auto text-left space-y-6 pt-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D53]">
                {product.category}
              </span>
              {product.fitting && (
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded bg-[#F5EFE6] text-[#6B635B] border border-[#E0D7C9]">
                  {product.fitting}
                </span>
              )}
            </div>

            <h2 id="modal-product-title" className="font-serif-title font-bold text-2xl sm:text-3xl text-[#1C1917]">
              {product.name}
            </h2>

            {product.price && (
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-3xl font-bold text-[#8C6D53]">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-base text-[#9E958C] line-through font-medium">
                    {product.originalPrice}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                  In-Stock
                </span>
              </div>
            )}

            {product.description && (
              <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed font-light">
                {product.description}
              </p>
            )}

            {/* Spec breakdown */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E0D7C9] text-xs">
              {product.fitting && (
                <div>
                  <span className="text-[#9E958C] block text-[10px] uppercase font-bold">Fit Silhouette</span>
                  <span className="text-[#1C1917] font-semibold">{product.fitting}</span>
                </div>
              )}
              {product.fabric && (
                <div>
                  <span className="text-[#9E958C] block text-[10px] uppercase font-bold">Fabric Blend</span>
                  <span className="text-[#1C1917] font-semibold">{product.fabric}</span>
                </div>
              )}
            </div>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[#8C6D53] uppercase tracking-wider block mb-2">
                  Select Size to Reserve:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all border ${
                        selectedSize === s
                          ? 'bg-[#8C6D53] text-white border-[#8C6D53] shadow-md'
                          : 'bg-[#FAF7F2] text-[#4A433D] border-[#E0D7C9] hover:border-[#D4C3B3]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <span className="text-xs text-[#6B635B] block mb-1">Available Colors:</span>
                <div className="text-xs text-[#1C1917] font-medium">
                  {product.colors.join(' • ')}
                </div>
              </div>
            )}

            <div className="p-3 rounded-xl bg-[#F5EFE6] border border-[#D4C3B3] text-xs text-[#6B635B] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8C6D53] flex-shrink-0" />
              <span>Available for immediate trial &amp; purchase at 300 JN Street, Puducherry.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#EFEBE4] flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn-sandal w-full flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl bg-[#8C6D53] hover:bg-[#72543E] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire &amp; Reserve Size {selectedSize} on WhatsApp</span>
            </a>

            <div className="flex gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#1C1917] text-xs font-bold border border-[#E0D7C9] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C6D53]" />
                <span>Call Store</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#1C1917] text-xs font-bold border border-[#E0D7C9] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C6D53]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
