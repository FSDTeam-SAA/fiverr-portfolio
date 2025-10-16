import Hero from "@/component/home/hero";
import OurServices from "@/component/our-services/our-services";
import WhyChooseUs from "@/component/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <WhyChooseUs />
      <OurServices />
    </div>
  );
}
