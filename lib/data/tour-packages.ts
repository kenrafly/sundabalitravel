export interface TourPackage {
  id: string;
  slug: string;
  name: string;
  nameIndonesian: string;
  region:
    | "South Bali"
    | "North Bali"
    | "East Bali"
    | "Central Bali"
    | "West Bali";
  category:
    | "Beach"
    | "Waterfall"
    | "Culture"
    | "Activity"
    | "Nature"
    | "Sunrise"
    | "Wildlife";
  description: string;
  descriptionIndonesian: string;
  featured: boolean;
  image: string;
  gallery: string[];
  destinations: string[];
  price: {
    amount: number;
    perPerson: boolean;
    minimumPeople?: number;
    soloTravelerPrice?: number;
    priceNote?: string;
  };
  included: string[];
  excluded?: string[];
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestTimeToVisit: string;
  highlights?: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "south-bali-adventure",
    slug: "south-bali-adventure",
    name: "South Bali Adventure",
    nameIndonesian: "Petualangan Bali Selatan",
    region: "South Bali",
    category: "Beach",
    description:
      "Explore the iconic landmarks of South Bali including GWK, Uluwatu Temple, thrilling paragliding, and pristine beaches",
    descriptionIndonesian:
      "Jelajahi landmark ikonik Bali Selatan termasuk GWK, Pura Uluwatu, paragliding yang mendebarkan, dan pantai-pantai indah",
    featured: true,
    image: "/South Bali/GWK.jpg",
    gallery: [
      "/South Bali/GWK.jpg",
      "/South Bali/Uluwatu temple.webp",
      "/South Bali/Paragliding.jpg",
      "/South Bali/Pantai di South Bali.jpg",
    ],
    destinations: [
      "GWK (Garuda Wisnu Kencana)",
      "Uluwatu Temple",
      "Paragliding",
      "Beautiful Beaches",
    ],
    price: {
      amount: 50,
      perPerson: false,
      priceNote: "1 person: $50, 2 people: $70, 3+ people: $85",
    },
    included: ["Bottled water", "Private car", "Professional driver"],
    excluded: ["Entrance tickets (pay by yourself)", "Personal expenses"],
    duration: "8-10 hours",
    difficulty: "Easy",
    bestTimeToVisit: "Morning start recommended",
    highlights: [
      "Visit the iconic 120-meter tall GWK statue",
      "Explore the ancient Uluwatu Temple on cliff edge",
      "Experience thrilling paragliding over beaches",
      "Relax at pristine South Bali beaches",
    ],
  },
  {
    id: "unesco-heritage-tour",
    slug: "unesco-heritage-tour",
    name: "UNESCO Heritage Tour",
    nameIndonesian: "Tur Warisan UNESCO",
    region: "Central Bali",
    category: "Culture",
    description:
      "Visit Bali's UNESCO World Heritage Sites including Tanah Lot, Taman Ayun, Jatiluwih Rice Terraces, and Ulun Danu Temple",
    descriptionIndonesian:
      "Kunjungi Situs Warisan Dunia UNESCO Bali termasuk Tanah Lot, Taman Ayun, Sawah Jatiluwih, dan Pura Ulun Danu",
    featured: true,
    image: "/Unesco Heritage/Tanah Lot.png",
    gallery: [
      "/Unesco Heritage/Tanah Lot.png",
      "/Unesco Heritage/pura-taman-ayun.jpg",
      "/Unesco Heritage/Jatiluwih.jpg",
      "/Unesco Heritage/Ulun Danu.jpg",
    ],
    destinations: [
      "Tanah Lot Temple",
      "Taman Ayun Temple",
      "Jatiluwih Rice Terraces",
      "Ulun Danu Beratan Temple",
    ],
    price: {
      amount: 70,
      perPerson: false,
      priceNote: "1 person: $70, 2 people: $90, 3+ people: $110",
    },
    included: [
      "All entrance tickets",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Lunch", "Personal expenses"],
    duration: "10-12 hours",
    difficulty: "Easy",
    bestTimeToVisit: "Early morning for sunrise at Tanah Lot",
    highlights: [
      "Explore UNESCO World Heritage Sites",
      "Sunset at iconic Tanah Lot Temple",
      "Walk through stunning Jatiluwih rice terraces",
      "Visit the floating Ulun Danu Temple",
    ],
  },
  {
    id: "lovina-dolphin-tour",
    slug: "lovina-dolphin-tour",
    name: "Lovina Dolphin Tour",
    nameIndonesian: "Tur Lumba-lumba Lovina",
    region: "North Bali",
    category: "Wildlife",
    description:
      "Experience the magic of dolphins at sunrise, visit stunning temples and waterfalls in North Bali",
    descriptionIndonesian:
      "Rasakan keajaiban lumba-lumba saat matahari terbit, kunjungi pura dan air terjun menakjubkan di Bali Utara",
    featured: true,
    image: "/Lovina Dolphin Tour/Ulun Danu.jpg",
    gallery: [
      "/Lovina Dolphin Tour/Ulun Danu.jpg",
      "/Lovina Dolphin Tour/Banyumala.webp",
      "/Lovina Dolphin Tour/Aling aling waterfall.jpg",
    ],
    destinations: [
      "Ulun Danu Beratan Temple",
      "Banyumala Twin Waterfalls",
      "Aling Aling Waterfall",
      "Dolphin Watching at Sunrise",
    ],
    price: {
      amount: 100,
      perPerson: false,
      priceNote: "1 person: $100, 2 people: $150, 3+ people: $200",
    },
    included: [
      "Boat for dolphin watching",
      "All entrance tickets",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Breakfast", "Personal expenses"],
    duration: "12-14 hours",
    difficulty: "Moderate",
    bestTimeToVisit: "Early morning start (4-5 AM) for dolphin watching",
    highlights: [
      "Watch wild dolphins at sunrise in Lovina",
      "Visit the iconic floating temple Ulun Danu",
      "Swim in twin waterfalls at Banyumala",
      "Explore the powerful Aling Aling waterfall",
    ],
  },
  {
    id: "waterfall-paradise",
    slug: "waterfall-paradise",
    name: "Waterfall Paradise",
    nameIndonesian: "Surga Air Terjun",
    region: "North Bali",
    category: "Waterfall",
    description:
      "Discover Bali's most spectacular waterfalls including Sekumpul, Git Git, and Banyumala",
    descriptionIndonesian:
      "Temukan air terjun paling spektakuler di Bali termasuk Sekumpul, Git Git, dan Banyumala",
    featured: true,
    image: "/Waterfall in Bali/Sekumpul waterfall.webp",
    gallery: ["/Waterfall in Bali/Sekumpul waterfall.webp"],
    destinations: [
      "Sekumpul Waterfall",
      "Git Git Waterfall",
      "Banyumala Twin Waterfalls",
    ],
    price: {
      amount: 90,
      perPerson: false,
      priceNote: "1 person: $90, 2 people: $120, 3+ people: $150",
    },
    included: [
      "All entrance tickets",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Lunch", "Personal expenses"],
    duration: "8-10 hours",
    difficulty: "Moderate",
    bestTimeToVisit: "Morning for best lighting and fewer crowds",
    highlights: [
      "Trek to Bali's tallest waterfall - Sekumpul",
      "Cool off in the refreshing Git Git waterfall",
      "Swim in the twin pools of Banyumala",
      "Experience North Bali's lush jungle scenery",
    ],
  },
  {
    id: "east-bali-explorer",
    slug: "east-bali-explorer",
    name: "East Bali Explorer",
    nameIndonesian: "Penjelajah Bali Timur",
    region: "East Bali",
    category: "Culture",
    description:
      "Journey through East Bali's spiritual sites including the famous Gates of Heaven at Lempuyang Temple",
    descriptionIndonesian:
      "Perjalanan melalui situs spiritual Bali Timur termasuk Gerbang Surga yang terkenal di Pura Lempuyang",
    featured: true,
    image: "/East Bali/Gate of Heaven.jpg",
    gallery: [
      "/East Bali/Gate of Heaven.jpg",
      "/East Bali/Tirta Gangga.jpg",
      "/East Bali/Taman Ujung.jpg",
      "/East Bali/Lereng Agung.jpg",
      "/East Bali/Goa Raja.jpg",
    ],
    destinations: [
      "Gates of Heaven (Lempuyang Temple)",
      "Tirta Gangga Water Palace",
      "Taman Ujung Water Palace",
      "Lereng Agung",
      "Goa Raja",
    ],
    price: {
      amount: 70,
      perPerson: false,
      priceNote: "1 person: $70, 2 people: $100, 3+ people: $130",
    },
    included: [
      "Lunch",
      "All entrance tickets",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Personal expenses"],
    duration: "10-12 hours",
    difficulty: "Moderate",
    highlights: [
      "Instagram-famous Gates of Heaven photo",
      "Explore the royal Tirta Gangga water palace",
      "Visit the stunning Taman Ujung palace",
      "Discover ancient caves and temples",
      "Panoramic views of Mount Agung",
    ],
    bestTimeToVisit: "Early morning for sunrise at Lempuyang",
  },
  {
    id: "volendam-of-bali",
    slug: "volendam-of-bali",
    name: "Volendam of Bali (Traditional Villages)",
    nameIndonesian: "Volendam Bali (Desa Tradisional)",
    region: "Central Bali",
    category: "Culture",
    description:
      "Experience authentic Balinese village life at Penglipuran and Trunyan, with stunning Kintamani volcano views",
    descriptionIndonesian:
      "Rasakan kehidupan desa Bali yang autentik di Penglipuran dan Trunyan, dengan pemandangan gunung berapi Kintamani yang menakjubkan",
    featured: false,
    image: "/Volendam of Bali/Desa Penglipuran.jpg",
    gallery: [
      "/Volendam of Bali/Desa Penglipuran.jpg",
      "/Volendam of Bali/desa-trunyan.jpg",
      "/Volendam of Bali/Visit Kintamani.jpg",
      "/Volendam of Bali/Tirta Empul.jpg",
    ],
    destinations: [
      "Penglipuran Traditional Village",
      "Trunyan Village",
      "Kintamani Volcano View",
    ],
    price: {
      amount: 60,
      perPerson: false,
      priceNote: "1 person: $60, 2 people: $75, 3+ people: $90",
    },
    included: [
      "All entrance tickets",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Lunch", "Personal expenses"],
    duration: "8-10 hours",
    difficulty: "Easy",
    bestTimeToVisit: "Morning to afternoon",
    highlights: [
      "Walk through pristine Penglipuran village",
      "Experience unique burial traditions at Trunyan",
      "Panoramic views of Mount Batur and Lake Batur",
      "Discover authentic Balinese architecture",
    ],
  },
  {
    id: "ubud-waterfall-temple",
    slug: "ubud-waterfall-temple",
    name: "Ubud A - Waterfall & Temple Tour",
    nameIndonesian: "Ubud A - Tur Air Terjun & Pura",
    region: "Central Bali",
    category: "Nature",
    description:
      "Discover Ubud's natural beauty with waterfalls, rice terraces, holy water temple, and optional monkey forest visit",
    descriptionIndonesian:
      "Temukan keindahan alam Ubud dengan air terjun, sawah terasering, pura air suci, dan kunjungan opsional ke hutan monyet",
    featured: true,
    image: "/Ubud A/Tirta Empul.jpg",
    gallery: [
      "/Ubud A/Goa Raja.jpg",
      "/Ubud A/Tirta Empul.jpg",
      "/Ubud A/Tegal lalang.webp",
      "/Ubud A/Ulun petanu.webp",
      "/Ubud A/Monkey Forest.jpg",
    ],
    destinations: [
      "Goa Raja Waterfall",
      "Tirta Empul Holy Water Temple",
      "Tegalalang Rice Terraces",
      "Ulun Petanu Waterfall",
      "Monkey Forest (Optional)",
    ],
    price: {
      amount: 60,
      perPerson: false,
      priceNote: "1 person: $60, 2 people: $110, 3+ people: $50",
    },
    included: [
      "All entrance tickets",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Lunch", "Personal expenses"],
    duration: "8-10 hours",
    difficulty: "Easy",
    bestTimeToVisit: "Morning for best photos",
    highlights: [
      "Swim in the mystical Goa Raja waterfall",
      "Purification ritual at Tirta Empul temple",
      "Iconic Tegalalang rice terrace views",
      "Hidden gem - Ulun Petanu waterfall",
      "Interact with monkeys at Sacred Forest",
    ],
  },
  {
    id: "ubud-adventure-activities",
    slug: "ubud-adventure-activities",
    name: "Ubud B - Adventure Activities",
    nameIndonesian: "Ubud B - Aktivitas Petualangan",
    region: "Central Bali",
    category: "Activity",
    description:
      "Thrilling adventure package with ATV quad biking, river rafting, swing, and optional tubing or buggy rides",
    descriptionIndonesian:
      "Paket petualangan mendebarkan dengan ATV quad bike, arung jeram, ayunan, dan opsional tubing atau buggy",
    featured: true,
    image: "/Ubud B/Quad Bike 1.jpg",
    gallery: [
      "/Ubud B/Quad Bike 1.jpg",
      "/Ubud B/Quad Bike 2.jpg",
      "/Ubud B/River Rafting.jpg",
      "/Ubud B/Tubing River.jpg",
      "/Ubud B/Buggy.webp",
    ],
    destinations: [
      "ATV Quad Biking",
      "River Rafting",
      "Bali Swing",
      "River Tubing (Optional)",
      "Buggy Ride (Optional)",
    ],
    price: {
      amount: 115,
      perPerson: false,
      priceNote:
        "1 person: $115, 2 people: $185, 3+ people: $255. Swing is optional.",
    },
    included: [
      "ATV quad bike",
      "River rafting",
      "Swing",
      "Safety equipment",
      "Lunch",
      "Bottled water",
      "Professional guides",
    ],
    excluded: ["Buggy ride", "River tubing", "Personal expenses"],
    duration: "8-10 hours",
    difficulty: "Challenging",
    bestTimeToVisit: "Morning start recommended",
    highlights: [
      "Adrenaline-pumping ATV through rice fields",
      "Exciting white water rafting adventure",
      "Iconic Bali swing over jungle valley",
      "Optional river tubing experience",
      "Optional buggy ride through terrain",
    ],
  },
  {
    id: "kintamani-jeep-sunrise",
    slug: "kintamani-jeep-sunrise",
    name: "Kintamani Jeep Sunrise Adventure",
    nameIndonesian: "Petualangan Jeep Sunrise Kintamani",
    region: "Central Bali",
    category: "Sunrise",
    description:
      "Exciting jeep adventure to catch the sunrise at Mount Batur, visit coffee plantation and relax at hot springs",
    descriptionIndonesian:
      "Petualangan jeep yang menarik untuk menangkap matahari terbit di Gunung Batur, kunjungi perkebunan kopi dan bersantai di pemandian air panas",
    featured: true,
    image: "/Visit Kintamani/Jeep Sunrise 1.jpg",
    gallery: [
      "/Visit Kintamani/Jeep Sunrise 1.jpg",
      "/Visit Kintamani/Coffee plantation 2.jpg",
      "/Visit Kintamani/Coffee planatation 1.jpg",
      "/Visit Kintamani/Visit Cafe Kintamani.jpg",
      "/Visit Kintamani/Visit Cafe _ Paperhill.jpg",
    ],
    destinations: [
      "Mount Batur Jeep Sunrise",
      "Kintamani Cafe (Optional)",
      "Coffee Plantation",
      "Natural Hot Springs",
    ],
    price: {
      amount: 130,
      perPerson: false,
      priceNote: "1 person: $130, 2 people: $170, 3+ people: $210",
    },
    included: [
      "4WD Jeep",
      "All entrance tickets",
      "Hot spring admission",
      "Coffee tasting",
      "Breakfast",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Personal expenses"],
    duration: "10-12 hours",
    difficulty: "Moderate",
    bestTimeToVisit: "Early morning start (3-4 AM) for sunrise",
    highlights: [
      "Breathtaking sunrise from Mount Batur",
      "Thrilling 4WD jeep adventure",
      "Sample authentic Luwak coffee",
      "Relax in natural hot springs",
      "Panoramic views of volcanic landscape",
    ],
  },
  {
    id: "bali-wildlife-experience",
    slug: "bali-wildlife-experience",
    name: "Bali Wildlife Experience",
    nameIndonesian: "Pengalaman Satwa Liar Bali",
    region: "Central Bali",
    category: "Wildlife",
    description:
      "Unforgettable wildlife encounters including bird park, orangutan and elephant interactions, butterfly garden, and swimming with dolphins",
    descriptionIndonesian:
      "Pertemuan satwa liar yang tak terlupakan termasuk taman burung, interaksi orangutan dan gajah, taman kupu-kupu, dan berenang bersama lumba-lumba",
    featured: true,
    image: "/Activities with animal/Bali Bird Park.jpg",
    gallery: [
      "/Activities with animal/Bali Bird Park.jpg",
      "/Activities with animal/Exploring Animal _ Elephant.jpg",
      "/Activities with animal/Exploring Animal _ Orang Utan.jpg",
      "/Activities with animal/Swimming with the dolphins.jpg",
    ],
    destinations: [
      "Bali Bird Park",
      "Orangutan & Elephant Encounters",
      "Butterfly Garden",
      "Dolphin Swimming Experience",
    ],
    price: {
      amount: 50,
      perPerson: false,
      priceNote: "1 person: $50, 2 people: $70, 3+ people: $90",
    },
    included: [
      "All park entrance tickets",
      "Elephant ride",
      "Dolphin swimming session",
      "Lunch",
      "Private car",
      "Bottled water",
      "Professional driver",
    ],
    excluded: ["Personal expenses", "Photos and videos (additional charge)"],
    duration: "10-12 hours",
    difficulty: "Easy",
    bestTimeToVisit: "Morning start recommended",
    highlights: [
      "Explore 1000+ exotic birds at Bird Park",
      "Up-close encounters with orangutans",
      "Elephant ride through jungle",
      "Swim with friendly dolphins",
      "Walk through butterfly garden",
    ],
  },
  {
    id: "nusa-penida-west-snorkeling",
    slug: "nusa-penida-west-snorkeling",
    name: "Nusa Penida West Snorkeling",
    nameIndonesian: "Snorkeling Nusa Penida Barat",
    region: "South Bali",
    category: "Beach",
    description:
      "Discover the underwater paradise of Nusa Penida's west coast with crystal clear waters, vibrant coral reefs, and diverse marine life. Perfect for snorkeling enthusiasts!",
    descriptionIndonesian:
      "Temukan surga bawah laut di pantai barat Nusa Penida dengan air jernih, terumbu karang yang indah, dan kehidupan laut yang beragam. Sempurna untuk pecinta snorkeling!",
    featured: true,
    image: "/Nusa Peninda/1.jpeg",
    gallery: [
      "/Nusa Peninda/1.jpeg",
      "/Nusa Peninda/2.png",
      "/Nusa Peninda/3.jpeg",
      "/South Bali/Pantai di South Bali.jpg",
    ],
    destinations: [
      "Manta Point (Snorkeling with Manta Rays)",
      "Gamat Bay (Crystal clear waters)",
      "Crystal Bay (Colorful coral reefs)",
      "Fast boat to Nusa Penida",
    ],
    price: {
      amount: 95,
      perPerson: false,
      priceNote: "1 person: $95, 2 people: $155, 3+ people: $200",
    },
    included: [
      "Hotel pickup and drop-off",
      "Fast boat transfers to/from Nusa Penida",
      "Snorkeling equipment (mask, fins, life jacket)",
      "Professional snorkeling guide",
      "Underwater camera documentation",
      "Towels and locker",
      "Lunch and refreshments",
      "Insurance coverage",
    ],
    excluded: [
      "Personal expenses",
      "Tips for guide and crew",
    ],
    duration: "Full day (8-9 hours)",
    difficulty: "Moderate",
    bestTimeToVisit: "April to October (dry season)",
    highlights: [
      "Swim with majestic Manta Rays at Manta Point",
      "Explore vibrant coral gardens and tropical fish",
      "Crystal clear waters with 20-30m visibility",
      "Visit 3 best snorkeling spots in Nusa Penida",
      "Professional underwater photography included",
      "Small group for personalized experience",
    ],
  },
];

// Helper functions
export const getPackagesByRegion = (region: string) => {
  if (region === "All") return tourPackages;
  return tourPackages.filter((pkg) => pkg.region === region);
};

export const getPackagesByCategory = (category: string) => {
  if (category === "All") return tourPackages;
  return tourPackages.filter((pkg) => pkg.category === category);
};

export const getFeaturedPackages = () => {
  return tourPackages.filter((pkg) => pkg.featured);
};

export const getPackageBySlug = (slug: string) => {
  return tourPackages.find((pkg) => pkg.slug === slug);
};

export const allPackages = tourPackages;
