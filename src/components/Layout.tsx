
import React, { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-t-2 border-b-2 border-catering-800 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in animate-delay-500">
              <span className="font-serif text-lg tracking-wider text-catering-800">culinary</span>
            </div>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
