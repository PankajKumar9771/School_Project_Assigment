import React from 'react';
import { Card } from 'react-bootstrap';

const ExtracurricularActivities = () => {
  const activities = ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"];
  
  return (
    <Card className="mb-3">
      <Card.Header>Extracurricular Activities</Card.Header>
      <Card.Body>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ExtracurricularActivities;
