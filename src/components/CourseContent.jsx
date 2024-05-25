// src/components/CourseContent.jsx
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

const CourseContent = () => {
  return (
    <div>
      <h1>Creación de contenidos educativos utilizando la IA</h1>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/VIDEO_ID" // Reemplaza con el ID del video de YouTube
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Tab.Container id="course-tabs" defaultActiveKey="unit1">
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="unit1">Unidad 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unit2">Creacion de contenidos con IA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unit3">Unidad 3</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unit4">Unidad 4</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unit5">Unidad 5</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="unit1">
            <h4>Unidad 1: Introducción a la IA</h4>
            <p>Contenido de la unidad 1...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="unit2">
            <h4>Unidad 2: Herramientas de IA</h4>
            <p>Contenido de la unidad 2...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="unit3">
            <h4>Unidad 3: Aplicaciones en Educación</h4>
            <p>Contenido de la unidad 3...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="unit4">
            <h4>Unidad 4: Creación de Contenido</h4>
            <p>Contenido de la unidad 4...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="unit5">
            <h4>Unidad 5: Evaluación y Mejora</h4>
            <p>Contenido de la unidad 5...</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default CourseContent;
