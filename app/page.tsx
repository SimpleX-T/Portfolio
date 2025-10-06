"use client";
import AboutPage from "@/components/about";
import PortfolioPage from "@/components/portfolio";
import ContactPage from "@/components/contact";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <main className="">
      <Hero />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </main>
  );
}
