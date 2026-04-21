import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  name: 'Nuvie Thesis',
  tagline: 'A strategic study of modern protein growth',
  description: 'From product storytelling and flavor strategy to quick commerce, trust, repeat, and unit economics. Nuvie Thesis explores how better-for-you products actually win.',
  hero: {
    title: "I'm studying Nuvie.\nThis is the work so far.",
    body: 'Analytics. Operations. Product building. Now studying how a protein brand earns its second purchase.',
    primaryCta: 'Explore Product Lab',
    secondaryCta: 'See Where I Can Help',
  },
  heroChapters: [
    {
      id: 'intent',
      eyebrow: 'MY READING OF THIS PAGE',
      title: "How I'm thinking about Nuvie's product system.",
      body: "The product visuals and packaging designs on this page are concept work I created for this study. I took creative liberty with the packaging — including moving away from Nuvie's signature yellow. Nuvie's yellow is intentional: it signals fun-first, approachability, and nutrition for life. I understand that. This was me exploring what the product system could look like across different visual directions — not a suggestion that anything should change.\n\nThe analysis alongside each product is my own early interpretation from the outside. Neither the visuals nor the analysis represent Nuvie's official view.",
      cta: { label: 'Explore the Portfolio', type: 'scroll-cue' },
    },
    {
      id: 'products',
      eyebrow: 'The SKU Universe',
      title: 'Built through products.',
      body: 'Each SKU has a different job. Some lower trial friction, some build routine, and one might become the highest-frequency wedge.',
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
    heading: 'WHY I BUILT THIS',
    body: `I'm not from FMCG. I come from analytics, systems work, and building structured products from messy problems. When I came across Nuvie, I didn't just browse the website. I wanted to understand how it actually works, the product mechanics, the channel realities, the repeat problem, what makes a consumer come back without a discount. So I studied it the way I know how. Then I built this.`,
  },
  understanding: {
    heading: 'Three things that stuck with me',
    points: [
      {
        title: 'Occasion, not category',
        body: "Nuvie isn't really competing against other protein brands. It's competing with your morning coffee and your 4 PM biscuit. That changes the entire playbook.",
      },
      {
        title: 'Taste first, then repeat',
        body: "If the product does not taste like a treat, there is no repeat conversation. The indulgence promise has to survive what the bottle actually went through to get shelf-stable. That is the real bar before any habit loop even begins.",
      },
      {
        title: 'Quick commerce is a data problem',
        body: "On Blinkit, availability, search visibility, and dark store distribution are all measurable and improvable — if you know where to look. That is the kind of problem I want to work on.",
      },
    ],
  },
  usefulness: {
    heading: 'Where I might actually fit',
    strengths: [
      {
        title: 'Finding structure in messy problems',
        body: 'I spent years in credit-risk and lending workflows, places where information is dense and the job is to make it clearer. That discipline translates.',
      },
      {
        title: 'Working with data, not just intuition',
        body: 'I apply analytical and ML thinking to behavioral signals. Not to produce charts, but to find what actually drives an outcome.',
      },
      {
        title: 'Building, not just recommending',
        body: "I build the thing rather than describing it. This site is the most recent example.",
      },
    ],
  },
  connection: {
    heading: 'If any of this resonates',
    body: `This is honest work, built specifically for this conversation. If the thinking here is useful to you, or if you're curious about any part of it, I'd genuinely like to hear from you. No pitch. Just a conversation.`,
    cta: { label: 'REACH OUT', href: 'mailto:tharun.gajula.2@gmail.com' },
  },
};
