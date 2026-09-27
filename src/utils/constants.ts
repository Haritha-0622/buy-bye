export const STORE_INFO = {
  name: 'BUY & BYE',
  tagline: 'Look Rich. Spend Less.',
  category: "Men's Clothing Store",
  address: '300, Jawaharlal Nehru St, Illango Nagar, Puducherry – 605001, India',
  shortAddress: '300, Jawaharlal Nehru St, Puducherry',
  landmark: 'Jawaharlal Nehru Street, Illango Nagar',
  city: 'Puducherry',
  pincode: '605001',
  phone: '9487835324',
  displayPhone: '+91 94878 35324',
  whatsappNumber: '9487835324',
  whatsappCountryCode: '91',
  email: 'buynbyemenswear@gmail.com',
  instagramHandle: 'buynbye_mensclothing',
  instagramUrl: 'https://www.instagram.com/buynbye_mensclothing',
  facebookName: 'Buy N Bye',
  facebookUrl: 'https://www.facebook.com/search/top?q=Buy%20N%20Bye%20Puducherry',
  googleMapsUrl: 'https://maps.app.goo.gl/GCNn1De14gN2K3NC9',
  businessHours: '10:00 AM – 10:00 PM',
  businessDays: 'Open Daily',
  rating: 4.9,
  reviewsCount: 21,
  aboutSummary:
    'BUY & BYE is a men’s clothing store in Puducherry bringing together stylish, quality clothing at affordable prices. From everyday casuals to formal and traditional styles, we make it easy to find looks that fit your style and your budget.',
};

export const getWhatsAppUrl = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_INFO.whatsappCountryCode}${STORE_INFO.whatsappNumber}?text=${encoded}`;
};

export const getProductWhatsAppUrl = (productName: string, category?: string): string => {
  const text = `Hi BUY & BYE, I'm interested in ${productName}${category ? ` (${category})` : ''}. Could you please share the availability and details?`;
  return getWhatsAppUrl(text);
};

export const getStoreVisitWhatsAppUrl = (): string => {
  return getWhatsAppUrl(
    `Hi BUY & BYE, I'm planning to visit your store at Jawaharlal Nehru St, Puducherry. Are you open right now and what are the latest arrivals available?`
  );
};
