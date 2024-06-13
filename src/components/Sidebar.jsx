import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRocket, faDigitalTachograph, faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onSelectCategory }) => (
  <Nav className="flex-column sidebar">
    <Nav.Link onClick={() => onSelectCategory('all')}>
      <FontAwesomeIcon icon={faBook} /> Todos los cursos
    </Nav.Link>
    <Nav.Link onClick={() => onSelectCategory('Misionalidad')}>
      <FontAwesomeIcon icon={faRocket} /> Misionalidad
    </Nav.Link>
    <Nav.Link onClick={() => onSelectCategory('Innovación y Emprendimiento')}>
      <FontAwesomeIcon icon={faDigitalTachograph} /> Innovación y Emprendimiento
    </Nav.Link>
    <Nav.Link onClick={() => onSelectCategory('Educación Digital')}>
      <FontAwesomeIcon icon={faSearch} /> Educación Digital
    </Nav.Link>
    <Nav.Link onClick={() => onSelectCategory('Investigación')}>
      <FontAwesomeIcon icon={faSearch} /> Investigación
    </Nav.Link>
  </Nav>
);

export default Sidebar;
