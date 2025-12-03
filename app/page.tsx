"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-dark-bg text-white">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 opacity-30 rounded-full mix-blend-screen blur-[150px] animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full mix-blend-screen blur-[150px] animate-blob [animation-delay:2s]"></div>

      <Navbar />
      <Hero />
      <Features />

      {/* Footer */}
      <footer className="mt-32 text-center text-gray-400 pb-10">
        © 2025 Syntra. All rights reserved.
      </footer>

    </main>
  );
}
