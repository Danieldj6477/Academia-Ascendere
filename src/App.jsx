// src/App.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CourseList from './components/CourseList';
import Banner from './components/Banner';
import IAImage from './assets/IA.png'; // Importa la imagen
import ActiveMethodsImage from './assets/Metodologias.png'; // Importa la imagen generada

const allCourses = [
  {
    id: 1,
    title: 'Creación de contenidos educativos utilizando la IA',
    description: 'Aprende a crear contenido educativo utilizando herramientas de inteligencia artificial.',
    image: IAImage,
    category: 'category1'
  },
  {
    id: 2,
    title: 'Metodologías activas con tecnología',
    description: 'Descubre cómo aplicar metodologías activas en el aula utilizando tecnología.',
    image: ActiveMethodsImage,
    category: 'category2'
  },
  // Agrega más cursos aquí
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
