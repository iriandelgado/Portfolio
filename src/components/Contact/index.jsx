import React from 'react';
import { Container } from './styles';

import phone from '../../assets/phone.png';
import github from '../../assets/github.png';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import localizacao from '../../assets/localiza.png';

export default function index() {
  return (
    <Container>
      <div className="text">
        <h1>CONTACT</h1>
      </div>

      <div className="contact-box" id="contact">
        <div className="box">
          <img src={phone} alt="telefone" />
          <h1>Phone</h1>
          <p>9932274</p>
        </div>

        <div className="box">
          <img src={github} alt="github" />
          <h1>Github</h1>
          <p>https://github.com/iriandelgado</p>
        </div>

        <div className="box">
          <img src={email} alt="email" />
          <h1>E-mail</h1>
          <p>iriandelgado98@gmil.com</p>
        </div>

        <div className="box">
          <img src={facebook} alt="facebook" />
          <h1>Facebook</h1>
          <p>iriandelgado98@gmail.com</p>
        </div>

        <div className="box">
          <img src={instagram} alt="instagram" />
          <h1>Instagram</h1>
          <p>lovelydiaz</p>
        </div>

        <div className="box">
          <img src={localizacao} alt="localizacao" />
          <h1>Localização</h1>
          <p>Mindelo</p>
        </div>
      </div>
    </Container>
  );
}
