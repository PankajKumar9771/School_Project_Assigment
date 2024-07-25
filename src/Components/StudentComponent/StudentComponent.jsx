import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExtracurricularActivities from "./ExtracurricularActivities";
import ClubsAndSocieties from "./ClubsAndSocieties";
import Achieve from "./Achieve";
import StudentCouncil from "./StudentCouncil";
import "./StudentComponent.css"; 

const StudentComponent = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={6}>
          <ExtracurricularActivities />
        </Col>
        <Col md={6}>
          <ClubsAndSocieties />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Achieve />
        </Col>
        <Col md={6}>
          <StudentCouncil />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentComponent;
