export const CLINIC = {
  name: "White Teeth Dental & Orthodontic Centre",
  short: "White Teeth Dental",
  tagline: "Creating Beautiful Smiles with Gentle Care",
  phone: "+91 86182 98078",
  phoneRaw: "+918618298078",
  whatsapp:
    "https://wa.me/918618298078?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20White%20Teeth%20Dental.",
  email: "hello@whiteteethmangaluru.in",
  rating: 4.9,
  reviews: 88,
  address: {
    line1: " Kudla G' Right Building, Above Kalyani",
    line2: "Kottara Chowki",
    city: "Mangaluru",
    state: "Karnataka",
    pin: "575006",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 7:30 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  mapEmbed: "https://www.google.com/maps?q=Kottara+Chowki+Mangaluru&output=embed",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Kottara+Chowki+Mangaluru",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/orthodontics", label: "Orthodontics" },
  { to: "/gallery", label: "Smile Gallery" },
  { to: "/doctors", label: "Doctors" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  category: "General" | "Orthodontics" | "Cosmetic" | "Surgical" | "Kids";
  icon: string; // fa class
  desc: string;
};

export const SERVICES: Service[] = [
  {
    slug: "dental-checkup",
    title: "Dental Check-up",
    category: "General",
    icon: "fa-tooth",
    desc: "Comprehensive oral health exam with digital diagnostics.",
  },
  {
    slug: "dental-cleaning",
    title: "Dental Cleaning",
    category: "General",
    icon: "fa-teeth-open",
    desc: "Ultrasonic scaling & polishing for fresh, healthy gums.",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    icon: "fa-wand-magic-sparkles",
    desc: "In-clinic whitening for a brighter, confident smile.",
  },
  {
    slug: "root-canal",
    title: "Root Canal",
    category: "General",
    icon: "fa-syringe",
    desc: "Single-sitting, pain-free RCT with rotary endodontics.",
  },
  {
    slug: "fillings",
    title: "Dental Fillings",
    category: "General",
    icon: "fa-droplet",
    desc: "Tooth-coloured composite fillings that blend naturally.",
  },
  {
    slug: "crowns",
    title: "Dental Crowns",
    category: "General",
    icon: "fa-crown",
    desc: "Zirconia & ceramic crowns for strength and aesthetics.",
  },
  {
    slug: "bridges",
    title: "Dental Bridges",
    category: "General",
    icon: "fa-bridge",
    desc: "Fixed replacements to restore your bite and smile.",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    category: "Surgical",
    icon: "fa-screwdriver",
    desc: "Premium titanium implants — the gold standard.",
  },
  {
    slug: "wisdom-tooth",
    title: "Wisdom Tooth Removal",
    category: "Surgical",
    icon: "fa-tooth",
    desc: "Minimally invasive extractions with quick recovery.",
  },
  {
    slug: "pediatric",
    title: "Pediatric Dentistry",
    category: "Kids",
    icon: "fa-child",
    desc: "Gentle, child-friendly care for growing smiles.",
  },
  {
    slug: "metal-braces",
    title: "Metal Braces",
    category: "Orthodontics",
    icon: "fa-grip-lines",
    desc: "Reliable, effective orthodontic correction.",
  },
  {
    slug: "ceramic-braces",
    title: "Ceramic Braces",
    category: "Orthodontics",
    icon: "fa-braille",
    desc: "Discreet tooth-coloured brackets for adults & teens.",
  },
  {
    slug: "aligners",
    title: "Invisible Aligners",
    category: "Orthodontics",
    icon: "fa-mask-face",
    desc: "Clear, removable aligners — straighten without brackets.",
  },
  {
    slug: "smile-designing",
    title: "Smile Designing",
    category: "Cosmetic",
    icon: "fa-face-smile-beam",
    desc: "Digital smile design tailored to your face.",
  },
  {
    slug: "veneers",
    title: "Dental Veneers",
    category: "Cosmetic",
    icon: "fa-gem",
    desc: "Ultra-thin porcelain veneers for a flawless smile.",
  },
  {
    slug: "emergency",
    title: "Emergency Dental Care",
    category: "General",
    icon: "fa-truck-medical",
    desc: "Same-day relief when you need it most.",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Stanly S",
    qualification: "BDS, MDS — Orthodontics",
    experience: "10+ years",
    specialization: "Orthodontist — Braces & Invisible Aligners",
    image: "drstanly",
    bio: "Dr. Stanly leads our orthodontic practice — from clear aligners to complex bite corrections, delivered with warmth and precision.",
  },
  {
    name: "Dr. Aisha Nair",
    qualification: "BDS, MDS — Prosthodontics",
    experience: "12+ years",
    specialization: "Cosmetic Dentistry & Implants",
    image: "doctor-1",
    bio: "Dr. Aisha leads our cosmetic and implant practice, blending precision with an artist's eye for natural smiles.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Kamath",
    role: "Patient — Braces",
    text: "Excellent experience. The doctor explained every procedure clearly and made me feel comfortable throughout my treatment.",
  },
  {
    name: "Arun Bhat",
    role: "Patient — Implants",
    text: "Best clinic for braces and implants in Mangaluru. Truly world-class care with a personal touch.",
  },
  {
    name: "Sneha Rao",
    role: "Patient — Whitening",
    text: "Friendly staff and painless treatment. My smile has never looked better!",
  },
  {
    name: "Kevin D'Souza",
    role: "Patient — RCT",
    text: "I was terrified of root canals. Dr. Aisha made it completely painless. Highly recommended.",
  },
  {
    name: "Meera Shetty",
    role: "Patient — Aligners",
    text: "The aligners were so comfortable. I finished treatment in 9 months with amazing results.",
  },
];

export const FAQS = [
  {
    q: "Do braces hurt?",
    a: "You may feel mild soreness for a day or two after placement or adjustments. This is normal and manageable with over-the-counter pain relief. Modern brackets and wires are far more comfortable than earlier systems.",
  },
  {
    q: "How long does orthodontic treatment take?",
    a: "Most cases take 12–24 months depending on complexity. Clear aligners can be faster for mild-to-moderate cases. Your doctor will share a personalized timeline after diagnostics.",
  },
  {
    q: "Do you accept appointments online?",
    a: "Yes — book via our appointment page, call +91 86182 98078, or message us on WhatsApp. Walk-ins are welcome subject to availability.",
  },
  {
    q: "What are invisible aligners?",
    a: "Aligners are clear, removable trays that gradually move your teeth into the desired position. They are nearly invisible and can be removed for eating and brushing.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "Every 6 months for a routine check-up and cleaning. Patients undergoing active treatment may need more frequent visits.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Yes. Our in-clinic whitening is professional-grade and monitored throughout the session to protect enamel and gums.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely. Our pediatric care is designed to be gentle, playful, and reassuring for little ones.",
  },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Sterilized Equipment" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];
