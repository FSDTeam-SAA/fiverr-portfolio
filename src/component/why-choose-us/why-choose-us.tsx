import React from "react";
import ChooseUsCard from "./choose-us-card";
import { Award, Clock4, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="container">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-blue-600 text-lg opacity-85 mb-8">
          {" "}
          &lt;-- Why Choose Us --&gt;{" "}
        </h1>
        <p className="text-3xl font-semibold">
          Your Trusted{" "}
          <span className="text-blue-600 opacity-85">AI Partner</span> on Fiverr
        </p>
        <p className="lg:max-w-2xl mx-auto opacity-80">
          With over 5 years of experience in AI development and 250+ satisfied
          clients, we deliver exceptional results that exceed expectations.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChooseUsCard
          bgColor="1870bb"
          title="Expertise & Experience"
          icon={<Award className="text-blue-500" />}
          details="Your go-to AI partner on Fiverr, delivering custom solutions in chatbots, models, automation, and data-driven innovation worldwide."
          animateType="fade-right"
        />

        <ChooseUsCard
          bgColor="22bde5"
          title="100% Client Satisfaction"
          icon={<ThumbsUp className="text-blue-500" />}
          details="Proven track record of consistently exceeding client expectations with top-quality AI, app, and web solutions tailored to your goals."
          animateType="zoom-in"
        />

        <ChooseUsCard
          bgColor="1870bb"
          title="Timely Delivery"
          icon={<Clock4 className="text-blue-500" />}
          details="Committed to delivering high-quality AI, app, and web projects on schedule—every time, without compromising on performance or precision."
          animateType="fade-left"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
