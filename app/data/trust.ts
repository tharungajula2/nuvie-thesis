import { PackagingTrustMode, DigestibilityProfile } from '../types';

export const packagingModes: PackagingTrustMode[] = [
  {
    id: 'mode-protein-first',
    modeName: 'Protein-First Emphasis',
    primarySignal: 'Giant numeric macro hit (e.g., "25g Protein"). Function over form.',
    trustBuilt: 'Performance validation. Tells the functional optimizer immediately that it meets their macro requirements without them having to hunt for the back label.',
    confusionRisk: 'Alienates the casual "wellness" buyer by feeling too aggressive or "gym-coded" for a standard lifestyle product.',
    bestChannel: 'D2C Subscription / Performance Retail (e.g., GNC)',
    themeColor: '#722F37', // Aggressive Red
  },
  {
    id: 'mode-indulgence-first',
    modeName: 'Indulgence-First Framing',
    primarySignal: 'Decadent flavor imagery (melting chocolate, splashing coffee). Macros are secondary.',
    trustBuilt: 'Flavor safety. Promises the user that they are getting a treat, reducing the "punishment" often associated with health food.',
    confusionRisk: 'Health skepticism. If the indulgence is pushed too hard, users assume the nutritional panel is fake, filled with sugar, or full of cheap polyols.',
    bestChannel: 'Quick Commerce / Impulse Endcaps',
    themeColor: '#D4AF37', // Gold / Premium
  },
  {
    id: 'mode-minimalist',
    modeName: 'Premium Minimalism',
    primarySignal: 'Massive negative space. Clean typography. Extremely quiet branding.',
    trustBuilt: 'Signifies high-end purity and clean ingredients. Signals to the affluent consumer that this is a premium, un-tampered-with product.',
    confusionRisk: 'Complete failure on a crowded shelf or a tiny thumbnail. The product becomes invisible, looking like an abstract art piece rather than food.',
    bestChannel: 'D2C Single-SKU Landers / Premium Boutiques (e.g., Erewhon)',
    themeColor: '#4A4232', // Clean Beige
  }
];

export const digestibilityProfiles: DigestibilityProfile[] = [
  {
    id: 'fear-lactose',
    concern: 'Lactose & Dairy Bloat',
    consumerFear: '"Whey concentrate wrecks my stomach. I cannot risk drinking this if I have a meeting in 30 minutes."',
    resolutionSignal: 'Must explicitly claim "Whey Protein ISOLATE" or "Lactose-Free" on the front of pack. Hiding this on the back label guarantees a lost sale.',
    failureImpact: 'Instant cart abandonment. For office workers, digestive risk overrides all flavor promises.',
  },
  {
    id: 'fear-sweeteners',
    concern: 'Artificial Sweetener Aftertaste',
    consumerFear: '"It claims to have zero sugar, so it must be packed with Sucralose that tastes metallic and gives me a headache."',
    resolutionSignal: 'Clear communication of natural sweeteners (e.g., "Naturally sweetened with Stevia & Monkfruit") before they flip the bottle to read the ingredients.',
    failureImpact: 'First-purchase churn. They may buy it once, hate the chemical aftertaste, and never return.',
  },
  {
    id: 'fear-fiber',
    concern: 'Excessive Fiber/Sugar Alcohol Gastro-Distress',
    consumerFear: 'Specifically for bars: "Is this going to give me horrible gas like other protein snacks?"',
    resolutionSignal: 'Ingredient elegance. Removing cheap IMOs or Maltitol and marketing "Clean Gut / Low FODMAP" if applicable.',
    failureImpact: 'The product is relegated to "emergency only" rather than a daily staple, destroying LTV.',
  }
];
