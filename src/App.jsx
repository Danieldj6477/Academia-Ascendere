import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CourseList from './components/CourseList';
import Banner from './components/Banner';
import IAImage from './assets/IA.png';
import ActiveMethodsImage from './assets/Metodologias.png';
import CooperativeLearningImage from './assets/Gamificacion.png';
import AIToolsImage from './assets/Herramientas_IA.png';
import STEMImage from './assets/Stem.png';
import LeadershipImage from './assets/Humanismo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const allCourses = [
  {
    id: 1,
    title: 'Creación de contenidos educativos utilizando la IA',
    description: 'Aprende a crear contenido educativo utilizando herramientas de inteligencia artificial.',
    image: IAImage,
    category: 'Educación Digital'
  },
  {
    id: 2,
    title: 'Metodologías activas con tecnología',
    description: 'Descubre cómo aplicar metodologías activas en el aula utilizando tecnología.',
    image: ActiveMethodsImage,
    category: 'Innovación y Emprendimiento'
  },
  {
    id: 3,
    title: 'Aprendizaje cooperativo y gamificación para entornos híbridos',
    description: 'Explora el aprendizaje cooperativo y la gamificación en entornos híbridos.',
    image: CooperativeLearningImage,
    category: 'Innovación y Emprendimiento'
  },
  {
    id: 4,
    title: 'Herramientas de Inteligencia Artificial para la creación de recursos educativos',
    description: 'Descubre cómo utilizar herramientas de IA para crear recursos educativos.',
    image: AIToolsImage,
    category: 'Educación Digital'
  },
  {
    id: 5,
    title: 'Metodología STEM en educación en ingeniería con enfoque inclusivo',
    description: 'Aprende sobre la metodología STEM aplicada a la educación en ingeniería con un enfoque inclusivo.',
    image: STEMImage,
    category: 'Innovación y Emprendimiento'
  },
  {
    id: 6,
    title: 'Liderazgo desde el Humanismo de Cristo',
    description: 'Desarrolla habilidades de liderazgo basadas en el humanismo de Cristo.',
    image: LeadershipImage,
    category: 'Misionalidad'
  }
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = selectedCategory === 'all'
    ? allCourses
    : allCourses.filter(course => course.category === selectedCategory);

  return (
    <div>
      <Header />
      <Banner />
      <Container fluid className="main-container">
        <Row>
          <Col sm={3}>
            <Sidebar onSelectCategory={handleSelectCategory} />
          </Col>
          <Col sm={9}>
            <CourseList courses={filteredCourses} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
