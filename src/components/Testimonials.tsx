
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      quote:
        "The culinary team exceeded our expectations at every turn. The presentation was stunning, and the flavors were exceptional. Our wedding guests are still talking about the food months later!",
      author: "Sarah & Michael Johnson",
      role: "Wedding Clients",
      rating: 5,
    },
    {
      quote:
        "We've hired Culinary for our corporate events for three years running because they consistently deliver excellence. Their attention to detail and ability to accommodate our diverse dietary needs has made them our exclusive catering partner.",
      author: "James Richardson",
      role: "Director of Events, TechGlobe Inc.",
      rating: 5,
    },
    {
      quote:
        "From planning to execution, the Culinary team was professional, creative, and attentive. Their menu suggestions perfectly matched our vision, and the service was impeccable. They truly made our anniversary celebration special.",
      author: "Elena Morales",
      role: "Private Event Client",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleSlideChange = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-catering-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 blur-sm"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1457301353672-324d6d14f471?q=80&w=1974')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-wider text-catering-600 text-sm mb-3 font-medium">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-catering-900 mb-6">
            What Our Clients Say
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "48px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-catering-600 mx-auto"
          ></motion.div>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative h-[340px] md:h-[280px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full max-w-3xl mx-auto text-center px-6"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-catering-800 mb-8 italic">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-serif text-lg text-catering-900 font-medium">
                    {testimonials[current].author}
                  </p>
                  <p className="text-catering-600 text-sm">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === current ? "bg-catering-800" : "bg-catering-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-catering-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-catering-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
