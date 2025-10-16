import React from "react";
import ServiceCard from "./service-card";

const OurServices = () => {
  return (
    <div className="bg-[#f0f7fc] py-20">
      <div className="container">
        <div className="text-center space-y-3">
          <h1 className="font-bold text-blue-600 text-lg opacity-85 mb-8">
            {" "}
            &lt;-- Our Services --&gt;{" "}
          </h1>
          <p className="text-3xl font-semibold flex items-center justify-center gap-2">
            <span>Professional</span>
            <span className="text-blue-600 opacity-85">Services</span>
          </p>
          <p className="lg:max-w-2xl mx-auto opacity-80">
            Delivering high-quality, tailored digital solutions to meet your
            unique business needs. From design to deployment, we ensure
            precision, performance, and professionalism every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <ServiceCard
            icon="🤖"
            title="AI Chatbot Development"
            description="Build intelligent, conversational chatbots tailored to automate customer support and streamline communication."
            animateType="fade-left"
          />
          <ServiceCard
            icon="📷"
            title="Computer Vision Solutions"
            description="Leverage image recognition and object detection to extract actionable insights from visual data."
            animateType="fade-down"
          />
          <ServiceCard
            icon="🧠"
            title="Core AI Model Development"
            description="Build and train custom AI models from scratch, including transformers, CNNs, RNNs, and foundation models for tasks across vision, language, and structured data."
            animateType="fade-right"
          />
          <ServiceCard
            icon="📱"
            title="Mobile App Development"
            description="Design and develop seamless mobile experiences for iOS and Android platforms using modern frameworks."
            animateType="fade-left"
          />
          <ServiceCard
            icon="💻"
            title="Web Application Development"
            description="Create dynamic, responsive websites and web apps with robust backend and polished frontend interfaces."
            animateType="fade-up"
          />
          <ServiceCard
            icon="📊"
            title="Data Analyst Services"
            description="Analyze business data to uncover trends, generate reports, and support data-driven decision-making."
            animateType="fade-right"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
