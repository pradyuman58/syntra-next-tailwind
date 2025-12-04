export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Welcome to the Syntra template documentation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">File Structure</h2>

      <pre className="bg-neutral-900 text-white p-4 rounded-xl text-sm">
{`
app/
 ├── layout.tsx
 ├── page.tsx
 ├── docs/
 │    └── page.tsx

components/
 ├── Navbar.tsx
 ├── ThemeToggle.tsx
 ├── Hero.tsxs
 ├── Features.tsx
 ├── Pricing.tsx
 ├── Testimonials.tsx
 ├── FAQ.tsx
 ├── CTA.tsx
 └── Footer.tsx
`}
      </pre>
    </div>
  );
}
