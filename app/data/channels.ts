import { ChannelProfile } from '../types';

export const channelProfiles: ChannelProfile[] = [
  {
    id: 'd2c',
    channelName: 'D2C Subscription',
    dominantBehavior: 'Planned Routine / Pantry Stocking',
    discoveryMode: 'High-friction ad conversion. Requires deep brand trust and high intent.',
    packArchitecture: 'Bulk / Multi-case (12-24 Packs) to offset heavy liquid fulfillment costs.',
    repeatMechanism: 'Automated subscription cycles tied to daily ritual anchors (e.g., Morning Coffee).',
    pricingPressure: 'Low pressure on margins compared to retail, but high CPA (Cost Per Acquisition) barrier.',
    operatorWarning: 'Selling single RTD shakes D2C is an economic death wish. Only push bulk subscriptions or light-weight sampling kits.',
    bestFitFormats: ['RTD Shake', 'Protein Coffee'],
    themeColor: '#D4AF37', // Gold / Core viability
  },
  {
    id: 'quick-commerce',
    channelName: 'Quick Commerce (10-min)',
    dominantBehavior: 'Occasion Rescue / Instant Impulse',
    discoveryMode: 'Visual thumbnail dominance. If the label isn\'t readable on a 3-inch screen, it does not exist.',
    packArchitecture: 'Single-serve cold RTD or individual wrapped bars.',
    repeatMechanism: 'Habitual situational reliance (e.g., 3 PM office slump, pre-workout rush).',
    pricingPressure: 'Extreme. Dark stores demand 35-45% margins. This is an acquisition channel, not a cash-cow.',
    operatorWarning: 'If a Q-commerce user doesn\'t migrate to your D2C subscription after the 3rd purchase, you are leaking margin permanently.',
    bestFitFormats: ['RTD Shake', 'Extruded Bar'],
    themeColor: '#B8860B', // Darker Gold/Amber - Urgency
  },
  {
    id: 'modern-trade',
    channelName: 'Modern Retail / Supermarkets',
    dominantBehavior: 'Familiarity Anchor / Weekly Haul',
    discoveryMode: 'Shelf adjacency. You are judged entirely by the brand you sit next to.',
    packArchitecture: '4-Packs for RTD, single-unit cardboard displays for bars.',
    repeatMechanism: 'Weekly grocery alignment. Slower velocity but high stability.',
    pricingPressure: 'High. Slotting fees, distributor cuts, and mandatory promotional discounting erode margins.',
    operatorWarning: 'Retail is a billboard you get paid (slightly) for. Do not enter until D2C cash flow can support the working capital drag of a 60-day payment term.',
    bestFitFormats: ['Protein Coffee', 'Extruded Bar'],
    themeColor: '#2E4A35', // Deep Green / Retail Shelf
  },
  {
    id: 'office-pantry',
    channelName: 'Office / Corporate Pantry',
    dominantBehavior: 'Frictionless Snacking / Habitual Reach',
    discoveryMode: 'Curiosity on the company dime. Lowest friction trial environment possible.',
    packArchitecture: 'Bulk master-cartons of single-serve items.',
    repeatMechanism: 'Daily ritual. The consumer does not pay, so retention is 100% until the HR manager cuts the budget.',
    pricingPressure: 'B2B volume discounting applies, but zero customer acquisition cost (CAC).',
    operatorWarning: 'A brilliant place to scale bars. Liquids take up too much premium fridge estate in small corporate offices.',
    bestFitFormats: ['Extruded Bar', 'Protein Coffee'],
    themeColor: '#1A1A1A', // Graphite / Corporate Desk
  }
];
