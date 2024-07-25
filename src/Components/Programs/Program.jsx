import React from "react";
import "./Program.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Primary (Grades 1-5)</p>
          <p>
            {" "}
            English, Mathematics, Science, Social Studies, Art, Physical
            Education
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p> Secondary (Grades 6-10)</p>
          <p>
            English, Mathematics, Science (Physics, Chemistry, Biology), Social
            Studies, Computer Science, Physical Education, Art
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Senior Secondary (Grades 11-12)</p>
          <p>Science Stream , Commerce Stream</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
