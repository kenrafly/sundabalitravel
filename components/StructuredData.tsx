export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Sunda Bali Tour",
    description:
      "Private driver and custom tour experience in Bali with warm Sunda hospitality",
    url: "https://www.sundabalitour.com",
    telephone: "+6285724336853",
    email: "sundabalitour@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ubud",
      addressLocality: "Gianyar",
      addressRegion: "Bali",
      postalCode: "80571",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.5069",
      longitude: "115.2625",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "$$",
    areaServed: "Bali, Indonesia",
    sameAs: [
      "https://facebook.com/sundabalitour",
      "https://instagram.com/sundabalitour",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
