import { ConsumerArchetype, GrowthMessageFit } from '../types';

export const consumerArchetypes: ConsumerArchetype[] = [
  {
    id: 'sweet-seeker',
    title: 'The Sweet-Craving Swap',
    emotionalDrive: 'Wants to indulge a 4 PM sugar craving without the guilt or the insulin crash.',
    primaryFear: 'That it will taste like chalky protein powder and fail to actually satisfy the craving.',
    winningMessage: '"Dessert macros you can drink. 0g Sugar. 20g Protein."',
    failureMessage: '"Fuel your muscles for maximum performance."',
    trustSignal: 'Visual texture (pouring, thickness), flavor branding, and blind taste-test UGC.',
    themeColor: '#722F37', // Indulgent Mauve
  },
  {
    id: 'busy-professional',
    title: 'The Busy Professional',
    emotionalDrive: 'Wants frictionless nutrition that prevents decision fatigue during high-stress work hours.',
    primaryFear: 'The product will be inconvenient to carry, require cleanup, or upset their stomach before a meeting.',
    winningMessage: '"Breakfast in 10 seconds. Keeps you full until 2 PM."',
    failureMessage: '"Get thick. Build mass."',
    trustSignal: 'Clean minimalist packaging, "office desk" aesthetic photography, founder/operator endorsements.',
    themeColor: '#4A4232', // Neutral Clay
  },
  {
    id: 'ritual-disruptor',
    title: 'The Coffee Habitual',
    emotionalDrive: 'Needs caffeine to function. Open to adding health benefits if it doesn\'t ruin the coffee experience.',
    primaryFear: 'It won\'t actually taste like coffee, or it won\'t have enough caffeine to wake them up.',
    winningMessage: '"Your morning iced coffee, now with 20g of protein."',
    failureMessage: '"A protein shake with a hint of coffee flavor."',
    trustSignal: 'Barista-quality aesthetic, latte-art visuals, "real espresso" ingredient callouts.',
    themeColor: '#3E2723', // Espresso
  },
  {
    id: 'gym-first',
    title: 'Functional Optimizer',
    emotionalDrive: 'Treats nutrition as purely functional logic. Maximizing protein-to-calorie ratios.',
    primaryFear: 'Hidden sugars, amino-spiking, or "fake" bloated marketing claiming false benefits.',
    winningMessage: '"25g Isolate. 110 Calories. Zero Fillers."',
    failureMessage: '"A delicious treat for your tastebuds!"',
    trustSignal: 'Transparent nutritional panels, clinical ingredient breakdowns, performance athlete backing.',
    themeColor: '#1A1A1A', // Graphite / Performance
  }
];

export const growthMessageFits: GrowthMessageFit[] = [
  {
    id: 'msg-indulgence',
    framingName: 'Indulgence-First',
    primaryHook: 'Leading purely with the sensory pleasure of the flavor (e.g., "Tastes like a melted brownie").',
    bestOccasionId: 'Afternoon Slump / Late Night Craving',
    failureMode: 'Fails if the product has a chalky aftertaste. The consumer feels lied to and will never repeat.',
    repeatTrigger: 'Emotional reward connection. It becomes the "safe treat."',
    trustRequirement: 'Flavor validation through high-quality UGC and texture-focused ad creative.',
    themeColor: '#8B4513',
  },
  {
    id: 'msg-utility',
    framingName: 'Utility & Speed',
    primaryHook: 'Leading purely with convenience and time saved (e.g., "Full breakfast in 10 seconds").',
    bestOccasionId: 'Commute / Morning Rush',
    failureMode: 'Fails if the packaging is difficult to open on-the-go or requires mixing/cleanup.',
    repeatTrigger: 'Logistical reliance. They panic if they run out on a Monday morning.',
    trustRequirement: 'Portability proof. Showing the product surviving a bag or a car cup holder.',
    themeColor: '#4A4232',
  },
  {
    id: 'msg-ritual',
    framingName: 'Ritual Hijack',
    primaryHook: 'Positioning the product not as a supplement, but as an upgrade to an existing mandatory habit (Coffee).',
    bestOccasionId: 'The Wake-up Anchor',
    failureMode: 'Fails if it is positioned as an "extra" step rather than a "replacement" step.',
    repeatTrigger: 'Daily baseline necessity. Churn happens only if the flavor severely fatigues.',
    trustRequirement: 'Must genuinely compete with the taste of whatever habit it is replacing (e.g. Starbucks).',
    themeColor: '#5C4033',
  }
];
