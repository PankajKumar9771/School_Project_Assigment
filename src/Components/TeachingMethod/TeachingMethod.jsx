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
            <h2 className="text-primary">Library</h2>
            <p>
              We provide a vast selection of fiction, non-fiction, reference
              books, and digital content, along with quiet study areas and
              collaborative learning spaces.
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
              A comprehensive collection of books, e-books, research papers, and
              access to global digital libraries and online knowledge platforms.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeachingMethod;
