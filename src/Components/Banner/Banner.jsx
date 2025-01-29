import React from "react";
import { Carousel, Container } from "react-bootstrap";
import wifi from "../../assets/wifi.webp";
import silent from "../../assets/silent.jpeg";
import books from "../../assets/books.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <Container className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={wifi} alt="High Speed Wifi" />
          <Carousel.Caption className="carousel-caption">
            <h3>High Speed Wifi</h3>
            <p>Use unlimited high speed Internet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={books} alt="books" />
          <Carousel.Caption className="carousel-caption">
            <h3>Books</h3>
            <p>Explore Many Subjects Books</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={silent} alt="Cultural Fest" />
          <Carousel.Caption className="carousel-caption">
            <h3>Silent Environment</h3>
            <p>Here You can Concentrate on Study.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
