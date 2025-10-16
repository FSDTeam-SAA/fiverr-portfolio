import Hero from "@/components/hero/home/hero";
import OurServices from "@/components/hero/our-services/our-services";
import WhyChooseUs from "@/components/hero/why-choose-us/why-choose-us";
import WorkSample from "@/components/hero/work-sample/work-sample";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <WorkSample />
    </div>
  );
}
