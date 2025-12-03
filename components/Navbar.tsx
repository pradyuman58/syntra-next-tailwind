"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 z-20 relative">
      <h1 className="text-2xl font-bold text-gradient">Syntra</h1>
      <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
        Get Started
      </button>
    </nav>
  );
}
