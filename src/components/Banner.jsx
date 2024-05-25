// src/components/Banner.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerImage from '../assets/Portada Academia Ascendere_1.png';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <Container>
        <Row>
          <Col className="text-center">
            <h1></h1>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
