
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-catering-950 text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-white font-serif text-2xl tracking-tight inline-block mb-6">
              culinary
            </Link>
            <p className="text-catering-300 mb-6 max-w-xs">
              Elevating events through exceptional catering services and unforgettable culinary experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-catering-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-catering-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-catering-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:info@culinarycatering.com"
                className="text-catering-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-catering-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#services" className="text-catering-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#menu" className="text-catering-300 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/#about" className="text-catering-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-catering-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="/#services" className="text-catering-300 hover:text-white transition-colors">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="/#services" className="text-catering-300 hover:text-white transition-colors">
                  Wedding Celebrations
                </a>
              </li>
              <li>
                <a href="/#services" className="text-catering-300 hover:text-white transition-colors">
                  Private Parties
                </a>
              </li>
              <li>
                <a href="/#services" className="text-catering-300 hover:text-white transition-colors">
                  Fine Dining Experiences
                </a>
              </li>
              <li>
                <a href="/#services" className="text-catering-300 hover:text-white transition-colors">
                  Seasonal Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-6">Contact Us</h3>
            <address className="not-italic">
              <p className="text-catering-300 mb-4">
                123 Gourmet Avenue, Suite 101<br />
                San Francisco, CA 94105
              </p>
              <p className="text-catering-300 mb-4">
                <span className="block">Phone: +1 (555) 123-4567</span>
                <span className="block">Email: info@culinarycatering.com</span>
              </p>
              <p className="text-catering-300">
                <span className="block">Monday - Friday: 9am - 6pm</span>
                <span className="block">Saturday: 10am - 4pm</span>
                <span className="block">Sunday: Closed</span>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-catering-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-catering-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Culinary Catering. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-catering-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-catering-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-catering-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
