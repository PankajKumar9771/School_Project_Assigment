import React from "react";
import { Card } from "react-bootstrap";

const StudentCouncil = () => {
  const council = {
    President: "Amy Parker, Grade 12",
    VicePresident: "Rajiv Mehta, Grade 11",
    Secretary: "Lisa Wong, Grade 10",
  };

  return (
    <Card className="mb-3">
      <Card.Header>Student Council</Card.Header>
      <Card.Body>
        <ul>
          {Object.entries(council).map(([role, name], index) => (
            <li key={index}>
              {role}: {name}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default StudentCouncil;
