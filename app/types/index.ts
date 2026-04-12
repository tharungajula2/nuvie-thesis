export interface NavItem {
  name: string;
  href: string;
  isFoundation?: boolean;
  children?: NavItem[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  format: 'Coffee' | 'Bar' | 'Drink' | 'Supplement';
  heroDescriptor: string;
  operatorDescription: string;
  primaryOccasion: string;
  accentColor: string;
  imagePath: string;
  category: string;
  
  // Strategic Intelligence
  strategicRole: string;
  repeatLogic: string;
  channelFit: string[];
  operatorNote: string;
  themeColor: string;
  
  // Thesis Journey Overlays
  portfolioClassification: 'Hero' | 'Repeat' | 'Wedge' | 'Support' | 'Indulgence';
  riskLevel: 'Low' | 'Moderate' | 'High';
  expansionCaution: string;
  cannibalizationRisk: string;
  strategicWeight: number;
}

export interface Occasion {
  id: string;
  title: string;
  humanDescription: string;
  behavioralState: string;
  winningFormat: string;
  messageThatWorks: string;
  repeatTrigger: string;
  channelEdge: string;
  riskFriction: string;
  themeColor: string;
  bestFitProductIds: string[];
}

export interface HeroChapter {
  id: string;
  eyebrow: string;
  title: string;
  body?: string | null;
  occasionTags?: string[];
  formula?: string[];
  cta?: { label: string; href?: string; type: 'scroll-cue' | 'primary' | 'outline' };
}

export interface SiteContent {
  name: string;
  tagline: string;
  description: string;
  hero: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  heroChapters: HeroChapter[];
  manifesto: {
    heading: string;
    body: string;
  };
  whyIBuiltThis: {
    heading: string;
    body: string;
  };
  understanding: {
    heading: string;
    points: { title: string; body: string }[];
  };
  usefulness: {
    heading: string;
    strengths: { title: string; body: string }[];
  };
  connection: {
    heading: string;
    body: string;
    cta: { label: string; href: string };
  };
}

export interface GrowthMessageFit {
  id: string;
  framingName: string;
  primaryHook: string;
  bestOccasionId: string;
  failureMode: string;
  repeatTrigger: string;
  trustRequirement: string;
  themeColor: string;
}

export interface SummerConcept {
  id: string;
  name: string;
  descriptor: string;
  strategicRole: string;
  logic: string;
  classification: 'Trial-Driven' | 'Repeat Candidate' | 'Cultural Wedge' | 'Premium Stretch' | 'Seasonal Hero';
  imagePath: string;
  themeColor: string;
}
