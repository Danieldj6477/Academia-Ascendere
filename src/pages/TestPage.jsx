// src/pages/TestPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Test from '../components/Test';

const TestPage = () => {
  return (
    <Container>
      <h1>Test de Finalización del Curso</h1>
      <Test numberOfQuestions={5} /> {/* Número de preguntas que deseas mostrar */}
    </Container>
  );
};

export default TestPage;
