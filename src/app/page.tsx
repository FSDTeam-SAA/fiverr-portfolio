import Hero from "@/components/home/hero";
import OurServices from "@/components/our-services/our-services";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <WhyChooseUs />
      <OurServices />
    </div>
  );
}
