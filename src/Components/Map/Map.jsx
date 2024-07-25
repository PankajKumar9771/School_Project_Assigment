import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Map.css"; 

const Map = () => {
  return (
    <Container fluid className="map-container">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.9970408904146!2d77.62955345213412!3d28.957812249420453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65f692a04229%3A0x72dff781fe584ede!2sSubharti%20University!5e0!3m2!1sen!2sin!4v1721911785322!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
