import Hero from "@/components/home/Hero";
import CapabilityShowcase from "@/components/home/CapabilityShowcase";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowWeWork from "@/components/home/HowWeWork";
import WhyForge from "@/components/home/WhyForge";
import PricingSection from "@/components/home/PricingSection";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityShowcase />
      <FeaturedWork />
      <ServicesGrid />
      <WhyForge />
      <HowWeWork />
      <PricingSection />
      <FinalCta />
    </>
  );
}
