"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 mt-20 relative z-10">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-semibold text-white max-w-3xl"
      >
        Build stunning SaaS websites with{" "}
        <span className="text-gradient">Syntra Template</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="text-gray-300 mt-6 max-w-xl"
      >
        A modern, clean and fast Next.js + Tailwind template for your startup,
        business or SaaS landing page.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-8 flex gap-4"
      >
        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition flex items-center gap-2">
          Start Building <ArrowRight size={18} />
        </button>
        <button className="px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-200 transition">
          Live Demo
        </button>
      </motion.div>

    </section>
  );
}
