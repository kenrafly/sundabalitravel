"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Search,
  Filter,
  ChevronRight,
  Star,
  Compass,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { tourPackages } from "@/lib/data/tour-packages";
import {
  MagneticButton,
  ScrollReveal,
  TextReveal,
} from "@/components/animations/AdvancedAnimations";

const categories = [
  "All",
  "Beach",
  "Waterfall",
  "Sunset",
  "Activity",
  "Culture",
  "Nature",
  "Viewpoint",
  "Sunrise",
  "Wildlife",
];
const regions = [
  "All",
  "South Bali",
  "North Bali",
  "East Bali",
  "Central Bali",
  "West Bali",
];

// Lazy Loading Card Component
interface LazyCardProps {
  pkg: any;
  index: number;
  onBookNow: (name: string) => void;
  getCategoryIcon: (category: string) => string;
  getDifficultyColor: (difficulty: string) => string;
}

function LazyTourCard({
  pkg,
  index,
  onBookNow,
  getCategoryIcon,
  getDifficultyColor,
}: LazyCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {isVisible ? (
        <Link href={`/tours/${pkg.slug}`} className="block h-full">
          <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group border hover:border-primary/50 bg-card cursor-pointer">
            <div className="relative h-80 overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-primary text-white border-0 shadow-lg">
                    {getCategoryIcon(pkg.category)} {pkg.category}
                  </Badge>
                </motion.div>
                {pkg.featured && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge className="bg-secondary text-primary border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Featured
                    </Badge>
                  </motion.div>
                )}
              </div>

              {/* Region Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-black text-white border-white/30 shadow-lg">
                  📍 {pkg.region}
                </Badge>
              </div>

              {/* Difficulty Badge */}
              <div className="absolute bottom-4 left-4">
                <Badge
                  className={`${getDifficultyColor(
                    pkg.difficulty
                  )} border shadow-lg`}
                >
                  {pkg.difficulty}
                </Badge>
              </div>
            </div>

            <CardContent className="p-5 space-y-3">
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Tour Package • {pkg.destinations.length} Destinations
                </p>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {pkg.description}
              </p>

              {/* Destinations List */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Includes:
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {pkg.destinations
                    .slice(0, 3)
                    .map((dest: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="line-clamp-1">{dest}</span>
                      </li>
                    ))}
                  {pkg.destinations.length > 3 && (
                    <li className="text-primary font-medium">
                      +{pkg.destinations.length - 3} more destinations
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="line-clamp-1 font-medium">
                    {pkg.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-primary whitespace-nowrap text-lg">
                    {pkg.id === "nusa-penida-west-snorkeling"
                      ? `IDR ${pkg.price.amount.toLocaleString("id-ID")}`
                      : `$${pkg.price.amount}`}
                  </span>
                  <p className="text-[10px] text-muted-foreground">
                    {pkg.price.perPerson ? "/person" : "total"}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="default"
                  className="flex-1 group-hover:border-primary group-hover:text-primary transition-all text-sm font-semibold rounded-full!"
                  onClick={(e) => e.preventDefault()}
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="default"
                  className="gradient-primary text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all px-6 rounded-full!"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onBookNow(pkg.name);
                  }}
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        // Placeholder while loading
        <Card className="overflow-hidden h-full animate-pulse">
          <div className="relative h-80 bg-muted" />
          <CardContent className="p-5 space-y-3">
            <div className="h-6 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-16 bg-muted rounded" />
            <div className="flex gap-2">
              <div className="h-9 bg-muted rounded flex-1" />
              <div className="h-9 bg-muted rounded flex-1" />
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const whatsappNumber = "+6285724336853";

  // Filter packages
  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesCategory =
      selectedCategory === "All" || pkg.category === selectedCategory;
    const matchesRegion =
      selectedRegion === "All" || pkg.region === selectedRegion;
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destinations.some((dest) =>
        dest.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesRegion && matchesSearch;
  });

  const handleBookNow = (destName: string) => {
    const message = `Hi! I'm interested in visiting "${destName}". Could you help arrange a tour?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Moderate":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "Challenging":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      Beach: "🏖️",
      Waterfall: "💧",
      Sunset: "🌅",
      Activity: "🎯",
      Culture: "🏛️",
      Nature: "🌿",
      Viewpoint: "📸",
      Sunrise: "🌄",
      Wildlife: "🦜",
    };
    return icons[category] || "📍";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&auto=format&fit=crop&q=80"
            alt="Bali Tours"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <TextReveal className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white">
              Explore Bali Tour Packages
            </TextReveal>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Curated multi-destination tours covering all of Bali&apos;s
              highlights
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Badge className="bg-primary/90 backdrop-blur-sm text-white text-base px-4 py-2">
                🎯 All-Inclusive Packages
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white text-base px-4 py-2">
                🚗 Private Transport
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-4 border-b border-border sticky top-20 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar and Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 w-full"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tour packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-5 text-base w-full"
                />
              </div>
            </motion.div>

            {/* Filter Toggle Button */}
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full sm:w-auto gap-2 py-5"
            >
              <Filter className="w-4 h-4" />
              Filters
              {(selectedCategory !== "All" || selectedRegion !== "All") && (
                <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-white text-xs">
                  {(selectedCategory !== "All" ? 1 : 0) +
                    (selectedRegion !== "All" ? 1 : 0)}
                </Badge>
              )}
            </Button>
          </div>

          {/* Collapsible Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4 overflow-hidden"
            >
              {/* Category Filters */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Category:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      className={
                        selectedCategory === category
                          ? "gradient-primary text-white"
                          : ""
                      }
                    >
                      {category !== "All" && getCategoryIcon(category)}{" "}
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Region Filters */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Region:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      variant={
                        selectedRegion === region ? "default" : "outline"
                      }
                      size="sm"
                      className={
                        selectedRegion === region
                          ? "bg-secondary text-primary hover:bg-secondary/90"
                          : ""
                      }
                    >
                      {region === "All"
                        ? "🗺️"
                        : region === "South Bali"
                        ? "🏖️"
                        : region === "North Bali"
                        ? "⛰️"
                        : region === "East Bali"
                        ? "🌄"
                        : region === "Central Bali"
                        ? "🌾"
                        : "🌴"}{" "}
                      {region}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== "All" || selectedRegion !== "All") && (
                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedRegion("All");
                    }}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 md:py-16 bg-background min-h-[600px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredPackages.length}
              </span>{" "}
              tour package{filteredPackages.length !== 1 ? "s" : ""}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredPackages.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${selectedRegion}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredPackages.map((pkg, index) => (
                  <LazyTourCard
                    key={pkg.id}
                    pkg={pkg}
                    index={index}
                    onBookNow={handleBookNow}
                    getCategoryIcon={getCategoryIcon}
                    getDifficultyColor={getDifficultyColor}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <Compass className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl text-muted-foreground mb-2">
                  No tour packages found
                </p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
                  Can&apos;t Find What You&apos;re Looking For?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer fully customizable private tours. Tell us your dream
                  itinerary and we&apos;ll make it happen!
                </p>
                <MagneticButton>
                  <Button
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          "Hi! I'd like to create a custom tour itinerary."
                        )}`,
                        "_blank"
                      )
                    }
                    className="gradient-primary text-white text-lg px-8 py-6"
                    size="lg"
                  >
                    Create Custom Tour
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </MagneticButton>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
