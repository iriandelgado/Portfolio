import React from 'react';

import { Container } from './styles';

import redes from '../../assets/redes.jpg';
import dados from '../../assets/dados.png';
import virtuais from '../../assets/virtuais.jpg';

function Portfolio() {
  return (
    <Container>
      <div className="port">
        <h1>PORTFOLIO</h1>
      </div>

      <div className="line"></div>
      <div className="img-box" id="portfolio">
        <img src={redes} alt="redes" />
        <img src={dados} alt="dados" />
        <img src={virtuais} alt="virtuais" />
      </div>

      <div className="line"></div>
    </Container>
  );
}

export default Portfolio;
