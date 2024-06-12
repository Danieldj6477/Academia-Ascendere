import React from 'react';
import BannerImage from '../assets/Portada Academia Ascendere_1.png'; // Asegúrate de que esta ruta sea correcta

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Banner" className="banner-image" />
      <div className="linea-divisoria"></div> {/* Línea divisoria */}
    </div>
  );
};

export default Banner;