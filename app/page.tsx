import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HostCTASection } from "@/components/HostCTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <FeaturedProperties />
        <TestimonialsSection />
        <HostCTASection />
      </main>
      
      <Footer />
    </div>
  );
}
