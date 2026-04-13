export interface WorkbookBlock {
  id: string;
  type: 'prompt' | 'question' | 'hypothesis' | 'validation' | 'risk';
  title: string;
  body: string;
}

export interface WorkbookChapter {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  blocks: WorkbookBlock[];
}

export const researchWipData: WorkbookChapter[] = [
  {
    id: 'how-to-use',
    title: 'How to Use This Workbook',
    eyebrow: 'Internal Study',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'purpose',
        type: 'prompt',
        title: 'The Narrative Intention',
        body: 'Coming soon.'
      },
      {
        id: 'open-nature',
        type: 'prompt',
        title: 'The Open Status',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'strategy',
    title: 'Strategy',
    eyebrow: 'Step 01',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'strat-q1',
        type: 'question',
        title: 'The Wedge vs. The Anchor',
        body: 'Coming soon.'
      },
      {
        id: 'strat-pillar-audit',
        type: 'prompt',
        title: 'Structural Pillar Audit',
        body: 'Coming soon.'
      },
      {
        id: 'strat-coord',
        type: 'question',
        title: 'Coordinate Map Logic',
        body: 'Coming soon.'
      },
      {
        id: 'strat-h1',
        type: 'hypothesis',
        title: 'Wedge-Led Retention',
        body: 'Coming soon.'
      },
      {
        id: 'strat-directive-1',
        type: 'risk',
        title: 'Protection of the Wedge',
        body: 'Coming soon.'
      },
      {
        id: 'strat-bar-exp',
        type: 'risk',
        title: 'Bar Expansion Discipline',
        body: 'Coming soon.'
      },
      {
        id: 'strat-directive-2',
        type: 'prompt',
        title: 'Heritage Anchor Trust',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'economics',
    title: 'Economics',
    eyebrow: 'Step 02',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'econ-forces',
        type: 'prompt',
        title: 'The 4 Structural Forces',
        body: 'Coming soon.'
      },
      {
        id: 'econ-q1',
        type: 'question',
        title: 'The RTD Shipping Paradox',
        body: 'Coming soon.'
      },
      {
        id: 'econ-channel-margins',
        type: 'risk',
        title: 'The Dark Store Squeeze',
        body: 'Coming soon.'
      },
      {
        id: 'econ-r1',
        type: 'risk',
        title: 'The Discount Trap',
        body: 'Coming soon.'
      },
      {
        id: 'econ-pack-arch',
        type: 'hypothesis',
        title: 'Pack Architecture Parity',
        body: 'Coming soon.'
      },
      {
        id: 'econ-v1',
        type: 'validation',
        title: 'Unit Profitability Check',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'channels',
    title: 'Channels',
    eyebrow: 'Step 03',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'chan-thesis',
        type: 'prompt',
        title: 'Behavioral Geometry',
        body: 'Coming soon.'
      },
      {
        id: 'chan-search',
        type: 'question',
        title: 'The Search Engine Trap',
        body: 'Coming soon.'
      },
      {
        id: 'chan-h1',
        type: 'hypothesis',
        title: 'Office Pantry Dominance',
        body: 'Coming soon.'
      },
      {
        id: 'chan-unboxing',
        type: 'question',
        title: 'The Unboxing Conversion',
        body: 'Coming soon.'
      },
      {
        id: 'chan-mismatch',
        type: 'risk',
        title: 'The Geometry of Mismatch',
        body: 'Coming soon.'
      },
      {
        id: 'chan-memo-vanilla',
        type: 'validation',
        title: 'Vanilla Anchor Protection',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'growth',
    title: 'Growth',
    eyebrow: 'Step 04',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'grow-lock',
        type: 'prompt',
        title: 'The Sequential Lock',
        body: 'Coming soon.'
      },
      {
        id: 'grow-archetypes',
        type: 'question',
        title: 'Archetype Confusion',
        body: 'Coming soon.'
      },
      {
        id: 'grow-q1',
        type: 'question',
        title: 'Borrowed Trust',
        body: 'Coming soon.'
      },
      {
        id: 'grow-crm',
        type: 'hypothesis',
        title: 'The 8 AM Habit Hijack',
        body: 'Coming soon.'
      },
      {
        id: 'grow-loops',
        type: 'prompt',
        title: 'Measure Loops, Not Trial',
        body: 'Coming soon.'
      },
      {
        id: 'grow-failure',
        type: 'risk',
        title: 'Indulgence Churn',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'packaging',
    title: 'Packaging & Trust',
    eyebrow: 'Step 05',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'pack-anatomy',
        type: 'prompt',
        title: 'Anatomy of Credibility',
        body: 'Coming soon.'
      },
      {
        id: 'pack-aesthetic',
        type: 'risk',
        title: 'The Aesthetic Mismatch',
        body: 'Coming soon.'
      },
      {
        id: 'pack-150px',
        type: 'prompt',
        title: 'The 150px Thumbnail War',
        body: 'Coming soon.'
      },
      {
        id: 'pack-digestion',
        type: 'hypothesis',
        title: 'Front-Loaded Somatic Trust',
        body: 'Coming soon.'
      },
      {
        id: 'pack-semantics',
        type: 'prompt',
        title: 'Claim Discipline',
        body: 'Coming soon.'
      },
      {
        id: 'pack-v1',
        type: 'validation',
        title: 'Thumbnail Macro Callouts',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'flavor',
    title: 'Flavor',
    eyebrow: 'Step 06',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'flav-strategy',
        type: 'prompt',
        title: 'Sensory Strategy',
        body: 'Coming soon.'
      },
      {
        id: 'flav-threshold',
        type: 'question',
        title: 'The Sweetness Threshold',
        body: 'Coming soon.'
      },
      {
        id: 'flav-h1',
        type: 'hypothesis',
        title: 'Bait Product Strategy',
        body: 'Coming soon.'
      },
      {
        id: 'flav-concepts',
        type: 'prompt',
        title: 'Summer Concept Extensions',
        body: 'Coming soon.'
      },
      {
        id: 'flav-india',
        type: 'prompt',
        title: 'Regional Familiarity',
        body: 'Coming soon.'
      },
      {
        id: 'flav-failure',
        type: 'risk',
        title: 'Vanilla Fatigue Churn',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    eyebrow: 'Step 07',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'manu-principles',
        type: 'prompt',
        title: 'Scale foundations',
        body: 'Coming soon.'
      },
      {
        id: 'manu-shear',
        type: 'question',
        title: 'The Silk-Smooth Mandate',
        body: 'Coming soon.'
      },
      {
        id: 'manu-realities',
        type: 'prompt',
        title: 'Scale-Up Realities',
        body: 'Coming soon.'
      },
      {
        id: 'manu-shock',
        type: 'prompt',
        title: 'Industrial Shock',
        body: 'Coming soon.'
      },
      {
        id: 'manu-r1',
        type: 'risk',
        title: 'Integrity Auditing',
        body: 'Coming soon.'
      },
      {
        id: 'manu-v1',
        type: 'validation',
        title: 'Machine Constraints Readiness',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'rd',
    title: 'R&D',
    eyebrow: 'Step 08',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'rd-strategy',
        type: 'prompt',
        title: 'Innovation Strategy',
        body: 'Coming soon.'
      },
      {
        id: 'rd-q1',
        type: 'question',
        title: 'Benchmark Filtering',
        body: 'Coming soon.'
      },
      {
        id: 'rd-ai',
        type: 'prompt',
        title: 'Augmented Innovation',
        body: 'Coming soon.'
      },
      {
        id: 'rd-h1',
        type: 'hypothesis',
        title: 'Iterative Discipline',
        body: 'Coming soon.'
      },
      {
        id: 'rd-funnel',
        type: 'prompt',
        title: 'The Kill-or-Scale Funnel',
        body: 'Coming soon.'
      },
      {
        id: 'rd-v1',
        type: 'risk',
        title: 'The Kitchen Prototype Trap',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'expansion',
    title: 'Expansion',
    eyebrow: 'Step 09',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'exp-filter',
        type: 'prompt',
        title: 'The Adjacency Filter',
        body: 'Coming soon.'
      },
      {
        id: 'exp-arch',
        type: 'prompt',
        title: 'The 80/20 Rule',
        body: 'Coming soon.'
      },
      {
        id: 'exp-spoonables',
        type: 'risk',
        title: 'The Spoonable Risk',
        body: 'Coming soon.'
      },
      {
        id: 'exp-kiosks',
        type: 'prompt',
        title: 'Kiosks as Theaters',
        body: 'Coming soon.'
      },
      {
        id: 'exp-adaptation',
        type: 'risk',
        title: 'The Mumbai vs. LA Trap',
        body: 'Coming soon.'
      },
      {
        id: 'exp-v1',
        type: 'validation',
        title: 'Deepen Before Stretching',
        body: 'Coming soon.'
      }
    ]
  },
  {
    id: 'open-questions',
    title: 'Open Questions / Next Bets',
    eyebrow: 'Synthesis',
    summary: 'Coming soon.',
    blocks: [
      {
        id: 'open-q1',
        type: 'question',
        title: 'The Founder Bridge',
        body: 'Coming soon.'
      },
      {
        id: 'open-h1',
        type: 'hypothesis',
        title: 'The Conviction Map',
        body: 'Coming soon.'
      },
      {
        id: 'open-synthesis',
        type: 'prompt',
        title: 'Final Synthesis Prompt',
        body: 'Coming soon.'
      }
    ]
  }
];
