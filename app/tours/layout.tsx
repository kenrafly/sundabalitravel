import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages - Sunda Bali Tour",
  description:
    "Explore our curated tour packages featuring adventure, culture, beaches, and nature experiences across Bali.",
  openGraph: {
    title: "Tour Packages - Sunda Bali Tour",
    description:
      "Discover unforgettable Bali experiences with our custom tour packages",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
