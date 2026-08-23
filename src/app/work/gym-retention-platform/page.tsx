import type { Metadata } from "next";
import CaseStudyMasthead from "@/components/case-study/CaseStudyMasthead";
import Industry from "@/components/case-study/Industry";
import Problem from "@/components/case-study/Problem";
import Objective from "@/components/case-study/Objective";
import Solution from "@/components/case-study/Solution";
import Workflow from "@/components/case-study/Workflow";
import Features from "@/components/case-study/Features";
import ProductScreens from "@/components/case-study/ProductScreens";
import TechnicalImplementation from "@/components/case-study/TechnicalImplementation";
import Outcome from "@/components/case-study/Outcome";
import Technology from "@/components/case-study/Technology";
import CaseStudyCta from "@/components/case-study/CaseStudyCta";

export const metadata: Metadata = {
  title: "Gym Retention & Operations Platform — FORGE",
  description:
    "A retention-and-operations platform built for gyms — attendance, inactivity detection, follow-up and owner visibility in one workflow.",
};

export default function GymRetentionPlatformPage() {
  return (
    <>
      <CaseStudyMasthead />
      <Industry />
      <Problem />
      <Objective />
      <Solution />
      <Workflow />
      <Features />
      <ProductScreens />
      <TechnicalImplementation />
      <Outcome />
      <Technology />
      <CaseStudyCta />
    </>
  );
}
