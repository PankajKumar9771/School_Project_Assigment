import React from "react";
import { Container} from "react-bootstrap";
import Form from "../Components/AdmissionsForm/Form";
import Title from "../Components/Title/Title";

const Admission = () => {
  return (
    <Container className="my-5">
      <Title subtitle={"Admission Details"} title={"Admission"} />
      <Form />
    </Container>
  );
};

export default Admission;
