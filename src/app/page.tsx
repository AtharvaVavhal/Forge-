import Hero from "@/components/home/Hero";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhoWeBuildFor from "@/components/home/WhoWeBuildFor";
import HowWeWork from "@/components/home/HowWeWork";
import WhyForge from "@/components/home/WhyForge";
import PricingSection from "@/components/home/PricingSection";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <FeaturedWork />
      <ServicesGrid />
      <WhoWeBuildFor />
      <HowWeWork />
      <WhyForge />
      <PricingSection />
      <Faq />
      <FinalCta />
    </>
  );
}
