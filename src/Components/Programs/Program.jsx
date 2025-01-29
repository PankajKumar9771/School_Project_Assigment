import React from "react";
import "./Program.css";
import wifiAi from "../../assets/wifiAi.webp";
import silentAi from "../../assets/Silence.webp";
import booksAi from "../../assets/booksAi.webp";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={wifiAi} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>High Speed Wifi</p>
          <p>
            {" "}
           Unlimited High Speed Internet.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={booksAi} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Books Subjects </p>
          <p>
            English, Mathematics, Science (Physics, Chemistry, Biology), Social
            Studies, Computer Science, Physical Education, Art
          </p>
        </div>
      </div>
      <div className="program">
        <img src={silentAi} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Silent Environment</p>
          <p>Very Silence Environment</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
