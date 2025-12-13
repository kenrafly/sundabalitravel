"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    content: "+62 857-2433-6853",
    link: "https://wa.me/6285724336853",
  },
  {
    icon: Mail,
    title: "Email",
    content: "sundabalitour@gmail.com",
    link: "mailto:sundabalitour@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Ubud, Gianyar, Bali, Indonesia 80571",
    link: "https://maps.google.com",
  },
];

export default function ContactPage() {
  const whatsappNumber = "+6285724336853";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Unesco Heritage/Tanah Lot.png"
            alt="Contact Us"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Let's plan your perfect Bali adventure together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="block"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Contact & Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Ready to start planning your Bali adventure? Chat with us
                      directly on WhatsApp for instant responses and
                      personalized tour recommendations.
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            Why WhatsApp?
                          </h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>✓ Instant responses during business hours</li>
                            <li>✓ Share photos and discuss your preferences</li>
                            <li>✓ Easy booking and payment coordination</li>
                            <li>✓ Get real-time updates during your tour</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        type="button"
                        className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                        size="lg"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Chat on WhatsApp Now
                      </Button>
                    </a>

                    <div className="pt-6 border-t border-border space-y-4">
                      <h3 className="font-semibold">Other Contact Options</h3>

                      <div className="space-y-3">
                        <a
                          href={`tel:${whatsappNumber}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium">Call Us</p>
                            <p className="text-sm text-muted-foreground">
                              +62 857-2433-6853
                            </p>
                          </div>
                        </a>

                        <a
                          href="mailto:sundabalitour@gmail.com"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium">Email Us</p>
                            <p className="text-sm text-muted-foreground">
                              sundabalitour@gmail.com
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8 h-full">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                    Find Us Here
                  </h2>

                  <div className="relative w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.38838817774!2d115.17288673671873!3d-8.50946849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d738df48119%3A0x70af21a4f1929c7!2sUbud%2C%20Gianyar%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Office Hours:</strong>
                      <br />
                      Monday - Sunday: 8:00 AM - 8:00 PM
                      <br />
                      <em className="text-xs">
                        We're always available via WhatsApp 24/7
                      </em>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
