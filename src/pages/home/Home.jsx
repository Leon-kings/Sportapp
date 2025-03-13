import React from "react";
import Slider from "../../components/hero/Hero";
import WhyChooseUs from "../whyUs.jsx/WhyUs";
import HealthyMindBody from "../healthy/Healthy";
import TrainersSection from "../trainer/Trainer";
import ContactSection from "../contact/Contact";
import InfoSection from "../info/Info";
export default function Home() {
  return (
    <>
      <div className="w-full">
        <Slider />
        <WhyChooseUs />
        <HealthyMindBody />
        <TrainersSection />
        <ContactSection />
        <InfoSection />
      </div>
    </>
  );
}
