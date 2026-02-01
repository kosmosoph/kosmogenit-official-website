// Export TourDate, MerchItem, and NewsItem types
export interface TourDate {
  id: string;
  date: Date;
  venue: string;
  city: string;
  country: string;
  ticketUrl?: string;
  isSoldOut: boolean;
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  storeUrl?: string; // Opcionalno - može biti na sajtu ili eksterni link
  category: "clothing" | "music" | "accessories";
  isAvailable: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  imageUrl?: string;
  readMoreUrl?: string;
  category: "release" | "tour" | "interview" | "general";
}
