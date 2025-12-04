"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold">Syntra</h1>

      <div className="flex items-center gap-6">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="/docs" className="hover:text-blue-600">Docs</a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
