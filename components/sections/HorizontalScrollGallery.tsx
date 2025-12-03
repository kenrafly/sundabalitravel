"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUIStore } from "@/store/uiStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Destination {
  name: string;
  description: string;
  image: string;
  slug?: string;
}

interface HorizontalScrollGalleryProps {
  destinations: Destination[];
}

export default function HorizontalScrollGallery({
  destinations,
}: HorizontalScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setCursorVariant = useUIStore((state) => state.setCursorVariant);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!container || !scrollContainer) return;

    let ctx = gsap.context(() => {
      let getRatio = (el: HTMLElement) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      const scrollWidth = scrollContainer.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(scrollContainer, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [destinations]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      <div className="absolute top-24 sm:top-28 left-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-foreground"
        >
          Tour Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mt-2"
        >
          Scroll to explore {destinations.length} packages
        </motion.p>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex items-center h-full pl-8 pt-32"
      >
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.name}
            className="flex-shrink-0 w-[70vw] md:w-[50vw] h-[70vh] mx-6 relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-secondary text-sm md:text-base font-semibold tracking-widest uppercase mb-2 block">
                    Package {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                    {destination.name}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 max-w-md">
                    {destination.description}
                  </p>
                </motion.div>

                {/* Explore Button */}
                <Link
                  href={
                    destination.slug ? `/tours/${destination.slug}` : "/tours"
                  }
                >
                  <motion.button
                    className="mt-6 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {destination.slug ? "View Package" : "Explore"}
                  </motion.button>
                </Link>
              </div>

              {/* Number Indicator */}
              <div className="absolute top-8 right-8 text-8xl font-heading font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Motion Blur Effect on Scroll */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(10, 77, 60, 0.1) 50%, transparent 100%)",
                opacity: 0,
              }}
              whileInView={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.div>
        ))}

        {/* End Spacer */}
        <div className="flex-shrink-0 w-32" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-12 flex items-center gap-4">
        <span className="text-sm text-muted-foreground uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          className="w-12 h-12 border-2 border-muted-foreground rounded-full flex items-center justify-center"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
