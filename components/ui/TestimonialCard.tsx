"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  comment,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-2xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-8 space-y-4">
          {/* Rating */}
          <div className="flex space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic">
            "{comment}"
          </p>

          {/* User Info */}
          <div className="flex items-center space-x-3 pt-4 border-t border-border">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{name}</h4>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
