import AboutUsSection from "@/component/AboutUsSection";
import ContactUsSection from "@/component/ContactUsSection";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import ServicesSection from "@/component/ServicesSection";

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}