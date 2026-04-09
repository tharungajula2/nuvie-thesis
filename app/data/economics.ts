import { FormatEconomics } from '../types';

export const formatEconomics: FormatEconomics[] = [
  {
    id: 'rtd-shake',
    formatName: 'Ready-to-Drink (RTD) Shake',
    economicIntensity: 'Severe',
    repeatRequirement: 'Critical',
    packagingBurden: 'High weight-to-value ratio. Requires thick, sterile PET/TetraPak packaging which eats into COGS and massively inflates D2C shipping costs.',
    shippingRisk: 'High damage and leakage risk during Last-Mile delivery. A single damaged unit often triggers a full case refund, wiping out margin for 3 pristine orders.',
    discountFragility: 'Extremely fragile. A 15-20% discount on D2C effectively pushes unit economics underwater after shipping and acquisition costs are modeled.',
    heroViability: true,
    themeColor: '#722F37', // Deep red / Severe
  },
  {
    id: 'protein-coffee',
    formatName: 'Coffee Hybrid / RTD',
    economicIntensity: 'Moderate',
    repeatRequirement: 'Critical',
    packagingBurden: 'Similar to standard RTD, but often tolerates a higher MSRP due to the "Coffee Shop Replacement" psychological anchor.',
    shippingRisk: 'High (liquid weight), but the subscription velocity offsets the logistics drag if retained past month 3.',
    discountFragility: 'Moderate. Consumers understand coffee pricing better than protein pricing, allowing for tighter discount controls (e.g., free shipping instead of % off).',
    heroViability: true,
    themeColor: '#4A2B29', // Espresso / Urgent
  },
  {
    id: 'protein-bar',
    formatName: 'Extruded Protein Bar',
    economicIntensity: 'Low',
    repeatRequirement: 'Moderate',
    packagingBurden: 'Highly efficient. Foil wrappers are cheap, light, and condense perfectly into shipping master-cartons.',
    shippingRisk: 'Low leakage risk, but high temperature risk. Summer months can destroy inventory if cold-chain logistics are not enforced.',
    discountFragility: 'Resilient. The base COGS of a bar leaves enough room for aggressive multi-pack discounting without breaking the model.',
    heroViability: false, // Usually too crowded to act as a pure hero
    themeColor: '#5C4033', // Brown / Stable
  }
];
