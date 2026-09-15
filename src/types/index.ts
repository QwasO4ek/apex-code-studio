export interface ProjectTemplate {
  id: string;
  title: string;
  shortTitle: string;
  category: 'construction' | 'auto' | 'dental' | 'beauty';
  categoryLabel: string;
  tagline: string;
  description: string;
  features: string[];
  liveUrl: string;
  previewImage: string;
  tech: string[];
  badge: string;
  days: string;
  price: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  days: string;
  description: string;
  features: string[];
  popular?: boolean;
}