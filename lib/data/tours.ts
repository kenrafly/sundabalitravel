export interface TourPackage {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  price: string;
  category: "Adventure" | "Culture" | "Beach" | "Nature" | "Family";
  image: string;
  highlights: string[];
  included: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "ubud-adventure",
    title: "Ubud Cultural Adventure",
    description:
      "Explore the heart of Bali with rice terraces, temples, and traditional art",
    longDescription:
      "Immerse yourself in the cultural richness of Ubud. Visit ancient temples, walk through emerald rice terraces, witness traditional dance performances, and explore local art markets. This tour combines natural beauty with Balinese heritage.",
    duration: "Full Day (8-10 hours)",
    price: "From $65/person",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    highlights: [
      "Tegalalang Rice Terrace",
      "Sacred Monkey Forest Sanctuary",
      "Tirta Empul Holy Water Temple",
      "Traditional Balinese Dance",
      "Ubud Art Market",
    ],
    included: [
      "Private air-conditioned vehicle",
      "English speaking driver/guide",
      "Entrance fees to all attractions",
      "Bottled water",
      "Hotel pickup & drop-off",
    ],
  },
  {
    id: "waterfall-quest",
    title: "Hidden Waterfall Quest",
    description: "Discover Bali's most stunning and secluded waterfalls",
    longDescription:
      "Venture off the beaten path to discover Bali's most magnificent waterfalls. Trek through lush jungles, swim in crystal-clear natural pools, and capture breathtaking photos at these hidden gems.",
    duration: "Full Day (8-10 hours)",
    price: "From $70/person",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    highlights: [
      "Tibumana Waterfall",
      "Tukad Cepung Hidden Canyon",
      "Tegenungan Waterfall",
      "Jungle trekking",
      "Natural pool swimming",
    ],
    included: [
      "Private transportation",
      "Professional guide",
      "All entrance tickets",
      "Lunch at local restaurant",
      "Refreshments",
    ],
  },
  {
    id: "uluwatu-sunset",
    title: "Uluwatu Sunset & Kecak Dance",
    description: "Clifftop temple views and traditional fire dance at sunset",
    longDescription:
      "Experience one of Bali's most iconic sunset views from the clifftop Uluwatu Temple. Watch the mesmerizing Kecak Fire Dance as the sun sets over the Indian Ocean, followed by a seafood dinner on the beach.",
    duration: "Half Day (5-6 hours)",
    price: "From $55/person",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&auto=format&fit=crop",
    highlights: [
      "Uluwatu Temple",
      "Kecak Fire Dance Performance",
      "Stunning sunset views",
      "Jimbaran Beach",
      "Fresh seafood dinner",
    ],
    included: [
      "Private car & driver",
      "Temple entrance fee",
      "Kecak dance ticket",
      "Seafood dinner",
      "Sarong rental",
    ],
  },
  {
    id: "nusa-penida",
    title: "Nusa Penida Island Escape",
    description: "Crystal beaches, dramatic cliffs, and T-Rex viewpoints",
    longDescription:
      "Explore the pristine island of Nusa Penida with its dramatic coastal landscapes. Visit Kelingking Beach (T-Rex cliff), swim in Angel's Billabong natural pool, and witness manta rays at Crystal Bay.",
    duration: "Full Day (10-12 hours)",
    price: "From $95/person",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&auto=format&fit=crop",
    highlights: [
      "Kelingking Beach (T-Rex)",
      "Angel's Billabong",
      "Broken Beach",
      "Crystal Bay snorkeling",
      "Fast boat transfers",
    ],
    included: [
      "Fast boat round trip",
      "Private island transportation",
      "Snorkeling equipment",
      "Lunch",
      "All entrance fees",
    ],
  },
  {
    id: "mount-batur-sunrise",
    title: "Mount Batur Sunrise Trek",
    description: "Volcanic summit sunrise with breakfast cooked by steam",
    longDescription:
      "Begin your day with a pre-dawn trek to the summit of Mount Batur volcano. Watch the sunrise illuminate the landscape while enjoying breakfast cooked using volcanic steam. An unforgettable adventure for active travelers.",
    duration: "Early Morning (6-7 hours)",
    price: "From $80/person",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    highlights: [
      "Summit sunrise view",
      "Active volcano exploration",
      "Volcanic steam breakfast",
      "Hot springs relaxation",
      "Panoramic views",
    ],
    included: [
      "Early morning pickup (2-3 AM)",
      "Professional trekking guide",
      "Flashlight & trekking pole",
      "Breakfast at summit",
      "Hot spring entrance",
    ],
  },
  {
    id: "beach-hopping",
    title: "South Bali Beach Hopping",
    description: "White sands, surf spots, and beach club vibes",
    longDescription:
      "Discover the best beaches of South Bali. From the white sands of Pandawa to the surf breaks of Uluwatu, experience the diverse coastal beauty. End with sunset cocktails at a beach club.",
    duration: "Full Day (7-9 hours)",
    price: "From $60/person",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    highlights: [
      "Pandawa Beach",
      "Melasti Beach",
      "Padang Padang Beach",
      "Sundays Beach Club",
      "Surf watching",
    ],
    included: [
      "Private vehicle",
      "Beach club day pass",
      "Welcome drink",
      "Beach equipment",
      "Photo spots guide",
    ],
  },
  {
    id: "family-fun",
    title: "Bali Family Fun Day",
    description: "Kid-friendly activities and animal encounters",
    longDescription:
      "Perfect for families! Visit animal parks, enjoy easy nature walks, and experience traditional crafts. This tour is designed with children in mind, offering educational and entertaining experiences.",
    duration: "Full Day (8 hours)",
    price: "From $70/person",
    category: "Family",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop",
    highlights: [
      "Bali Zoo",
      "Elephant sanctuary",
      "Rice terrace walk",
      "Batik making class",
      "Kid-friendly lunch",
    ],
    included: [
      "Family-friendly vehicle",
      "All entrance fees",
      "Activity tickets",
      "Lunch",
      "Child car seats available",
    ],
  },
  {
    id: "instagram-tour",
    title: "Instagram Bali Photo Tour",
    description: "Visit the most photogenic spots with perfect lighting",
    longDescription:
      "Capture your best Bali moments at the island's most Instagram-worthy locations. From jungle swings to infinity pools, our photo guide knows the best angles and times for stunning shots.",
    duration: "Full Day (8-10 hours)",
    price: "From $75/person",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    highlights: [
      "Jungle swing & skybike",
      "Handara Gate",
      "Wanagiri Hidden Hills",
      "Jatiluwih Rice Terraces",
      "Professional photo guide",
    ],
    included: [
      "Private transportation",
      "Photo guide assistance",
      "All ticket entrances",
      "Phone/camera tips",
      "Best time recommendations",
    ],
  },
];

export const featuredDestinations = [
  {
    name: "Ubud",
    description: "Cultural heart and artistic soul of Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "North Bali",
    description: "Serene waterfalls, temples & natural beauty",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "South Bali",
    description: "Stunning beaches, surf spots & clifftop views",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "East Bali",
    description: "Ancient temples, rice terraces & volcanic landscapes",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United States",
    rating: 5,
    comment:
      "An absolutely incredible experience! Our driver was knowledgeable, friendly, and made sure we saw all the hidden gems. The Ubud tour exceeded all expectations.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Marco Rossi",
    location: "Italy",
    rating: 5,
    comment:
      "The best way to explore Bali! Professional service, comfortable vehicle, and our guide's local insights made this trip unforgettable. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Emily Chen",
    location: "Singapore",
    rating: 5,
    comment:
      "Sunda Bali Tour made our family vacation perfect. The driver was patient with our kids and took us to amazing spots we would never have found on our own.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "James Anderson",
    location: "Australia",
    rating: 5,
    comment:
      "Exceptional service from start to finish. The sunset tour at Uluwatu was magical, and the Kecak dance was mesmerizing. Worth every penny!",
    image: "https://i.pravatar.cc/150?img=8",
  },
];
