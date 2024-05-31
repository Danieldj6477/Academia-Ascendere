// src/components/Test.jsx
import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { selectRandomQuestions } from '../utils/selectRandomQuestions';
import questionsData from '../data/questionsIA.json';

const Test = ({ numberOfQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const randomQuestions = selectRandomQuestions(questionsData.questions, numberOfQuestions);
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
    }
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
    </Container>
  );
};

export default Test;