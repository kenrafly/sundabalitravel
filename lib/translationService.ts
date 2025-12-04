// Base English translations
export const baseTranslations: Record<string, string> = {
  // Navbar
  "nav.home": "Home",
  "nav.tours": "Tour Packages",
  "nav.about": "About Us",
  "nav.contact": "Contact",
  "nav.bookNow": "Book Now",

  // Hero
  "hero.title1": "Sunda Bali Tour",
  "hero.subtitle1": "Private Driver & Custom Tour Experience",
  "hero.title2": "Explore Paradise",
  "hero.subtitle2": "Discover Hidden Gems of Bali",
  "hero.title3": "Cultural Journey",
  "hero.subtitle3": "Experience Authentic Balinese Culture",
  "hero.title4": "Adventure Awaits",
  "hero.subtitle4": "Create Unforgettable Memories",
  "hero.description":
    "Where warm Sunda hospitality meets the enchanting beauty of Bali",
  "hero.bookWhatsApp": "Book Now via WhatsApp",
  "hero.viewPackages": "View Tour Packages",

  // Services
  "services.badge": "What We Offer",
  "services.title": "Our Premium Services",
  "services.description":
    "Experience Bali like never before with our carefully crafted services designed to make your journey truly unforgettable",
  "services.driver": "Private Driver",
  "services.driverDesc":
    "Comfortable air-conditioned vehicles with experienced, friendly English-speaking drivers",
  "services.itinerary": "Custom Itinerary",
  "services.itineraryDesc":
    "Create your perfect day - we'll take you wherever you want to go in Bali",
  "services.gems": "Hidden Gems",
  "services.gemsDesc":
    "Discover secret spots and local favorites that tourists rarely find",
  "services.airport": "Airport Transfer",
  "services.airportDesc":
    "Hassle-free pickup and drop-off service for a smooth start to your journey",
  "services.travelers": "Happy Travelers",
  "services.destinations": "Tour Packages",
  "services.support": "Support",
  "services.satisfaction": "Established",

  // Testimonials
  "testimonials.badge": "Testimonials",
  "testimonials.title": "What Travelers Say",
  "testimonials.description":
    "Join our growing family of travelers discovering authentic Bali experiences. Every journey with us is personal and memorable.",
  "testimonials.verified": "Verified Reviews",
  "testimonials.rating": "5.0/5 Rating",
  "testimonials.customers": "Growing Community",

  // CTA
  "cta.badge": "Start Your Journey",
  "cta.title": "Ready for Your",
  "cta.titleHighlight": "Bali Adventure?",
  "cta.description":
    "Let us create an unforgettable journey tailored just for you. Your perfect Bali experience starts here.",
  "cta.whatsapp": "Chat on WhatsApp",
  "cta.explore": "Explore Tours",
  "cta.instant": "Instant Confirmation",
  "cta.free": "Free Cancellation",
  "cta.support247": "24/7 Support",
};

// Cache for translated texts
const translationCache: Record<string, Record<string, string>> = {
  en: baseTranslations,
};

// Translate text using MyMemory Translation API (free, no auth required)
async function translateText(
  text: string,
  targetLang: string
): Promise<string> {
  if (targetLang === "en") return text;

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=en|${targetLang}`
    );
    const data = await response.json();

    if (data.responseStatus === 200 && data.responseData) {
      return data.responseData.translatedText;
    }
    return text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

// Get translated text with caching
export async function getTranslation(
  key: string,
  lang: string
): Promise<string> {
  // Return from cache if available
  if (translationCache[lang]?.[key]) {
    return translationCache[lang][key];
  }

  // If English, return base translation
  if (lang === "en") {
    return baseTranslations[key] || key;
  }

  // Initialize language cache if not exists
  if (!translationCache[lang]) {
    translationCache[lang] = {};
  }

  // Get base English text
  const baseText = baseTranslations[key];
  if (!baseText) {
    return key;
  }

  // Translate and cache
  const translated = await translateText(baseText, lang);
  translationCache[lang][key] = translated;

  return translated;
}

// Preload translations for a language
export async function preloadTranslations(lang: string): Promise<void> {
  if (lang === "en" || translationCache[lang]) return;

  translationCache[lang] = {};

  const keys = Object.keys(baseTranslations);
  const batchSize = 5; // Translate in small batches to avoid rate limits

  for (let i = 0; i < keys.length; i += batchSize) {
    const batch = keys.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (key) => {
        const baseText = baseTranslations[key];
        const translated = await translateText(baseText, lang);
        translationCache[lang][key] = translated;
      })
    );

    // Small delay between batches
    if (i + batchSize < keys.length) {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
}

// Synchronous translation function (uses cache or returns key)
export function t(key: string, lang: string = "en"): string {
  return translationCache[lang]?.[key] || baseTranslations[key] || key;
}

// Export cache for direct access if needed
export { translationCache };
