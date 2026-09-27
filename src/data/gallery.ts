import { GalleryItem } from '../types';

/**
 * STORE GALLERY DATA
 * ℹ️ CLIENT INSTRUCTION:
 * Swap these URLs with actual photos of the BUY & BYE storefront, entrance, interior racks,
 * and reel videos taken at 300, Jawaharlal Nehru St, Puducherry.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Men’s Smart Casual Outfits',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80',
    caption: 'Curated menswear displays and neatly organized fit sections inside BUY & BYE, Puducherry.',
    type: 'image',
  },
  {
    id: 'gal-2',
    title: 'Modern Tailored Jackets & Shirts',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Welcoming menswear collection at 300, Jawaharlal Nehru St, Illango Nagar.',
    type: 'image',
  },
  {
    id: 'gal-3',
    title: 'Linen & Printed Shirt Collection',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Rich fabrics, camp collars, and contemporary shirt patterns for any occasion.',
    type: 'image',
  },
  {
    id: 'gal-4',
    title: 'Heavyweight Tee Showcase [Reel]',
    category: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1503341733017-1901578f9f1e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Quick fit check & fabric drape video clip of our drop-shoulder tee drop.',
    type: 'video',
    duration: '0:18',
  },
  {
    id: 'gal-5',
    title: 'Denim Wall & Jeans Stack',
    category: 'collections',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1200&q=80',
    caption: 'Every cut and wash in stock: skinny, slim, straight, baggy, and relaxed fits.',
    type: 'image',
  },
  {
    id: 'gal-6',
    title: 'Festive Wear & Ethnic Display',
    category: 'collections',
    image: 'https://images.unsplash.com/photo-1727835523545-70ee992b5763?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebration-ready traditional attire tailored for modern attitudes.',
    type: 'image',
  },
  {
    id: 'gal-7',
    title: 'Fresh Weekend Drops On The Racks',
    category: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80',
    caption: 'New styles arriving weekly so you always discover fresh looks at honest prices.',
    type: 'image',
  },
  {
    id: 'gal-8',
    title: 'Fitting Zone & Mirror Check [Reel]',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comfortable trial rooms and helpful assistance to find your precise size.',
    type: 'video',
    duration: '0:24',
  },
];
