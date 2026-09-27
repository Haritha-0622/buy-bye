import { EditorialLook } from '../types';

export const EDITORIAL_LOOKS: EditorialLook[] = [
  {
    id: 'look-1',
    title: 'Weekend-ready fits.',
    statement: 'Easy silhouettes, breathable cottons, and relaxed drape for effortless coastal weekends.',
    tag: 'Casual Living',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80',
    recommendedCategory: 'Casual Wear',
    featuredProducts: [
      { name: 'Cuban Collar Resort Shirt', type: 'Shirts' },
      { name: 'Vintage Tint Relaxed Jeans', type: 'Jeans' },
    ],
  },
  {
    id: 'look-2',
    title: 'Sharp formal styles.',
    statement: 'Clean shoulder cuts and crisp tailoring designed to make a commanding first impression.',
    tag: 'Boardroom to Evening',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&q=80',
    recommendedCategory: 'Formal Wear',
    featuredProducts: [
      { name: 'Modern Tailored Blazer', type: 'Formal Wear' },
      { name: 'Pleated Stretch Chinos', type: 'Trousers' },
    ],
  },
  {
    id: 'look-3',
    title: 'Everyday essentials.',
    statement: 'High-density heavyweight tees and versatile trousers built for relentless daily rotation.',
    tag: 'Daily Rotation',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    recommendedCategory: 'T-Shirts',
    featuredProducts: [
      { name: 'Heavyweight Drop-Shoulder Tee', type: 'T-Shirts' },
      { name: 'Utility Trousers', type: 'Trousers' },
    ],
  },
  {
    id: 'look-4',
    title: 'Traditional looks, modern attitude.',
    statement: 'Subtle textures, contemporary cuts, and rich Indian silhouettes reinvented for today’s man.',
    tag: 'Festive & Weddings',
    image: 'https://images.unsplash.com/photo-1727835523545-70ee992b5763?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80',
    recommendedCategory: 'Traditional / Ethnic Wear',
    featuredProducts: [
      { name: 'Festive Slub Mandarin Outfit', type: 'Ethnic' },
      { name: 'Structured Modi Waistcoat', type: 'Ethnic' },
    ],
  },
];
