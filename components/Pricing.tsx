"use client";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 border rounded-xl dark:border-neutral-700">
            <h3 className="text-2xl font-semibold mb-3">Starter</h3>
            <p className="text-5xl font-bold">₹0</p>
          </div>

          <div className="p-8 border rounded-xl shadow-xl border-blue-500 bg-blue-50 dark:bg-neutral-800">
            <h3 className="text-2xl font-semibold mb-3">Pro</h3>
            <p className="text-5xl font-bold">₹999</p>
          </div>

          <div className="p-8 border rounded-xl dark:border-neutral-700">
            <h3 className="text-2xl font-semibold mb-3">Enterprise</h3>
            <p className="text-5xl font-bold">₹2999</p>
          </div>
        </div>
      </div>
    </section>
  );
          }
