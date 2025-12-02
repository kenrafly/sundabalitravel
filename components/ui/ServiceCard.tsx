"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="group h-full"
    >
      <Card className="h-full relative overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-500 bg-white shadow-lg hover:shadow-2xl">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-xl" />
        </div>

        <CardContent className="relative p-8 sm:p-10 flex flex-col items-center text-center space-y-5 sm:space-y-6">
          {/* Icon container with better colors */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative w-20 h-20 sm:w-24 sm:h-24"
          >
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Icon background with solid dark colors */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] group-hover:shadow-[0_15px_40px_0_rgba(0,0,0,0.35)] transition-all duration-500 flex items-center justify-center border-2 border-gray-700 group-hover:border-gray-600">
              <Icon
                className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 group-hover:text-gray-700 text-base sm:text-lg leading-relaxed transition-colors duration-300 font-body">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
