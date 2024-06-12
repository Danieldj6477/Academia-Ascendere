import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ onSelectCategory }) => {
  return (
    <Nav className="category-nav" variant="pills">
      <Nav.Item>
        <Nav.Link href="#" onClick={() => onSelectCategory('all')} className="active">Todos los cursos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" onClick={() => onSelectCategory('Misionalidad')}>Misionalidad</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" onClick={() => onSelectCategory('Innovación y Emprendimiento')}>Innovación y Emprendimiento</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" onClick={() => onSelectCategory('Educación Digital')}>Educación Digital</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" onClick={() => onSelectCategory('Investigación')}>Investigación</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
