import HeroSection from '@/components/home/Hero';
import BusinessPartners from '@/components/home/BusinessPartners';
import SuccessStories from '@/components/home/SuccessStories';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Service from '@/components/home/Service';
import CallToAction from '@/components/home/CallToAction';
import ContactSection from '@/components/home/ContactSection';
import Achievements from '@/components/home/Achievement';
import About from '@/components/home/About';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Service />
      <About/>
      <Achievements/>

      <BusinessPartners />
      <SuccessStories />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <ContactSection />
    </>
  );
}