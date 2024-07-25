import React from "react";
import StudentComponent from "../Components/StudentComponent/StudentComponent";
import { Container } from "react-bootstrap";
import Title from "../Components/Title/Title";
const Student = () => {
  return (
    <Container className="custom-margin">
      <Title subtitle={"Student"} title={"Life at Springdale"} />
      <StudentComponent />
    </Container>
  );
};

export default Student;
