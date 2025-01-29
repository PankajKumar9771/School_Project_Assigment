import React from "react";
import Hero from "../Components/Hero/Hero";
import Title from "../Components/Title/Title";
import Banner from "../Components/Banner/Banner";

const Explore = () => {
  return (
    <div>
      <Hero />
      <Title
        subtitle={"Welcome to Parthik Libray."}
        title={
          "Where we nurture young minds and inspire a brighter future through the power of books and learning."
        }
      />
      <Banner />
    </div>
  );
};

export default Explore;
