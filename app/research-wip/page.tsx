import { Metadata } from 'next';
import ResearchWipClient from './ResearchWipClient';

export const metadata: Metadata = {
  title: "Research WIP — Nuvie Thesis",
  description: "A password-gated working workbook for deep Nuvie research and open questions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResearchWipPage() {
  return <ResearchWipClient />;
}
