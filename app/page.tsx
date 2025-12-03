"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-dark-bg text-white">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 opacity-30 rounded-full mix-blend-screen blur-[150px] animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full mix-blend-screen blur-[150px] animate-blob [animation-delay:2s]"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 z-20 relative">
        <h1 className="text-2xl font-bold text-gradient">Syntra</h1>
        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="mt-32 px-6 max-w-5xl mx-auto z-10 relative">
        <h2 className="text-3xl font-semibold text-center">Why Choose Syntra?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            "Built with Next.js App Router",
            "Fully Responsive UI",
            "Modern Tailwind Styling",
            "Custom Animations",
            "Fast Performance",
            "Easy to Customize"
          ].map((feature, i) => (
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

      {/* Footer */}
      <footer className="mt-32 text-center text-gray-400 pb-10">
        © 2025 Syntra. All rights reserved.
      </footer>

    </main>
  );
        }
