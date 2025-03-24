
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description: string;
  price?: string;
  highlight?: boolean;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const Menu: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const starters: MenuCategory = {
    category: "Starters",
    items: [
      {
        name: "Truffle Arancini",
        description: "Wild mushroom risotto balls with black truffle and parmesan",
        price: "$12",
      },
      {
        name: "Tuna Tartare",
        description: "Hand-cut yellowfin tuna, avocado, sesame ginger dressing, wonton crisps",
        price: "$16",
        highlight: true,
      },
      {
        name: "Roasted Beet & Goat Cheese",
        description: "Heirloom beets, whipped goat cheese, candied walnuts, balsamic glaze",
        price: "$14",
      },
      {
        name: "Charcuterie Board",
        description: "Selection of artisanal cheeses and cured meats with accompaniments",
        price: "$22",
      },
    ],
  };

  const mains: MenuCategory = {
    category: "Main Courses",
    items: [
      {
        name: "Herb-Crusted Rack of Lamb",
        description: "Dijon and herb breadcrumb crust, rosemary jus, seasonal vegetables",
        price: "$34",
        highlight: true,
      },
      {
        name: "Pan-Seared Sea Bass",
        description: "Lemon beurre blanc, asparagus, fingerling potatoes",
        price: "$30",
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, assorted wild mushrooms, truffle oil, aged parmesan",
        price: "$24",
      },
      {
        name: "Braised Short Rib",
        description: "Slow-cooked beef short rib, red wine reduction, creamy polenta",
        price: "$32",
      },
    ],
  };

  const desserts: MenuCategory = {
    category: "Desserts",
    items: [
      {
        name: "Chocolate Hazelnut Torte",
        description: "Dark chocolate ganache, toasted hazelnuts, raspberry coulis",
        price: "$12",
        highlight: true,
      },
      {
        name: "Lemon Panna Cotta",
        description: "Meyer lemon panna cotta, fresh berries, shortbread cookie",
        price: "$10",
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Buttery pastry shell, vanilla custard, glazed seasonal fruits",
        price: "$11",
      },
      {
        name: "Artisanal Cheese Selection",
        description: "Chef's selection of three artisanal cheeses, honey, nuts, fruit preserves",
        price: "$16",
      },
    ],
  };

  const beverages: MenuCategory = {
    category: "Beverages",
    items: [
      {
        name: "Craft Cocktails",
        description: "Signature cocktails crafted with premium spirits and fresh ingredients",
        price: "From $14",
      },
      {
        name: "Wine Pairings",
        description: "Expert wine pairings selected to complement your menu",
        price: "Custom",
        highlight: true,
      },
      {
        name: "Artisanal Non-Alcoholic",
        description: "House-made sodas, fruit-infused waters, and mocktails",
        price: "From $6",
      },
      {
        name: "Coffee & Tea Service",
        description: "Premium coffee and tea selections with optional dessert pairings",
        price: "From $4",
      },
    ],
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className={`p-6 border-b border-catering-100 last:border-b-0 ${
          item.highlight ? "bg-catering-50/50" : ""
        }`}
      >
        <div className="flex justify-between items-baseline mb-2">
          <h4 className="text-lg font-serif text-catering-900">{item.name}</h4>
          {item.price && <span className="text-catering-700 font-medium">{item.price}</span>}
        </div>
        <p className="text-catering-600 text-sm">{item.description}</p>
      </motion.div>
    ));
  };

  return (
    <section id="menu" className="section-padding relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')] bg-center bg-no-repeat bg-cover"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-wider text-catering-600 text-sm mb-3 font-medium"
          >
            Culinary Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-catering-900 mb-4"
          >
            A Taste of Our Seasonal Menu
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
            Our menus change with the seasons to showcase the freshest ingredients at their peak. Below is a sample of what we offer, but we pride ourselves on creating custom menus for each event.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white shadow-md rounded-sm border border-catering-100 overflow-hidden"
        >
          <Tabs defaultValue="starters" className="w-full">
            <div className="bg-catering-50 border-b border-catering-100">
              <TabsList className="w-full bg-transparent flex justify-center px-4 h-auto py-2">
                <TabsTrigger value="starters" className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none px-6 py-3">
                  Starters
                </TabsTrigger>
                <TabsTrigger value="mains" className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none px-6 py-3">
                  Main Courses
                </TabsTrigger>
                <TabsTrigger value="desserts" className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none px-6 py-3">
                  Desserts
                </TabsTrigger>
                <TabsTrigger value="beverages" className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none px-6 py-3">
                  Beverages
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="starters" className="mt-0">
              <div>{renderMenuItems(starters.items)}</div>
            </TabsContent>
            <TabsContent value="mains" className="mt-0">
              <div>{renderMenuItems(mains.items)}</div>
            </TabsContent>
            <TabsContent value="desserts" className="mt-0">
              <div>{renderMenuItems(desserts.items)}</div>
            </TabsContent>
            <TabsContent value="beverages" className="mt-0">
              <div>{renderMenuItems(beverages.items)}</div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="text-center mt-12">
          <Button
            className="bg-catering-800 hover:bg-catering-700 text-white px-10 py-6 rounded-sm"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Request a Custom Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
