// src/pages/CursoPageLeadership.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CourseContentLeadership from '../components/CourseContentLeadership';

const CursoPageLeadership = () => {
  const { cursoId } = useParams();
 

  return (
    <Container>
      <CourseContentLeadership />
    </Container>
  );
};

export default CursoPageLeadership;
