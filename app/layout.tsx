import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Syntra – Premium Next.js Tailwind Template",
  description:
    "Modern, responsive, SaaS-ready landing page template built with Next.js and Tailwind.",
  icons: {
    icon: "/favicon.ico",
  },
  fonts: {
    google: "Inter",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-dark-bg dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
