"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Users,
  Award,
  Shield,
  Star,
  MapPin,
  Calendar,
  ThumbsUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScrollReveal,
  TextReveal,
  ParallaxImage,
  MagneticButton,
} from "@/components/animations/AdvancedAnimations";
import TiltCard from "@/components/ui/TiltCard";
import { useRef } from "react";
const stats = [
  { number: "100+", label: "Happy Travelers", icon: ThumbsUp },
  { number: "5+", label: "Expert Guides", icon: Users },
  { number: "50+", label: "Destinations", icon: MapPin },
  { number: "New", label: "Fresh & Passionate", icon: Calendar },
];

const values = [
  {
    icon: Heart,
    title: "Warm Hospitality",
    description:
      "Experience genuine Sunda warmth and care in every interaction",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Native guides with deep knowledge of Bali's culture and hidden gems",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional experiences every time",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Licensed, insured, and dedicated to your security and comfort",
    color: "from-emerald-500 to-teal-500",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Founded by a passionate Sundanese family with a dream to share Bali's authentic beauty with the world",
  },
  {
    year: "Early 2024",
    title: "First Steps",
    description:
      "Started with a small team of local guides who know Bali like the back of their hands",
  },
  {
    year: "Mid 2024",
    title: "Building Trust",
    description:
      "Welcomed our first travelers and received amazing feedback that fuels our passion every day",
  },
  {
    year: "Late 2024",
    title: "Growing Family",
    description:
      "Expanded our tour offerings and built partnerships with local communities across Bali",
  },
  {
    year: "Today",
    title: "Your Adventure Awaits",
    description:
      "Ready to create unforgettable experiences with fresh perspectives and genuine Sundanese hospitality",
  },
];

const gallery = [
  "/East Bali/Gate of Heaven.jpg",
  "/Unesco Heritage/Tanah Lot.png",
  "/Ubud A/Tirta Empul.jpg",
  "/South Bali/Uluwatu temple.webp",
  "/Lovina Dolphin Tour/Ulun Danu.jpg",
  "/Waterfall in Bali/Sekumpul waterfall.webp",
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [1, 0.8, 0.8, 0.6]
  );
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&auto=format&fit=crop&q=80"
            alt="About Sunda Bali Tour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-primary/30" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-sm tracking-wider uppercase">
                ✨ Your Fresh Bali Adventure Starts Here
              </span>
            </motion.div>

            <div className="relative">
              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-6 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We Are
                <br />
                <span className="bg-clip-text text-white bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                  Sunda Bali
                </span>
              </motion.h1>

              <motion.div
                className="absolute -left-8 top-0 w-2 h-full bg-linear-to-b from-primary to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.div
                className="absolute -right-8 top-0 w-2 h-full bg-linear-to-b from-secondary to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Where Sunda warmth meets Balinese beauty,
              <br />
              bringing you authentic experiences with fresh passion
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="text-2xl sm:text-3xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-2 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                    Our Story
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mt-4 mb-6">
                    Crafting
                    <br />
                    <span className="text-primary">Unforgettable</span>
                    <br />
                    Journeys
                  </h2>
                </motion.div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Sunda Bali Tour was born from a{" "}
                    <span className="text-foreground font-semibold">
                      simple passion
                    </span>
                    : sharing the incredible beauty and rich culture of Bali
                    with travelers from around the world, while bringing the
                    warmth and hospitality of Sunda traditions.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Founded by a Sundanese family who fell in love with Bali, we
                    understand what it means to be both a{" "}
                    <span className="text-foreground font-semibold">
                      local and a traveler
                    </span>
                    . This unique perspective allows us to create experiences
                    that go beyond typical tourist routes, revealing the
                    authentic soul of Bali.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Every tour we offer is crafted with care, blending Sundanese
                    hospitality with deep knowledge of Bali's hidden treasures.
                    We don't just show you places; we help you{" "}
                    <span className="text-foreground font-semibold">
                      feel the spirit
                    </span>{" "}
                    of the island.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-4 pt-4"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        4.9/5
                      </span>{" "}
                      from 500+ reviews
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop"
                    alt="Our Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">
                          TripAdvisor Excellence
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Awarded 2023 & 2024
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid Style */}
      <section className="relative py-24 sm:py-32 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 sm:mb-20">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm tracking-widest uppercase"
              >
                What Drives Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mt-4 mb-6"
              >
                Our Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                The principles that guide everything we do, every single day
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <CardContent className="p-8 sm:p-10 relative">
                      {/* Icon with Animated Border */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6">
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-linear-to-br ${value.color} opacity-20 blur-xl`}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <div
                          className={`relative w-full h-full rounded-2xl bg-linear-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                        >
                          <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>

                      {/* Decorative Corner Element */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                    Our Story
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mt-4 mb-6">
                    Crafting
                    <br />
                    <span className="text-primary">Unforgettable</span>
                    <br />
                    Journeys
                  </h2>
                </motion.div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Sunda Bali Tour was born from a{" "}
                    <span className="text-foreground font-semibold">
                      simple passion
                    </span>
                    : sharing the incredible beauty and rich culture of Bali
                    with travelers from around the world, while bringing the
                    warmth and hospitality of Sunda traditions.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Founded by a Sundanese family who fell in love with Bali, we
                    understand what it means to be both a{" "}
                    <span className="text-foreground font-semibold">
                      local and a traveler
                    </span>
                    . This unique perspective allows us to create experiences
                    that go beyond typical tourist routes, revealing the
                    authentic soul of Bali.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Every tour we offer is crafted with care, blending Sundanese
                    hospitality with deep knowledge of Bali's hidden treasures.
                    We don't just show you places; we help you{" "}
                    <span className="text-foreground font-semibold">
                      feel the spirit
                    </span>{" "}
                    of the island.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-4 pt-4"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        4.9/5
                      </span>{" "}
                      from 500+ reviews
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop"
                    alt="Our Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">
                          TripAdvisor Excellence
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Awarded 2023 & 2024
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mt-4 mb-6">
              A Story of Growth
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Bali's trusted tour partner
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-12 md:pl-16 pb-16 last:pb-0"
              >
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary to-transparent last:to-primary" />

                {/* Animated Dot */}
                <motion.div
                  className="absolute left-4 md:left-6 top-2 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                <Card className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 ml-4">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-primary to-secondary text-black text-lg font-bold tracking-wider shadow-lg">
                        {item.year}
                      </span>
                      <div className="hidden sm:block w-16 h-1 bg-linear-to-r from-primary/50 to-transparent rounded self-center" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Masonry Style */}
      <section className="relative py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Gallery
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mt-4 mb-6">
              Moments We've Captured
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every photograph tells a story of joy, adventure, and discovery
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 || index === 4
                    ? "md:col-span-2 md:row-span-2 h-96 sm:h-[500px]"
                    : "h-64 sm:h-80"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="space-y-2"
                    >
                      <p className="text-white font-semibold text-lg">
                        Bali Adventure {index + 1}
                      </p>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Bali, Indonesia</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-foreground shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/East Bali/Gate of Heaven.jpg"
            alt="Bali scenery"
            fill
            className="object-cover"
          />
        </div>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              Ready to Create Your
              <br />
              <span className="text-secondary">Bali Story?</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Be part of our journey as we create authentic Bali experiences
              with genuine care and passion
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all"
                >
                  Explore Tours
                </motion.button>
              </MagneticButton>
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
                >
                  Contact Us
                </motion.button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
