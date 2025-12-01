export interface Destination {
  id: string;
  slug: string;
  name: string;
  nameIndonesian: string;
  region: "South Bali" | "North Bali";
  category:
    | "Beach"
    | "Waterfall"
    | "Sunset"
    | "Activity"
    | "Culture"
    | "Nature"
    | "Viewpoint";
  description: string;
  descriptionIndonesian: string;
  featured: boolean;
  image: string;
  gallery?: string[];
  highlights: string[];
  bestTimeToVisit: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  price?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const southBaliDestinations: Destination[] = [
  // BEACHES - Pantai-Pantai Terindah
  {
    id: "melasti-beach",
    slug: "melasti-beach",
    name: "Melasti Beach",
    nameIndonesian: "Pantai Melasti",
    region: "South Bali",
    category: "Beach",
    description:
      "Pristine cliff beach with crystal clear blue waters and aesthetic photo spots",
    descriptionIndonesian:
      "Pantai tebing yang sangat bersih, air biru jernih, tempat foto super aesthetic",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Crystal clear turquoise water",
      "Dramatic limestone cliffs",
      "Instagram-worthy photo spots",
      "Clean and well-maintained beach",
      "Less crowded than other beaches",
    ],
    bestTimeToVisit: "Morning (7-10 AM) or Late Afternoon (3-5 PM)",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "IDR 10,000 entrance fee",
  },
  {
    id: "pandawa-beach",
    slug: "pandawa-beach",
    name: "Pandawa Beach",
    nameIndonesian: "Pantai Pandawa",
    region: "South Bali",
    category: "Beach",
    description:
      "Long clean beach perfect for families and swimming with calm waters",
    descriptionIndonesian:
      "Pantai panjang dan bersih, cocok untuk keluarga dan berenang",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&auto=format&fit=crop",
    highlights: [
      "Family-friendly with calm waves",
      "Five Pandawa statues at entrance",
      "Canoe and kayak rentals available",
      "White limestone cliffs backdrop",
      "Clean facilities and restaurants",
    ],
    bestTimeToVisit: "Early morning or weekdays to avoid crowds",
    duration: "2-4 hours",
    difficulty: "Easy",
    price: "IDR 15,000 entrance fee",
  },
  {
    id: "padang-padang-beach",
    slug: "padang-padang-beach",
    name: "Padang Padang Beach",
    nameIndonesian: "Pantai Padang Padang",
    region: "South Bali",
    category: "Beach",
    description: "Small intimate beach famous from Eat, Pray, Love movie",
    descriptionIndonesian: "Pantai kecil, tempat syuting film Eat, Pray, Love",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Movie filming location",
      "Hidden cave entrance",
      "Perfect for surfing",
      "Unique rock formations",
      "Small and cozy atmosphere",
    ],
    bestTimeToVisit: "Morning before 11 AM",
    duration: "1-2 hours",
    difficulty: "Moderate",
    price: "IDR 10,000 entrance fee",
  },
  {
    id: "dreamland-beach",
    slug: "dreamland-beach",
    name: "Dreamland Beach",
    nameIndonesian: "Pantai Dreamland",
    region: "South Bali",
    category: "Beach",
    description: "White sand beach with big waves, popular among surfers",
    descriptionIndonesian:
      "Pantai pasir putih dengan ombak besar — cocok buat surfer",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&auto=format&fit=crop",
    highlights: [
      "Excellent surf conditions",
      "Soft white sand",
      "Beach clubs and cafes",
      "Stunning cliff views",
      "Sunset watching",
    ],
    bestTimeToVisit: "Afternoon for surfing, evening for sunset",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "Free or beach club minimum spend",
  },
  {
    id: "balangan-beach",
    slug: "balangan-beach",
    name: "Balangan Beach",
    nameIndonesian: "Pantai Balangan",
    region: "South Bali",
    category: "Beach",
    description: "Popular pre-wedding photo spot with beautiful cliff scenery",
    descriptionIndonesian:
      "Spot foto populer untuk pre-wedding (tebingnya indah!)",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Stunning cliff backdrop",
      "Pre-wedding photo favorite",
      "Golden sand beach",
      "Warung with ocean views",
      "Surfing spot",
    ],
    bestTimeToVisit: "Golden hour (4-6 PM)",
    duration: "2-3 hours",
    difficulty: "Moderate",
    price: "IDR 5,000 parking",
  },
  {
    id: "nusa-dua-beach",
    slug: "nusa-dua-beach",
    name: "Nusa Dua Beach",
    nameIndonesian: "Pantai Nusa Dua",
    region: "South Bali",
    category: "Beach",
    description: "Calm beach perfect for families and water sports activities",
    descriptionIndonesian:
      "Pantai tenang, cocok untuk keluarga dan water sports",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&auto=format&fit=crop",
    highlights: [
      "Calm and safe waters",
      "Luxury resort area",
      "Water sports center",
      "Clean and maintained",
      "Family-friendly facilities",
    ],
    bestTimeToVisit: "Anytime during daylight",
    duration: "Half day",
    difficulty: "Easy",
    price: "Free (public access areas)",
  },

  // SUNSET SPOTS
  {
    id: "uluwatu-temple",
    slug: "uluwatu-temple",
    name: "Uluwatu Temple",
    nameIndonesian: "Pura Uluwatu",
    region: "South Bali",
    category: "Sunset",
    description:
      "Iconic clifftop temple with sunset views and Kecak dance performance",
    descriptionIndonesian: "Sunset + tebing + tari Kecak — sangat iconic",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop",
    highlights: [
      "Spectacular sunset views",
      "Traditional Kecak Fire Dance",
      "70m cliff perch",
      "Ancient Hindu temple",
      "Playful monkeys (watch belongings!)",
    ],
    bestTimeToVisit: "5-7 PM for sunset and dance",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "IDR 50,000 entrance + IDR 100,000 Kecak dance",
  },
  {
    id: "rock-bar-jimbaran",
    slug: "rock-bar-jimbaran",
    name: "Rock Bar Jimbaran",
    nameIndonesian: "Rock Bar Jimbaran",
    region: "South Bali",
    category: "Sunset",
    description:
      "Most romantic sunset spot with cliff views and signature cocktails",
    descriptionIndonesian: "Sunset dengan view tebing, tempat paling romantis",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&auto=format&fit=crop",
    highlights: [
      "Perched on natural rock formations",
      "World-famous sunset bar",
      "Signature cocktails",
      "Live DJ music",
      "Romantic atmosphere",
    ],
    bestTimeToVisit: "5-7 PM (arrive early for seats)",
    duration: "2-3 hours",
    difficulty: "Moderate",
    price: "No entrance fee, drink minimum spend",
  },
  {
    id: "jimbaran-beach",
    slug: "jimbaran-beach",
    name: "Jimbaran Beach",
    nameIndonesian: "Pantai Jimbaran",
    region: "South Bali",
    category: "Sunset",
    description: "Sunset beach dining with fresh seafood and romantic ambiance",
    descriptionIndonesian: "Bisa sunset sambil makan seafood",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Beachfront seafood restaurants",
      "Romantic candlelit dinner",
      "Fresh catch daily",
      "Soft golden sand",
      "Traditional live music",
    ],
    bestTimeToVisit: "5-8 PM for sunset dinner",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "IDR 150,000-400,000 per person for dinner",
  },

  // ACTIVITIES
  {
    id: "atv-quad-bike",
    slug: "atv-quad-bike-south-bali",
    name: "ATV Quad Bike Adventure",
    nameIndonesian: "ATV Quad Bike",
    region: "South Bali",
    category: "Activity",
    description:
      "Thrilling off-road adventure through forests and muddy trails",
    descriptionIndonesian: "Adventure melewati hutan & jalur berlumpur",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop",
    highlights: [
      "2-hour jungle trail ride",
      "Muddy off-road tracks",
      "Rice field views",
      "Professional guides",
      "Safety equipment provided",
    ],
    bestTimeToVisit: "Morning or afternoon sessions",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "From IDR 350,000 per person",
  },
  {
    id: "extreme-swing",
    slug: "extreme-swing-bali",
    name: "Extreme Swing / Swing Heaven",
    nameIndonesian: "Swing Heaven / Extreme Swing",
    region: "South Bali",
    category: "Activity",
    description: "Viral cliff swing experience with breathtaking views",
    descriptionIndonesian: "Ayunan tebing Bali yang lagi viral",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
    highlights: [
      "Instagram-famous swings",
      "Multiple swing heights",
      "Jungle valley views",
      "Professional photography",
      "Bird nest and photo spots",
    ],
    bestTimeToVisit: "Early morning for best light",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "From IDR 150,000 per person",
  },
  {
    id: "water-sports-tanjung-benoa",
    slug: "water-sports-tanjung-benoa",
    name: "Water Sports Tanjung Benoa",
    nameIndonesian: "Water Sports Tanjung Benoa",
    region: "South Bali",
    category: "Activity",
    description: "Complete water sports center with multiple activities",
    descriptionIndonesian: "Banana boat, parasailing, jet ski, donut boat, dll",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
    highlights: [
      "Banana boat rides",
      "Parasailing adventures",
      "Jet ski rentals",
      "Donut boat fun",
      "Flyboard experiences",
      "Snorkeling trips",
    ],
    bestTimeToVisit: "9 AM - 4 PM (tide dependent)",
    duration: "Half to full day",
    difficulty: "Easy",
    price: "From IDR 100,000 per activity",
  },
  {
    id: "camel-ride-nusa-dua",
    slug: "camel-ride-nusa-dua",
    name: "Camel Ride Nusa Dua",
    nameIndonesian: "Camel Ride (Nusa Dua)",
    region: "South Bali",
    category: "Activity",
    description: "Unique camel riding experience along the beach",
    descriptionIndonesian: "Naik unta di pinggir pantai",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=1200&auto=format&fit=crop",
    highlights: [
      "Beach camel rides",
      "Unique photo opportunity",
      "Sunset ride option",
      "Family-friendly",
      "Professional handlers",
    ],
    bestTimeToVisit: "Afternoon or sunset",
    duration: "30 minutes - 1 hour",
    difficulty: "Easy",
    price: "From IDR 300,000 per ride",
  },

  // ATTRACTIONS
  {
    id: "gwk-cultural-park",
    slug: "garuda-wisnu-kencana",
    name: "Garuda Wisnu Kencana (GWK)",
    nameIndonesian: "Garuda Wisnu Kencana",
    region: "South Bali",
    category: "Culture",
    description:
      "Bali's tallest statue and cultural park with traditional performances",
    descriptionIndonesian: "Patung tertinggi di Bali + show budaya",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop",
    highlights: [
      "121-meter tall statue",
      "Cultural performances",
      "Art exhibitions",
      "Panoramic views",
      "Shopping and dining",
    ],
    bestTimeToVisit: "Late afternoon for performances",
    duration: "3-4 hours",
    difficulty: "Easy",
    price: "IDR 125,000 adults, IDR 100,000 children",
  },
  {
    id: "snorkeling-nusa-dua",
    slug: "snorkeling-nusa-dua",
    name: "Snorkeling Nusa Dua",
    nameIndonesian: "Snorkeling Nusa Dua",
    region: "South Bali",
    category: "Activity",
    description: "Crystal clear waters with abundant marine life",
    descriptionIndonesian: "Air jernih & ikan banyak",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
    highlights: [
      "Clear visibility waters",
      "Colorful tropical fish",
      "Coral reef gardens",
      "Equipment provided",
      "Suitable for beginners",
    ],
    bestTimeToVisit: "Morning for best visibility",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "From IDR 200,000 per person",
  },
  {
    id: "turtle-island",
    slug: "turtle-island-bali",
    name: "Turtle Island (Pulau Serangan)",
    nameIndonesian: "Turtle Island",
    region: "South Bali",
    category: "Nature",
    description: "Turtle conservation center and educational experience",
    descriptionIndonesian: "Pulau kecil tempat penangkaran penyu",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Turtle conservation",
      "Hold baby turtles",
      "Learn about marine life",
      "Other rescued animals",
      "Educational tour",
    ],
    bestTimeToVisit: "Morning (8-11 AM)",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "IDR 10,000 donation suggested",
  },

  // VIEWPOINTS
  {
    id: "karang-boma-cliff",
    slug: "karang-boma-cliff",
    name: "Karang Boma Cliff",
    nameIndonesian: "Karang Boma Cliff",
    region: "South Bali",
    category: "Viewpoint",
    description: "Viral Instagram photo spot with dramatic ocean views",
    descriptionIndonesian: "Tempat foto viral",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Dramatic cliff formations",
      "360-degree ocean views",
      "Instagram-worthy photos",
      "Sunrise and sunset spot",
      "Natural rock arch",
    ],
    bestTimeToVisit: "Golden hour",
    duration: "1 hour",
    difficulty: "Easy",
    price: "IDR 10,000 entrance",
  },
  {
    id: "palmilla-gate",
    slug: "palmilla-gate",
    name: "Palmilla Gate",
    nameIndonesian: "Palmilla Gate",
    region: "South Bali",
    category: "Viewpoint",
    description: "Iconic Balinese gate with ocean backdrop",
    descriptionIndonesian: "Tempat foto viral",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop",
    highlights: [
      "Traditional Balinese gate",
      "Ocean cliff views",
      "Perfect photo frame",
      "Beach club access",
      "Sunset views",
    ],
    bestTimeToVisit: "Afternoon",
    duration: "30 minutes",
    difficulty: "Easy",
    price: "Free with beach club visit",
  },
];

