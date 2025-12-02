"use client";

import { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  allDestinations,
} from "@/lib/data/destinations";
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
];
const regions = ["All", "South Bali", "North Bali"];
const ITEMS_PER_PAGE = 8;

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const whatsappNumber = "+62895402261536";

  // Filter destinations
  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === "All" || dest.category === selectedCategory;
    const matchesRegion =
      selectedRegion === "All" || dest.region === selectedRegion;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.nameIndonesian.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedDestinations = filteredDestinations.slice(
    startIndex,
    endIndex
  );

  // Handle filter changes - reset page
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedCategory, selectedRegion, searchQuery]);

  // Scroll to top when page changes with loading simulation
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setIsLoading(true);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  };

  const goToPage = (page: number) => {
    handlePageChange(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show

    if (totalPages <= showPages) {
      // Show all pages if total is less than showPages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      // Calculate range around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("...");
      }

      // Add pages around current page
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push("...");
      }

      // Show last page
      pages.push(totalPages);
    }

    return pages;
  };

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
    };
    return icons[category] || "📍";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
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
              Discover Bali&apos;s Wonders
            </TextReveal>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              50+ carefully curated destinations across South and North Bali
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Badge className="bg-primary/90 backdrop-blur-sm text-white text-base px-4 py-2">
                🏖️ Pristine Beaches
              </Badge>
              <Badge className="bg-secondary/90 backdrop-blur-sm text-white  text-base px-4 py-2">
                💧 Stunning Waterfalls
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white text-base px-4 py-2">
                🌅 Sunset Views
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-4 border-b border-border sticky top-20 z-40 backdrop-blur-md bg-background/95 shadow-sm">
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
                  placeholder="Search destinations..."
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
                        : "⛰️"}{" "}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <Card
                    key={`skeleton-${index}`}
                    className="overflow-hidden h-full"
                  >
                    <div className="relative h-56 bg-muted animate-pulse" />
                    <CardContent className="p-5 space-y-3">
                      <div className="h-6 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                      <div className="h-16 bg-muted rounded animate-pulse" />
                      <div className="flex gap-2">
                        <div className="h-9 bg-muted rounded animate-pulse flex-1" />
                        <div className="h-9 bg-muted rounded animate-pulse flex-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : paginatedDestinations.length > 0 ? (
                paginatedDestinations.map((destination) => (
                  <ScrollReveal key={destination.id}>
                    <Link
                      href={`/tours/${destination.slug}`}
                      className="block h-full"
                    >
                      <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group border hover:border-primary/50 bg-card cursor-pointer">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Badges */}
                          <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge className="bg-primary text-white border-0 shadow-lg">
                                {getCategoryIcon(destination.category)}{" "}
                                {destination.category}
                              </Badge>
                            </motion.div>
                            {destination.featured && (
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge className="bg-secondary text-primary border-0 shadow-lg">
                                  <Star className="w-3 h-3 mr-1 fill-current" />{" "}
                                  Featured
                                </Badge>
                              </motion.div>
                            )}
                          </div>

                          {/* Region Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-black text-white border-white/30 shadow-lg">
                              📍 {destination.region}
                            </Badge>
                          </div>

                          {/* Difficulty Badge */}
                          <div className="absolute bottom-4 left-4">
                            <Badge
                              className={`${getDifficultyColor(
                                destination.difficulty
                              )} border shadow-lg`}
                            >
                              {destination.difficulty}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-6 space-y-4">
                          <div>
                            <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
                              {destination.name}
                            </h3>
                            <p className="text-sm text-muted-foreground italic line-clamp-1">
                              {destination.nameIndonesian}
                            </p>
                          </div>

                          <p className="text-sm text-muted-foreground line-clamp-3 min-h-[60px] leading-relaxed">
                            {destination.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-muted-foreground pt-3 border-t border-border/50">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="line-clamp-1 font-medium">
                                {destination.duration}
                              </span>
                            </div>
                            {destination.price && (
                              <span className="font-bold text-primary whitespace-nowrap ml-2 text-base">
                                {destination.price}
                              </span>
                            )}
                          </div>

                          <div className="flex gap-3 pt-2">
                            <Button
                              variant="outline"
                              size="default"
                              className="flex-1 group-hover:border-primary group-hover:text-primary transition-all text-sm font-semibold !rounded-full"
                              onClick={(e) => e.preventDefault()}
                            >
                              View Details
                              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                              size="default"
                              className="gradient-primary text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all px-6 !rounded-full"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleBookNow(destination.name);
                              }}
                            >
                              Book Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollReveal>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <Compass className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl text-muted-foreground mb-2">
                    No destinations found
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {!isLoading && paginatedDestinations.length > 0 && totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 space-y-6"
            >
              {/* Page Info */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {startIndex + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-foreground">
                    {Math.min(endIndex, filteredDestinations.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-foreground">
                    {filteredDestinations.length}
                  </span>{" "}
                  destinations
                </p>
              </div>

              {/* Pagination Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {/* First Page */}
                <Button
                  onClick={() => goToPage(1)}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 p-0"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </Button>

                {/* Previous Page */}
                <Button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 text-muted-foreground"
                    >
                      ...
                    </span>
                  ) : (
                    <Button
                      key={page}
                      onClick={() => goToPage(page as number)}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className={`h-9 w-9 p-0 ${
                        currentPage === page
                          ? "gradient-primary text-white"
                          : ""
                      }`}
                    >
                      {page}
                    </Button>
                  )
                )}

                {/* Next Page */}
                <Button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Last Page */}
                <Button
                  onClick={() => goToPage(totalPages)}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 p-0"
                >
                  <ChevronsRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Mobile Page Selector */}
              <div className="flex items-center justify-center gap-3 md:hidden">
                <span className="text-sm text-muted-foreground">Page</span>
                <select
                  value={currentPage}
                  onChange={(e) => goToPage(Number(e.target.value))}
                  className="px-3 py-1 rounded-md border border-border bg-background text-foreground text-sm"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <option key={page} value={page}>
                        {page}
                      </option>
                    )
                  )}
                </select>
                <span className="text-sm text-muted-foreground">
                  of {totalPages}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
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
