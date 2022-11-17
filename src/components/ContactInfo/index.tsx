import React from 'react'
import useScreenSize from '../../hooks/useScreenSize';

import mapCover from '../../assets/img/covers/map.jpg';

import "./contactInfo.scss"

const ContactInfo = () => {
  const screen = useScreenSize();
  return (
    <div className="contact-info">
      <header>Как с нами связаться?</header>
      <article>
        <div>
          <p>
            <strong>+7 495 118 40 48</strong>
          </p>
          <p>info@novelty.express</p>
        </div>
        <div>
          <h2>Адрес</h2>
          <p>Москва, Филевский бульвар, д. 39, офис 4</p>
        </div>
        <div>
          <h2>Режим работы</h2>
          <p>
            Приём заказов{screen.width > 680 && ' на сайте'}: <strong>24/7</strong>
            <br />
            Офис и Склад: <strong>8:00-18:30</strong>
          </p>
        </div>
      </article>
      <figure>
        <img src={mapCover} alt="" />
      </figure>
    </div>
  );
}

export default ContactInfo