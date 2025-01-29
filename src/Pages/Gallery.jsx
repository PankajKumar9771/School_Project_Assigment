import React from "react";
import Title from "../Components/Title/Title";
import Campus from "../Components/Campus/Campus";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const Gallery = ({ setPlayState }) => {
  return (
    <Container>
      <Title subtitle={"Gallery"} title={"Photos & Videos"} />
      <Row className="my-5">
        <Col md={6} className="d-flex flex-column align-items-center">
          <div className="about-left">
            <img
              className="about-img img-fluid"
              src={about_img}
              alt="about_img"
            />
            <Button
              variant="link"
              className="play-icon"
              onClick={() => setPlayState(true)}
            >
              <img src={play_icon} alt="play_icon" />
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DAgLZ42lROs?si=GtFfkdnhUQ9XWQ-q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <Campus />
    </Container>
  );
};

export default Gallery;
