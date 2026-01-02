"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Star,
  ArrowLeft,
  Calendar,
  Users,
  MessageCircle,
  ChevronRight,
  Check,
  X,
  DollarSign,
  MapPin,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tourPackages } from "@/lib/data/tour-packages";
import {
  MagneticButton,
  ScrollReveal,
  TextReveal,
} from "@/components/animations/AdvancedAnimations";

export default function PackageDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const pkg = tourPackages.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!pkg) {
    notFound();
  }

  const handleBookNow = () => {
    const queryParams = new URLSearchParams({
      tourName: pkg.name,
      tourId: pkg.id,
      basePrice: pkg.price.amount.toString(),
    });
    window.location.href = `/booking?${queryParams.toString()}`;
  };

  // Get related packages (same region or category)
  const relatedPackages = tourPackages
    .filter(
      (p) =>
        p.id !== pkg.id &&
        (p.region === pkg.region || p.category === pkg.category)
    )
    .slice(0, 3);

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
      {/* Hero Section with Gallery */}
      <section className="relative min-h-[85vh] overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link href="/tours">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Tours
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Image Gallery */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={pkg.gallery[selectedImage]}
                  alt={`${pkg.name} - Image ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {pkg.gallery.length}
                </div>
              </motion.div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {pkg.gallery.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-primary scale-105"
                        : "hover:ring-2 ring-primary/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right - Package Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-white text-sm px-3 py-1">
                    {getCategoryIcon(pkg.category)} {pkg.category}
                  </Badge>
                  <Badge className="bg-secondary text-primary text-sm px-3 py-1">
                    📍 {pkg.region}
                  </Badge>
                  <Badge
                    className={`${getDifficultyColor(
                      pkg.difficulty
                    )} text-sm px-3 py-1`}
                  >
                    {pkg.difficulty}
                  </Badge>
                  {pkg.featured && (
                    <Badge className="bg-yellow-500 text-white text-sm px-3 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Featured
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-2">
                    {pkg.name}
                  </h1>
                  <p className="text-xl text-muted-foreground italic">
                    {pkg.nameIndonesian}
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
                  {pkg.descriptionIndonesian}
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Best Time</p>
                      <p className="font-semibold text-sm">
                        {pkg.bestTimeToVisit}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Destinations
                      </p>
                      <p className="font-semibold">
                        {pkg.destinations.length} Places
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Starting</p>
                      <p className="font-semibold text-primary">
                        {pkg.id === 'nusa-penida-west-snorkeling' ? `IDR ${pkg.price.amount.toLocaleString('id-ID')}` : `$${pkg.price.amount}`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Destinations Included */}
              <ScrollReveal>
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-primary" />
                      <h2 className="text-3xl font-heading font-bold">
                        Destinations Included
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.destinations.map((dest, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <span className="text-2xl shrink-0">
                            {index + 1}.
                          </span>
                          <span className="font-medium text-foreground">
                            {dest}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Highlights */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <ScrollReveal>
                  <Card>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Star className="w-6 h-6 text-secondary fill-secondary" />
                        <h2 className="text-3xl font-heading font-bold">
                          Tour Highlights
                        </h2>
                      </div>
                      <ul className="space-y-3">
                        {pkg.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-2xl shrink-0">✨</span>
                            <span className="text-lg text-muted-foreground">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}

              {/* What's Included / Excluded */}
              <ScrollReveal>
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Included */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Check className="w-6 h-6 text-green-600" />
                          <h3 className="text-2xl font-heading font-bold">
                            What&apos;s Included
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {pkg.included.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Excluded */}
                      {pkg.excluded && pkg.excluded.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <X className="w-6 h-6 text-red-600" />
                            <h3 className="text-2xl font-heading font-bold">
                              What&apos;s Excluded
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {pkg.excluded.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Important Information */}
              <ScrollReveal>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-heading font-bold mb-4">
                      Important Information
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        • All times are approximate and may vary based on
                        traffic and weather conditions
                      </p>
                      <p>
                        • Hotel pickup and drop-off included from main tourist
                        areas
                      </p>
                      <p>• Please wear comfortable clothing and shoes</p>
                      <p>• Bring sunscreen, hat, and swimwear if applicable</p>
                      <p>• Available for solo travelers and groups</p>
                      <p>
                        • Cancellation policy: Rp 200,000 per person
                        cancellation charge applies
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <ScrollReveal>
                  <Card className="border-2 border-primary/20 shadow-xl">
                    <CardContent className="p-6 space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-heading font-bold mb-2">
                          Tour Pricing
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Starting from
                        </p>
                        <div className="mt-4">
                          <span className="text-5xl font-bold text-primary">
                            {pkg.id === 'nusa-penida-west-snorkeling' ? `IDR ${pkg.price.amount.toLocaleString('id-ID')}` : `$${pkg.price.amount}`}
                          </span>
                          <p className="text-sm text-muted-foreground mt-2">
                            per person
                          </p>
                        </div>
                      </div>

                      <MagneticButton>
                        <Button
                          onClick={handleBookNow}
                          className="w-full gradient-primary text-white text-lg py-6 group"
                          size="lg"
                        >
                          <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          Book Now
                        </Button>
                      </MagneticButton>

                      <div className="space-y-3 pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">
                            Private or group tours
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Navigation className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">
                            Hotel pickup & drop-off
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">
                            Professional guide
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">
                            Cancellation: Rp 200k/person
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* Contact Info */}
                <ScrollReveal>
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <h4 className="font-semibold mb-3">Need Help?</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <span>📧</span> sundabalitour@gmail.com
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📱</span> +62 857-2433-6853
                        </p>
                        <p className="flex items-center gap-2">
                          <span>🕐</span> 8 AM - 8 PM (Bali Time)
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
                  You Might Also Like
                </h2>
                <p className="text-lg text-muted-foreground">
                  More amazing packages in {pkg.region}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((related) => (
                <ScrollReveal key={related.id}>
                  <Link href={`/tours/${related.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary/90 backdrop-blur-sm">
                            {getCategoryIcon(related.category)}{" "}
                            {related.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5 space-y-3">
                        <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {related.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-sm text-muted-foreground">
                            <span className="font-bold text-primary text-lg">
                              ${related.price.amount}
                            </span>
                            {related.price.perPerson && " /person"}
                          </div>
                          <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
