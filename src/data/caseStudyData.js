export const metrics = [
  { label: "Conversion Rate", from: 35, to: 68, unit: "%", icon: "trending_up", color: "#0F7AEB" },
  { label: "Signup Completion", from: 78, to: 89, unit: "%", icon: "how_to_reg", color: "#00B894" },
  { label: "Funnel Purchase Rate", from: 70, to: 85, unit: "%", icon: "shopping_cart_checkout", color: "#6C63FF" },
  { label: "Revenue Trend", from: -17, to: 2, unit: "%", suffix: "YoY→QoQ", icon: "attach_money", color: "#E17055" },
  { label: "Support Tickets/Week", from: 1000, to: 75, unit: "", prefix: ">", toPrefix: "<", icon: "support_agent", color: "#00B894" },
  { label: "Task Completion Time", from: 120, to: 25, unit: "s", prefix: ">", toPrefix: "<", icon: "timer", color: "#0F7AEB" },
  { label: "Subscription Cancellations", from: 0, to: -21, unit: "%", icon: "cancel", color: "#6C63FF" },
  { label: "Page Load Speed", from: 3.2, to: 0.2, unit: "s", toPrefix: "<", icon: "speed", color: "#E17055" },
];

export const uxLaws = [
  {
    id: "hicks",
    name: "Hick's Law",
    short: "More choices = more time",
    description: "The time it takes to make a decision increases with the number and complexity of choices.",
    platform: ["website", "dashboard"],
    improvement: "Simplified navigation from 18 top-level items to 5, reducing decision fatigue on the acquisition website and ambassador dashboard.",
    outcome: "Conversion rate +13%",
    color: "#0F7AEB",
    x: 20, y: 18,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "https://cdn.myportfolio.com/abc1e0ab-7370-4502-8c78-92428397bf66/78ec3665-de56-4901-92c4-88ab67b1c9ae.png?h=61a4cfe7cb2ca011c898f90ea72b5e25",
    imageAfter: "https://cdn.myportfolio.com/abc1e0ab-7370-4502-8c78-92428397bf66/16947893-dffd-468e-9b67-2703cf4cb722.png?h=ccce7586f67aa12eebdc3f05b7a69197",
    // IMAGE URLS — replace these placeholders with your own hosted image links
    imagePlatforms: "https://cdn.myportfolio.com/abc1e0ab-7370-4502-8c78-92428397bf66/45da0809-b24d-4b13-b231-772f6babe6c0.png?h=0f40e3ba365a92fc80425832236eba8b",
    platformSheetImage: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Platform+Sheet+Image",
    //imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "jakob",
    name: "Jakob's Law",
    short: "Users expect familiar patterns",
    description: "Users spend most of their time on other sites. They expect your site to work the same way.",
    platform: ["website", "portal", "dashboard"],
    improvement: "Standardized UI patterns across all 3 platforms using the new design system, aligning with established mental models.",
    outcome: "Support tickets –92%",
    color: "#6C63FF",
    x: 72, y: 12,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "fitts",
    name: "Fitts's Law",
    short: "Target size & distance matters",
    description: "The time to acquire a target is a function of distance and size of the target.",
    platform: ["website", "portal"],
    improvement: "Optimized interactive element sizes and proximity in checkout and account management flows.",
    outcome: "Task time 120s → <25s",
    color: "#00B894",
    x: 48, y: 8,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/f0fff8/00B894?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/f0fff8/00B894?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "miller",
    name: "Miller's Law",
    short: "7±2 chunks max",
    description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
    platform: ["portal", "dashboard"],
    improvement: "Chunked account portal information into digestible groups. Reduced dashboard widgets per view to ≤7.",
    outcome: "Signup completion +33%",
    color: "#E17055",
    x: 25, y: 55,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/fff5f0/E17055?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/fff5f0/E17055?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "tesler",
    name: "Tesler's Law",
    short: "Complexity must live somewhere",
    description: "Every application has an inherent amount of complexity that cannot be removed, only moved.",
    platform: ["portal", "dashboard"],
    improvement: "Moved complex subscription management logic into the system layer, presenting users with simple actions while engineering handled complexity.",
    outcome: "Cancellations –21%",
    color: "#0F7AEB",
    x: 76, y: 48,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "pareto",
    name: "Pareto Principle",
    short: "80% of impact from 20% of causes",
    description: "80% of effects come from 20% of causes. Focus fixes on the highest-impact friction points.",
    platform: ["website", "portal", "dashboard"],
    improvement: "Heatmap and funnel analysis identified top 20% of friction points. All sprints prioritized these before secondary issues.",
    outcome: "Revenue –17% → +2%",
    color: "#6C63FF",
    x: 50, y: 75,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "vonrestorff",
    name: "Von Restorff Effect",
    short: "Distinct items are remembered",
    description: "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
    platform: ["dashboard"],
    improvement: "Key ambassador KPIs styled distinctly from supporting metrics — color, size, and weight differentiation ensured critical data surfaced immediately.",
    outcome: "KPI discoverability +100%",
    color: "#00B894",
    x: 82, y: 75,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/f0fff8/00B894?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/f0fff8/00B894?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
  {
    id: "serial",
    name: "Serial Position Effect",
    short: "First & last items are recalled best",
    description: "Users best recall the first and last items in a series. Middle items are often forgotten.",
    platform: ["dashboard", "portal"],
    improvement: "Critical actions placed at the start and end of navigation and page flows. Supporting info moved to the middle.",
    outcome: "Task success → ~100%",
    color: "#E17055",
    x: 15, y: 82,
    // Before/After slider images for the UX Law side sheet in LawMap section
    // Edit imageBefore and imageAfter URLs in src/data/caseStudyData.js
    imageBefore: "",
    imageAfter: "",
    imagePlatforms: "https://placehold.co/480x220/fff5f0/E17055?text=Platforms+Applied+Image",
    platformSheetImage: "https://placehold.co/480x220/fff5f0/E17055?text=Platform+Sheet+Image",
    imageAfter: "https://placehold.co/480x220/f0fff8/00B894?text=After+Image",
  },
];

export const phases = [
  {
    id: 1,
    label: "Phase 1",
    title: "Diagnosing the Dysfunction",
    subtitle: "UX Foundations",
    icon: "search",
    color: "#0F7AEB",
    summary: "No UX function existed. Engineering and marketing drove product decisions, creating cognitive chaos across 3 platforms.",
    details: "Digital interfaces suffered from inconsistent UI patterns, fragmented user flows, high subscription churn, and inefficient checkout experiences. These issues directly violated Jakob's Law, Law of Similarity, and Law of Proximity — creating broken mental models for users across the entire ecosystem.",
    laws: ["jakob", "hicks"],
    bullets: [
      "18+ top-level navigation items causing choice overload",
      "0 standardized UI components across platforms",
      "Zero formal research or usability testing in place",
      "Support volume exceeding 1,000 tickets/week"
    ],
    // IMAGE URLS — replace placeholders with your own hosted image links
    // imageTop    → appears at the very top of the side sheet, above Deep Dive text
    // imageBottom → appears below the Deep Dive paragraph, above Key Deliverables
    imageTop: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Phase+1+Top+Image",
    imageBottom: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Phase+1+Bottom+Image",
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Building the Function",
    subtitle: "Team & Process",
    icon: "groups",
    color: "#6C63FF",
    summary: "Hired 2 designers, eliminated contractor dependency, and introduced Double Diamond + Design Thinking as the discovery framework.",
    details: "As the company's first UX hire, the role expanded rapidly from practitioner to discipline builder. Introduced structured discovery methodology combining Double Diamond and Design Thinking — creating a repeatable, research-backed process that countered internal cognitive bias and the Paradox of the Active User.",
    laws: ["pareto"],
    bullets: [
      "Hired and onboarded 2 full-time UX designers",
      "Replaced fragmented contractor model with internal ownership",
      "Introduced Double Diamond + Design Thinking framework",
      "Established UX within agile product development cycles"
    ],
    imageTop: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Phase+2+Top+Image",
    imageBottom: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Phase+2+Bottom+Image",
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Listening to Behavior",
    subtitle: "Research & Insights",
    icon: "psychology",
    color: "#00B894",
    summary: "Introduced formal research — interviews, usability testing, journey mapping — revealing how human psychology was driving abandonment.",
    details: "Research activities uncovered behavioral patterns aligned with Mental Models, Selective Attention, Peak-End Rule, and Serial Position Effect. These insights directly informed prioritization of onboarding flows, purchase processes, and dashboard navigation redesigns.",
    laws: ["serial", "vonrestorff"],
    bullets: [
      "User interviews across customer and ambassador segments",
      "Usability testing sessions with recorded sessions",
      "Persona development and journey mapping workshops",
      "Funnel analysis and heatmap behavioral overlays"
    ],
    imageTop: "https://placehold.co/480x220/f0fff8/00B894?text=Phase+3+Top+Image",
    imageBottom: "https://placehold.co/480x220/f0fff8/00B894?text=Phase+3+Bottom+Image",
  },
  {
    id: 4,
    label: "Phase 4",
    title: "Building the Infrastructure",
    subtitle: "Design System & Ops",
    icon: "design_services",
    color: "#E17055",
    summary: "Created the company's first design system. Integrated UX into agile. Introduced experimentation frameworks to measure every change.",
    details: "The design system addressed inconsistent UI through standardized components guided by Law of Similarity, Law of Common Region, and Law of Prägnanz. UX integrated into product sprints via discovery workshops, cross-department reviews, and engineering handoffs prioritizing Occam's Razor and Tesler's Law.",
    laws: ["tesler", "miller"],
    bullets: [
      "First company-wide design system (tokens, components, patterns)",
      "UX integrated into all agile sprint cycles",
      "Analytics + experimentation framework introduced",
      "Cross-functional design review cadence established"
    ],
    imageTop: "https://placehold.co/480x220/fff5f0/E17055?text=Phase+4+Top+Image",
    imageBottom: "https://placehold.co/480x220/fff5f0/E17055?text=Phase+4+Bottom+Image",
  },
  {
    id: 5,
    label: "Phase 5",
    title: "Transforming the Platforms",
    subtitle: "Product Experience",
    icon: "devices",
    color: "#0F7AEB",
    summary: "Applied psychological principles across all 3 platforms — each improvement mapped to a specific UX law and measurable outcome.",
    details: "Three platforms were redesigned simultaneously: the acquisition website (conversion), the account portal (retention), and the ambassador dashboard (performance). Each improvement applied targeted psychological principles — from Goal-Gradient Effect on checkout to Von Restorff Effect on KPI surfaces.",
    laws: ["fitts", "hicks", "pareto"],
    bullets: [
      "Acquisition website: simplified nav, optimized checkout (Goal-Gradient Effect)",
      "Account portal: chunked workflows, reduced cognitive load (Miller's Law)",
      "Ambassador dashboard: KPI hierarchy, data discoverability (Von Restorff)",
      "All platforms aligned to shared design system"
    ],
    imageTop: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Phase+5+Top+Image",
    imageBottom: "https://placehold.co/480x220/f0f4ff/0F7AEB?text=Phase+5+Bottom+Image",
  },
  {
    id: 6,
    label: "Phase 6",
    title: "Strategic Recognition",
    subtitle: "UX Maturity",
    icon: "star",
    color: "#6C63FF",
    summary: "UX evolved from invisible to executive-level strategic asset. Function moved from IT/CTO to Digital Experience under CMO.",
    details: "The transformation moved the organization through measurable UX maturity stages — from development-driven decisions to research-informed strategy with executive sponsorship. The shift from CTO to CMO ownership reflected UX's repositioning as a business growth driver, not a production resource.",
    laws: ["pareto"],
    bullets: [
      "UX function moved: IT/CTO → Digital Experience/CMO",
      "Executive recognition of UX as revenue-driving discipline",
      "Sustainable product process established over campaign speed",
      "UX maturity: Level 0 → Level 3 (Structured & Proactive)"
    ],
    imageTop: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Phase+6+Top+Image",
    imageBottom: "https://placehold.co/480x220/f5f0ff/6C63FF?text=Phase+6+Bottom+Image",
  }
];

export const platforms = [
  {
    id: "website",
    label: "Acquisition Website",
    icon: "language",
    color: "#0F7AEB",
    role: "Primary entry point for customers and entrepreneurs",
    before: {
      title: "Before",
      problems: ["18+ navigation options", "Confusing purchase paths", "Inconsistent visual hierarchy", "No clear conversion path"],
      metric: "35% conversion rate"
    },
    after: {
      title: "After",
      improvements: ["5 streamlined nav items", "Optimized checkout with Goal-Gradient Effect", "Standardized UI patterns", "Clear CTA hierarchy"],
      metric: "68% conversion rate"
    },
    laws: ["hicks", "fitts", "pareto"],
    impact: "+13% conversion"
  },
  {
    id: "portal",
    label: "Customer Account Portal",
    icon: "manage_accounts",
    color: "#6C63FF",
    role: "Subscription and order management for customers",
    before: {
      title: "Before",
      problems: ["Fragmented workflows", "Poor categorization", "Unclear info hierarchy", "No user guidance"],
      metric: ">1000 support tickets/week"
    },
    after: {
      title: "After",
      improvements: ["Chunked information (Miller's Law)", "Simplified account management", "Mental model-aligned structure", "Selective attention cues"],
      metric: "<75 support tickets/week"
    },
    laws: ["miller", "jakob", "tesler"],
    impact: "–92% support tickets"
  },
  {
    id: "dashboard",
    label: "Ambassador Dashboard",
    icon: "dashboard",
    color: "#00B894",
    role: "Business intelligence for entrepreneurial distributors",
    before: {
      title: "Before",
      problems: ["Unclear KPI presentation", "Disorganized menu structure", "Poor data discoverability", "Overwhelming analytics views"],
      metric: "2+ min task completion"
    },
    after: {
      title: "After",
      improvements: ["Von Restorff KPI highlighting", "Serial Position nav structure", "Occam's Razor simplification", "Progressive data disclosure"],
      metric: "<25s task completion"
    },
    laws: ["vonrestorff", "serial", "hicks"],
    impact: "–95% task time"
  }
];
