import React from "react";
import { Card } from "react-bootstrap";

const ClubsAndSocieties = () => {
  const clubs = [
    "Literary Society",
    "Environmental Club",
    "Astronomy Club",
    "Coding Club",
  ];

  return (
    <Card className="mb-3">
      <Card.Header>Clubs and Societies</Card.Header>
      <Card.Body>
        <ul>
          {clubs.map((club, index) => (
            <li key={index}>{club}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ClubsAndSocieties;
