import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Syntra – Premium Next.js Tailwind Template",
  description: "Modern, responsive, SaaS-ready landing page template built with Next.js and Tailwind."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="
