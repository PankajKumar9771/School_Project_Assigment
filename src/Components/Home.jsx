import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.png"; // Make sure you have a logo.png in your src folder

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <Image src={logo} alt="Springdale Public School Logo" fluid />
        </Col>
        <Col md={8}>
          <h1>Welcome to Springdale Public School</h1>
          <p>Where we nurture young minds for a brighter future.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Placeholder image
                alt="Annual Sports Day"
              />
              <Carousel.Caption>
                <h3>Annual Sports Day</h3>
                <p>Celebrating Excellence in Sports</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Placeholder image
                alt="Science Exhibition"
              />
              <Carousel.Caption>
                <h3>Science Exhibition</h3>
                <p>Showcasing Student Innovations</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Placeholder image
                alt="Cultural Fest"
              />
              <Carousel.Caption>
                <h3>Cultural Fest</h3>
                <p>Embracing Diversity and Creativity</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#academics">Academics</a>
            </li>
            <li>
              <a href="#extracurricular-activities">
                Extracurricular Activities
              </a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
