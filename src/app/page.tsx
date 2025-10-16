import Hero from "@/components/hero/home/hero";
import OurServices from "@/components/hero/our-services/our-services";
import OurTeam from "@/components/hero/our-team/our-team";
import TestimonialsSection from "@/components/hero/testimonials/testimonials-section";
import WhyChooseUs from "@/components/hero/why-choose-us/why-choose-us";
import WorkSample from "@/components/hero/work-sample/work-sample";

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <WorkSample />
      <OurTeam />
      <TestimonialsSection />
    </div>
  );
}
