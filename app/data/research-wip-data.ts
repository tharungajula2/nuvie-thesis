import type { WorkbookChapter } from '../types/index';
import { module01Content } from './research/module-01';
import { module02Content } from './research/module-02';
import { module03Content } from './research/module-03';
import { module04Content } from './research/module-04';
import { module05Content } from './research/module-05';
import { module06Content } from './research/module-06';

export const researchWipData: WorkbookChapter[] = [
  {
    id: '01-from-raw-to-bottle',
    title: '01 — From Raw Ingredient to Ready Bottle',
    eyebrow: 'Manufacturing Study',
    summary: 'How a protein shake is actually made — from the farm to the shelf.',
    type: 'editorial',
    sections: module01Content,
    imagePlaceholder: {
      label: 'module 1 hero',
      description: 'Module 01 hero — from raw ingredient to ready bottle',
      imagePath: '/public/images/research/module-01/module-hero.jpg'
    }
  },
  {
    id: '02-the-indian-consumer',
    title: '02 — The Indian Consumer',
    eyebrow: 'Market Analysis',
    summary: 'Who actually buys this and why? Understanding the real demand, the real barriers, and the real purchase moment.',
    type: 'editorial',
    sections: module02Content,
    imagePlaceholder: {
      label: 'module 2 hero',
      description: 'Module 02 hero — the Indian consumer and protein',
      imagePath: '/public/images/research/module-02/module-hero.jpg'
    }
  },
  {
    id: '03-the-business-model',
    title: '03 — The Business Model',
    eyebrow: 'Economic Strategy',
    summary: 'How a protein brand actually makes money. From MRP to net contribution, channel economics, and retention mechanics.',
    type: 'editorial',
    sections: module03Content,
    imagePlaceholder: {
      label: 'module 3 hero',
      description: 'Module 03 hero — the business model and unit economics',
      imagePath: '/public/images/research/module-03/module-hero.jpg'
    }
  },
  {
    id: '04-the-brand',
    title: '04 — The Brand',
    eyebrow: 'Competitive Identity',
    summary: 'Positioning, trust, and the indulgence bet. What Nuvie is communicating, what the landscape looks like, and what builds genuine brand defensibility.',
    type: 'editorial',
    sections: module04Content,
    imagePlaceholder: {
      label: 'module 4 hero',
      description: 'Module 04 hero — brand positioning and trust',
      imagePath: '/public/images/research/module-04/module-hero.jpg'
    }
  },
  {
    id: '05-what-could-break-this',
    title: '05 — What Could Break This',
    eyebrow: 'Risk Mapping',
    summary: 'Failure modes and risk map. A honest diagnostic of the pressures that could derail a protein RTD brand at Nuvie\'s stage.',
    type: 'editorial',
    sections: module05Content,
    imagePlaceholder: {
      label: 'module 5 hero',
      description: 'Risk assessment map — operational, regulatory, and market anchors'
    }
  },
  {
    id: '06-open-questions',
    title: '06 — Open Questions',
    eyebrow: 'Synthesis',
    summary: 'What I still don\'t know. Every unresolved question from five modules of research. This module never closes.',
    type: 'editorial',
    sections: module06Content,
    imagePlaceholder: {
      label: 'Permanently Incomplete',
      description: 'The open search — mapping the terrain between current knowledge and Series A milestones.'
    }
  }
];
