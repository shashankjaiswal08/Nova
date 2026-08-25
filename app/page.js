import Navbar from "../components/landing/Navbar";
import Entrance from "../components/landing/Entrance";
import ScrollProgress from "../components/landing/ScrollProgress";
import Hero from "../components/landing/Hero";
import SocialProof from "../components/landing/SocialProof";
import ProblemSection from "../components/landing/ProblemSection";
import SolutionSection from "../components/landing/SolutionSection";
import FeatureShowcase from "../components/landing/FeatureShowcase";
import ProductDemo from "../components/landing/ProductDemo";
import HowItWorks from "../components/landing/HowItWorks";
import Benefits from "../components/landing/Benefits";
import Testimonial from "../components/landing/Testimonial";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden">
      <Entrance />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[2200px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_50%_14%,rgba(33,104,255,0.1)_0%,rgba(36,91,214,0.04)_15%,transparent_32%),radial-gradient(circle_at_50%_84%,rgba(32,95,255,0.07)_0%,transparent_24%)] blur-[72px] md:h-[2650px]"
      />

      <div className="relative z-10">
        <Navbar />
        <ScrollProgress />

        <main>
          <Hero />
          <SocialProof />
          <ProblemSection />
          <SolutionSection />
          <FeatureShowcase />
          <ProductDemo />
          <HowItWorks />
          <Benefits />
          <Testimonial />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}
