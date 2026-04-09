export interface NavItem {
  name: string;
  href: string;
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
  accentColor: string; // Tailwind color class or hex
  imagePath: string;
  category: string;
  
  // Strategic Intelligence
  strategicRole: string;
  repeatLogic: string;
  channelFit: string[];
  operatorNote: string;
  themeColor: string; // Hex for atmospheric glows
  
  // PDP Specific Intelligence
  productThesis: string;
  consumerJobToBeDone: string;
  repeatTriggers: string[];
  
  // Strategy OS Overlays
  portfolioClassification: 'Hero' | 'Repeat' | 'Wedge' | 'Support' | 'Indulgence';
  riskLevel: 'Low' | 'Moderate' | 'High';
  expansionCaution: string;
  cannibalizationRisk: string;
  strategicWeight: number; // 1-100 vis mapping value
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
  themeColor: string; // Thematic glow color
  bestFitProductIds: string[]; // Linked SKU IDs
}

export interface Module {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  targetUser: string;
  badge: string;
  
  // Intelligence Signals
  founderQuestion: string;
  coreSignals: { label: string; value: string }[];
  themeColor: string; // Thematic glow color
  isFeatured?: boolean; // Determines layout weight in the grid
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
  manifesto: {
    heading: string;
    body: string;
  };
}

export interface FormatEconomics {
  id: string;
  formatName: string;
  economicIntensity: 'Low' | 'Moderate' | 'Severe';
  repeatRequirement: 'Low' | 'Moderate' | 'Critical';
  packagingBurden: string;
  shippingRisk: string;
  discountFragility: string;
  heroViability: boolean;
  themeColor: string;
}

export interface ChannelProfile {
  id: string;
  channelName: string;
  dominantBehavior: string;
  discoveryMode: string;
  packArchitecture: string;
  repeatMechanism: string;
  pricingPressure: string;
  operatorWarning: string;
  bestFitFormats: string[];
  themeColor: string;
}

export interface ConsumerArchetype {
  id: string;
  title: string;
  emotionalDrive: string;
  primaryFear: string;
  winningMessage: string;
  failureMessage: string;
  trustSignal: string;
  themeColor: string;
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

export interface PackagingTrustMode {
  id: string;
  modeName: string;
  primarySignal: string;
  trustBuilt: string;
  confusionRisk: string;
  bestChannel: string;
  themeColor: string;
}

export interface DigestibilityProfile {
  id: string;
  concern: string;
  consumerFear: string;
  resolutionSignal: string;
  failureImpact: string;
}

export interface FlavorStrategyMode {
  id: string;
  modeName: string;
  emotionalResponse: string;
  repeatLikelihood: 'Low' | 'Moderate' | 'High' | 'Baseline Anchor';
  trustBurden: string;
  formatFit: string[];
  failureMode: string;
  themeColor: string;
}

export interface ExpansionOpportunity {
  id: string;
  conceptName: string;
  classification: 'Core Deepening' | 'Near Adjacency' | 'Strategic Stretch' | 'Dangerous Premature';
  consumerProblemSolved: string;
  trustTransfer: string;
  formatLogic: string;
  repeatPotential: string;
  complexityBurden: string;
  failureMode: string;
  themeColor: string;
}
