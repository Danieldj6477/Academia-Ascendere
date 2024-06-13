// src/tests_1/UnitTest.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questionsIA.json'; // Asegúrate de tener las preguntas en un archivo JSON

const UnitTest = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();

  const handleTestCompletion = () => {
    // Aquí se debería manejar la lógica para evaluar el test y, si es correcto, permitir avanzar
    navigate(`/course/IA/unit${parseInt(unitId) + 1}`);
  };

  return (
    <div>
      <h2>Test para Unidad {unitId}</h2>
      {/* Aquí va la lógica del test */}
      <button onClick={handleTestCompletion}>Completar Test y Avanzar</button>
    </div>
  );
};

export default UnitTest;
