import React from 'react';
import { Link } from 'react-scroll';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="header-box">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h1>IRIAN DELGADO</h1>
        </Link>

        <nav>
          <ul>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>HOME</li>
            </Link>

            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
            >
              <li>PORTFOLIO</li>
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
            >
              <li>CONTACTO</li>
            </Link>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default Header;
