import React from "react";
import Programs from "../Components/Programs/Program";
import Title from "../Components/Title/Title";
import TeachingMethod from "../Components/TeachingMethod/TeachingMethod";

const Achedemics = () => {
  return (
    <div>
      <Title subtitle={"Our Features"} title={"What We Provide"} />
      <Programs />
     <TeachingMethod/>
    </div>
  );
};

export default Achedemics;
