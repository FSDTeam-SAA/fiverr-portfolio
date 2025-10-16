import { Heart, MoveRight, Star } from "lucide-react";
import SkillButton from "./skill-button";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroText = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay="400">
      <div className="text-5xl font-bold space-y-2">
        <h1>Professional</h1>

        <div className="bg-gradient-to-r from-[#33b7e4] via-[#1978bf] to-[#1978bf] bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: [
                "Mobile App Developer",
                "AI Developer",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />
        </div>

        <h1>on Fiverr</h1>
      </div>

      <p className="my-4 opacity-85 lg:max-w-lg">
        Empowering your ideas with custom AI solutions, cutting-edge apps, and
        stunning websites — all with a 100% satisfaction guarantee.
      </p>

      <div className="py-4 px-4 bg-white rounded-md flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">250+</h1>
          <p className="text-sm opacity-60">Reviews</p>
        </div>

        <div>
          <h1 className="font-bold text-xl flex items-center gap-1">
            5 <Star fill="black" className="h-4 w-4" />
          </h1>
          <p className="text-sm opacity-60">Ratings</p>
        </div>

        <div>
          <h1 className="font-bold text-xl flex items-center gap-1">
            2{" "}
            <span className="flex items-center">
              <Heart fill="black" className="h-2 w-2" />
              <Heart fill="black" className="h-2 w-2" />
            </span>
          </h1>
          <p className="text-sm opacity-60">Ratings</p>
        </div>

        <div>
          <button className="flex items-center gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-[#20aada] via-[#20aada] to-[#1978bf] text-white hover:from-[#1978bf] hover:via-[#20aada] hover:to-[#20aada] transition-all duration-300">
            View Profile <MoveRight />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <SkillButton skill="Mobile App development" />
        <SkillButton skill="Mobile App design" />
        <SkillButton skill="Flutter developer" />
        <SkillButton skill="Mobile App design" />
        <SkillButton skill="Flutter developer" />
      </div>
    </div>
  );
};

export default HeroText;
