import React from 'react';

import { Container } from './styles';

import irian from '../../assets/irian.jpg';

export default function index() {
  return (
    <Container>
      <div className="about-box" id="about">
        <img src={irian} alt="perfil" />
        <div className="box">
          <h1>ABOUT</h1>
          <p>
            Eu sou Irian Delgado, tenho 22 anos. Sou estudante de Engenharia
            informática e Sistemas Computacionais na UM.
          </p>
        </div>
      </div>
    </Container>
  );
}
