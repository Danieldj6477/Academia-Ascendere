// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Ascendere</h5>
            <p>liid_utpl@utpl.edu.ec</p>
            <p>370 1444 ext 2851 | 2316</p>
            <p>Edificio 9, Planta 3</p>
            <p>Universidad Técnica Particular de Loja</p>
          </Col>
          <Col md={4}>
            <h5>Sobre nosotros</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Nuestro equipo</a></li>
              <li><a href="#!">Proyecto Ascendere</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Redes sociales</h5>
            <ul className="list-unstyled social-icons">
              <li><a href="#!"><FaFacebook /></a></li>
              <li><a href="#!"><FaTwitter /></a></li>
              <li><a href="#!"><FaInstagram /></a></li>
              <li><a href="#!"><FaTiktok /></a></li>
              <li><a href="#!"><FaYoutube /></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mt-3">
            <p>&copy; 2024 Universidad Técnica Particular de Loja</p>
            <p>Desarrollado por <a href="#!">LiiD UTPL</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
