
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
