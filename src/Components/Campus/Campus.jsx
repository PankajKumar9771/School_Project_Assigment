import React from "react";
import "./Campus.css";
import gallary_1 from "../../assets/gallery1.jpg";
import gallary_2 from "../../assets/gallery2.jpg";
import gallary_3 from "../../assets/gallery3.jpg";
import gallary_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallary_1} alt="" />
        <img src={gallary_2} alt="" />
        <img src={gallary_3} alt="" />
        <img src={gallary_4} alt="" />
      </div>
      <Link to={"/gallery"}>
        <button className="btn dark-btn">
          See More Here <img src={white_arrow} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

export default Campus;
