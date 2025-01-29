import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import Title from "../Components/Title/Title";
import Campus from "../Components/Campus/Campus";
import About from "../Components/About/About";
import Programs from "../Components/Programs/Program";
import Faculities from "../Components/Faculities/Faculities";
import ContactForm from "../Components/ContactForm/ContactForm";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="home">
      <div>
        <Hero />
        <div className="container">
          <Title subtitle={"Our Features"} title={"What We Provide"} />
          <Programs />
        </div>
        <About setPlayState={setPlayState} />
        <Title subtitle={"Gallery"} title={"Campus Photos"} />
        <Campus />
        {/* <Title subtitle={"Facilities"} title={"Our Facilities"} />
        <Faculities /> */}
        <Title subtitle={"Contact us"} title={"Get in Touch"} />
        <ContactForm />

        <VideoPlayer setPlayState={setPlayState} playState={playState} />
      </div>
    </div>
  );
};

export default Home;
