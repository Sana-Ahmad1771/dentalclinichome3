import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AboutClinic from "./components/pages/home/AboutClinic";
import BeforeAfterSection from "./components/pages/home/BeforeAfterSection";
import DentalCareSection from "./components/pages/home/DentalCareSection";
import ExperienceDentalSection from "./components/pages/home/ExperienceDentalSection";
import HeroSection from "./components/pages/home/HeroSection";
import InforSection from "./components/pages/home/InfoSection";
import NewsletterSection from "./components/pages/home/NewsletterSection";
import NextGenCleaning from "./components/pages/home/NextGenCleaning";
import SmileCareSection from "./components/pages/home/SmileCareSection";
import StatsSection from "./components/pages/home/StatsSection";
import StepsSection from "./components/pages/home/StepsSection";
import TeamSection from "./components/pages/home/TeamSection";
import TestimonialSection from "./components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InforSection />
      <AboutClinic />
      {/* <DentalCareSection /> */}
      <SmileCareSection />
      <BeforeAfterSection />
      <ExperienceDentalSection />
      <TeamSection />
      <NextGenCleaning />
      <StepsSection />
      <StatsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
