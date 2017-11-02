import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Dropdown from '../components/Dropdown';
import menuData from '../db/menuData';
import imgLogo from '../images/axiom-logo-main.png';
import imgIconFB from '../images/fb-icon.png';
import imgIconTwitter from '../images/twitter-icon.png';
import imgIconSearch from '../images/search-icon.png';

const Header = () => (
  <header className="header">
    <section className="header__main__outer">
      <div className="header__main__inner">
        <Link className="header__logo" to="/" >
          <img src={imgLogo} alt="Axiom Apparel Logo" />
        </Link>
        <nav className="header__main__nav">
          <section className="header__main__search">
            <input type="search" placeholder="SEARCH FOR GEAR" />
            <img src={imgIconSearch} alt="" />
          </section>
          <ul className="header__main__links">
            <figure>
              <Link to="/">
                <img src={imgIconFB} alt="Facebook Icon" />
              </Link>
            </figure>
            <figure>
              <Link to="/">
                <img src={imgIconTwitter} alt="Twitter Icon" />
              </Link>
            </figure>
            <Link to="/">My Account</Link>
            <Link to="/">Cart</Link>
            <Link to="/">Logout</Link>
          </ul>
        </nav>
      </div>
    </section>
    <section className="header__sub__outer">
      <div className="header__sub__inner">
        <Dropdown 
          content={menuData}
          className='sub__nav'
        />
      </div>
    </section>
  </header>
)



export default Header;