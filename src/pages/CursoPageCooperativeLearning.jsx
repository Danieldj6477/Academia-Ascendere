// src/pages/CursoPageCooperativeLearning.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CourseContentCooperativeLearning from '../components/CourseContentCooperativeLearning';

const CursoPageCooperativeLearning = () => {
  const { cursoId } = useParams();
  

  return (
    <Container>
      <CourseContentCooperativeLearning />
    </Container>
  );
};

export default CursoPageCooperativeLearning;
