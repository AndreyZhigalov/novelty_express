import React from 'react';

import chatIcon from '../../assets/img/icons/chat.svg';

import './footerShort.scss';
import '../ContactForm/contactForm.scss';

const Footer = () => {
  return (
    <footer className="footer_short">
      <article>
        <p>2022 © “Новелти диагностика и терапия”</p>
        <div>
          <p>Москва, Филевский бульвар, д. 39, офис 4</p>
          <div>
            <p>+7 495 118 40 48</p>
            <p>info@novelty.express</p>
          </div>
        </div>
        <img src={chatIcon} alt="" className="footer_short__chat-button" />
      </article>
    </footer>
  );
};

export default Footer;
