import React, { useState } from 'react';
import { Tab, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CourseContentActiveMethods = () => {
  const [activeKey, setActiveKey] = useState('unit1');

  const handleNext = (nextKey) => {
    setActiveKey(nextKey);
  };

  const videos = {
    unit1: [
      "https://www.youtube.com/embed/your-video-link-1"
    ],
    unit2: [
      "https://www.youtube.com/embed/your-video-link-2"
    ],
    unit3: [
      "https://www.youtube.com/embed/your-video-link-3"
    ],
    unit4: [
      "https://www.youtube.com/embed/your-video-link-4"
    ],
    unit5: [
      "https://www.youtube.com/embed/your-video-link-5"
    ]
  };

  return (
    <div className="course-content">
      <Container>
        <h1>Metodologías Activas con Tecnología</h1>
        <Tab.Container id="course-tabs" activeKey={activeKey}>
          <Nav variant="tabs" className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="unit1" onClick={(e) => e.preventDefault()}>Unidad 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit2" onClick={(e) => e.preventDefault()}>Unidad 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit3" onClick={(e) => e.preventDefault()}>Unidad 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit4" onClick={(e) => e.preventDefault()}>Unidad 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit5" onClick={(e) => e.preventDefault()}>Unidad 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sessions" onClick={(e) => e.preventDefault()}>Sesiones Presenciales y Videoconferencias</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="unit1">
              <h4>Introducción a las Metodologías Activas</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit1[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content-summary">
                {/* Contenido de la Unidad 1 */}
                <h2>Definición y Características</h2>
                <p>Las metodologías activas son enfoques de enseñanza que buscan involucrar a los estudiantes en el proceso de aprendizaje de manera más directa...</p>
                {/* Resto del contenido */}
              </div>
              <Button onClick={() => handleNext('unit2')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit2">
              <h4>Aprendizaje Basado en Proyectos</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit2[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content-summary">
                {/* Contenido de la Unidad 2 */}
                <h2>Definición y Principios</h2>
                <p>El Aprendizaje Basado en Proyectos (ABP) es una metodología en la que los estudiantes adquieren conocimientos y habilidades...</p>
                {/* Resto del contenido */}
              </div>
              <Button onClick={() => handleNext('unit3')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit3">
              <h4>Aprendizaje Basado en Problemas</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit3[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content-summary">
                {/* Contenido de la Unidad 3 */}
                <h2>Definición y Principios</h2>
                <p>El Aprendizaje Basado en Problemas (ABP) es una metodología educativa en la que los estudiantes aprenden sobre un tema...</p>
                {/* Resto del contenido */}
              </div>
              <Button onClick={() => handleNext('unit4')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit4">
              <h4>Aprendizaje Basado en Retos</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit4[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content-summary">
                {/* Contenido de la Unidad 4 */}
                <h2>Definición y Principios</h2>
                <p>El Aprendizaje Basado en Retos (ABR) es una metodología que involucra a los estudiantes en la resolución de retos...</p>
                {/* Resto del contenido */}
              </div>
              <Button onClick={() => handleNext('unit5')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit5">
              <h4>Aprendizaje Cooperativo y Gamificación</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit5[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content-summary">
                {/* Contenido de la Unidad 5 */}
                <h2>Definición y Principios</h2>
                <p>El Aprendizaje Cooperativo es una estrategia educativa en la que los estudiantes trabajan juntos para alcanzar objetivos comunes...</p>
                {/* Resto del contenido */}
              </div>
              <Button onClick={() => handleNext('sessions')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="sessions">
              <h4>Sesiones Presenciales y Videoconferencias</h4>
              <div className="content-summary">
                <h2>Horarios de Sesiones</h2>
                <p>En esta sección, encontrarás los horarios de las sesiones presenciales y videoconferencias...</p>
                {/* Resto del contenido */}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <Footer />
    </div>
  );
};

export default CourseContentActiveMethods;

