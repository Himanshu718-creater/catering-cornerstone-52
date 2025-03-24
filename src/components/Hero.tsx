
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const imageUrls = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070"
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 w-full h-full">
        {imageUrls.map((url, index) => (
          <div
            key={url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={url}
              alt={`Catering presentation ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-white"
        >
          <div className="mb-4 inline-block">
            <span className="inline-block py-1 px-3 border border-white/30 text-xs tracking-wider backdrop-blur-sm">
              PREMIUM CATERING SERVICES
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
            Exquisite Culinary Experiences Tailored to Your Taste
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Elevate your events with our bespoke catering services. We craft memorable dining experiences with attention to detail and exceptional flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-catering-900 hover:bg-white/90 px-8 py-6 rounded-sm text-sm"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book a Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-sm text-sm"
              onClick={() => {
                const menuSection = document.getElementById("menu");
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Our Menu
            </Button>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-wider mb-2">SCROLL</span>
            <ChevronDown className="animate-bounce" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
