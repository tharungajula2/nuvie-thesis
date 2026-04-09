import { FlavorStrategyMode } from '../types';

export const flavorStrategyModes: FlavorStrategyMode[] = [
  {
    id: 'mode-clean-staple',
    modeName: 'Clean Vanilla Staple',
    emotionalResponse: 'Safety, routine, and utility. It feels like a core ingredient rather than a treat.',
    repeatLikelihood: 'Baseline Anchor',
    trustBurden: 'Must mix perfectly. If it clumps, the utility is broken.',
    formatFit: ['Protein Powder', 'RTD Shake'],
    failureMode: 'Failing to become a pantry staple. If it is too sweet, it cannot be mixed with fruit or coffee daily.',
    themeColor: '#F3E5AB', // Vanilla Cream
  },
  {
    id: 'mode-dessert-coded',
    modeName: 'Dessert-Coded Indulgence',
    emotionalResponse: 'Reward, guilt-free pleasure, and craving satisfaction.',
    repeatLikelihood: 'High',
    trustBurden: 'Cannot have a chemical aftertaste. It must actually taste like the dessert it mimics (e.g., Brownie, Fudge).',
    formatFit: ['Extruded Bar', 'RTD Shake'],
    failureMode: 'Sensory fatigue. If it is too rich, the consumer will only buy it once a month instead of daily.',
    themeColor: '#4A2311', // Deep Cocoa
  },
  {
    id: 'mode-ritual-coffee',
    modeName: 'Ritual Coffee Hybrid',
    emotionalResponse: 'Awakening, necessity, and familiar comfort.',
    repeatLikelihood: 'Baseline Anchor',
    trustBurden: 'Must compete directly with the consumer\'s existing café benchmark. If it tastes like fake coffee syrup, they will reject it.',
    formatFit: ['RTD Shake', 'Cold Brew Mix'],
    failureMode: 'Positioning it as an afternoon snack instead of a morning replacement.',
    themeColor: '#3E2723', // Espresso
  },
  {
    id: 'mode-cultural-familiarity',
    modeName: 'Regional Familiarity (e.g., Kesar Pista)',
    emotionalResponse: 'Nostalgia, festive premiumness, and deep cultural trust.',
    repeatLikelihood: 'Moderate',
    trustBurden: 'Must feel authentic, not artificial. The saffron/pistachio notes must taste like real ingredients, not synthetic isolates.',
    formatFit: ['Powder', 'RTD Shake'],
    failureMode: 'Over-indexing on sweetness, turning a premium cultural flavor into cheap street-candy.',
    themeColor: '#E4A010', // Saffron / Gold
  },
  {
    id: 'mode-high-risk-novelty',
    modeName: 'High-Risk Novelty (LTOs)',
    emotionalResponse: 'Curiosity, FOMO, and Instagram-worthy excitement.',
    repeatLikelihood: 'Low',
    trustBurden: 'The flavor must be visually stunning or jarring enough to warrant a social media post.',
    formatFit: ['Extruded Bar', 'Wafer'],
    failureMode: 'Manufacturing too much. Novelty is an acquisition tool; it is not meant to hold a permanent shelf slot.',
    themeColor: '#800080', // Sharp Purple
  }
];
