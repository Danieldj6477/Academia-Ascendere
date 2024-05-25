// src/components/CourseDetail.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseDetail = ({ title, description, salary, jobOffers, growth, image }) => {
  return (
    <Card className="mb-3">
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>Salario medio</Card.Title>
        <Card.Text>
          <strong>Todas las profesiones:</strong> {salary.allProfessions} <br />
          <strong>{title}:</strong> {salary.courseProfession}
        </Card.Text>
        <Card.Text>
          <strong>Ofertas de empleo:</strong> {jobOffers} <br />
          <strong>Crecimiento proyectado a 10 años:</strong> {growth}
        </Card.Text>
        <Card.Img variant="top" src={image} />
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={`/curso/${title.toLowerCase().replace(/ /g, '-')}`}>
          Ver Curso
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseDetail;
