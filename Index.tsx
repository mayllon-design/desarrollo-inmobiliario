import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UseCasesSection from "@/components/UseCasesSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ProcessSection from "@/components/ProcessSection";
import SegmentsSection from "@/components/SegmentsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <UseCasesSection />
        <ValuePropositionSection />
        <section id="proceso">
          <ProcessSection />
        </section>
        <SegmentsSection />
        <section id="contacto">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
