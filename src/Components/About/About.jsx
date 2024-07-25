import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="about_img" />
        <img
          className="play-icon"
          onClick={() => setPlayState(true)}
          src={play_icon}
          alt="play_icon"
        />
      </div>

      <div className="about-right">
        <h3>ABOUT SCHOOL</h3>
        <h2>History</h2>
        <p>
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students
        </p>
        <h2> Vision</h2>
        <p>
          To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values.
        </p>
        <h2>Mission</h2>
        <p>
          To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world.
        </p>
        <h2>Facilities</h2>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default About;