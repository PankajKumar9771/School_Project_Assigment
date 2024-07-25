import React, { useRef } from "react";
import "./Faculities.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Faculities = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="faculities">
      <img
        src={next_icon}
        className="next-btn"
        onClick={slideForward}
        alt="next-icon"
      />
      <img
        src={back_icon}
        className="back-btn"
        onClick={slideBackward}
        alt="back-icon"
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />

                <div>
                  <h3> John Doe</h3>
                  <span>
                    Principal, M.Ed, 20 years of experience in educational
                    administration
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_1" />

                <div>
                  <h3>Jane Smith</h3>
                  <span>
                    {" "}
                    Vice Principal, M.Sc. in Physics, 15 years of teaching
                    experience
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_1" />

                <div>
                  <h3> Emily Johnson</h3>
                  <span>
                    English Teacher, M.A. in English, 10 years of teaching
                    experience.{" "}
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>Michael Brown</h3>
                  <span>
                    Mathematics Teacher, M.Sc. in Mathematics, 8 years of
                    teaching experience.
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>Sophia Davis </h3>
                  <span>
                    Science Teacher, M.Sc. in Chemistry, 12 years of teaching
                    experience.
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>David Wilson</h3>
                  <span>
                    Computer Science Teacher, B.Tech in Computer Science, 5
                    years of teaching experience.
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faculities;
