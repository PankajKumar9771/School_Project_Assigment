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
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          mollitia blanditiis totam minus, maxime reprehenderit error eius
          obcaecati neque sed laudantium est atque fuga fugit vel, adipisci illo
          nostrum explicabo recusandae odit. Repellendus, sed debitis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          rerum beatae nam amet, quas sed iure minima odio magnam debitis
          facilis odit dolore suscipit itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, magni
          nisi, rerum eius perferendis officiis vel consequatur atque ipsa
          numquam id neque a provident molestiae velit in aspernatur. Amet
          magnam rerum aspernatur excepturi voluptas, atque eos.
        </p>
      </div>
    </div>
  );
};

export default About;
