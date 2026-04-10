import { RecipeConcept, RDHypothesis, AIWorkflowStep, ExperimentationStage } from '../types';

export const recipeConcepts: RecipeConcept[] = [
  {
    id: 'concept-indulgent-dessert',
    name: 'Indulgent Dessert Pillar',
    tagline: 'Chocolate Fudge Brownie // The Reward Loop',
    objective: 'Capturing the post-dinner or mid-day reward occasion.',
    sensoryTarget: 'High viscosity, rich cocoa payload, zero chalky isolate aftertaste.',
    manufacturability: 'Simple',
    costBurden: 'Moderate',
    repeatLogic: 'Emotional reward becomes a daily ritual.',
    themeColor: '#4A2311'
  },
  {
    id: 'concept-clean-utility',
    name: 'Clean Utility Pillar',
    tagline: 'Pure Vanilla Bean // The Baseline',
    objective: 'Daily habit replacement for breakfast or post-workout.',
    sensoryTarget: 'Low sweetness, clean finish, highly mixable with other ingredients.',
    manufacturability: 'Complex',
    costBurden: 'Low',
    repeatLogic: 'Utility and lack of palate fatigue drive high volume.',
    themeColor: '#F3E5AB'
  },
  {
    id: 'concept-functional-coffee',
    name: 'Ritual Coffee Pillar',
    tagline: 'Cold Brew Macchiato // The Morning Wedge',
    objective: 'Replacing the consumer\'s existing morning coffee ritual.',
    sensoryTarget: 'Robust coffee bitterness balanced by milk-fat creaminess.',
    manufacturability: 'Hazardous',
    costBurden: 'High',
    repeatLogic: 'Caffeine dependency + protein necessity = 100% retention.',
    themeColor: '#3E2723'
  }
];

export const rdHypotheses: RDHypothesis[] = [
  {
    id: 'hypo-1',
    question: 'Can we reduce total sweetener by 20% by increasing fat-based masking?',
    benchmarkContext: 'Industry standard products use high sucralose to hide isolate bitterness.',
    testMethod: 'Parallel sensory panels comparing High-Fat/Low-Sweet vs. Standard.',
    status: 'Validated'
  },
  {
    id: 'hypo-2',
    question: 'Can pea protein reach dairy-level mouthfeel without increasing viscosity?',
    benchmarkContext: 'Current plant-based RTDs are either too thin or too "syrupy".',
    testMethod: 'Incremental homogenization pressure trials (2k to 5k PSI).',
    status: 'Pending'
  },
  {
    id: 'hypo-3',
    question: 'Does a cultural flavor (Thandai) increase first-purchase trust in Tier 2 cities?',
    benchmarkContext: 'Western flavors (Cookies & Cream) feel "artificial" to older demographics.',
    testMethod: 'Regional pilot launch with sentiment mapping.',
    status: 'Validated'
  }
];

export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    id: 'ai-step-1',
    title: 'Benchmark Synthesis',
    aiRole: 'Decomposing 50+ competitor ingredient lists to find patterns.',
    humanRole: 'Setting the strategic boundary (e.g., "Only clean label").',
    output: 'A gap analysis of what the market is missing.'
  },
  {
    id: 'ai-step-2',
    title: 'Hypothesis Generation',
    aiRole: 'Suggesting 10 flavor-ingredient combinations based on trend data.',
    humanRole: 'Filtering for brand alignment and manufacturability.',
    output: '3-4 high-conviction R&D directions.'
  },
  {
    id: 'ai-step-3',
    title: 'Tradeoff Mapping',
    aiRole: 'Predicting how shelf-life affects perceived sweetness spikes.',
    humanRole: 'Validating with real stability trial data.',
    output: 'A risk-mitigated formulation strategy.'
  }
];

export const experimentationStages: ExperimentationStage[] = [
  {
    id: 'stage-kitchen',
    title: 'Kitchen Prototype',
    gatekeeper: 'Founder Taste Test',
    successMetric: 'Sensory "Wow" factor reached.',
    failureAction: 'Back to hypothesis.'
  },
  {
    id: 'stage-bench',
    title: 'Lab Benchmarking',
    gatekeeper: 'Food Scientist Audit',
    successMetric: 'pH and solubility within spec.',
    failureAction: 'Reformulate ingredient system.'
  },
  {
    id: 'stage-pilot',
    title: 'Pilot Plant Trial',
    gatekeeper: 'Factory Operator',
    successMetric: 'Survives homogenization and heat.',
    failureAction: 'Modify process or ingredients.'
  },
  {
    id: 'stage-comm',
    title: 'Commercial MVP',
    gatekeeper: 'Early Adopters',
    successMetric: 'Repeat rate > 40% in Cohort A.',
    failureAction: 'Kill or Refine.'
  }
];
