"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/translations";
import { useUIStore } from "@/store/uiStore";

const navLinks = [
  { href: "/", label: "nav.home" },
  { href: "/tours", label: "nav.tours" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useUIStore();

  const whatsappNumber = "+62895402261536";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center space-x-3"
            >
              <Image
                src="/logo.jpeg"
                alt="Sunda Bali Tour Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                  Sunda Bali
                </h1>
                <p className="text-xs sm:text-sm font-body text-gray-600">
                  Tour & Travel
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {t(link.label, language)}
                </Button>
              </Link>
            ))}

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gradient-primary text-white ml-2">
                <Phone className="w-4 h-4 mr-2" />
                {t("nav.bookNow", language)}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-6 space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-gray-700"
                  >
                    {t(link.label, language)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full gradient-primary text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    {t("nav.bookNow", language)}
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
