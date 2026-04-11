import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  name: 'Protein OS',
  tagline: 'The operating system for modern protein brands',
  description: 'From product storytelling and flavor strategy to quick commerce, trust, repeat, and unit economics — Protein OS maps how better-for-you products actually win.',
  hero: {
    title: 'The operating system for modern protein brands',
    body: 'From product storytelling and flavor strategy to quick commerce, trust, repeat, and unit economics — Protein OS maps how better-for-you products actually win.',
    primaryCta: 'Explore the OS',
    secondaryCta: 'View Product Worlds',
  },
  heroChapters: [
    {
      id: 'thesis',
      eyebrow: 'Direction & Intent',
      title: 'The operating system for modern protein brands',
      body: 'From storytelling and flavor labs to trust design and unit economics — we map how brands win.',
      cta: { label: 'Scroll to Enter', type: 'scroll-cue' },
    },
    {
      id: 'products',
      eyebrow: 'The SKU Universe',
      title: 'Built through products.',
      body: null,
    },
    {
      id: 'occasions',
      eyebrow: 'Behavioral Intelligence',
      title: 'Brands win moments before they win markets',
      occasionTags: ['Coffee Ritual', 'Breakfast Rescue', 'Craving Swap'],
    },
    {
      id: 'formula',
      eyebrow: 'The Winning Formula',
      title: 'The Path to Durable Business',
      formula: ['Occasion', 'Product', 'Channel', 'Repeat', 'Economics'],
    },
    {
      id: 'entry',
      eyebrow: 'Enter the System',
      title: 'Strategy is the only long-term flavor.',
      body: 'A cinematic roadmap of strategy, economics, and behavior — built for founders who think in decades.',
      cta: { label: 'Explore the OS', href: '/strategy', type: 'primary' },
    },
  ],
  manifesto: {
    heading: 'Protein is not just nutrition. It is product, behavior, channel, and repeat.',
    body: 'Modern protein brands do not win because they say "20g protein" louder. They win when indulgence feels easy, occasions feel natural, packaging feels trustworthy, and repeat becomes a routine.',
  },
};
