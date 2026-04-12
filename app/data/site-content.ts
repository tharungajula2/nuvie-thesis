import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  name: 'Nuvie Thesis',
  tagline: 'A strategic study of modern protein growth',
  description: 'From product storytelling and flavor strategy to quick commerce, trust, repeat, and unit economics — Nuvie Thesis explores how better-for-you products actually win.',
  hero: {
    title: 'A serious study in product and performance.',
    body: 'How Nuvie wins at the intersection of habit, channel, and trust. Built as a proof of thought and execution.',
    primaryCta: 'Explore Product Lab',
    secondaryCta: 'See How I Can Help',
  },
  heroChapters: [
    {
      id: 'intent',
      eyebrow: 'Direction & Intent',
      title: 'A focused reading of Nuvie’s product system.',
      body: 'Looking at how format, flavor, and occasion work together to create repeat.',
      cta: { label: 'Explore the Portfolio', type: 'scroll-cue' },
    },
    {
      id: 'products',
      eyebrow: 'The SKU Universe',
      title: 'Built through products.',
      body: 'Each SKU plays a different role: entry point, routine anchor, ritual wedge, or impulse rescue.',
    },
    {
      id: 'occasions',
      eyebrow: 'Behavioral Intelligence',
      title: 'Winning the moment before the market.',
      occasionTags: ['Coffee Ritual', '4 PM Slump', 'Breakfast Rescue', 'Sweet Craving Swap', 'Commute Fuel'],
      cta: { label: 'Inspect Occasions', href: '/occasions', type: 'primary' },
    },
    {
      id: 'outreach',
      eyebrow: 'Profile & Capability',
      title: 'Systems-minded builder.',
      body: 'Translating institutional discipline and quantitative rigor into product growth.',
      cta: { label: 'See How I Help', href: '/how-i-can-help', type: 'primary' },
    },
  ],
  manifesto: {
    heading: 'Protein is not just nutrition. It is product, behavior, and repeat.',
    body: 'Nuvie wins when indulgence feels easy, occasions feel natural, and trust becomes the default.',
  },
  whyIBuiltThis: {
    heading: 'Why I Built This Study',
    body: 'This is not a generic portfolio tracker. It is a focused, high-fidelity attempt to understand Nuvie’s reality — from retort-processing sensory tradeoffs to quick-commerce replenishment habits. I built this to explore where systems-thinking and product-craft actually meet the consumer.',
  },
  understanding: {
    heading: 'What I Understood',
    points: [
      {
        title: 'Occasion beats Category',
        body: 'Nuvie isn’t just competing in the "protein market." It’s winning high-frequency habits — the afternoon slump, the coffee ritual, and the guilt-free craving swap.',
      },
      {
        title: 'Repeat is the real Engine',
        body: 'Growth depends on the second purchase without a discount. This requires solving the "digestive trust gap" and ensuring the sensory profile fits a daily routine.',
      },
      {
        title: 'Channel-Native Architecture',
        body: 'On Quick Commerce, decisions happen in seconds. Success is dictated by thumbnail clarity, review velocity, and placing the product where the occasion exists.',
      },
    ],
  },
  usefulness: {
    heading: 'How I Might Be Useful',
    strengths: [
      {
        title: 'Systematizing Ambiguity',
        body: 'With a foundation in corporate credit-risk and lending systems, I bring institutional discipline to complex product workflows and operational logic.',
      },
      {
        title: 'Analytical Framing',
        body: 'I apply a quantitative, ML-informed lens to behavioral data — turning abstract consumer signals into actionable product-growth structures.',
      },
      {
        title: 'High-Fidelity Execution',
        body: 'I don’t just prescribe strategy; I build the proof-of-work. From OS-level knowledge systems to polished digital products, I focus on systems that actually run.',
      },
    ],
  },
  connection: {
    heading: 'Next Steps',
    body: 'I am a builder focused on translating complex business logic into usable, high-performance systems. If this thesis resonates with your vision for Nuvie, let’s talk.',
    cta: { label: 'Connect via Outreach', href: '/how-i-can-help' },
  },
};
