import { EditorialSection } from '../../types';

export const module03Content: EditorialSection[] = [
  {
    id: 'section-3-economics',
    title: 'Section 1: The P&L Waterfall — From MRP to Net Contribution',
    anchorId: 'section-03-economics',
    tocLabel: 'The P&L Waterfall',
    content: [
      {
        type: 'paragraph',
        text: 'The MRP on a protein RTD bottle is not what a brand earns. By the time GST, discounts, COGS, shipping, payment gateway fees, returns, and marketing costs are deducted, most Indian D2C protein brands are left with a net contribution that is close to zero — or negative — on the first purchase. Understanding this waterfall is the foundation of everything else in this module.'
      },
      {
        type: 'sub-section',
        title: 'The Unit Economics Breakdown',
        body: 'The figures below are directional industry estimates synthesized from multiple D2C data points and founder interviews. They are not from a single verified source and should be read as a structural model, not a precise claim.'
      },
      {
        type: 'table',
        headers: ['Line Item', 'Amount (Rs)', '% of MRP'],
        rows: [
          ['MRP', '110', '100%'],
          ['GST (5% food category)', '-5.5', '-5%'],
          ['Discount (15% average)', '-16.5', '-15%'],
          ['Net selling price', '88', '80%'],
          ['COGS (protein, milk, packaging, processing)', '-40 to -48', '-36 to -44%'],
          ['Gross margin', '40 to 48', '36 to 44%'],
          ['Shipping (allocated per unit from multi-pack)', '-13 to -20', '-12 to -18%'],
          ['Payment gateway (2%)', '-1.75', '-1.6%'],
          ['Returns and breakage allocation', '-4 to -8', '-4 to -7%'],
          ['CM2 (post-fulfillment)', '15 to 30', '14 to 27%'],
          ['Marketing and CAC allocation', '-15 to -25', '-14 to -23%'],
          ['Net contribution (CM3)', '-10 to +5', '-9% to +5%']
        ],
        footnote: 'Directional model based on industry averages'
      },
      {
        type: 'paragraph',
        text: 'The structural challenge is stark. Average D2C food brand CAC is Rs 1,850 (UpGrowth FoodTech report), while average food D2C AOV is just Rs 650. Breaking even requires 4 purchases. Only 22% of customers ever make a second purchase. This means the overwhelming majority of customers acquired through paid digital channels remain permanently unprofitable unless repeat purchase is engineered systematically. Healthy LTV:CAC ratio target is 3:1, but most Indian D2C brands operate at 1.5 to 2.5x — below the sustainability threshold.'
      },
      {
        type: 'sub-section',
        title: 'Why RTD Protein Has Worse Margins Than Every Other Format',
        body: 'RTD protein beverages achieve 35 to 50% gross margins — significantly below protein powder (55 to 70%) and personal care (60 to 70%). The compression comes from three structural sources. First, liquid processing costs: retort or UHT sterilization adds Rs 8 to 14 per unit in co-manufacturing charges. Second, packaging costs per serving: PET bottles run Rs 5 to 8 per unit versus negligible packaging for powder sachets. Third, weight-to-value ratio: shipping a 6-pack of 250ml RTD bottles (1.5 to 2 kg) costs Rs 80 to 150 depending on zone, representing 8 to 15% of order value. Damage rates for RTD liquids add another 1 to 2% for PET formats (and as high as 2 to 5% for glass). RTD beverages are among the structurally worst product types for D2C shipping economics. This is not a solvable problem — it is a category constraint that must be managed through pack architecture and channel mix.'
      },
      {
        type: 'sub-section',
        title: 'Working Capital and the Cash Trap',
        body: 'COD (cash on delivery) orders represent 30 to 50% of D2C website transactions, rising to 60 to 70% in Tier 2 and 3 cities. COD return-to-origin (RTO) rates hit 25 to 30%, forcing brands to absorb both forward and reverse shipping costs with zero revenue. RTD-specific working capital challenges include shelf-life-driven inventory risk (3 to 9 months for ambient retort products), seasonal demand swings, and contract manufacturers who often demand 50% advance payment. B2B retailers require products with 70% or more remaining shelf life, further compressing the sellable window after production.'
      },
      {
        type: 'image-slot',
        description: 'P&L waterfall diagram — MRP to net contribution visual',
        imagePath: '/public/images/research/module-03/pl-waterfall.jpg'
      }
    ]
  },
  {
    id: 'section-3-qcommerce-economics',
    title: 'Section 2: Quick Commerce Margin Stack — The Real Cost',
    anchorId: 'section-03-qcommerce-economics',
    tocLabel: 'Quick Commerce Margin Stack',
    content: [
      {
        type: 'paragraph',
        text: 'Quick commerce now accounts for 57% or more of online RTD beverage sales in India. It is the dominant discovery channel for protein RTD. It is also the channel where brand margins are most brutally compressed. Understanding exactly where the money goes is essential before making any channel investment decision.'
      },
      {
        type: 'sub-section',
        title: 'Platform Fee Structure (2024-2025 verified estimates)',
        body: 'Platform rates are proprietary and change frequently. The following are industry-verified estimates drawn from Storyboard18, Inc42, ecomdigest, Exchange4media, and multiple seller reports.'
      },
      {
        type: 'table',
        headers: ['Fee Component', 'Blinkit', 'Zepto', 'Swiggy Instamart'],
        rows: [
          ['Base commission', '8 to 18% (variable by selling price, revised March 2025)', '8 to 18% (increasing)', '15 to 22% (reportedly rising)'],
          ['Listing fee per SKU', 'Rs 25,000 per SKU per state (credited to ad wallet)', 'Rs 5 to 6 lakh bundled onboarding', 'Rs 8 to 10 lakh per quarter ad wallet'],
          ['Minimum ad spend', 'Rs 2 to 3 lakh per month', 'Rs 2 to 7.5 lakh per month', 'Rs 4.5 to 9 lakh per quarter'],
          ['Storage fees', 'Rs 5 to 20 per unit per day', 'Similar', 'Rs 2,000 to 15,000 per month'],
          ['Customer return fee', 'Rs 50 per unit (seller-attributed)', 'Bundled', 'Included']
        ],
        footnote: 'Industry research as of March 2025'
      },
      {
        type: 'sub-section',
        title: 'The Brand Margin Waterfall on Quick Commerce',
        body: 'For a Rs 110 MRP protein RTD unit:'
      },
      {
        type: 'table',
        headers: ['Component', 'Amount'],
        rows: [
          ['Consumer pays (after platform discount)', 'Rs 88 to 99'],
          ['Platform commission (12 to 18%)', '-Rs 11 to 18'],
          ['Ad and visibility spend (10 to 15% of GMV)', '-Rs 9 to 15'],
          ['Warehousing and logistics', '-Rs 3 to 5'],
          ['Listing fee amortized per unit', '-Rs 2 to 5'],
          ['Promotional discount (brand-funded)', '-Rs 5 to 15'],
          ['Net realization for brand', 'Rs 40 to 65 (36 to 59% of MRP)'],
          ['Less COGS (40 to 45%)', '-Rs 35 to 45'],
          ['Contribution margin per unit', 'Rs -5 to +20']
        ]
      },
      {
        type: 'paragraph',
        text: 'Blinkit generated Rs 1,000 crore in ad revenues in FY25 alone. Ad rates surged 40 to 50% for premium placement slots in 2025. Quick commerce works for brands with 70% or more gross margins and 10,000 or more monthly orders. For an early-stage RTD protein brand with gross margins at 35 to 50% and sub-Rs 150 MRP, the math is punishing. The channel builds brand recognition and drives trial — it does not, at current volumes, build contribution margin.'
      },
      {
        type: 'sub-section',
        title: 'The Private Label Threat',
        body: "Platform private labels are growing 3.9x faster than national brands (Nielsen 2024). Zepto's \"Relish\" brand grew from approximately Rs 40 million per month to Rs 180 million per month GMV in 16 months. Swiggy's \"Noice\" has launched across 200+ products in 13 categories. BigBasket private labels now account for approximately 40% of its sales. While platforms have not significantly entered protein supplements yet, the trajectory into snacking and ready-to-eat categories creates a direct adjacency risk. When platforms own the algorithm and own a competing product, listed brand visibility can become a managed resource rather than an earned one."
      },
      {
        type: 'paragraph',
        text: 'The pricing power erosion is already visible in the wider FMCG market. The All India Consumer Products Distributors Federation filed a formal CCI petition in February 2025 documenting approximately 50% price gaps between quick commerce and traditional trade across 25 branded products. Brands fund promotional discounts of 5 to 15% of GMV to maintain visibility, which trains consumers to expect lower prices and progressively undermines MRP integrity across all channels.'
      },
      {
        type: 'image-slot',
        description: 'Quick commerce margin stack — visual breakdown',
        imagePath: '/public/images/research/module-03/qc-margin-stack.jpg'
      }
    ]
  },
  {
    id: 'section-3-pricing',
    title: 'Section 3: Competitive Pricing Map — Where Nuvie Sits',
    anchorId: 'section-03-pricing',
    tocLabel: 'Competitive Pricing Map',
    content: [
      {
        type: 'paragraph',
        text: 'Price per gram of protein is the most honest metric for evaluating RTD protein value. It strips away packaging, branding, and marketing to reveal the fundamental proposition a consumer is accepting. The spread across India\'s RTD protein market is dramatic.'
      },
      {
        type: 'paragraph',
        variant: 'muted',
        italic: true,
        text: 'Pricing data as of April 2026. Quick commerce prices are subject to platform-specific discounts and can change frequently.'
      },
      {
        type: 'table',
        headers: ['Brand', 'Format', 'Protein', 'MRP', 'Blinkit Price', 'Rs per gram protein (Blinkit)'],
        rows: [
          ['Amul HP Blueberry', '200ml Tetra Pak', '20g', 'Rs 50', 'Rs 48 to 50', 'Rs 2.40 to 2.50'],
          ['Nuvie', '250ml PET bottle', '20g', 'Rs 110', 'Rs 88 to 99', 'Rs 4.40 to 4.95'],
          ['Epigamia Turbo', '250ml PET bottle', '25g', 'Rs 141', 'Rs 99', 'Rs 3.96'],
          ['Yogabar', '250ml PET bottle', '26g', 'Rs 131', 'Rs 109 to 119', 'Rs 4.19 to 4.58'],
          ['Phab', '200ml Tetra Pak', '18g', 'Rs 125 to 135', 'Rs 100 to 123', 'Rs 5.56 to 6.83']
        ]
      },
      {
        type: 'paragraph',
        text: 'Amul at Rs 2.50 per gram creates a value floor that every premium brand must justify exceeding. Nuvie at Rs 4.40 to 4.95 per gram charges a 2x premium over Amul. That premium must be earned through taste, lactose-free positioning, prebiotic fiber claims, brand experience, and distribution. The fact that Nuvie sells at near-MRP on its own D2C website while quick commerce platforms discount 10 to 30% below MRP is a deliberate strategy — avoiding training D2C customers to anchor on discounted prices. This channel price discipline is harder to maintain as competitors run deeper promotions, but it is the correct long-term play.'
      },
      {
        type: 'sub-section',
        title: 'Pack Architecture Strategies in the Market'
      },
      {
        type: 'paragraph',
        variant: 'accented',
        text: 'Tiered entry-point architecture (Phab model): Multiple protein levels at different price points within the same format — 10g protein for milkshake-adjacent positioning, 18g for the health-conscious consumer. Same bottle, different consumer jobs.'
      },
      {
        type: 'paragraph',
        variant: 'accented',
        text: 'Aggressive mass-market pricing (Amul model): Cooperative cost advantages enable Rs 50 for 200ml of 20g protein. This is not a strategy that D2C brands can match on economics — it is a cost structure that requires the scale and procurement advantages of a cooperative dairy. It sets the category\'s value expectation.'
      },
      {
        type: 'paragraph',
        variant: 'accented',
        text: 'D2C bundle architecture (Nuvie model): No single-serve on the D2C website — minimum is Pack of 6 at Rs 659, with a Starter Pack (4 shakes plus 2 bars) for cross-category trial, and Pack of 24 at Rs 2,549 targeting subscription behavior. This architecture crosses free shipping thresholds, establishes habitual consumption, and generates higher contribution per order.'
      },
      {
        type: 'paragraph',
        variant: 'accented',
        text: 'Monthly pack positioning (Yogabar model): 24-bottle Monthly Pack on Amazon at 36% off MRP (Rs 83 per unit versus Rs 131 MRP). Deep discount paired with Subscribe and Save locks in habitual consumption at the cost of per-unit margin. The bet is that the habit formed generates LTV that justifies the margin concession.'
      },
      {
        type: 'paragraph',
        variant: 'accented',
        text: 'Format-channel matching: Tetra Pak (180 to 200ml, Rs 15 to 90) for general trade and mass reach. PET bottle (250ml, Rs 110 to 175) for premium positioning on quick commerce and modern trade. Carton packs of 12 and 24 for D2C subscription and maximum per-customer basket value.'
      },
      {
        type: 'image-slot',
        description: 'RTD protein price-per-gram comparison chart',
        imagePath: '/public/images/research/module-03/price-per-gram-comparison.jpg'
      }
    ]
  },
  {
    id: 'section-3-channels',
    title: 'Section 4: Channel Strategy — How the Market Structures Itself',
    anchorId: 'section-03-channels',
    tocLabel: 'Channel Strategy',
    content: [
      {
        type: 'paragraph',
        text: 'No protein brand of any scale in India relies on a single channel. The question is not which channel to use — it is in what sequence channels are deployed, what role each one plays in the customer journey, and whether the economics of each channel are understood at the contribution level rather than the revenue level.'
      },
      {
        type: 'paragraph',
        variant: 'muted',
        italic: true,
        text: 'Channel mix estimates based on founder interviews, public disclosures, and industry analysis. Not from official company financial disclosures.'
      },
      {
        type: 'table',
        headers: ['Brand', 'D2C and Online', 'Quick Commerce', 'Modern Trade', 'General Trade', 'Specialty (Gym and HORECA)'],
        rows: [
          ['Nuvie', 'Growing', 'Blinkit, Instamart, Zepto', '100+ premium stores', '—', '200+ gym partnerships'],
          ['Epigamia', '25 to 30%', 'Integrated', '30 to 35%', '25 to 30%', 'Small'],
          ['Amul Protein', 'Small', '10 to 15%', '20 to 25%', '55 to 60%', '—'],
          ['MuscleBlaze', '60 to 70%', 'Growing', 'Expanding', '—', 'Gym partnerships'],
          ['The Whole Truth', '80 to 85% (own site)', 'Discovery channel', 'Growing', '—', '—']
        ]
      },
      {
        type: 'sub-section',
        title: 'The Margin Hierarchy Across Channels',
        body: 'For a Rs 150 MRP RTD protein shake, estimated brand net realization per unit:'
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'D2C (own website): Rs 90 to 115 per unit — highest margin, but high CAC and working capital intensity. Instant settlement on prepaid orders.',
          'E-commerce (Amazon): Rs 65 to 90 per unit — 5 to 25% commission plus advertising.',
          'Quick commerce: Rs 60 to 85 per unit — 35 to 50% total platform fees all-in.',
          'General trade: Rs 65 to 85 per unit — distributor 5 to 8% plus retailer 10 to 25%.',
          'Modern trade: Rs 55 to 80 per unit — 20 to 35% retailer margin plus slotting fees and promotional investment.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Modern trade entry costs for a D2C brand with 5 SKUs: Rs 15 to 70 lakh per retail chain over three months, covering listing fees, initial inventory, promotions, POS materials, and working capital. Most chains take 30 to 90 days to pay — DMart\'s 7-day payment cycle is the industry exception, not the rule.'
      },
      {
        type: 'sub-section',
        title: 'Nuvie\'s Gym Channel — The Differentiated Wedge',
        body: 'Nuvie\'s 200+ gym partnerships deserve specific attention because they represent a channel most quick-commerce-focused protein brands have not built. In a gym environment, members paying Rs 3,000 to 5,000 per month are a high-intent, high-repeat audience encountering the product at the exact moment of use. Gym commissions typically run 25 to 40% of MRP — higher than modern trade — but trial-to-repeat conversion is structurally superior. A mid-size gym with 300 members sells 5 to 15 RTD units per day, providing both volume and brand reinforcement. The category placement is also natural — a gym-goer reaching for Nuvie cold coffee after a session does not need to be educated about protein.'
      },
      {
        type: 'sub-section',
        title: 'Why No International RTD Protein Brand Has Entered India',
        body: 'No major international RTD protein brand — Muscle Milk, Premier Protein, Fairlife, OWYN — has entered India at scale. Abbott\'s Ensure is the only international protein nutrition brand with meaningful presence, and it sells primarily as powder. The barriers explain the absence entirely: India\'s cold-chain infrastructure is 4 to 5 times less developed than the US; US RTD prices of $3 to 5 per bottle (Rs 250 to 420) far exceed Indian willingness to pay of Rs 80 to 150; taste localization demands kesar, badam, elaichi, and cold coffee profiles that require local formulation expertise; and distribution through India\'s 12 million kirana stores requires fundamentally different organizational capabilities. This gap is being filled entirely by domestic brands — which means the category will be defined by Indian companies operating on Indian economics.'
      },
      {
        type: 'image-slot',
        description: 'Channel mix comparison — protein brands India',
        imagePath: '/public/images/research/module-03/channel-mix-comparison.jpg'
      }
    ]
  },
  {
    id: 'section-3-retention',
    title: 'Section 5: Retention — The Metric That Separates Survivors',
    anchorId: 'section-03-retention',
    tocLabel: 'Retention Mechanics',
    content: [
      {
        type: 'paragraph',
        text: 'Customer acquisition costs have risen 40 to 60% over three years for Indian D2C health food brands. In a category where only 22% of customers make a second purchase, and the average first purchase barely covers its own acquisition cost, retention is not a growth lever — it is the difference between a viable business and a subsidized trial program.'
      },
      {
        type: 'sub-section',
        title: 'Verified Retention Benchmarks',
        body: 'The strongest publicly available data points from the Indian D2C health sector:'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Kapiva: 70 to 80% one-year retention rate, attributed to AI-based post-purchase recommendations, 80,000+ monthly health consultations, and personalized WhatsApp chatbots. Retention at this level is an outlier — it reflects a personalized advisory model that few pure product brands can replicate.',
          'The Whole Truth: 56% repeat purchase rate versus a typical D2C food brand benchmark of 15 to 25%. Achieved through 80 to 85% of sales via own D2C website (no intermediary) and a brand built on verifiable ingredient transparency.',
          'MuscleBlaze: MB Coins and MB Cash loyalty program, Subscribe and Save with priority shipping, freebies milestone at Rs 3,099+ orders. A classic FMCG-style loyalty mechanic adapted for D2C.',
          'Industry-wide 90-day repeat purchase benchmarks: supplements 30 to 45%. Food and beverage 35 to 50%. Beauty 25 to 40%. Below 20% indicates a fundamental product-market fit problem. Above 40% commands significantly higher investor valuation multiples.',
          'Subscription customer economics versus one-time buyers: subscriber CLV averages Rs 12,000 versus Rs 2,000 to 3,000 for non-subscribers — a 4 to 6x uplift (Balistro analysis). Subscription retention for health essentials: 76% after six months versus 48% for specialty items (Rare Ideas 2025).'
        ]
      },
      {
        type: 'sub-section',
        title: 'WhatsApp as India\'s Dominant Retention Channel',
        body: 'WhatsApp dramatically outperforms email and SMS for Indian D2C retention. Open rates: 80 to 98% for WhatsApp versus 18 to 25% for email. Key conversion metrics:'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Abandoned cart recovery: 15 to 25% via three-message WhatsApp sequence versus 5 to 8% from email.',
          'Back-in-stock notifications: 30 to 50% conversion.',
          'In-chat promotional conversion: 45 to 60%.',
          'COD confirmation flows: reduce return-to-origin by 25 to 40%.',
          'Monthly impact for a brand at 1,000 orders per month: Rs 1 to 2.5 lakh in additional revenue at 15 to 25x ROI on message cost.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Leading platforms enabling these flows: Interakt (Rs 999 per month, deep Shopify integration), Pragma (450+ D2C brands), Wati ($40 per month).'
      },
      {
        type: 'sub-section',
        title: 'Quick Commerce and D2C Subscription — Complementary, Not Competing',
        body: "Quick commerce is not replacing D2C subscriptions. It is capturing impulse top-up purchases while D2C subscription captures habitual, planned consumption. The emerging playbook among leading brands: quick commerce for discovery and trial, D2C website for subscription and margin recovery."
      },
      {
        type: 'paragraph',
        text: 'Subscription economics data: auto-ship discounts increase retention by 29%. Annual plans reduce churn by 51% compared to monthly. A pause or skip option reduces cancellations by 18%. India\'s subscription e-commerce market is projected to reach $6.37 billion by 2033 at 41% CAGR.'
      },
      {
        type: 'paragraph',
        variant: 'insight',
        text: 'The implication for Nuvie: the "Subscribe and Save" form on its website — currently appearing to function as a lead capture rather than a true subscription checkout — is one of the highest-leverage levers available. Every captured subscriber delivers 4 to 6x the LTV of a one-time buyer, and the WhatsApp reorder flow is the lowest-cost mechanism to trigger those repeat purchases.'
      },
      {
        type: 'image-slot',
        description: 'Retention funnel — trial to subscriber conversion concept',
        imagePath: '/public/images/research/module-03/retention-funnel.jpg'
      }
    ]
  },
  {
    id: 'section-3-portfolio',
    title: 'Section 6: Nuvie\'s Portfolio — Disciplined SKU Strategy',
    anchorId: 'section-03-portfolio',
    tocLabel: 'Portfolio and SKU Strategy',
    content: [
      {
        type: 'paragraph',
        text: 'Nuvie has six core SKUs. This is not many — and that restraint appears to be a deliberate, strategically sound decision. The evidence from the broader Indian D2C market consistently shows that early-stage brands that expand their portfolio before locking hero SKU repeat tend to underperform compared to those that go deep before going wide.'
      },
      {
        type: 'sub-section',
        title: 'Complete Portfolio Map',
        body: 'Nuvie\'s portfolio as of April 2026:'
      },
      {
        type: 'paragraph',
        text: 'RTD Protein Shakes (4 flavors): Cold Coffee (Proffee) — tagged Best Seller, homepage hero banner, positioned as "India\'s First Caffeinated Protein Shake." Chocolate. Vanilla. Kesar Pista.'
      },
      {
        type: 'paragraph',
        text: 'Protein Chocolate Bars (2 variants): Choco Almond Bar. Choco Brownie Bar.'
      },
      {
        type: 'paragraph',
        text: 'All four shakes share an identical formulation base: 66% ultra-filtered toned milk plus milk protein concentrate, 20g protein per 250ml, lactose-free via lactase enzyme, zero added sugar (sucralose), 4.5g prebiotic fiber. Only the nature-identical flavoring compounds differ. This shared base minimizes ingredient procurement complexity and production changeover costs.'
      },
      {
        type: 'sub-section',
        title: 'Cold Coffee as the Hero SKU — Why It Matters',
        body: 'Cold Coffee (Proffee) is explicitly tagged "Best Seller" with homepage hero banner placement. Its caffeine positioning — "India\'s First Caffeinated Protein Shake" — creates a distinct occasion claim that the milkshake variants cannot make. In quick commerce cold coffee and ice tea categories, Nuvie Proffee competes against Sleepy Owl, Blue Tokai, and Starbucks RTD — a category where the consumer question is "is this worth Rs 30 to 40 more than cold coffee?" rather than "is this a good protein supplement?" The occasion wedge dramatically expands the addressable consumer set.'
      },
      {
        type: 'paragraph',
        text: 'Hero SKU strategy evidence from Indian D2C: The Whole Truth started with one protein bar, earned trust, and expanded to Rs 216 crore revenue at 232% growth with 56% repeat rates. Paper Boat built its business on ethnic drinks as heroes before expanding — and finally achieved Rs 46 crore profit on Rs 668 crore revenue in FY25 after years of losses. The pattern is consistent: one product that earns repeat, then expand.'
      },
      {
        type: 'sub-section',
        title: 'The Case Against Premature Portfolio Expansion'
      },
      {
        type: 'paragraph',
        text: 'Raw Pressery raised $32.8 million, expanded aggressively across juice SKUs, and was ultimately sold at an 80% discount to its last funding round valuation — a distress exit driven by unsustainable burn, cold-chain logistics costs, and investor disagreements after portfolio complexity outran operational maturity.'
      },
      {
        type: 'paragraph',
        text: 'Happilo\'s revenue declined 15% after aggressive SKU proliferation. Losses subsequently narrowed by 93%, suggesting the rationalization of the portfolio was precisely what drove the economic improvement.'
      },
      {
        type: 'paragraph',
        text: 'The lesson is not that SKU expansion is inherently bad. It is that SKU expansion before hero SKU repeat is proven creates inventory complexity, production scheduling cost, and marketing dilution simultaneously — while the repeat data needed to justify expansion does not yet exist.'
      },
      {
        type: 'sub-section',
        title: 'Retort Production Economics for Multi-Flavor Management',
        body: 'Changeover between flavors using modern CIP (Clean-in-Place) systems takes 30 to 45 minutes, meaning 3 to 4 changeovers per production cycle lose 2 to 3 hours total. Minimum commercial batch sizes run 5,000 to 15,000 units per cycle — with 4 flavors, each gets roughly one-quarter of the total production demand per run, which pushes per-unit cost higher at low volumes. Flavor development costs Rs 50,000 to 3 lakh per formulation, and retort processing adds complexity: Maillard browning enhances chocolate and coffee flavor notes while degrading delicate fruit profiles.'
      },
      {
        type: 'paragraph',
        text: 'Nuvie\'s shared formulation base manages this well — only the flavoring compounds vary, keeping ingredient procurement and QC testing manageable. At 4 shake flavors, the brand sits at the optimal range for early-stage RTD: enough variety to support discovery packs and trial boxes without fragmenting production volume. A 5th flavor offers diminishing returns unless it unlocks a materially new consumption occasion.'
      },
      {
        type: 'image-slot',
        description: 'SKU portfolio map — Nuvie product range visual',
        imagePath: '/public/images/research/module-03/sku-portfolio-map.jpg'
      }
    ]
  },
  {
    id: 'section-3-funding',
    title: 'Section 7: Funding Map — Where Nuvie Sits in the Competitive Landscape',
    anchorId: 'section-03-funding',
    tocLabel: 'Funding Landscape',
    content: [
      {
        type: 'paragraph',
        text: 'Understanding where Nuvie sits in the capital landscape requires understanding both what it has raised and what comparable brands raised at equivalent stages, and what those brands ultimately became.'
      },
      {
        type: 'sub-section',
        title: 'Nuvie\'s Corporate and Funding Profile'
      },
      {
        type: 'comparison',
        entries: [
          { title: 'Legal entity', body: 'Nugain Wellness Private Limited' },
          { title: 'CIN', body: 'U11049KA2024PTC184964' },
          { title: 'Incorporated', body: '17 February 2024' },
          { title: 'Founders', body: 'Prashant Paliwal and Hem Narayan (both formerly of Cult.fit)' },
          { title: 'Funding', body: '$450K (approximately Rs 3.86 crore) seed round — June 2025, led by PedalStart' },
          { title: 'Angel investors', body: 'Mukesh Bansal (founder of Myntra and Cult.fit), Ayyappan R, and two others' },
          { title: 'Contract manufacturer', body: 'Rajendra and Ursula Joshi Food Industries' },
          { title: 'Distribution', body: '100+ premium retail stores, 200+ gym partnerships, Blinkit, Instamart, Zepto, BigBasket, Amazon, D2C website' }
        ]
      },
      {
        type: 'sub-section',
        title: 'The Funding Reference Map',
        body: 'Revenue, valuation, and funding figures are from public sources including Tracxn, Inc42, TheKredible, and company interviews. Some figures are estimates.'
      },
      {
        type: 'table',
        headers: ['Brand', 'Total Raised', 'Current Valuation', 'Revenue', 'Outcome'],
        rows: [
          ['HealthKart and MuscleBlaze', '~$400M+', '$500M', 'Rs 1,000+ Cr (FY24)', 'EBITDA profitable'],
          ['The Whole Truth', '$71.3M (7 rounds)', 'Rs 3,600 Cr (~$420M)', 'Rs 65.3 Cr (FY24)', 'Series D, IPO-bound'],
          ['Epigamia', '$81.2M (16 rounds)', 'Undisclosed', 'Undisclosed', 'Operating, 20K+ touchpoints'],
          ['Yogabar', '$23.6M pre-acquisition', '—', 'Rs 202 Cr (FY25)', 'Acquired by ITC'],
          ['OZiva', '$17.3 to 90.5M', '~Rs 491.5 Cr', 'Rs 261 Cr (FY25)', 'Acquired by HUL'],
          ['Kapiva', '$50.5 to 78.5M', 'Rs 1,450 to 2,110 Cr', 'Rs 234 Cr (FY24)', 'Series D, growing'],
          ['Raw Pressery', '$32.8M+', 'Rs 100 Cr (last round)', 'Rs 32 Cr (FY18)', 'Distress sale (80% down-round)'],
          ['Nuvie', '$450K', 'Undisclosed', 'Early stage', 'Seed']
        ],
        footnote: 'Figures based on industry reporting v/s public filings'
      },
      {
        type: 'sub-section',
        title: 'The Whole Truth Lesson — 32x Revenue Valuation Through Retention',
        body: "The Whole Truth's trajectory deserves detailed treatment because it is the most instructive comparable. A Rs 3,600 crore valuation on Rs 65.3 crore revenue — a 32x multiple — was earned through three specific attributes: 56% repeat purchase rate (versus 15 to 25% industry benchmark), 80 to 85% of sales through own D2C website (no intermediary margin dilution), and a clean-label brand identity built on verifiable ingredient transparency. The valuation reflects future earnings power, not current revenue. Investors are paying for retention."
      },
      {
        type: 'sub-section',
        title: 'The Raw Pressery Warning — Scale Without Sustainability',
        body: "Raw Pressery raised $32.8 million, expanded aggressively, and was ultimately sold to Wingreen Farms at an 80% discount to its last funding round valuation. The root causes: cold-chain logistics costs that were structurally higher than the model could support, SKU proliferation that outran operational maturity, and investor disagreements about the path to profitability. For RTD protein brands, the parallel is exact — cold chain is not the constraint here (ambient retort eliminates it), but shipping damage costs, inventory risk, and portfolio complexity are exact analogs of the pressures that broke Raw Pressery."
      },
      {
        type: 'sub-section',
        title: 'What Investors Evaluate at Each Stage',
        body: 'Gross margin threshold: more than 60% on core products is the minimum expectation from institutional VCs. Protein RTD at 35 to 50% faces structural scrutiny and must be justified by volume or pricing power projections.'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Revenue milestones: Seed ($500K to $2M) — product-market fit and early traction. Series A ($5 to 15M) — Rs 10 to 50 crore ARR with unit-level profitability. Series B ($15 to 40M) — Rs 50 to 200 crore ARR with EBITDA path. Series C+ ($40 to 100M) — Rs 200+ crore ARR with EBITDA positive or near.',
          'The metrics that drive valuation: repeat purchase rate above 40% commands significantly higher multiples. CAC payback period under 6 months. Contribution margin of 20 to 35% of net revenue. Net revenue is typically 55 to 70% of reported GMV after all deductions.',
          'Red flags investors watch for: negative contribution margins at any scale; over-reliance on discounting for growth; CAC escalation without retention improvement; COD dependency above 50%; contract manufacturing with no formulation differentiation; revenue growth without margin improvement.'
        ]
      },
      {
        type: 'paragraph',
        text: 'D2C startup funding in India fell to $757M in 2024 (down from a $1.6B peak in 2022), but early-stage investment specifically surged — seed-stage attracted $141M, up 18% year-on-year, and VC fundraising rebounded 5x to $3.3B in 2025. The protein and health food sector benefits from strong structural tailwinds: approximately 73% of Indians consume less protein than recommended, and the category remains deeply underpenetrated versus global markets.'
      },
      {
        type: 'image-slot',
        description: 'Protein brand funding timeline — seed to scale concept',
        imagePath: '/public/images/research/module-03/funding-timeline.jpg'
      }
    ]
  },
  {
    id: 'section-3-questions',
    title: 'Section 8: Open Questions (Module 3)',
    anchorId: 'section-03-questions',
    tocLabel: 'Open Questions',
    content: [
      {
        type: 'paragraph',
        italic: true,
        variant: 'muted',
        text: 'These are the things this module could not resolve from public information. They stay on the list.'
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'What is Nuvie\'s actual gross margin at current volume? The directional model suggests 36 to 44%, but co-manufacturing rates, lactase enzyme costs, and batch sizes at seed-stage volume could push this materially lower or higher than the estimate.',
          'What percentage of Nuvie\'s current revenue comes from D2C website versus quick commerce versus gym channel? The channel sequencing strategy only works if the gym and D2C channels are generating meaningful volume — the mix matters enormously for understanding unit economics health.',
          'Is Nuvie\'s "Subscribe and Save" feature a true subscription checkout or a lead capture form? If it is lead capture, what is the conversion rate from form submission to actual repeat order? This single number may be the highest-leverage data point in the business.',
          'What is the actual repeat purchase rate for Nuvie customers who first buy through quick commerce versus those who first buy through the D2C website? These two cohorts are likely structurally different in their retention behavior and LTV.',
          'At current seed-stage volumes, what is Nuvie\'s per-unit co-manufacturing cost for retort processing, and how does it scale at 2x and 5x volume? The path to viable unit economics likely runs directly through manufacturing scale.',
          'Mukesh Bansal\'s angel investment carries significant strategic weight given his background in consumer brand building and fitness. What is the extent of his active involvement, and does it provide channel access (Cult.fit network) that would meaningfully accelerate gym and corporate channel rollout?'
        ]
      }
    ]
  }
];
