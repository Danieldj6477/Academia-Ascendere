// src/pages/CursoPageAITools.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CourseContentAITools from '../components/CourseContentAITools';

const CursoPageAITools = () => {
  const { cursoId } = useParams();
  
  return (
    <Container>
      <CourseContentAITools />
    </Container>
  );
};

export default CursoPageAITools;
