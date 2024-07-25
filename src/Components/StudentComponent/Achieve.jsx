import React from "react";
import { Card } from "react-bootstrap";

const Achieve = () => {
  const achieve = [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition",
  ];

  return (
    <Card className="mb-3">
      <Card.Header className="header">Achievements</Card.Header>
      <Card.Body>
        <ul>
          {achieve.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Achieve;
