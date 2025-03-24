
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    "Locally sourced, seasonal ingredients",
    "Customized menus for every event",
    "Professionally trained culinary team",
    "Attentive, seamless service",
    "Sustainable practices and eco-friendly options",
    "Attention to every culinary detail",
  ];

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
            ref={ref}
          >
            <div className="relative z-10 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
                alt="Chef preparing food"
                className="w-full h-[500px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-catering-50 rounded-sm z-0"></div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <p className="uppercase tracking-wider text-catering-600 text-sm mb-3 font-medium">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-catering-900 mb-6">
                Crafting Culinary Experiences Since 2010
              </h2>
              <div className="h-[2px] w-12 bg-catering-600 mb-6"></div>
              <p className="text-catering-700 mb-6 leading-relaxed">
                Founded with a passion for exceptional food and memorable events, Culinary has grown from a small family business to one of the region's premier catering services.
              </p>
              <p className="text-catering-700 mb-8 leading-relaxed">
                Our Executive Chef brings over 20 years of experience from renowned restaurants around the world. Together with our skilled team, we craft bespoke culinary experiences that delight the senses and exceed expectations.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-catering-900 mb-4">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-start space-x-2"
                    >
                      <Check className="text-catering-600 min-w-4 mt-0.5" size={18} />
                      <span className="text-catering-700">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-catering-900 mb-2">James Anderson</h3>
                <p className="text-catering-600 italic">Executive Chef & Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
