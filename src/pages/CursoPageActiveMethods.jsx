// src/pages/CursoPageActiveMethods.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CourseContentActiveMethods from '../components/CourseContentActiveMethods';

const CursoPageActiveMethods = () => {
  const { cursoId } = useParams();
 
  return (
    <Container>
      <CourseContentActiveMethods />
    </Container>
  );
};

export default CursoPageActiveMethods;
