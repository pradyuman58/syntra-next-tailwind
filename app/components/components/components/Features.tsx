"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const featureList = [
  "Built with Next.js App Router",
  "Fully Responsive UI",
  "Modern Tailwind Styling",
  "Custom Animations",
  "Fast Performance",
  "Easy to Customize"
];

export default function Features() {
  return (
    <section className="mt-32 px-6 max-w-5xl mx-auto z-10 relative">
      <h2 className="text-3xl font-semibold text-center">Why Choose Syntra?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {featureList.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 rounded-xl flex items-start gap-3"
          >
            <CheckCircle className="text-blue-400" size={26} />
            <p className="text-gray-200">{feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
              }
