import HeroSection from '@/components/home/HeroSection';
import BusinessPartners from '@/components/home/BusinessPartners';
import SuccessStories from '@/components/home/SuccessStories';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CategoryBlocks from '@/components/home/CategoryBlocks';
import CallToAction from '@/components/home/CallToAction';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessPartners />
      <CategoryBlocks />
      <SuccessStories />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <ContactSection />
    </>
  );
}