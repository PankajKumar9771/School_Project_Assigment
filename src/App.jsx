import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle={"Our Program"} title={"What We Offer"} />
        <Programs />
      </div>
      <About setPlayState={setPlayState} />
      <Title subtitle={"Gallery"} title={"Campus Photos"} />
      <Campus />
      <Title subtitle={"Testimonials"} title={"What Student Says"} />
      <Testimonials />
      <Title subtitle={"Contact us"} title={"Get in Touch"} />
      <Contact />
      <Footer />
      <VideoPlayer setPlayState={setPlayState} playState={playState} />
    </div>
  );
};

export default App;