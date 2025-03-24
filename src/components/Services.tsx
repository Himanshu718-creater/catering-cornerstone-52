
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { UtensilsCrossed, Users, Cake, Wine, Calendar, Sparkles } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: delay * 0.1 }}
      className="bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow border border-catering-100 flex flex-col h-full"
    >
      <div className="p-3 bg-catering-50 rounded-sm w-12 h-12 flex items-center justify-center text-catering-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-3 text-catering-900">{title}</h3>
      <p className="text-catering-700 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <UtensilsCrossed size={24} />,
      title: "Corporate Events",
      description:
        "Impress your clients and team with our premium corporate catering services, designed to elevate your business functions with sophisticated cuisine.",
      delay: 1,
    },
    {
      icon: <Cake size={24} />,
      title: "Wedding Celebrations",
      description:
        "Make your special day unforgettable with our bespoke wedding menus, crafted with love and attention to every detail of your culinary vision.",
      delay: 2,
    },
    {
      icon: <Users size={24} />,
      title: "Private Parties",
      description:
        "Transform your gathering into an exclusive culinary event with our personalized private party catering, tailored to your specific tastes.",
      delay: 3,
    },
    {
      icon: <Wine size={24} />,
      title: "Fine Dining Experiences",
      description:
        "Experience restaurant-quality gourmet cuisine in the comfort of your chosen venue with our fine dining catering services.",
      delay: 4,
    },
    {
      icon: <Calendar size={24} />,
      title: "Seasonal Events",
      description:
        "Celebrate the seasons with specially curated menus that highlight the finest and freshest ingredients each season has to offer.",
      delay: 5,
    },
    {
      icon: <Sparkles size={24} />,
      title: "Bespoke Culinary Services",
      description:
        "Work directly with our executive chef to create a completely custom menu for your unique event requirements and dietary preferences.",
      delay: 6,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-wider text-catering-600 text-sm mb-3 font-medium"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-catering-900 mb-4"
          >
            Exceptional Catering for Every Occasion
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "48px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-catering-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-catering-700"
          >
            From intimate gatherings to grand celebrations, our diverse catering services are designed to create memorable culinary experiences tailored to your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
