import { ExpansionOpportunity } from '../types';

export const expansionOpportunities: ExpansionOpportunity[] = [
  {
    id: 'exp-breakfast-bottles',
    conceptName: 'Morning/Breakfast RTD Ritual',
    classification: 'Core Deepening',
    consumerProblemSolved: 'Replacing a skipped breakfast with high convenience, low guilt, and sustained energy.',
    trustTransfer: 'Extremely High. Relies entirely on the existing Coffee and Vanilla architectures already proven in the market.',
    formatLogic: 'RTD Bottle. Must be visually distinct from "gym shakes" and coded for morning utility.',
    repeatPotential: 'Maximum Daily Habit',
    complexityBurden: 'Low. Repackaging existing IP into a dedicated day-part focus.',
    failureMode: 'Failing to establish the caffeine/energy component clearly, stranding it between a coffee and a snack.',
    themeColor: '#CDA434', // Morning Amber
  },
  {
    id: 'exp-pantry-packs',
    conceptName: 'Office / Household Multi-Packs',
    classification: 'Near Adjacency',
    consumerProblemSolved: 'Solving the "I ran out" friction point for existing loyalists.',
    trustTransfer: 'High. Trading on established LTV metrics.',
    formatLogic: '12-pack cartons, 2KG bulk tubs.',
    repeatPotential: 'Monthly Anchor',
    complexityBurden: 'Moderate. Serious D2C logistics and shipping weight challenges. Margins get eaten by couriers if not priced correctly.',
    failureMode: 'Cannibalizing high-margin single-serve retail sales by shifting users to discounted bulk too early in the lifecycle.',
    themeColor: '#1A1A1A', // Graphite Structure
  },
  {
    id: 'exp-spoonable-yogurt',
    conceptName: 'High-Protein Spoonable (Yogurt/Mousse)',
    classification: 'Strategic Stretch',
    consumerProblemSolved: 'Nighttime dessert cravings / afternoon sensory fatigue with liquids.',
    trustTransfer: 'Moderate. Protein companies historically struggle to make non-rubbery spoonables.',
    formatLogic: 'Chilled tubs. Immediate shift into cold-chain logistics.',
    repeatPotential: 'Strong Weekly',
    complexityBurden: 'Severe. Cold-chain distribution in India is notoriously fragmented and expensive.',
    failureMode: 'Product spoiling on retail shelves. The brand cannot control the last-mile cooler temperature.',
    themeColor: '#3B2F2F', // Deep Plum
  },
  {
    id: 'exp-kiosk-cafe',
    conceptName: 'Physical Kiosk / Brand Café',
    classification: 'Strategic Stretch',
    consumerProblemSolved: 'Building high-trust physical community, tactical sampling, and brand theater.',
    trustTransfer: 'High, but requires flawless barista-level execution.',
    formatLogic: 'Physical Real Estate (Corporate parks, high-end gyms).',
    repeatPotential: 'Variable (Location Dependant)',
    complexityBurden: 'Extreme. Shifts the company from CPG into Hospitality/Retail Operations.',
    failureMode: 'Treating the kiosk as a profit center instead of an acquisition channel, leading to corner-cutting on quality and brand damage.',
    themeColor: '#4A3B2C', // Dim Cafe Glow
  },
  {
    id: 'exp-savory-snacks',
    conceptName: 'Savory Protein Snacks (Chips/Puffs)',
    classification: 'Dangerous Premature',
    consumerProblemSolved: 'Replacing junk food with high-protein utility during movie/couch occasions.',
    trustTransfer: 'Zero. Sweet RTD trust does not transfer to savory extrusion capabilities.',
    formatLogic: 'Nitrogen-flushed bags.',
    repeatPotential: 'Low (High churn due to texture mapping).',
    complexityBurden: 'High. Completely different manufacturing line, different shelf placement, different flavor science.',
    failureMode: 'Diluting the core "indulgent/clean" brand equity by associating the logo with dusty, artificial-tasting pseudo-chips.',
    themeColor: '#8B0000', // Dark Crimson Warning
  }
];
