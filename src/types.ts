export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: string | number;
  originalPrice?: string | number;
  sizes: string[];
  colors?: string[];
  description?: string;
  featured?: boolean;
  newArrival?: boolean;
  fitting?: string;
  fabric?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'products' | 'new-arrivals' | 'collections';
  image: string;
  caption: string;
  type: 'image' | 'video';
  duration?: string;
}

export interface EditorialLook {
  id: string;
  title: string;
  statement: string;
  tag: string;
  image: string;
  secondaryImage?: string;
  recommendedCategory: string;
  featuredProducts: {
    name: string;
    type: string;
  }[];
}
