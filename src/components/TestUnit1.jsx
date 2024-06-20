import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap';
import { selectRandomQuestions } from '../utils/selectRandomQuestions';
import questionsData from '../data/questionsIA.json';
import { useNavigate } from 'react-router-dom';

const TestUnit1 = ({ numberOfQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para manejar el modal
  const navigate = useNavigate();

  useEffect(() => {
    const unit1Questions = questionsData.unit1 || []; // Filtra preguntas específicas de la unidad 1
    const randomQuestions = selectRandomQuestions(unit1Questions, numberOfQuestions);
    setQuestions(randomQuestions);
  }, [numberOfQuestions]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
      setShowModal(true); // Mostrar el modal cuando se completa el test
    }
  };

  const handleNextUnit = () => {
    navigate('/satisfaccion'); // Navega a la página de encuesta de satisfacción
  };

  return (
    <Container>
      {showScore ? (
        <div>
          <h2>Tu puntuación es: {score} de {questions.length}</h2>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestionIndex]?.question}</h3>
          <Form>
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                name="option"
                label={option}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
            ))}
          </Form>
          <Button onClick={handleNextQuestion} className="mt-3">
            Siguiente
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Felicitaciones!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Has completado el test. ¡Buen trabajo!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleNextUnit}>
            Ir a la Encuesta de Satisfacción
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TestUnit1;
