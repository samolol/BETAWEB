import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ShowcaseSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
