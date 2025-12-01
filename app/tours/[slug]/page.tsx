"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Star,
  ArrowLeft,
  Navigation,
  Calendar,
  Users,
  Info,
  MessageCircle,
  ChevronRight,
  Map as MapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { allDestinations, Destination } from "@/lib/data/destinations";
import { notFound } from "next/navigation";
import {
  MagneticButton,
  ScrollReveal,
  TextReveal,
} from "@/components/animations/AdvancedAnimations";

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DestinationPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [destination, setDestination] = useState(
    allDestinations.find((d) => d.slug === slug)
  );
  const whatsappNumber = "+6289540226153";

  useEffect(() => {
    const dest = allDestinations.find((d) => d.slug === slug);
    setDestination(dest);
    console.log("Loading destination:", slug, dest?.name);
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <Link href="/tours">
            <Button>Back to Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  console.log("Destination page loaded:", slug, destination.name);

  // Get related destinations (same region or category)
  const relatedDestinations = allDestinations
    .filter(
      (d) =>
        d.id !== destination.id &&
        (d.region === destination.region || d.category === destination.category)
    )
    .slice(0, 3);

  const handleBookNow = () => {
    const message = `Hi! I'm interested in visiting ${destination.name}. Can you help arrange a tour?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Moderate":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      case "Challenging":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      default:
        return "bg-gray-500/10 text-gray-700";
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
      {/* Hero Section with Image */}
      <section className="relative h-[80vh] min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          {/* Animated gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/tours">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Tours
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 pb-12"
          >
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Badge className="bg-primary/95 text-white backdrop-blur-md text-base px-4 py-2 shadow-xl">
                {getCategoryIcon(destination.category)} {destination.category}
              </Badge>
              <Badge className="bg-secondary/95 text-primary backdrop-blur-md text-base px-4 py-2 shadow-xl">
                📍 {destination.region}
              </Badge>
              <Badge
                className={`${getDifficultyColor(
                  destination.difficulty
                )} backdrop-blur-md text-base px-4 py-2 shadow-xl`}
              >
                {destination.difficulty}
              </Badge>
              {destination.featured && (
                <Badge className="bg-yellow-500/95 text-white backdrop-blur-md text-base px-4 py-2 shadow-xl">
                  <Star className="w-4 h-4 mr-1 fill-current" /> Featured
                </Badge>
              )}
            </motion.div>

            <TextReveal className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white drop-shadow-2xl">
              {destination.name}
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl text-white/95 font-light italic drop-shadow-lg"
            >
              {destination.nameIndonesian}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-lg"
            >
              {destination.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">{destination.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">{destination.bestTimeToVisit}</span>
            </div>
            {destination.price && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className="font-semibold text-primary">
                  {destination.price}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <ScrollReveal>
                <Card>
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Info className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-heading font-bold">
                        About This Destination
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {destination.descriptionIndonesian}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal>
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Star className="w-6 h-6 text-secondary" />
                      <h2 className="text-2xl font-heading font-bold">
                        Highlights
                      </h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-2xl flex-shrink-0">✨</span>
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Tips & Best Time */}
              <ScrollReveal>
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <MapIcon className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-heading font-bold">
                        Visitor Tips
                      </h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Best Time to Visit
                          </p>
                          <p className="text-muted-foreground">
                            {destination.bestTimeToVisit}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">⚡</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Difficulty Level
                          </p>
                          <p className="text-muted-foreground">
                            {destination.difficulty} - Suitable for most
                            visitors
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">🕐</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Recommended Duration
                          </p>
                          <p className="text-muted-foreground">
                            {destination.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <ScrollReveal>
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-6 space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-heading font-bold mb-2">
                          Ready to Visit?
                        </h3>
                        <p className="text-muted-foreground">
                          Let us arrange your perfect trip
                        </p>
                      </div>

                      {destination.price && (
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">
                            Starting from
                          </p>
                          <p className="text-3xl font-bold text-primary">
                            {destination.price}
                          </p>
                        </div>
                      )}

                      <MagneticButton>
                        <Button
                          onClick={handleBookNow}
                          className="w-full gradient-primary text-white text-lg py-6 group"
                          size="lg"
                        >
                          <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          Book via WhatsApp
                        </Button>
                      </MagneticButton>

                      <div className="space-y-3 pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">
                            Private or group tours available
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Navigation className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">
                            Hotel pickup & drop-off
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-lg">🎯</span>
                          <span className="text-muted-foreground">
                            Customizable itinerary
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-lg">💬</span>
                          <span className="text-muted-foreground">
                            English-speaking guide
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
                      <h4 className="font-semibold mb-3">
                        Need Help Planning?
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>📧 sundabalitour@gmail.com</p>
                        <p>📱 +62 895-4022-61536</p>
                        <p>🕐 Available 8 AM - 8 PM (Bali Time)</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
                  You Might Also Like
                </h2>
                <p className="text-lg text-muted-foreground">
                  More amazing destinations in {destination.region}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDestinations.map((related, index) => (
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
                        <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors line-clamp-1">
                          {related.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{related.duration}</span>
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
