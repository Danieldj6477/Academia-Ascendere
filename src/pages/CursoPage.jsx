// src/pages/CursoPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CourseContent from '../components/CourseContent';

const CursoPage = () => {
  const { cursoId } = useParams();
 

  return (
    <Container>
      <CourseContent />
    </Container>
  );
};

export default CursoPage;
