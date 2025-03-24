
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for your message. We'll respond within 24 hours.",
        duration: 5000,
      });
      if (formRef.current) {
        formRef.current.reset();
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-white" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <p className="uppercase tracking-wider text-catering-600 text-sm mb-3 font-medium">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-catering-900 mb-6">
                Ready to Create an Unforgettable Event?
              </h2>
              <div className="h-[2px] w-12 bg-catering-600 mb-8"></div>
              <p className="text-catering-700 mb-12 max-w-md">
                Contact us to discuss your event needs. Whether you have a specific vision or need inspiration, our team is here to help create the perfect culinary experience.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-catering-50 p-3 rounded-sm">
                    <Phone className="text-catering-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-catering-900 mb-1">Phone</h3>
                    <p className="text-catering-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-catering-50 p-3 rounded-sm">
                    <Mail className="text-catering-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-catering-900 mb-1">Email</h3>
                    <p className="text-catering-700">info@culinarycatering.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-catering-50 p-3 rounded-sm">
                    <MapPin className="text-catering-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-catering-900 mb-1">Location</h3>
                    <p className="text-catering-700">123 Gourmet Avenue, Suite 101<br />San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-catering-50 p-3 rounded-sm">
                    <Clock className="text-catering-800" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-catering-900 mb-1">Hours</h3>
                    <p className="text-catering-700">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white shadow-lg rounded-sm border border-catering-100 p-8"
            >
              <h3 className="text-2xl font-serif font-medium text-catering-900 mb-6">Inquire About Your Event</h3>
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-catering-800">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Your name"
                      className="border-catering-200 focus:border-catering-600 focus:ring-catering-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-catering-800">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="Your email"
                      className="border-catering-200 focus:border-catering-600 focus:ring-catering-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-catering-800">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      className="border-catering-200 focus:border-catering-600 focus:ring-catering-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-catering-800">
                      Event Date
                    </label>
                    <Input
                      id="date"
                      type="date"
                      className="border-catering-200 focus:border-catering-600 focus:ring-catering-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="event-type" className="text-sm font-medium text-catering-800">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="event-type"
                    required
                    className="w-full border-catering-200 rounded-sm p-2 focus:border-catering-600 focus:ring-catering-600"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium text-catering-800">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    required
                    placeholder="Estimated number of guests"
                    className="border-catering-200 focus:border-catering-600 focus:ring-catering-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-catering-800">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your event, dietary requirements, or special requests..."
                    className="border-catering-200 focus:border-catering-600 focus:ring-catering-600 min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-catering-800 hover:bg-catering-700 text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  {!isSubmitting && <ChevronRight className="ml-2" size={18} />}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
