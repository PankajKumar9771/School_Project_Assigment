import React from "react";
import { Carousel, Container } from "react-bootstrap";
import science_fest from "../../assets/Science.jpg";
import cultural from "../../assets/Cultural.jpg";
import sports from "../../assets/sports.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Container className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sports} alt="Annual Sports Day" />
          <Carousel.Caption className="carousel-caption">
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={science_fest}
            alt="Science Exhibition"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cultural} alt="Cultural Fest" />
          <Carousel.Caption className="carousel-caption">
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
