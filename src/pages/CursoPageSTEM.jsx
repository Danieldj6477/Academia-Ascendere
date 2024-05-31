// src/pages/CursoPageSTEM.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CourseContentSTEM from '../components/CourseContentSTEM';

const CursoPageSTEM = () => {
  const { cursoId } = useParams();
  

  return (
    <Container>
      <CourseContentSTEM />
    </Container>
  );
};

export default CursoPageSTEM;
