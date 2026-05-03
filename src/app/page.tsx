import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import PhotoBreak from "./components/PhotoBreak";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <IntroSection />
        <AboutSection />
        <PhotoBreak />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
