// src/components/CourseCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Card className="course-card mb-4">
      <Card.Img variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Button as={Link} to={`/curso/${course.id}`} variant="primary" className="w-100">
          Ver Curso
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
