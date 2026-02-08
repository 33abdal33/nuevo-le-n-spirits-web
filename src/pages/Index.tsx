import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import PromotionsSection from "@/components/PromotionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <main>
        <HeroSection />
        <CatalogSection />
        <PromotionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
