export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl dark:border-neutral-700">
            “This template saved me weeks!” — Rohan
          </div>
          <div className="p-6 border rounded-xl dark:border-neutral-700">
            “Beautiful UI.” — Anika
          </div>
          <div className="p-6 border rounded-xl dark:border-neutral-700">
            “10/10 quality.” — Arjun
          </div>
        </div>
      </div>
    </section>
  );
}
