import React from 'react';
import { useLocation } from 'react-router-dom';

import fireIcon from '../../assets/img/icons/fire.svg';
import radiation from '../../assets/img/icons/radiation.svg';
import offerCover1 from '../../assets/img/covers/16104638528505.jpg';
import offerCover2 from '../../assets/img/covers/16104638528501.jpg';
import offerCover3 from '../../assets/img/covers/16104638528502.jpg';
import offerCover4 from '../../assets/img/covers/16104638528503.jpg';
import offerCover5 from '../../assets/img/covers/16104638528504.jpg';

import './ourOffer.scss';

const OurOffer: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <section className="our-offer">
      <header>
        {pathname.includes('our-offer') ? `Какие перевозки мы осуществляем?` : `Что мы предлагаем?`}
      </header>
      <figure className="our-offer__card">
        <img src={fireIcon} alt="" className="our-offer__card_fire-icon" />
        <img src={offerCover1} alt="" className="our-offer__card-cover" />
        <figcaption>
          Перевозка <br />
          <strong>опасных грузов</strong>
        </figcaption>
      </figure>
      <figure className="our-offer__card">
        <img src={radiation} alt="" className="our-offer__card_radioactive-icon" />
        <img src={offerCover2} alt="" className="our-offer__card-cover" />
        <figcaption>
          Перевозка радиофармпрепаратов <br />
          <strong>7 класса опасности</strong>
        </figcaption>
      </figure>
      <figure className="our-offer__card">
        <img src={offerCover3} alt="" className="our-offer__card-cover" />
        <figcaption>
          Перевозка медикаментов <br />
          <strong>с температурным режимом</strong>
        </figcaption>
      </figure>
      <div className="our-offer__card_small-container">
        <figure className="our-offer__card_small">
          <img src={offerCover4} alt="" className="our-offer__card_small-cover" />
          <figcaption>
            <strong>Криологистика</strong>
          </figcaption>
        </figure>
        <figure className="our-offer__card_small">
          <img src={offerCover5} alt="" className="our-offer__card_small-cover" />
          <figcaption>
            Транспортировка <br />
            <strong>биоматериалов</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default OurOffer;
