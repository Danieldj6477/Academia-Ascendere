// src/components/Sidebar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ onSelectCategory }) => {
  return (
    <div className="sidebar">
      <h5>Cursos</h5>
      <Nav defaultActiveKey="all" className="flex-column">
        <Nav.Link eventKey="all" onClick={() => onSelectCategory('all')}>
          Todos los cursos
        </Nav.Link>
        <Nav.Link eventKey="category1" onClick={() => onSelectCategory('category1')}>
          Categoría 1
        </Nav.Link>
        <Nav.Link eventKey="category2" onClick={() => onSelectCategory('category2')}>
          Categoría 2
        </Nav.Link>
        {/* Agrega más categorías según sea necesario */}
      </Nav>
    </div>
  );
};

export default Sidebar;
