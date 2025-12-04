import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Syntra – Premium SaaS Template",
  description: "High-quality Next.js SaaS landing page template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-neutral-900 dark:text-white transition">
        {children}
      </body>
    </html>
  );
}
