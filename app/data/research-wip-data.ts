import { WorkbookChapter } from '../types';
import { module01Content } from './research/module-01';
import { module02Content } from './research/module-02';
import { module03Content } from './research/module-03';
import { module04Content } from './research/module-04';

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
      description: 'Diagram comparing PDCAAS vs DIAAS scoring concept'
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
      description: 'Indian consumer health food shift — everyday protein formats'
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
      description: 'The P&L Waterfall — MRP to net contribution visual'
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
      description: 'Brand positioning spectrum — gym-niche to mainstream wellness'
    }
  },
  {
    id: '07-open-questions',
    title: '07 — Open Questions',
    eyebrow: 'Synthesis',
    summary: 'These are the things I am still sitting with. I do not have clear answers yet, but I wanted to write them down.',
    imagePlaceholder: {
      label: 'Portfolio Divergence',
      description: 'The cap difference across SKUs — green for Kesar Pista, black for Caffe. A signal of supplier shifts or deliberate design?'
    },
    blocks: [
      {
        id: 'open-q-01',
        type: 'question',
        title: 'Manufacturing uncertainty',
        body: 'I am still wondering about their actual manufacturing model. Do they have their own facility or a specialized partner for that retort processing?'
      },
      {
        id: 'open-q-02',
        type: 'question',
        title: 'Actual repeat rates',
        body: 'I would love to see the difference in repeat rates between D2C and quick commerce users. My guess is they look very different.'
      },
      {
        id: 'open-q-03',
        type: 'question',
        title: 'Trade margin reality',
        body: 'What are the real trade margins after all the platform fees? I wonder if they can stay profitable in quick commerce long term.'
      },
      {
        id: 'open-q-04',
        type: 'question',
        title: 'Damage and return rates',
        body: 'I am curious if the liquid shipping damage is a minor issue or a structural margin drain. I suspect it is harder than it looks.'
      },
      {
        id: 'open-q-05',
        type: 'question',
        title: 'Subscription logic',
        body: 'Is the current subscription form just for gathering leads, or do they have a real fulfillment system behind it yet?'
      },
      {
        id: 'open-q-06',
        type: 'question',
        title: 'Coffee wedge utilization',
        body: 'Is the coffee ritual being fully utilized? I think it might be the strongest wedge in the entire portfolio if they lean into it.'
      },
      {
        id: 'open-q-07',
        type: 'question',
        title: 'Bar polyol situation',
        body: 'What does the maltitol situation mean for people who want to eat these daily? I worry about it clashing with the gut friendly brand.'
      },
      {
        id: 'open-q-08',
        type: 'question',
        title: 'Discount anchoring',
        body: 'Are the big discounts on quick commerce already anchoring people to a lower price? Shifting back to full price might be a struggle.'
      },
      {
        id: 'open-q-09',
        type: 'question',
        title: 'WhatsApp reorder loops',
        body: 'I wonder what a real WhatsApp reorder system would look like for a brand like this. It seems like a missed opportunity right now.'
      },
      {
        id: 'open-q-10',
        type: 'question',
        title: 'Community activation',
        body: 'Does the community work at gyms and events actually convert to new customers, or is it mostly just brand awareness?'
      },
      {
        id: 'open-q-11',
        type: 'question',
        title: 'Portfolio complexity',
        body: 'Is the current list of SKUs already creating a drag on their working capital? I am always curious how simple a brand can stay.'
      },
      {
        id: 'open-q-12',
        type: 'question',
        title: 'Signals of fit',
        body: 'What would be the first undeniable signal of product market fit for someone watching from the outside? I am still trying to define that.'
      }
    ]
  }
];
