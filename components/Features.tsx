export default function Features() {
  const items = [
    { title: "Lightning Fast", desc: "Optimized for best performance." },
    { title: "Clean UI", desc: "Minimalistic modern design." },
    { title: "Easy Customization", desc: "Edit anything in minutes." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((f, i) => (
            <div key={i} className="p-6 border rounded-xl dark:border-neutral-700">
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
