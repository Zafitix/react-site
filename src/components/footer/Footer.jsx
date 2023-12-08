import React from 'react';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="main__footer section__padding">

    <div className="main__footer-links">
      <div className="main__footer-links_logo">
        <img src={logo} alt="main_logo" />
        <p>5 Av. Anatole France, 75007 Paris, <br /> All Rights Reserved</p>
      </div>
      <div className="main__footer-links_div">
        <h4>Links</h4>
        <p>Partenarships</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="main__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="main__footer-links_div">
        <h4>Get in touch</h4>
        <p>5 Av. Anatole France, 75007 Paris</p>
        <p>085-132567</p>
        <p>info@keacash.com</p>
      </div>
    </div>

    <div className="main__footer-copyright">
      <p>@2021 Keacash. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;