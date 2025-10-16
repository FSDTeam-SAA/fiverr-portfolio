import Hero from "@/component/home/hero";
import WhyChooseUs from "@/component/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <div className="container space-y-20">
      <Hero />
      <WhyChooseUs />
    </div>
  );
}
