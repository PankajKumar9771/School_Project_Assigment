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
        <h3>ABOUT LIBRARY</h3>
        <h2>History</h2>
        <p>
          Established in 1990, the ParthikLibrary has been a cornerstone of
          knowledge and learning, inspiring generations of students with its
          rich resources and vibrant environment.
        </p>
        <h2> Vision</h2>
        <p>
          To cultivate a community of lifelong learners by fostering curiosity,
          imagination, and a passion for knowledge through access to diverse
          resources.
        </p>
        <h2>Mission</h2>
        <p>
          To provide an inclusive and dynamic space that supports academic
          growth, creativity, and personal development by offering access to
          quality books, digital tools, and research materials.
        </p>
        <h2>Facilities</h2>
        <ul>
          <li>
            An extensive collection of books across various genres and
            disciplines
          </li>
          <li>
            Digital learning resources, including e-books and online journals
          </li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Comfortable reading areas and dedicated study zones.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;