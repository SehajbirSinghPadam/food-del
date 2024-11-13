import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const companyLinks = [
    { href: 'https://food-del-frontend-fsqe.onrender.com/', text: 'Home' },
    { href: '', text: 'Terms and Conditions' },
    { href: '', text: 'Refund Policy' },
    { href: '', text: 'Contact' },
  ];

  const contactInfo = [
    { type: 'phone', value: '9779665444' },
    { type: 'email', value: 'singhsehajbir1906@gmail.com' },
  ];

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section footer-content-left">
          <img src={assets.logo} alt="Snapbite Logo" />
          <p>"Discover flavors that connect with your soul, crafted just for you by Snapbite."</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" title="Facebook" aria-label="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" title="Twitter" aria-label="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" title="LinkedIn" aria-label="LinkedIn" />
          </div>
        </div>

        <div className="footer-section footer-content-center">
          <h2>Company</h2>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index}>
                {info.type === 'phone' ? (
                  <a href={`tel:${info.value}`}>{info.value}</a>
                ) : (
                  <a href={`mailto:${info.value}`}>{info.value}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        &copy; 2024 Snapbite.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
