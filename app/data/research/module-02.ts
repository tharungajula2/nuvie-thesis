import { EditorialSection } from '../../types';

export const module02Content: EditorialSection[] = [
  {
    id: 'section-2-data',
    title: "Section 1: India's Protein Reality in Data",
    anchorId: 'section-02-data',
    tocLabel: 'Protein Reality in Data',
    content: [
      {
        type: 'paragraph',
        text: "India's protein situation looks adequate on paper and is not. The MOSPI Household Consumption Expenditure Survey 2023-24 reports per capita daily protein intake at 61.8g rural and 63.4g urban — numbers that have barely moved in 14 years. Against the ICMR-NIN RDA of 0.83g/kg/day, India appears to be doing fine. The honest picture requires looking further."
      },
      {
        type: 'sub-section',
        title: 'What the Data Actually Shows',
        body: 'The NIN "What India Eats" report (NNMB dietary recall data) finds 36% of rural Indians and 44% of urban Indians fall short of even the Estimated Average Requirement — the floor below the RDA. The ICRISAT/IFPRI study (2025, Frontiers in Sustainable Food Systems) across 6 states and 785 households found 80% of households consumed less protein than recommended, with 52% classified as "highly deficient." The CEEW December 2025 analysis of the same MOSPI data adds further context: at-home protein consumption averages only 55.6g/day nationally (excluding eating out), and the richest 10% of Indians consume 1.5 times more protein than the poorest 10%.'
      },
      {
        type: 'paragraph',
        variant: 'muted',
        italic: true,
        text: 'The widely cited "73% of Indians are protein deficient" figure originates from a 2017 IMRB survey commissioned by PFNDAI, an industry-backed body. It measures against the full RDA rather than the EAR, and is an industry-funded statistic. It should be read with that context.'
      },
      {
        type: 'sub-section',
        title: 'The Quality Gap — The Insight That Actually Matters',
        body: "This is the critical framing: India's protein problem is about quality, not quantity. ICMR-NIN 2020 explicitly states that for cereal-heavy diets, protein requirements increase to 1g/kg/day — 20% higher than standard RDA — because cereal protein is incomplete."
      },
      {
        type: 'table',
        headers: ['Source', 'Rural Share', 'Urban Share', 'NIN Recommended'],
        rows: [
          ['Cereals', '45.9%', '38.7%', '32%'],
          ['Pulses', '8.7%', '9.1%', '19%'],
          ['Milk and Dairy', '11.0%', '12.9%', '—'],
          ['Egg, Fish, Meat', '12.4%', '14.1%', '—']
        ],
        footnote: 'Source: MOSPI HCES 2023-24'
      },
      {
        type: 'paragraph',
        text: "The amino acid quality implications are severe. Rice has a DIAAS (Digestible Indispensable Amino Acid Score) of just 37-59. Wheat scores 40-45. Both are severely limited in lysine, the amino acid critical for muscle maintenance and immune function. Compare this to eggs (DIAAS 113-122) and milk (DIAAS 114-117). The ICMR-NIN 2020 report makes the arithmetic explicit: total crude protein intake of 60g/day multiplied by a 0.8 digestibility correction leaves only 48g of quality protein. That 20% haircut means apparent adequacy consistently masks functional deficiency. India's animal-source protein at 23-27% of total protein compares to 55-60% in developed countries. India has the lowest average animal-based protein intake among comparable Asian economies."
      },
      {
        type: 'sub-section',
        title: 'Regional Variation',
        body: 'Vegetarian-dominant northern states (Rajasthan, Haryana, Gujarat, UP, MP): dairy is the primary high-quality protein source. Over 80% of women in Haryana are vegetarian. South and northeast: only ~8% of women and 5% of men never eat meat. The Indian Migration Study (PMC) confirmed vegetarians consume 6.4g/day less protein than non-vegetarians across all geographic locations.'
      },
      {
        type: 'paragraph',
        text: 'Downstream health consequences from NFHS-5 (2019-21): 35.5% stunting in children under 5. 19.3% wasting. 57% anaemia in women. 67% anaemia in young children. These are not abstractions — they are the measurable outcomes of a sustained national quality protein gap.'
      },
      {
        type: 'image-slot',
        description: 'India protein source breakdown — data visualization concept',
        imagePath: '/public/images/research/module-02/protein-source-breakdown.jpg'
      }
    ]
  },
  {
    id: 'section-2-trust',
    title: 'Section 2: The Trust Crisis That Shapes Every Purchase',
    anchorId: 'section-02-trust',
    tocLabel: 'The Trust Crisis',
    content: [
      {
        type: 'paragraph',
        text: "Before any Indian consumer decides whether a protein product works for them, they first have to decide whether it contains what it claims. That decision is not irrational. The data on adulteration in India's protein market is alarming."
      },
      {
        type: 'sub-section',
        title: 'What Testing Has Found',
        body: '25-30% of all products sold in India are counterfeit (ASPA-CRISIL 2023). The Citizens Protein Project (peer-reviewed, Medicine journal, April 2024) tested 36 popular protein supplements and found 70% mislabeled — protein content lower than advertised by 10% to over 50%. Worst case: a vegan protein labeled at 81% protein contained only 20%. Additionally, 14% contained fungal toxins (aflatoxins), 75% contained detectable lead, and evidence of amino acid spiking was widespread — adding cheap glycine or taurine to inflate nitrogen-based protein readings without adding actual usable protein.'
      },
      {
        type: 'paragraph',
        text: 'Citizens Protein Project 2 (2025, PMC) tested pharmaceutical and medical protein brands. 83% were mislabeled. Average protein content: approximately 29g per 100g. 89% showed taurine-based nitrogen spiking versus 12.5% for nutraceutical brands. A 2024 Noida factory raid shut down a facility producing counterfeit protein powders that caused documented liver and skin damage to consumers. FSSAI filed 38,053 civil and 4,817 criminal cases in FY 2022-23.'
      },
      {
        type: 'sub-section',
        title: 'How Consumers Navigate This Environment',
        body: "MuscleBlaze launched the world's first home protein testing kit (NABL-accredited, approximately Rs 100 per test) in response to the trust crisis. Within one year, they gained 10% additional market share (NutraIngredients 2023). That number is the clearest evidence available for how much consumers value verifiable proof in this category."
      },
      {
        type: 'paragraph',
        text: "YouTube reviewers play an outsized verification role. When influencer Arpit Mangal tested San Nutrition's ISO PRO and found far less protein than labeled, the brand filed a defamation and trademark infringement lawsuit. In April 2025, the Delhi High Court (Justice Amit Bansal) refused to grant San Nutrition an injunction, finding that Mangal's lab-report-backed criticism constituted prima facie fair comment protected under Article 19(1)(a) of the Constitution. The court held that San Nutrition had not challenged the authenticity of the lab results and that the influencer's conduct fell within the realm of consumer awareness and public interest. While this ruling does not establish a broad new legal right for all third-party testers, it sets a strong precedent that evidence-based product criticism supported by accredited lab reports is protected speech in India."
      },
      {
        type: 'paragraph',
        text: "Survey-level data reinforces the trust gap: in a 2021 online survey of youth in Navi Mumbai, 41.9% of respondents doubted protein supplement efficacy. A separate 2023-24 study of 450 gym-goers in Chennai found only 3.9% of supplement recommendations came from doctors, while gym trainers were the primary recommenders at 22.6%. These are localized samples, not national statistics, but they directionally illustrate the information vacuum in which Indian protein consumers operate."
      },
      {
        type: 'sub-section',
        title: 'The FSSAI Reality'
      },
      {
        type: 'paragraph',
        variant: 'accented',
        text: 'FSSAI certification — the 14-digit license number and green triangle logo — is the primary consumer trust signal. But FSSAI does not pre-approve supplements. It regulates manufacturing practices. Manufacturer-submitted test results are not made public. The gap between perceived and actual regulatory protection is significant. As one MuscleBlaze executive told NutraIngredients: "For a country as large as India, it is almost impossible for the regulator to cover the ground." Brands that make their own testing results independently verifiable — QR-code-linked batch reports, public lab results — are building trust capital that the regulatory framework cannot provide.'
      },
      {
        type: 'image-slot',
        description: 'Protein supplement testing — lab verification concept',
        imagePath: '/public/images/research/module-02/supplement-testing-lab.jpg'
      }
    ]
  },
  {
    id: 'section-2-shift',
    title: 'Section 3: From Gym to Refrigerator',
    anchorId: 'section-02-shift',
    tocLabel: 'From Gym to Refrigerator',
    content: [
      {
        type: 'paragraph',
        text: 'Between 2020 and 2025, protein in India went through a genuine cultural repositioning. Business Standard brand strategist Ambi Parameswaran wrote in September 2025: "Protein-packed products have made a giant leap from the gym to the refrigerator at home." The data confirms it.'
      },
      {
        type: 'sub-section',
        title: 'The Market Today',
        body: 'Protein supplement market: approximately USD 860 million to 1.03 billion in 2024-25 (IMARC Group/Grand View Research). Growing at 6.6-13.3% CAGR. RTD protein specifically: USD 48.8 million (store-based, 2024) growing at 11.3% CAGR — the fastest-growing protein format by growth rate.'
      },
      {
        type: 'paragraph',
        text: 'COVID-19 was the catalyst. The pandemic emphasis on immunity moved protein from gym-centric niche to mainstream dietary conversation (Mordor Intelligence). The shift accelerated two things: mainstream consumer demand for protein in everyday formats, and the emergence of brands positioned explicitly outside the gym identity.'
      },
      {
        type: 'sub-section',
        title: 'Brands Leading the Transition'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Amul embeds protein into chaas, lassi, and high-protein milk — making protein invisible within familiar daily formats.',
          'The Whole Truth positions around radical ingredient transparency, every ingredient printed on the front of pack.',
          'YogaBar built clean-label protein bars and was acquired by ITC, signaling the category\'s mainstream arrival.',
          'Epigamia modernized dairy protein through Greek yogurt.',
          'ITC Aashirvaad Protein Atta reframed the category entirely: "3 rotis = 25% of your daily protein need."',
          'Swiggy launched a dedicated "High Protein" food category across 30 cities in July 2025 — featuring over 5 lakh dishes from 35,000+ restaurant partners, each meeting a minimum 15g protein per serving threshold — normalizing protein as everyday food rather than supplement.'
        ]
      },
      {
        type: 'sub-section',
        title: 'The Perception Wall That Still Stands',
        body: 'The Right to Protein / Nielsen Paradox Study conducted across 16 Indian cities found: more than 70% of Indian mothers believe protein is only for bodybuilders. 76% believe protein causes weight gain. 72% believe it is difficult to digest. Only 3% of mothers who claim to know protein actually understand its functions. 85% of Indian mothers cannot correctly identify protein-rich foods when presented with them. Among broader consumers, 20% believe protein is bad for health outright.'
      },
      {
        type: 'paragraph',
        text: 'The "dal-roti is enough" cultural narrative remains powerful — reinforced by family tradition and Ayurvedic frameworks. A typical dal-rice diet provides only 50-80g of protein, much of it from cereals with DIAAS scores below 60.'
      },
      {
        type: 'paragraph',
        variant: 'insight',
        text: 'The pattern across winning brands is consistent. None of them wage a direct education campaign against the perception wall. Instead, they embed protein into formats where the consumer does not need to update their beliefs to make the purchase. The format does the work that marketing cannot.'
      },
      {
        type: 'image-slot',
        description: 'Indian consumer health food shift — everyday protein formats',
        imagePath: '/public/images/research/module-02/consumer-health-shift.jpg'
      }
    ]
  },
  {
    id: 'section-2-buyer',
    title: 'Section 4: Who Actually Buys RTD Protein',
    anchorId: 'section-02-buyer',
    tocLabel: 'Who Actually Buys This',
    content: [
      {
        type: 'paragraph',
        text: "The Indian RTD protein buyer in 2024-25 is not a bodybuilder. They are more likely to be a 28-to-38-year-old urban professional who skips breakfast twice a week, feels vaguely guilty about afternoon snacking, and discovered this product while ordering groceries at 3 PM."
      },
      {
        type: 'sub-section',
        title: 'The Demographic Profile',
        body: 'Millennials aged 25-44 lead healthy eating adoption at 60% (Sodexo 2024). Male-dominated at 73% vs 27% female among supplement users. Metro-concentrated but Tier-2 cities emerging rapidly. 49% of gym-goers use supplements; 80% of those choose whey protein.'
      },
      {
        type: 'sub-section',
        title: 'Three Behavioral Segments'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'Fitness Enthusiasts',
            body: 'The legacy core. High knowledge, high commitment, high spend. Already convinced of protein\'s value. The segment that built this category. Primarily powder users for daily volume; RTD as convenience for specific moments.'
          },
          {
            title: 'Casual Health-Conscious Consumers',
            body: 'The fastest-growing segment. Urban professionals, parents, elderly. Looking for general wellness and satiety, not muscle building. This group has the most false beliefs about protein and the most to gain. They are also the most likely to try once and not return if the product causes discomfort.'
          },
          {
            title: 'Convenience Seekers',
            body: 'Drawn to what one analyst called the "Starbucks-ification of protein." Sippable, portable, Instagram-friendly, ideally delicious. Quick commerce makes this segment viable at scale. They buy for the occasion, not for the nutrition.'
          }
        ]
      },
      {
        type: 'sub-section',
        title: 'What Drives Repeat',
        body: 'Taste is the primary gate. Brands that fail on taste after trial lose customers invisibly — no complaints, no reviews, just silence. Digestive gentleness is the secondary gate. Bloating or discomfort after the second or third bottle ends the relationship before it begins. EatFit and Curefoods derive 40-50% of revenue from repeat subscribers. Acceptable monthly churn for supplement D2C brands: approximately 6-7%. 44% of Indian consumers are willing to pay a 9% premium for health and wellness food products (ScienceDirect).'
      },
      {
        type: 'image-slot',
        description: 'Urban Indian consumer — everyday health buying moment',
        imagePath: '/public/images/research/module-02/urban-consumer-buying.jpg'
      }
    ]
  },
  {
    id: 'section-2-lactose',
    title: 'Section 5: Lactose Intolerance — The Formulation Fault Line',
    anchorId: 'section-02-lactose',
    tocLabel: 'The Lactose Fault Line',
    content: [
      {
        type: 'paragraph',
        text: "60-70% of India's population has some degree of lactose intolerance. This is not a minor footnote in protein product design. It is the most important physiological fact a protein brand operating in India needs to internalize."
      },
      {
        type: 'sub-section',
        title: 'The Research',
        body: 'The foundational Tandon et al. study (1983, American Journal of Clinical Nutrition) found 66.6% lactose intolerance in South India (Trivandrum, Pondicherry) versus 27.4% in North India (New Delhi), statistically significant at p<0.001. A University of Chicago genetic study found only 18% of Indians carry the lactose persistence mutation — meaning approximately 82% are genetically lactose malabsorbers.'
      },
      {
        type: 'paragraph',
        text: 'Many manage comfortably through fermented dairy (curd, paneer), where fermentation naturally reduces lactose content. But whey protein concentrate — with significant residual lactose — triggers bloating, gas, and cramping within 30-90 minutes in susceptible individuals.'
      },
      {
        type: 'sub-section',
        title: 'Geographic Implications for Brands'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'South India (66.6% Intolerance)',
            body: 'A WPC-based product has a structural disadvantage here. Products using lactase enzyme treatment, whey isolate, clear whey, or plant-based protein have a genuine physiological advantage in this geography that goes beyond marketing positioning.'
          },
          {
            title: 'North India (27.4% Intolerance)',
            body: 'Standard WPC products perform better. But the Tandon study also found that even "tolerant" North Indians showed reduced tolerance under repeated high-dose exposure — relevant for daily-use RTD formats.'
          }
        ]
      },
      {
        type: 'sub-section',
        title: 'What This Means for Nuvie',
        body: "Nuvie's lactase enzyme treatment (achieving 0.1% or less residual lactose per FSSAI standard) is not a marketing claim. It is a formulation decision that structurally expands the addressable consumer base in South India from roughly 33% to nearly 100% of the dairy-consuming population. This is a competitive moat that a significant portion of the RTD protein market has not built. The question is whether the brand communicates this advantage clearly enough for the consumer to understand why it matters to them personally."
      },
      {
        type: 'image-slot',
        description: 'North vs South India lactose intolerance variation — regional map concept',
        imagePath: '/public/images/research/module-02/lactose-intolerance-regional.jpg'
      }
    ]
  },
  {
    id: 'section-2-occasions',
    title: 'Section 6: The 5 Occasions — When Consumers Actually Reach For This',
    anchorId: 'section-02-occasions',
    tocLabel: 'The 5 Purchase Occasions',
    content: [
      {
        type: 'paragraph',
        text: "Most protein brands market to a single occasion: post-workout. The Indian consumer's actual behavior suggests at least five distinct moments when a protein RTD gets purchased. Each has a different competitor set, a different price sensitivity, and a different win condition."
      },
      {
        type: 'sub-section',
        title: 'Occasion 1 — Morning Protein Gap (6-9 AM)',
        body: 'Job: "Give me something fast that won\'t make me feel terrible by 10 AM." Real competitor: RTD cold coffee (Sleepy Owl, Nescafe at Rs 70/can), skipped breakfast. Indian eating patterns: breakfast accounts for 23% of daily calories (Oxford Academic). For rushed urban professionals skipping proper breakfast, a 20g protein RTD fills a real gap. Win condition: tastes like a treat, functions like a meal supplement.'
      },
      {
        type: 'sub-section',
        title: 'Occasion 2 — Post-Workout Recovery (7-9 AM, 5-8 PM)',
        body: 'Job: "I just worked out, I need protein now, I don\'t want to prep a shake." Real competitor: home-mixed whey powder, protein bars. The legacy protein occasion. Still dominated by whey powder for heavy gym users. RTD wins on convenience for the moderate-intensity gym-goer who does not want the ritual of powder and shaker. Win condition: close enough to the whey user\'s expectation at a convenience premium they will accept.'
      },
      {
        type: 'sub-section',
        title: 'Occasion 3 — Afternoon Energy Slump (2-4 PM)',
        body: 'Job: "I\'m flagging, I want something cold and satisfying, and I\'d rather not feel guilty." Real competitor: cold coffee, chai, energy drinks, office canteen snacks. The highest-potential workplace occasion. Quick commerce\'s 10-minute delivery effectively replaces the office vending machine. This is where Nuvie\'s cold coffee SKU has its strongest competitive position. Win condition: wins on the coffee shelf, not the protein shelf.'
      },
      {
        type: 'sub-section',
        title: 'Occasion 4 — Guilt-Free Snack Replacement (throughout day)',
        body: 'Job: "I want to eat something indulgent but I don\'t want to undo the day." Real competitor: biscuits, namkeen, packaged snacks. 40% of Indians are heavy snackers, and Mintel notes this snacking "is usually accompanied by guilt." A protein RTD at Rs 79-110 that tastes like a milkshake resolves this tension. Win condition: delivers the indulgence signal first, the nutrition benefit second.'
      },
      {
        type: 'sub-section',
        title: 'Occasion 5 — Late Evening Impulse (9 PM-midnight)',
        body: 'Job: "I want something sweet before bed but not ice cream." Real competitor: ice cream, packaged sweets, snacks. Quick commerce data shows significant impulse activity in this window. Chocolate and indulgence categories spike here. Win condition: dessert substitute that does not trigger post-purchase regret.'
      },
      {
        type: 'paragraph',
        variant: 'insight',
        text: 'The strategic implication: brands that market only to Occasion 2 (post-workout) are competing for 2-3% of India\'s population who visit gyms. Brands that own Occasion 3 (afternoon slump) on quick commerce are competing for every urban professional in a metro city. The TAM difference is enormous.'
      },
      {
        type: 'image-slot',
        description: '5 consumption occasions — daily timeline concept',
        imagePath: '/public/images/research/module-02/consumption-occasions-timeline.jpg'
      }
    ]
  },
  {
    id: 'section-2-qcommerce',
    title: 'Section 7: The Quick Commerce Behavioral Shift',
    anchorId: 'section-02-qcommerce',
    tocLabel: 'The Quick Commerce Shift',
    content: [
      {
        type: 'paragraph',
        text: "Quick commerce has done something to the protein RTD category that no amount of gym marketing could accomplish: it made protein a spontaneous purchase. Understanding how this channel works mechanically is the difference between growing on it and being crushed by it."
      },
      {
        type: 'sub-section',
        title: 'The Scale',
        body: 'India quick commerce market: USD 6-7 billion GMV by calendar 2024 (IBEF, Bain and Company). FY25 growth: 75-85% year-over-year. Quick commerce now accounts for roughly two-thirds of all online grocery orders and approximately 10% of total e-retail spend in India (Bain 2024). Market share: Blinkit 44-52%, Swiggy Instamart 25-27%, Zepto 21-23%. Blinkit operated 1,816 dark stores as of September 2025, targeting 3,000 by March 2027. Morgan Stanley total addressable market estimate: USD 57 billion.'
      },
      {
        type: 'sub-section',
        title: 'What Changed for Protein Specifically',
        body: 'Before quick commerce, protein was a planned purchase. The buyer was already convinced before they opened a tab. After quick commerce, protein RTD is an impulse category. 19% of quick commerce orders are impulse purchases concentrated in snacks and beverages. Snacks and beverages account for approximately 32% of quick commerce category share (Nexdigm). Average monthly orders per customer grew from 4.4 (2021) to 6.0 (2024).'
      },
      {
        type: 'paragraph',
        text: 'The Protein Chef case study: Lo! Foods brand launched on quick commerce less than 10 months prior to a YourStory interview. Quick commerce already drives 60% of all consumer product sales, overtaking D2C, e-commerce, and traditional retail combined.'
      },
      {
        type: 'paragraph',
        variant: 'insight',
        text: "Nuvie's protein cold coffee appears on Blinkit in the Cold Coffee and Ice Tea category, next to Sleepy Owl, Blue Tokai, and Starbucks RTD. The consumer browsing cold coffee on Blinkit at 3 PM is not comparing Nuvie to whey protein. They are comparing it to a Rs 70 Sleepy Owl cold coffee. The question in their head is not \"is this a good protein supplement?\" It is \"is this worth Rs 30-40 more than the coffee I was going to buy?\" That reframe changes everything: the marketing language, the thumbnail design, the flavor strategy, the price anchoring."
      },
      {
        type: 'sub-section',
        title: 'How the Algorithm Works',
        body: 'Fill rate is the single most important ranking signal. Below 80%: Blinkit demotes search ranking, reduces paid ad visibility, and can remove listings from active pincodes entirely. After fill rate: sales velocity, conversion rate, review velocity, price competitiveness.'
      },
      {
        type: 'paragraph',
        text: 'New brand cold-start problem: products may not surface in recommendations until sufficient purchase history accumulates. This makes early velocity — even at cost — disproportionately important. Advertising mechanics: Blinkit Brand Central (via SearchSenze) — keyword-based product booster ads Rs 2-15 CPC, banner placements Rs 100-3,000 CPM. Quick commerce delivers 1.5-2x higher ROAS than Meta/Google. Conversion rates 3-8% versus 1.5-3% on traditional digital platforms (Inc42). Recommended ad budget for early-stage brands: 8-15% of platform GMV.'
      },
      {
        type: 'sub-section',
        title: 'Getting Listed — The Actual Process',
        body: 'Blinkit: requires GSTIN, PAN, FSSAI license, trademark certificate, bank details, product catalogue. Cannot self-list — Category Manager must approve every listing. Entry model: SOR (Sale or Return). Rs 25,000 PLA (Product Listing Advance) per SKU per state, credited as mandatory Brand Central ad spend. Non-refundable, 12-month expiry. 70% of seller applications rejected on first attempt due to incomplete documentation (SellerRocket). Zepto: no upfront registration charges. 3-7 days for account activation, 30-45 days for full verification.'
      },
      {
        type: 'sub-section',
        title: 'The Margin Reality and the Discount Trap',
        body: 'Blinkit commission: 2-18% slab-based. Payment processing: 2-3%. Logistics: Rs 15-25 per order. Mandatory ad spend on top. Total cost to brand: 20-35% of MRP. At MRP Rs 110 and estimated COGS of Rs 42-61, contribution on a quick commerce single unit is at or near zero. Quick commerce builds brand before it builds contribution margin.'
      },
      {
        type: 'paragraph',
        text: 'Discounting on quick commerce is co-funded between brand and platform, but platforms are pulling back as profitability pressure mounts. Swiggy moved away from "deep-discount-driven growth" by Q3 FY26. AICPDF (representing 8 lakh FMCG distributors) filed a CCI complaint against platforms for predatory pricing, demanding a 10% price floor on MRP. If a consumer has anchored on Rs 79, the friction of moving them to Rs 110 D2C is real and measurable.'
      },
      {
        type: 'image-slot',
        description: 'Quick commerce dark store — pick and pack operation concept',
        imagePath: '/public/images/research/module-02/quick-commerce-darkstore.jpg'
      }
    ]
  },
  {
    id: 'section-2-failure',
    title: 'Section 8: How Protein Products Die in India',
    anchorId: 'section-02-failure',
    tocLabel: 'How Products Die',
    content: [
      {
        type: 'paragraph',
        text: "Most protein products that fail in India do not fail loudly. There is no single bad review that kills them, no recall, no controversy. They simply experience trial without repeat. Understanding the four mechanisms behind this is the most operationally useful analysis in this module."
      },
      {
        type: 'sub-section',
        title: 'Digestive Discomfort — The Silent Repeat Killer',
        body: 'MuscleBlaze-Nielsen Survey (2019): 403 male respondents across Delhi, Mumbai, Bengaluru, and Hyderabad. 37-40% of whey protein users were not completely satisfied with protein absorption. Among users with 2+ years of gym experience, dissatisfaction rose to 45%. Top reported symptoms: bloating, indigestion, gaseousness, loose motions, acne. Root cause identified by the study: Indian diets have a carbohydrate-to-protein ratio of 5:1 versus the Western 3:1. Indian digestive systems are less adapted to sudden high-protein loads.'
      },
      {
        type: 'paragraph',
        text: 'Combined with 60-70% national lactose intolerance (66.6% in South India), standard whey protein concentrate is physiologically problematic for the majority of Indian consumers. The consumer never leaves a review. They never complain to the brand. They just stop buying.'
      },
      {
        type: 'sub-section',
        title: 'Mislabeling Erodes Category Trust',
        body: "Citizens Protein Project 2024: 70% of tested supplements mislabeled. 14% contain fungal toxins. The category has a documented, peer-reviewed quality problem. The response that has proven to work: MuscleBlaze home test kit, 10% market share gain in one year. Nuvie's QR code linking to test reports is the correct instinct. Whether the consumer journey from scan to confidence is smooth enough to matter is worth testing."
      },
      {
        type: 'sub-section',
        title: 'Taste Fatigue and Texture Failure',
        body: 'Chalky texture is the number-one complaint in protein product reviews. Artificial sweetener overload (sucralose and aspartame activating bitter taste receptors at prolonged exposure). Flavor monotony — chocolate and vanilla dominate the entire category and create inevitable fatigue with daily use. RTD has a structural advantage over powder: no mixing, consistent texture every time, flavors that are harder to fatigue on (milkshake format). But retort processing introduces cooked notes that require deliberate flavor design to mask and manage.'
      },
      {
        type: 'sub-section',
        title: 'The Perception Wall That Education Cannot Overcome',
        body: '70% of Indian mothers believe protein is only for bodybuilders. 76% believe protein causes weight gain. 20% of broader consumers believe protein is bad for health. The winning strategy is not an education campaign. It is product and format design that makes the belief irrelevant to the purchase. Amul embeds protein in chaas. ITC puts it in atta. Swiggy categorizes it as daily food. The format bypasses the wall that marketing cannot breach.'
      },
      {
        type: 'image-slot',
        description: 'Product failure modes — conceptual illustration',
        imagePath: '/public/images/research/module-02/product-failure-modes.jpg'
      }
    ]
  },
  {
    id: 'section-2-questions',
    title: 'Open Questions',
    anchorId: 'section-02-questions',
    tocLabel: 'Open Questions',
    content: [
      {
        type: 'paragraph',
        text: 'These are the things I observed but could not confirm from public information. They stay on the list.'
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'How does Nuvie\'s repeat purchase rate compare between quick commerce buyers and D2C website buyers? These are likely very different consumers with different usage patterns and different price anchors.',
          'What percentage of Nuvie\'s quick commerce sales is the cold coffee SKU versus the milkshake SKUs? This would reveal whether the coffee occasion or the milkshake occasion is driving actual traction.',
          'Does Nuvie have geographic concentration in specific cities or regions? Given South India\'s 66.6% lactose intolerance rate, performance there would be a meaningful signal for whether the lactase advantage is converting.',
          'Are Nuvie\'s quick commerce customers predominantly first-time buyers or repeat buyers? If mostly first-time, the product has a trial problem solved but a retention problem unsolved.',
          'What is Nuvie\'s fill rate across dark store pincodes? This single number determines algorithmic visibility more than any other operational variable.',
          'Has the price gap between Rs 79 discounted quick commerce and Rs 110 MRP created measurable drop-off in D2C conversion? Confirming or denying this shapes the entire channel strategy going forward.'
        ]
      }
    ]
  }
];
