import React from 'react';

import { Container } from './styles';

import copryght from '../../assets/copy.png';

export default function index() {
  return (
    <Container>
      <div className="footer-box">
        <img src={copryght} alt="copryght" />
        <h1>IRIAN DELGADO</h1>
      </div>
    </Container>
  );
}
