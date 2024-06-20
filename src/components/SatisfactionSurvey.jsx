import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import EmojiRating from './EmojiRating'; // Importa el nuevo componente de emoticones

const SatisfactionSurvey = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Manejar el envío de la encuesta
    alert('Encuesta enviada. ¡Gracias por tu feedback!');
  };

  return (
    <Container className="mt-5">
      <h2>Encuesta de Satisfacción</h2>
      <Form onSubmit={handleSubmit}>
        <EmojiRating question="Califique su nivel de satisfacción con las tareas o actividades que se han llevado a cabo durante el desarrollo del curso" />
        <EmojiRating question="Califique el nivel organizativo y de ejecución del curso de formación" />
        <EmojiRating question="Cree que le resultará útil este curso de formación para aplicarlo en su modelo de enseñanza " />
        <Form.Group controlId="¿Recomendaría este curso de formación a alguien más?" className="mt-3">
          <Form.Label>¿Recomendaría este curso de formación a alguien más?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Enviar Encuesta
        </Button>
      </Form>
    </Container>
  );
};

export default SatisfactionSurvey;
