// src/components/Sidebar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ onSelectCategory }) => {
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item>
        <Nav.Link onClick={() => onSelectCategory('all')}>Todos los cursos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onSelectCategory('Misionalidad')}>Misionalidad</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onSelectCategory('Innovación y Emprendimiento')}>Innovación y Emprendimiento</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onSelectCategory('Educación Digital')}>Educación Digital</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onSelectCategory('Investigación')}>Investigación</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
