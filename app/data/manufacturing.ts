import { ProcessStage, IngredientTechnicalProfile, StabilityRisk, ManufacturingRoadmapItem } from '../types';

export const processStages: ProcessStage[] = [
  {
    id: 'stage-hydration',
    name: 'Protein Hydration',
    objective: 'Ensuring protein powders are fully wetted and dispersed before processing.',
    variables: ['Temperature', 'Shear Rate', 'Time'],
    failureModes: ['Clumping (Fish eyes)', 'Incomplete solubility', 'Sedimentation'],
    complexity: 'Moderate',
    impact: 'Determines the foundation of texture and stability.'
  },
  {
    id: 'stage-blending',
    name: 'High-Shear Blending',
    objective: 'Merging fat, water, and solids into a uniform mixture.',
    variables: ['RPM', 'Blade Geometry', 'Phasing'],
    failureModes: ['Air incorporation (Foaming)', 'Phase separation', 'Uneven distribution'],
    complexity: 'Low',
    impact: 'Crucial for consistency in large batch sizes.'
  },
  {
    id: 'stage-homogenization',
    name: 'Homogenization',
    objective: 'Reducing particle size (fat/solid) to micron levels for stability.',
    variables: ['Pressure (Bar/PSI)', 'Stage Count', 'Valve Design'],
    failureModes: ['Valve clogging', 'Inadequate particle reduction', 'Immediate separation'],
    complexity: 'High',
    impact: 'The "Invisible Magic" that prevents the shake from separating on the shelf.'
  },
  {
    id: 'stage-heat-treatment',
    name: 'Heat Treatment (UHT/Retort)',
    objective: 'Sterilizing the product for room-temperature shelf life.',
    variables: ['Holding Time', 'Target Temperature', 'Cooling Ramp'],
    failureModes: ['Protein denaturation', 'Flavor "Cooked" notes', 'Precipitation'],
    complexity: 'High',
    impact: 'The most aggressive stage; where most formulation failures occur.'
  },
  {
    id: 'stage-aseptic-filling',
    name: 'Aseptic Filling & Sealing',
    objective: 'Filling sterilized product into sterile packaging in a clean zone.',
    variables: ['Seal Integrity', 'Headspace Oxygen', 'Cooling'],
    failureModes: ['Seal leaks', 'Microbial contamination'],
    complexity: 'High',
    impact: 'Ensures the product stays safe and stable for 6-12 months.'
  }
];

export const ingredientTechnicalProfiles: IngredientTechnicalProfile[] = [
  {
    id: 'tech-whey-isolate',
    category: 'Protein (Whey)',
    behavior: 'Highly heat-sensitive. Becomes medicinal or "sulfury" if over-processed.',
    manufacturingRisk: 'Can foam aggressively during high-shear mixing.',
    stabilityLogic: 'Needs precise pH control to prevent precipitation in shelf-stable formats.',
    themeColor: '#C5A059'
  },
  {
    id: 'tech-plant-pea',
    category: 'Protein (Pea)',
    behavior: 'High viscosity at low inclusion. Gritty texture if not homogenized correctly.',
    manufacturingRisk: 'Strong "beany" off-notes that intensify under heat.',
    stabilityLogic: 'Relies on hydrocolloids to keep its larger particle size in suspension.',
    themeColor: '#4CAF50'
  },
  {
    id: 'tech-sweeteners',
    category: 'Sweetener Systems',
    behavior: 'Stevia/Monkfruit can "drift" or become bitter under high heat.',
    manufacturingRisk: 'Requires precise dry-premix to prevent concentration spikes.',
    stabilityLogic: 'Perceived sweetness often drops by 10-15% after 3 months of shelf life.',
    themeColor: '#FF69B4'
  },
  {
    id: 'tech-oils-fats',
    category: 'Lipid Systems',
    behavior: 'Crucial for masking protein graininess but requires emulsification.',
    manufacturingRisk: 'Can go rancid if oxygen is trapped in the headspace during filling.',
    stabilityLogic: 'Prevents "chalkiness" by coating protein particles.',
    themeColor: '#FFFACD'
  }
];

export const stabilityRisks: StabilityRisk[] = [
  {
    id: 'risk-sedimentation',
    issue: 'Bottom Sedimentation',
    rootCause: 'Poor homogenization or lack of adequate stabilizer suspension.',
    prevention: 'Increase homogenization pressure or refine hydrocolloid mesh.',
    businessImpact: 'Severe. Consumer perceives the product as "spoiled" or low quality.'
  },
  {
    id: 'risk-creaming',
    issue: 'Fat Layering (Creaming)',
    rootCause: 'Weak emulsification system or oil droplet size is too large.',
    prevention: 'Dual-stage homogenization and stronger lecithin/MCT integration.',
    businessImpact: 'Moderate. Visual failure that affects first-sip perception.'
  },
  {
    id: 'risk-flavor-drift',
    issue: 'Flavor & Color Drift',
    rootCause: 'Oxidation or Maillard reactions during shelf life.',
    prevention: 'UHT indirect heating and nitrogen flushing during sealing.',
    businessImpact: 'Critical for repeat. A product that tastes different every month kills loyalty.'
  }
];

export const manufacturingRoadmapItems: ManufacturingRoadmapItem[] = [
  {
    id: 'road-1',
    title: 'Phase 1: Bench-Top Stability',
    description: 'Validating the recipe in a lab environment with small-scale tools.',
    keyLearning: 'Determining pH, solubility, and sensory baseline.',
    level: 'Fundamentals'
  },
  {
    id: 'road-2',
    title: 'Phase 2: Pilot Plant Runs',
    description: 'Scaling to 50L-100L batches using actual factory-grade machinery.',
    keyLearning: 'Observing how the recipe reacts to high-pressure homogenization.',
    level: 'Applied'
  },
  {
    id: 'road-3',
    title: 'Phase 3: Line Trials',
    description: 'Full-scale commercial production run (MOQ) at a co-manufacturer.',
    keyLearning: 'Validating fill accuracy, seal integrity, and operational yield.',
    level: 'Operator Grade'
  }
];
