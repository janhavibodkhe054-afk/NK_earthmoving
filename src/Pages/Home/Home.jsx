import React from "react";
import Hero from "./Section/Hero";
import About from "./Section/About";
import WhyChooseUs from "./Section/WhyChooseUs";
import Contact from "./Section/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <Contact />
    </div>
  );
};

export default Home;
