// RITI FASHION — Learn More detail screen content
// Route suggestion: /learn-more/:slug
// Each Homepage / Services "Learn More" button links to /learn-more/<slug>

export type LearnMoreSection = "Homepage" | "Services";

export interface LearnMoreItem {
  slug: string;
  title: string;
  headline: string;
  introduction: string;
  included: string[];
  howWeWork: string;
  bestSuitedFor: string;
  ctaLabel: string;
  ctaLink: string; // contact / quotation page
  appearsOn: LearnMoreSection[];
}

export const learnMoreContent: LearnMoreItem[] = [
  {
    slug: "stitching-bulk-production",
    title: "Stitching & Bulk Production",
    headline: "Precision Stitching. Production Built for Scale.",
    introduction:
      "Growing a clothing brand takes a manufacturing partner who delivers the same quality on the five-hundredth garment as on the first. RITI FASHION combines skilled stitching with organised production planning, so your approved designs reach the finished stage with consistency and care.",
    included: [
      "Garment stitching to your approved samples and specifications",
      "Bulk production for larger quantities",
      "Consistent construction and finishing across every batch",
      "Clear communication through each stage of production",
    ],
    howWeWork:
      "We begin with your approved sample and requirements, plan production around them, and review quality as the work progresses.",
    bestSuitedFor:
      "B2B clothing brands, D2C labels, online sellers, wholesalers and growing apparel businesses.",
    ctaLabel: "Request a Quotation",
    ctaLink: "/contact",
    appearsOn: ["Homepage"],
  },
  {
    slug: "mens-wear-manufacturing",
    title: "Men’s Wear Manufacturing",
    headline: "Tailored Construction for the Modern Wardrobe.",
    introduction:
      "Men’s garments depend on fit, structure and clean finishing. RITI FASHION develops and produces men’s wear with close attention to the details that shape how a garment looks, feels and lasts.",
    included: [
      "Development and production across men’s clothing categories",
      "Stitching that follows your approved patterns and samples",
      "Attention to seams, construction and garment finishing",
      "Support from sampling through to bulk production",
    ],
    howWeWork:
      "You share your design or reference. We develop a sample for your approval, then move into production against that standard.",
    bestSuitedFor:
      "Menswear labels, online clothing sellers, wholesalers and startups building a men’s collection.",
    ctaLabel: "Discuss Your Men’s Wear Requirement",
    ctaLink: "/contact",
    appearsOn: ["Homepage", "Services"],
  },
  {
    slug: "ladies-wear-manufacturing",
    title: "Ladies’ Wear Manufacturing",
    headline: "Refined Craftsmanship for Women’s Fashion.",
    introduction:
      "Women’s fashion calls for precision, from drape and fit to the finer points of finishing. RITI FASHION brings a considered, detail-led approach to producing ladies’ garments that match your design vision.",
    included: [
      "Development and production across women’s clothing categories",
      "Careful handling of design details and garment construction",
      "Sample development to confirm fit, look and finish",
      "Production support from first sample to bulk orders",
    ],
    howWeWork:
      "We study your design and requirements, develop a sample for evaluation, and carry the approved standard through to production.",
    bestSuitedFor:
      "Ladies’ wear brands, boutique labels, online sellers and fashion startups.",
    ctaLabel: "Discuss Your Ladies’ Wear Requirement",
    ctaLink: "/contact",
    appearsOn: ["Homepage", "Services"],
  },
  {
    slug: "sampling-complete-manufacturing",
    title: "Sampling & Complete Manufacturing",
    headline: "From First Sample to Finished Garment.",
    introduction:
      "Every successful collection begins with a sample you can trust. RITI FASHION supports the whole journey, from developing the sample to producing, finishing and preparing the final garments, so you can work with one dedicated partner from design to delivery.",
    included: [
      "Sample development for design, fit and construction review",
      "Production based on the approved sample",
      "Quality checking through the process",
      "Finishing and packaging as per agreed requirements",
    ],
    howWeWork:
      "Requirements, then sample, then approval, then production, then finishing, then delivery. Each step is communicated clearly so you stay informed.",
    bestSuitedFor:
      "Brands that want a single manufacturing partner for the full process.",
    ctaLabel: "Start With a Sample Enquiry",
    ctaLink: "/contact",
    appearsOn: ["Homepage"],
  },
  {
    slug: "stitching-job-work",
    title: "Stitching Job Work",
    headline: "Skilled Stitching for Your Designs.",
    introduction:
      "Already have your fabric and design ready? Our stitching job work service turns your materials into well-constructed garments, built to your specifications with professional care.",
    included: [
      "Garment stitching according to your approved sample or pattern",
      "Consistent stitch quality and clean construction",
      "Flexible support for varied garment types",
      "Clear coordination on requirements, timelines and delivery",
    ],
    howWeWork:
      "You provide the design details and materials as agreed. We stitch to your standard and keep you informed of progress.",
    bestSuitedFor:
      "Brands, designers and businesses that source their own fabric or already hold a design.",
    ctaLabel: "Request a Quotation",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
  {
    slug: "bulk-garment-stitching",
    title: "Bulk Garment Stitching",
    headline: "Consistency, Garment After Garment.",
    introduction:
      "Larger orders demand discipline. Our bulk stitching service focuses on keeping quality, construction and finishing uniform across every piece in the batch.",
    included: [
      "Stitching of larger quantities against an approved sample",
      "Uniform construction and finishing throughout the order",
      "Organised production workflow",
      "Quality checks during and after stitching",
    ],
    howWeWork:
      "Once your sample is approved, it becomes the benchmark. Production is planned around it and monitored through to completion.",
    bestSuitedFor:
      "Wholesalers, established apparel businesses and online sellers placing repeat or larger orders.",
    ctaLabel: "Discuss Your Bulk Order",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
  {
    slug: "complete-garment-manufacturing",
    title: "Complete Garment Manufacturing",
    headline: "One Partner. The Complete Journey.",
    introduction:
      "For brands that want a simpler path to finished clothing, RITI FASHION manages the manufacturing process end to end. We coordinate the stages so you can focus on your brand and your customers.",
    included: [
      "Garment development and sampling",
      "Fabric and material coordination, as per the agreed scope",
      "Stitching and production",
      "Quality checking, finishing and packaging",
    ],
    howWeWork:
      "You share your concept. We guide it through each stage of manufacturing and deliver finished garments to the agreed requirements.",
    bestSuitedFor:
      "Clothing startups, D2C brands and businesses seeking a full-service manufacturing partner.",
    ctaLabel: "Request a Quotation",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
  {
    slug: "pattern-sample-development",
    title: "Pattern & Sample Development",
    headline: "Where Every Garment Begins.",
    introduction:
      "A well-developed sample prevents costly surprises later. We help turn your design into a physical garment so that you can assess fit, construction and finish before moving into production.",
    included: [
      "Sample development from your design, reference or specifications",
      "Review of fit, construction and finishing",
      "Adjustments based on your feedback",
      "A clear, approved standard to guide production",
    ],
    howWeWork:
      "We interpret your requirements, develop the sample, and refine it with you until it is ready for approval.",
    bestSuitedFor:
      "New collections, new styles and brands entering production for the first time.",
    ctaLabel: "Enquire About Sampling",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
  {
    slug: "fabric-material-handling",
    title: "Fabric & Material Handling",
    headline: "Careful With Every Material.",
    introduction:
      "Good garments start with well-managed materials. We coordinate fabric and related materials according to your approved requirements, helping production run smoothly and keeping standards intact.",
    included: [
      "Fabric and material coordination, as per the agreed scope",
      "Careful handling of materials during production",
      "Alignment of materials with the approved sample and requirements",
      "Clear communication on material-related needs",
    ],
    howWeWork:
      "We confirm requirements with you first, then coordinate materials within the scope we agree together.",
    bestSuitedFor:
      "Brands wanting support with material coordination alongside their manufacturing.",
    ctaLabel: "Discuss Your Requirements",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
  {
    slug: "quality-control",
    title: "Quality Control",
    headline: "Quality You Can See in the Detail.",
    introduction:
      "For us, quality is a habit built into every stage, not a final inspection. We pay close attention to stitching consistency, construction and finishing to make sure garments meet the standard you approved.",
    included: [
      "Checks on stitching consistency and garment construction",
      "Review of finishing and overall presentation",
      "Comparison against the approved sample",
      "Attention to detail throughout production",
    ],
    howWeWork:
      "Checks are carried out as production progresses, helping us identify and address issues early.",
    bestSuitedFor: "Every order, large or small.",
    ctaLabel: "Talk to Our Team",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
  {
    slug: "finishing-packaging",
    title: "Finishing & Packaging",
    headline: "Ready for Your Customers.",
    introduction:
      "The last details shape the first impression. Our finishing and packaging stage prepares garments to a presentable, dispatch-ready standard that reflects your brand.",
    included: [
      "Final finishing of completed garments",
      "Preparation and packing according to agreed requirements",
      "Orderly arrangement for dispatch",
      "Care in presentation",
    ],
    howWeWork:
      "We confirm your finishing and packaging requirements in advance and prepare the garments to match them.",
    bestSuitedFor:
      "Brands that want garments ready for sale or distribution.",
    ctaLabel: "Request a Quotation",
    ctaLink: "/contact",
    appearsOn: ["Services"],
  },
];

// Button text -> slug map (use this to wire every "Learn More" button)
export const learnMoreRoutes: Record<string, string> = {
  // Homepage
  "Stitching & Bulk Production": "stitching-bulk-production",
  "Men’s Wear Manufacturing": "mens-wear-manufacturing",
  "Ladies’ Wear Manufacturing": "ladies-wear-manufacturing",
  "Sampling & Complete Manufacturing": "sampling-complete-manufacturing",
  // Services page
  "Stitching Job Work": "stitching-job-work",
  "Bulk Garment Stitching": "bulk-garment-stitching",
  "Complete Garment Manufacturing": "complete-garment-manufacturing",
  "Pattern & Sample Development": "pattern-sample-development",
  "Fabric & Material Handling": "fabric-material-handling",
  "Quality Control": "quality-control",
  "Finishing & Packaging": "finishing-packaging",
};

export const getLearnMoreItem = (slug: string): LearnMoreItem | undefined =>
  learnMoreContent.find((item) => item.slug === slug);
