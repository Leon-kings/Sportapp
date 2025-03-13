import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import WhyChooseUs from "./pages/whyUs.jsx/WhyUs";
import TrainerSection from "./pages/trainer/Trainer";
import ContactSection from "./pages/contact/Contact";
import InfoSection from "./pages/info/Info";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          {" "}
          <Navbar />
          <Routes>
            <Route element={<TrainerSection />} path="/trainer" />
            <Route element={<WhyChooseUs />} path="/why-us" />
            <Route element={<Home />} path="/" />
            <Route element={<InfoSection />} path="/who-we-are" />
            <Route element={<ContactSection />} path="/contact" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