export const northBaliDestinations: Destination[] = [
  // WATERFALLS
  {
    id: "sekumpul-waterfall",
    slug: "sekumpul-waterfall",
    name: "Sekumpul Waterfall",
    nameIndonesian: "Air Terjun Sekumpul",
    region: "North Bali",
    category: "Waterfall",
    description:
      "Bali's most beautiful waterfall, tall and surrounded by lush jungle",
    descriptionIndonesian:
      "Air terjun paling indah di Bali, besar, tinggi, dan dikelilingi hutan",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "Bali's most stunning waterfall",
      "Twin falls viewpoint",
      "Jungle trekking",
      "Natural swimming pool",
      "Traditional village walk",
    ],
    bestTimeToVisit: "Early morning (7-9 AM)",
    duration: "3-4 hours with trek",
    difficulty: "Challenging",
    price: "IDR 20,000 + guide IDR 150,000",
  },
  {
    id: "fiji-waterfall",
    slug: "fiji-waterfall",
    name: "Fiji Waterfall",
    nameIndonesian: "Air Terjun Fiji",
    region: "North Bali",
    category: "Waterfall",
    description: "Hidden gem waterfall accessible via same trail as Sekumpul",
    descriptionIndonesian:
      "Satu jalur dengan Sekumpul, bisa dikunjungi dalam satu trek",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "Less crowded than Sekumpul",
      "Powerful water flow",
      "Great for swimming",
      "Combined trek option",
      "Pristine nature",
    ],
    bestTimeToVisit: "Morning (combine with Sekumpul)",
    duration: "2-3 hours",
    difficulty: "Challenging",
    price: "Included with Sekumpul guide",
  },
  {
    id: "gitgit-waterfall",
    slug: "gitgit-waterfall",
    name: "Gitgit Waterfall",
    nameIndonesian: "Air Terjun Gitgit",
    region: "North Bali",
    category: "Waterfall",
    description: "Easy access waterfall perfect for families with children",
    descriptionIndonesian:
      "Air terjun mudah dijangkau dan cocok untuk keluarga",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "Easy 10-minute walk",
      "45-meter tall cascade",
      "Family-friendly access",
      "Swimming allowed",
      "Vendor stalls available",
    ],
    bestTimeToVisit: "Morning to avoid crowds",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "IDR 20,000 entrance",
  },
  {
    id: "banyu-wana-amertha",
    slug: "banyu-wana-amertha-waterfall",
    name: "Banyu Wana Amertha Waterfall",
    nameIndonesian: "Air Terjun Banyu Wana Amertha",
    region: "North Bali",
    category: "Waterfall",
    description: "Multiple waterfalls in one location, perfect for photography",
    descriptionIndonesian:
      "Beberapa air terjun dalam satu area, sangat bagus untuk foto",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "4 waterfalls in one area",
      "Easy trekking paths",
      "Instagram-worthy spots",
      "Natural pools for swimming",
      "Rope swing available",
    ],
    bestTimeToVisit: "Morning for photography",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "IDR 25,000 entrance",
  },
  {
    id: "aling-aling-waterfall",
    slug: "aling-aling-waterfall",
    name: "Aling-Aling Waterfall",
    nameIndonesian: "Air Terjun Aling-Aling",
    region: "North Bali",
    category: "Waterfall",
    description: "Adventure waterfall with cliff jumping and natural slides",
    descriptionIndonesian: "Terkenal untuk cliff jumping dan natural slides",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "Cliff jumping (5-15 meters)",
      "Natural water slides",
      "Adventure activities",
      "Multiple waterfalls",
      "Professional guides",
    ],
    bestTimeToVisit: "Morning for activities",
    duration: "3-4 hours",
    difficulty: "Moderate",
    price: "IDR 125,000 with activities",
  },

  // LAKES & MOUNTAINS
  {
    id: "ulun-danu-beratan",
    slug: "ulun-danu-beratan-temple",
    name: "Ulun Danu Beratan Temple",
    nameIndonesian: "Pura Ulun Danu Beratan",
    region: "North Bali",
    category: "Culture",
    description:
      "Iconic floating temple on the lake, featured on IDR 50,000 note",
    descriptionIndonesian: "Candi terapung ikonik di tengah danau",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop",
    highlights: [
      "Iconic floating pagodas",
      "Mountain lake setting",
      "Cool highland climate",
      "Traditional market nearby",
      "Sunrise photography spot",
    ],
    bestTimeToVisit: "Early morning (6-8 AM) for fog",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "IDR 50,000 entrance",
  },
  {
    id: "twin-lakes",
    slug: "twin-lakes-buyan-tamblingan",
    name: "Twin Lakes (Buyan & Tamblingan)",
    nameIndonesian: "Danau Buyan & Danau Tamblingan",
    region: "North Bali",
    category: "Nature",
    description: "Pristine mountain lakes with lush green surroundings",
    descriptionIndonesian:
      "Twin lakes dengan pemandangan hijau dan udara sejuk",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "Two volcanic lakes",
      "Misty morning views",
      "Canoeing activities",
      "Jungle trekking",
      "Camping spots",
    ],
    bestTimeToVisit: "Early morning for mist",
    duration: "2-4 hours",
    difficulty: "Easy",
    price: "Free viewpoint, activities extra",
  },
  {
    id: "wanagiri-hidden-hills",
    slug: "wanagiri-hidden-hills",
    name: "Wanagiri Hidden Hills",
    nameIndonesian: "Wanagiri Hidden Hills",
    region: "North Bali",
    category: "Viewpoint",
    description: "Instagram-famous photo spots with twin lakes backdrop",
    descriptionIndonesian: "Spot foto dengan background danau",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
    highlights: [
      "Multiple photo installations",
      "Twin lakes panorama",
      "Bird nests and swings",
      "Heart-shaped frames",
      "Mountain views",
    ],
    bestTimeToVisit: "Morning (8-10 AM)",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "IDR 30,000 + photo spots IDR 10-20k each",
  },

  // GARDENS & GATES
  {
    id: "handara-gate",
    slug: "handara-iconic-gate",
    name: "Handara Iconic Gate",
    nameIndonesian: "Handara Gate",
    region: "North Bali",
    category: "Viewpoint",
    description: "Famous Balinese gate perfect for iconic photos",
    descriptionIndonesian: "Gerbang besar yang terkenal untuk foto",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop",
    highlights: [
      "Most photographed gate in Bali",
      "Traditional Balinese architecture",
      "Mountain backdrop",
      "Golf resort area",
      "Cool highland climate",
    ],
    bestTimeToVisit: "Early morning (6-8 AM) for less crowds",
    duration: "30 minutes",
    difficulty: "Easy",
    price: "IDR 30,000 for photo",
  },
  {
    id: "belayu-garden",
    slug: "belayu-garden",
    name: "Belayu Garden",
    nameIndonesian: "Belayu Garden",
    region: "North Bali",
    category: "Nature",
    description: "Colorful flower garden with beautiful photo spots",
    descriptionIndonesian: "Taman bunga warna-warni, spot foto populer",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&auto=format&fit=crop",
    highlights: [
      "Vibrant flower displays",
      "Creative photo installations",
      "Garden swings",
      "Peaceful atmosphere",
      "Fresh mountain air",
    ],
    bestTimeToVisit: "Morning or afternoon",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "IDR 25,000 entrance",
  },

  // LOVINA AREA
  {
    id: "lovina-dolphin-tour",
    slug: "lovina-dolphin-watching",
    name: "Lovina Dolphin Watching",
    nameIndonesian: "Lovina Dolphin Tour",
    region: "North Bali",
    category: "Activity",
    description:
      "Early morning boat trip to see wild dolphins in their habitat",
    descriptionIndonesian: "Melihat lumba-lumba pagi hari menggunakan perahu",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    highlights: [
      "Wild dolphin sightings",
      "Traditional outrigger boat",
      "Beautiful sunrise",
      "Black sand beach",
      "Calm northern waters",
    ],
    bestTimeToVisit: "5:30-7:00 AM (early morning only)",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "IDR 150,000-200,000 per person",
  },
  {
    id: "lovina-snorkeling",
    slug: "lovina-snorkeling",
    name: "Lovina Snorkeling",
    nameIndonesian: "Snorkeling Lovina",
    region: "North Bali",
    category: "Activity",
    description: "Calm waters perfect for snorkeling with colorful fish",
    descriptionIndonesian: "Spot snorkeling dengan ikan warna-warni",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
    highlights: [
      "Calm and clear waters",
      "Colorful coral reefs",
      "Tropical fish species",
      "Suitable for beginners",
      "Equipment provided",
    ],
    bestTimeToVisit: "Morning after dolphin tour",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "IDR 150,000 per person",
  },
  {
    id: "banjar-hot-spring",
    slug: "banjar-hot-springs",
    name: "Banjar Hot Springs",
    nameIndonesian: "Banjar Hot Spring",
    region: "North Bali",
    category: "Nature",
    description: "Natural hot spring baths in the middle of tropical gardens",
    descriptionIndonesian: "Pemandian air panas alami di tengah alam",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "Natural sulfur hot springs",
      "8 dragon head fountains",
      "Tropical garden setting",
      "Therapeutic waters",
      "Relaxing atmosphere",
    ],
    bestTimeToVisit: "Early morning or late afternoon",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "IDR 20,000 entrance",
  },
  {
    id: "brahmavihara-arama",
    slug: "brahmavihara-arama-buddhist-monastery",
    name: "Brahmavihara-Arama Buddhist Monastery",
    nameIndonesian: "Brahmavihara-Arama",
    region: "North Bali",
    category: "Culture",
    description: "Bali's largest Buddhist monastery with peaceful atmosphere",
    descriptionIndonesian: "Vihara Buddha terbesar di Bali, suasananya tenang",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop",
    highlights: [
      "Largest Buddhist temple in Bali",
      "Peaceful meditation halls",
      "Golden pagoda",
      "Mountain views",
      "Serene atmosphere",
    ],
    bestTimeToVisit: "Morning for meditation",
    duration: "1-2 hours",
    difficulty: "Easy",
    price: "Donation-based",
  },

  // MUNDUK AREA
  {
    id: "munduk-waterfall-trek",
    slug: "munduk-waterfall-circle-trek",
    name: "Munduk Waterfall Circle Trek",
    nameIndonesian: "Munduk Waterfall Circle Trek",
    region: "North Bali",
    category: "Waterfall",
    description: "Scenic trekking route through multiple waterfalls and jungle",
    descriptionIndonesian: "Jalur trekking melewati beberapa air terjun",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    highlights: [
      "3 waterfalls in one trek",
      "Coffee plantations",
      "Jungle trails",
      "Local village experience",
      "Stunning nature",
    ],
    bestTimeToVisit: "Morning (cooler weather)",
    duration: "3-5 hours",
    difficulty: "Moderate",
    price: "IDR 50,000 + guide recommended",
  },
  {
    id: "munduk-moding-plantation",
    slug: "munduk-moding-plantation",
    name: "Munduk Moding Plantation",
    nameIndonesian: "Munduk Moding Plantation",
    region: "North Bali",
    category: "Viewpoint",
    description: "Famous infinity pool overlooking mountain valley and clouds",
    descriptionIndonesian: "Dikenal dengan infinity pool dan pemandangan awan",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
    highlights: [
      "Infinity pool with cloud views",
      "Coffee plantation tour",
      "Mountain scenery",
      "Luxury eco-resort",
      "Farm-to-table dining",
    ],
    bestTimeToVisit: "Afternoon (pool guests only)",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "Resort guest or day pass IDR 500,000+",
  },
];

export const allDestinations = [
  ...southBaliDestinations,
  ...northBaliDestinations,
];

export const featuredDestinations = allDestinations.filter((d) => d.featured);

export const destinationsByCategory = {
  beach: allDestinations.filter((d) => d.category === "Beach"),
  waterfall: allDestinations.filter((d) => d.category === "Waterfall"),
  sunset: allDestinations.filter((d) => d.category === "Sunset"),
  activity: allDestinations.filter((d) => d.category === "Activity"),
  culture: allDestinations.filter((d) => d.category === "Culture"),
  nature: allDestinations.filter((d) => d.category === "Nature"),
  viewpoint: allDestinations.filter((d) => d.category === "Viewpoint"),
};

export const destinationsByRegion = {
  southBali: southBaliDestinations,
  northBali: northBaliDestinations,
};
