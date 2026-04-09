import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'sku-strategy',
    title: 'SKU Strategy',
    description: 'Precision mapping of format, dose, and frequency.',
    problemSolved: 'Over-extended product lines with high churn.',
    targetUser: 'Brand Founders',
    badge: 'Strategy',
    founderQuestion: "Which SKU deserves to become the hero?",
    coreSignals: [
      { label: 'Role', value: 'Hero vs Support' },
      { label: 'Repeatability', value: 'Daily vs Impulse' },
      { label: 'Cannibalization', value: 'High Risk' }
    ],
    themeColor: '#C5A059', // Gold for the primary featured module
    isFeatured: true,
  },
  {
    id: 'flavor-lab',
    title: 'Flavor Lab',
    description: 'Where sensory design meets cultural adoption.',
    problemSolved: 'Generic flavor profiles causing low stickiness.',
    targetUser: 'Product Innovators',
    badge: 'R&D',
    founderQuestion: "Which flavor wins familiarity without feeling boring?",
    coreSignals: [
      { label: 'Indulgence Tension', value: 'High' },
      { label: 'Familiarity Index', value: 'Core' }
    ],
    themeColor: '#8B4513', // Warm cocoa/sensory
  },
  {
    id: 'growth-os',
    title: 'Growth OS',
    description: 'The algorithmic path to resilient customer LTV.',
    problemSolved: 'Unreliable CAC/LTV ratios.',
    targetUser: 'Growth Leads',
    badge: 'Marketing',
    founderQuestion: "Where does repeat become habit?",
    coreSignals: [
      { label: 'Occasion Framing', value: 'Primary' },
      { label: 'Retention Hook', value: 'Subscription' }
    ],
    themeColor: '#2A2A2A', // Graphite data feel
  },
  {
    id: 'channel-os',
    title: 'Channel OS',
    description: 'Fitting products into the right physical and digital shelves.',
    problemSolved: 'Poor channel-product fit.',
    targetUser: 'Sales Operations',
    badge: 'Commerce',
    founderQuestion: "Which channels can support premium pricing?",
    coreSignals: [
      { label: 'Immediacy', value: 'Q-Commerce' },
      { label: 'Discovery Context', value: 'Retail Adjacency' }
    ],
    themeColor: '#2E4A35', // Green / retail growth
  },
  {
    id: 'economics-console',
    title: 'Economics Console',
    description: 'Real-time visibility into the unit-level truth.',
    problemSolved: 'Hidden costs eroding margins.',
    targetUser: 'CFOs / Operators',
    badge: 'Finance',
    founderQuestion: "What kills unit economics first?",
    coreSignals: [
      { label: 'Channel Margin', value: 'Compressed' },
      { label: 'Pack-size Pressure', value: 'Severe' }
    ],
    themeColor: '#4A2B29', // Deep red/urgency
  },
  {
    id: 'packaging-trust-lab',
    title: 'Packaging & Trust Lab',
    description: 'Designing for immediate visual authority.',
    problemSolved: 'Low trust during the first 3-second shelf encounter.',
    targetUser: 'Creative Directors',
    badge: 'Design',
    founderQuestion: "When does trust break before trial?",
    coreSignals: [
      { label: 'Claims Hierarchy', value: 'Strict' },
      { label: 'Thumbnail Readability', value: 'Optimized' }
    ],
    themeColor: '#FFFFFF', // Clean trust/ivory
  },
];
