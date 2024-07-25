import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TeachingMethod = () => {
  const containerStyle = {
    maxWidth: "90%",
  };

  return (
    <>
      <Container
        style={containerStyle}
        className="my-5 p-4 bg-light rounded shadow"
      >
        <Row>
          <Col>
            <h2 className="text-primary">Teaching Methodologies</h2>
            <p>
              We use a blend of traditional and modern teaching techniques to
              cater to different learning styles.
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        style={containerStyle}
        className="my-5 p-4 bg-light rounded shadow"
      >
        <Row>
          <Col>
            <h2 className="text-primary">Educational Resources</h2>
            <p>
              Digital classrooms, interactive learning modules, and access to
              online educational platforms.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeachingMethod;
