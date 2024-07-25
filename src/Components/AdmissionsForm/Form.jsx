import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Form.css";

const Form = () => {
 const pdfUrl = "/path/to/your/application.pdf";

  return (
    <Container className="my-5">
      <Row>
       
      </Row>
      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Process</Card.Title>
              <Card.Text>
                Admission forms are available for download. Submit the completed
                form along with required documents at the school office.
              </Card.Text>
              <Button variant="primary" href={pdfUrl} download className="mt-3 btn">
                Download Admission Form
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Criteria</Card.Title>
              <Card.Text>
                Admission is based on merit and availability of seats. Entrance
                tests may be conducted for certain grades.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center mb-4">Important Dates</h2>
          <ul className="list-group">
            <li className="list-group-item">
              Admission Form Availability: March 1st
            </li>
            <li className="list-group-item">
              Last Date for Submission: March 31st
            </li>
            <li className="list-group-item">Entrance Test: April 15th</li>
            <li className="list-group-item">
              Announcement of Results: April 30th
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
