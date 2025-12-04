"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Car,
  Sparkles,
  Map,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/tours";
import HorizontalScrollGallery from "@/components/sections/HorizontalScrollGallery";
import {
  MagneticButton,
  ParallaxImage,
} from "@/components/animations/AdvancedAnimations";
import { tourPackages } from "@/lib/data/tour-packages";
import { useState, useEffect } from "react";
import { t } from "@/lib/translations";
import { useUIStore } from "@/store/uiStore";

export default function Home() {
  const { language } = useUIStore();
  const whatsappNumber = "+62895402261536";

  // Transform tour packages for HorizontalScrollGallery
  const galleryDestinations = tourPackages.map((pkg) => ({
    name: pkg.name,
    description: pkg.description,
    image: pkg.image,
    slug: pkg.slug,
  }));

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&auto=format&fit=crop&q=80",
      title: t("hero.title1", language),
      subtitle: t("hero.subtitle1", language),
    },
    {
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&auto=format&fit=crop&q=80",
      title: t("hero.title2", language),
      subtitle: t("hero.subtitle2", language),
    },
    {
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&auto=format&fit=crop&q=80",
      title: t("hero.title3", language),
      subtitle: t("hero.subtitle3", language),
    },
    {
      image:
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1920&auto=format&fit=crop&q=80",
      title: t("hero.title4", language),
      subtitle: t("hero.subtitle4", language),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60 z-1" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] drop-shadow-2xl px-4">
                {heroSlides[currentSlide].title}
              </h1>

              <p
                className="text-lg sm:text-xl md:text-3xl text-white font-light max-w-3xl mx-auto drop-shadow-lg px-4"
                style={{ textShadow: "0 2px 15px rgba(0, 0, 0, 0.6)" }}
              >
                {heroSlides[currentSlide].subtitle}
              </p>

              <p
                className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md px-6"
                style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
              >
                {t("hero.description", language)}
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-6 sm:pt-8 pb-24 sm:pb-20 px-4 sm:px-0 w-full max-w-md sm:max-w-none sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <MagneticButton>
                    <Button
                      size="lg"
                      className="gradient-primary text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group w-full sm:w-auto min-h-14 active:scale-95 transition-transform"
                    >
                      {t("hero.bookWhatsApp", language)}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </a>
                <Link href="/tours" className="w-full sm:w-auto">
                  <MagneticButton>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto min-h-14 active:scale-95 transition-transform"
                    >
                      {t("hero.viewPackages", language)}
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/30 active:scale-90 transition-all duration-300 group touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/30 active:scale-90 transition-all duration-300 group touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentSlide
                  ? "w-8 sm:w-12 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60 active:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator - Hidden on mobile to avoid clutter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Animated Wave Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Wave */}
          <svg
            className="absolute top-0 left-0 w-full h-24 sm:h-32 text-primary/5"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              fill="currentColor"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>

          {/* Bottom Wave */}
          <svg
            className="absolute bottom-0 left-0 w-full h-24 sm:h-32 text-secondary/5"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              fill="currentColor"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>

          {/* Floating Circles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-40 left-20 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-full blur-2xl"
          />
        </div>

        {/* Decorative Geometric Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-secondary/20 rounded-full hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/5 rotate-45 hidden lg:block" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-0">
          <div className="text-center mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm sm:text-base font-bold tracking-wider uppercase shadow-md">
                {t("services.badge", language)}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight px-4"
            >
              {t("services.title", language)}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-6 font-body"
            >
              {t("services.description", language)}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <ServiceCard
                icon={Car}
                title={t("services.driver", language)}
                description={t("services.driverDesc", language)}
                delay={0}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ServiceCard
                icon={Map}
                title={t("services.itinerary", language)}
                description={t("services.itineraryDesc", language)}
                delay={0.1}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceCard
                icon={Sparkles}
                title={t("services.gems", language)}
                description={t("services.gemsDesc", language)}
                delay={0.2}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ServiceCard
                icon={Heart}
                title={t("services.airport", language)}
                description={t("services.airportDesc", language)}
                delay={0.3}
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12"
          >
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-700">
                {t("services.travelers", language)}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                100
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-700">
                {t("services.destinations", language)}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-700">
                {t("services.support", language)}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                2024
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-700">
                {t("services.satisfaction", language)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Gallery - Featured Destinations */}
      <HorizontalScrollGallery destinations={galleryDestinations} />

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Curved Wave Top */}
          <svg
            className="absolute -top-1 left-0 w-full h-20 sm:h-24 text-background"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              fill="currentColor"
              d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl"
          />

          {/* Decorative Stars/Sparkles */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />

          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-secondary/40"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold tracking-wider uppercase">
                {t("testimonials.badge", language)}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 bg-linear-to-r from-secondary via-foreground to-primary bg-clip-text text-transparent"
            >
              {t("testimonials.title", language)}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {t("testimonials.description", language)}
            </motion.p>
          </div>

          <div className="relative">
            {/* First Row - Moving Left to Right */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate testimonials 3 times for seamless loop */}
                {[...testimonials, ...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={`row1-${index}`}
                      className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
                    >
                      <TestimonialCard
                        name={testimonial.name}
                        location={testimonial.location}
                        rating={testimonial.rating}
                        comment={testimonial.comment}
                        image={testimonial.image}
                        delay={0}
                      />
                    </div>
                  )
                )}
              </motion.div>
            </div>

            {/* Second Row - Moving Right to Left */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate testimonials 3 times for seamless loop */}
                {[...testimonials, ...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={`row2-${index}`}
                      className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
                    >
                      <TestimonialCard
                        name={testimonial.name}
                        location={testimonial.location}
                        rating={testimonial.rating}
                        comment={testimonial.comment}
                        image={testimonial.image}
                        delay={0}
                      />
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 sm:mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-12"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                className="w-6 h-6 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">
                {t("testimonials.verified", language)}
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">
                {t("testimonials.rating", language)}
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="font-semibold">
                {t("testimonials.customers", language)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&auto=format&fit=crop&q=80"
            alt="Bali Paradise"
            speed={0.3}
          />
          {/* Multi-layer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 z-1" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)] z-1" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
          {/* Floating Shapes */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-lg"
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/20 rounded-full"
          />

          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wider uppercase border border-white/30">
                {t("cta.badge", language)}
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="text-center text-white space-y-6 sm:space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
              >
                {t("cta.title", language)}
                <br />
                <span className="text-secondary">
                  {t("cta.titleHighlight", language)}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/95 leading-relaxed"
              >
                {t("cta.description", language)}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagneticButton>
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-10 py-7 rounded-full shadow-2xl group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {t("cta.whatsapp", language)}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                  </MagneticButton>
                </a>

                <Link href="/tours">
                  <MagneticButton>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-10 py-7 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-primary rounded-full shadow-2xl transition-all duration-300"
                    >
                      {t("cta.explore", language)}
                      <ArrowRight className="ml-2 w-5 h-5 inline-block" />
                    </Button>
                  </MagneticButton>
                </Link>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/80"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {t("cta.instant", language)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {t("cta.free", language)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {t("cta.support247", language)}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
