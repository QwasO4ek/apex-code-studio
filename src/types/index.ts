export type ProjectCategory = 'all' | 'medtech' | 'construction' | 'beauty' | 'auto';

export interface KillerFeature {
  title: string;
  desc: string;
  iconName: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTemplate {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  category: 'medtech' | 'construction' | 'beauty' | 'auto';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullDescription: string;
  liveUrl: string;
  githubUrl: string;
  previewImage: string;
  highlights: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  killerFeatures: KillerFeature[];
  implementationDays: string;
  basePrice: string;
  themeColor: string;
  accentBg: string;
}

export interface CalculatorPackage {
  id: string;
  name: string;
  tag: string;
  price: number;
  days: number;
  description: string;
  popular?: boolean;
}

export interface CalculatorModule {
  id: string;
  name: string;
  desc: string;
  price: number;
  days: number;
  recommendedFor?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  skills: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}