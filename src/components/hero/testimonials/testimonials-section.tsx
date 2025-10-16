import React from "react";
import { TestimonialsText } from "./testimonials-text";
import { TestimonialsShowcase } from "./testimonials-showcase";

const TestimonialSection = () => {
  return (
    <div id="reviews" className="container lg:px-20 !-mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <TestimonialsText />
        <div className="lg:max-w-2xl">
          <TestimonialsShowcase />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
