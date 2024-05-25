// src/components/CategoryNav.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';

const CategoryNav = ({ onSelectCategory }) => {
  return (
    <Nav variant="tabs" defaultActiveKey="all">
      <Nav.Item>
        <Nav.Link eventKey="all" onClick={() => onSelectCategory('all')}>
          Todas las Categorías
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="category1" onClick={() => onSelectCategory('category1')}>
          Categoría 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="category2" onClick={() => onSelectCategory('category2')}>
          Categoría 2
        </Nav.Link>
      </Nav.Item>
      {/* Agrega más categorías según sea necesario */}
    </Nav>
  );
};

export default CategoryNav;
