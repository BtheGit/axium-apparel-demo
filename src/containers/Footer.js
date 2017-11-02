import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../images/axiom-logo-small.png';
import imgIconFB from '../images/fb-icon.png';
import imgIconTwitter from '../images/twitter-icon.png';
import './Footer.css';

const Footer = () => {
  return(
    <footer>
      <section className="footer__inner">
        <img src={imgLogo} alt="Axium Apparel Logo"/>
        <nav className="footer__nav">
          <NavLink className="footer__link" to="/">About us</NavLink>
          <NavLink className="footer__link" to="/">Contact us</NavLink>
          <NavLink className="footer__link" to="/">Privacy Policy</NavLink>
          <NavLink className="footer__link" to="/">Terms Of Service</NavLink>
          <NavLink className="footer__link" to="/">Site Map</NavLink>
          <NavLink className="footer__link--icon" to="/">
            <img src={imgIconFB} alt="Facebook Icon" />
          </NavLink>
          <NavLink className="footer__link--icon" to="/">
            <img src={imgIconTwitter} alt="Twitter Icon" />
          </NavLink>     
        </nav>
      </section>
    </footer>
  )
}

export default Footer;