import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Slider from "./components/hero/Hero";
import WhyChooseUs from "./pages/whyUs.jsx/WhyUs";
import HealthyMindBody from "./pages/healthy/Healthy";
import TrainerSection from "./pages/trainer/Trainer";
import ContactSection from "./pages/contact/Contact";
import InfoSection from "./pages/info/Info";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Slider/>
      <WhyChooseUs/>
      <HealthyMindBody/>
      <TrainerSection/>
      <ContactSection/>
      <InfoSection/>
      <Footer/>
    </>
  );
}

export default App;
