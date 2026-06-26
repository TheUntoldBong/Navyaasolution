import floor from "@/assets/product-floor.jpg";
import glass from "@/assets/product-glass.jpg";
import toilet from "@/assets/product-toilet.jpg";
import dish from "@/assets/product-dish.jpg";
import degreaser from "@/assets/product-degreaser.jpg";
import sanitizer from "@/assets/product-sanitizer.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  usage: string;
  packaging: string[];
};

export const products: Product[] = [
  {
    slug: "premium-floor-cleaner",
    name: "Premium Floor Cleaner",
    category: "Floor Care",
    image: floor,
    tagline: "Streak-free shine for every surface",
    description:
      "A concentrated, pH-balanced floor cleaner formulated with biodegradable surfactants. Lifts oil, grease and embedded soil from marble, vitrified tiles, granite and wood-finish floors without dulling the surface.",
    features: ["Biodegradable formula", "Streak-free finish", "Pleasant long-lasting fragrance", "Safe on all flooring types"],
    applications: ["Hotels", "Hospitals", "Offices", "Schools", "Residential"],
    usage: "Dilute 30 ml in 5 L of water. Mop evenly. No rinsing required.",
    packaging: ["1 L", "5 L", "20 L", "50 L Drum"],
  },
  {
    slug: "crystal-glass-cleaner",
    name: "Crystal Glass Cleaner",
    category: "Glass & Mirror",
    image: glass,
    tagline: "Crystal clear, zero residue",
    description:
      "Fast-acting glass cleaner that evaporates without smear or film. Engineered for high-rise glass façades, mirrors, displays and stainless steel.",
    features: ["Zero residue", "Fast evaporation", "Anti-static finish", "Ammonia-free"],
    applications: ["Showrooms", "Hotels", "Corporate", "Retail glass façades"],
    usage: "Spray directly. Wipe with lint-free microfiber.",
    packaging: ["500 ml", "1 L", "5 L"],
  },
  {
    slug: "toilet-bowl-cleaner",
    name: "Power Toilet Bowl Cleaner",
    category: "Sanitation",
    image: toilet,
    tagline: "Hospital-grade lime-scale removal",
    description:
      "Thickened acidic formulation that clings to vertical surfaces, dissolving lime-scale, rust and uric stains while disinfecting the bowl.",
    features: ["Kills 99.9% germs", "Removes lime-scale", "Thick clinging gel", "Fresh long-lasting fragrance"],
    applications: ["Hotels", "Hospitals", "Public restrooms", "Residential"],
    usage: "Apply under rim. Leave 5 minutes. Brush and flush.",
    packaging: ["500 ml", "1 L", "5 L"],
  },
  {
    slug: "concentrated-dish-wash",
    name: "Concentrated Dish Wash",
    category: "Kitchen Care",
    image: dish,
    tagline: "Cuts grease, kind on hands",
    description:
      "Lemon-fresh dish wash liquid with high active matter that emulsifies oily residue from utensils, glassware and cookware in seconds.",
    features: ["High active surfactants", "Skin-friendly pH", "Rich foaming", "Lemon fragrance"],
    applications: ["Restaurants", "Canteens", "Hotels", "Households"],
    usage: "Dispense on sponge. Lather. Rinse thoroughly.",
    packaging: ["500 ml", "1 L", "5 L", "25 L"],
  },
  {
    slug: "industrial-degreaser",
    name: "Industrial Degreaser",
    category: "Industrial",
    image: degreaser,
    tagline: "Heavy-duty grease and carbon remover",
    description:
      "Alkaline degreaser formulated for manufacturing floors, machinery, engine parts and kitchen exhaust systems. Removes baked-on carbon and lubricating oils.",
    features: ["Non-flammable", "Rinses clean", "Safe on metal alloys", "Concentrated"],
    applications: ["Factories", "Workshops", "Commercial kitchens", "Automotive"],
    usage: "Dilute 1:10 with water. Spray, leave 3-5 min, scrub, rinse.",
    packaging: ["5 L", "20 L", "50 L Drum", "200 L Barrel"],
  },
  {
    slug: "hand-sanitizer-gel",
    name: "Hand Sanitizer Gel",
    category: "Personal Hygiene",
    image: sanitizer,
    tagline: "70% alcohol, moisturising formula",
    description:
      "WHO-recommended alcohol-based hand rub with added glycerine and aloe vera. Kills 99.99% of germs in 30 seconds without drying the skin.",
    features: ["70% v/v Ethanol", "With aloe & glycerine", "Quick-dry gel", "Tested by NTH"],
    applications: ["Hospitals", "Offices", "Schools", "Hotels"],
    usage: "Apply 3 ml on palms. Rub until dry.",
    packaging: ["100 ml", "500 ml", "5 L"],
  },
];

export const categories = [
  { name: "Floor Cleaner", icon: "Sparkles" },
  { name: "Tile Cleaner", icon: "Grid3x3" },
  { name: "Glass Cleaner", icon: "Square" },
  { name: "Toilet Cleaner", icon: "Droplets" },
  { name: "Bathroom Cleaner", icon: "Bath" },
  { name: "Kitchen Cleaner", icon: "ChefHat" },
  { name: "Dish Wash", icon: "Utensils" },
  { name: "Hand Wash", icon: "Hand" },
  { name: "Car Shampoo", icon: "Car" },
  { name: "Car Polish", icon: "Wind" },
  { name: "Carpet Cleaner", icon: "Layers" },
  { name: "Industrial Cleaner", icon: "Factory" },
  { name: "Sanitizer", icon: "Shield" },
  { name: "Degreaser", icon: "Flame" },
  { name: "Multi-Purpose Cleaner", icon: "Wand2" },
  { name: "Laundry Chemicals", icon: "Shirt" },
  { name: "Housekeeping Chemicals", icon: "Brush" },
  { name: "Hospital Chemicals", icon: "Stethoscope" },
];

export const industries = [
  { name: "Hotels", icon: "Hotel", desc: "Housekeeping & F&B hygiene" },
  { name: "Hospitals", icon: "Stethoscope", desc: "Infection control protocols" },
  { name: "Schools & Colleges", icon: "GraduationCap", desc: "Classroom & washroom care" },
  { name: "Corporate Offices", icon: "Building2", desc: "Daily housekeeping" },
  { name: "Manufacturing Plants", icon: "Factory", desc: "Floor & machinery degreasing" },
  { name: "Restaurants", icon: "Utensils", desc: "Kitchen & service hygiene" },
  { name: "Retail", icon: "ShoppingBag", desc: "Floor & glass façade care" },
  { name: "Warehouses", icon: "Warehouse", desc: "Industrial floor cleaning" },
  { name: "Government", icon: "Landmark", desc: "Public facility hygiene" },
  { name: "Commercial Buildings", icon: "Building", desc: "Lobby & common area" },
  { name: "Residential Apartments", icon: "Home", desc: "Household range" },
  { name: "Hospitality", icon: "ConciergeBell", desc: "Premium guest experience" },
];

export const stats = [
  { value: "45+", label: "Years Experience" },
  { value: "500+", label: "Corporate Clients" },
  { value: "100+", label: "Cleaning Products" },
  { value: "10K+", label: "Happy Customers" },
  { value: "Pan India", label: "Supply Network" },
];

export const faqs = [
  { q: "Are your products eco-friendly and biodegradable?", a: "Yes. Our entire formulation library uses biodegradable surfactants and is free of phosphates and harsh solvents wherever technically possible." },
  { q: "Do you supply in bulk for industrial clients?", a: "We supply in 1 L, 5 L, 20 L jerry cans, 50 L drums and 200 L barrels. Tanker delivery is available for select formulations." },
  { q: "Do you offer OEM / private label manufacturing?", a: "Yes — we manufacture under our customers' own brands with custom formulation, label design and packaging." },
  { q: "Are the products tested?", a: "Every batch is laboratory tested. Selected formulations carry National Test House certification." },
  { q: "Do you deliver across India?", a: "Yes. We deliver across India through our distributor network and direct dispatch from Kolkata." },
  { q: "Is technical support available?", a: "Our technical team trains customer staff on safe dilution, application methods and best-practice housekeeping protocols." },
];

export const blogPosts = [
  { slug: "industrial-floor-care", title: "Industrial Floor Care: A Complete Guide", excerpt: "How to choose the right cleaner for vitrified, epoxy and concrete floors in your facility.", date: "Jun 12, 2026", category: "Industrial" },
  { slug: "hospital-disinfection", title: "Hospital Disinfection Protocols That Work", excerpt: "Best practices for high-touch surfaces, isolation wards and operating theatres.", date: "May 28, 2026", category: "Healthcare" },
  { slug: "housekeeping-checklist", title: "The Ultimate Housekeeping Checklist for Hotels", excerpt: "Room-by-room procedures using eco-friendly chemicals that delight guests.", date: "May 14, 2026", category: "Hospitality" },
  { slug: "biodegradable-future", title: "Why Biodegradable Chemicals Are the Future", excerpt: "The science and business case for switching to green cleaning formulations.", date: "Apr 30, 2026", category: "Sustainability" },
  { slug: "kitchen-degreasing", title: "Kitchen Degreasing Without Damaging Equipment", excerpt: "Choosing alkalinity, dilution and dwell-time correctly for stainless steel.", date: "Apr 18, 2026", category: "F&B" },
  { slug: "facility-management", title: "Facility Management Trends for 2026", excerpt: "Data-driven housekeeping, IoT dispensers and sustainability KPIs.", date: "Apr 02, 2026", category: "Facility" },
];

export const testimonials = [
  { name: "Rohan Mehta", role: "Group Housekeeping Manager", company: "Hotel Chain, Mumbai", quote: "Chemii-Synth's range cut our chemical cost by 22% while improving guest-facing surface quality. Their technical training is genuinely useful." },
  { name: "Dr. Anita Sharma", role: "Infection Control Lead", company: "Multi-specialty Hospital, Kolkata", quote: "We trust the disinfectants for our isolation wards. Consistent batch quality, NTH certified, and the team is responsive." },
  { name: "Karan Patel", role: "Facility Director", company: "IT Park, Bengaluru", quote: "Pan-India supply, transparent dilution charts, and predictable lead times. They behave like a partner, not a vendor." },
  { name: "Sneha Iyer", role: "Owner", company: "Cloud Kitchen Network", quote: "The degreaser and dish-wash concentrate work brilliantly in our high-volume kitchens. Saves labour hours every shift." },
];
