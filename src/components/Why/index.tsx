import React from 'react';

import barrelIcon from '../../assets/img/icons/barrel.svg';
import termometerIcon from "../../assets/img/icons/termometer.svg"
import box3D from "../../assets/img/covers/Credo-Cube--50-°C-4l.webp"
import ladaBack from "../../assets/img/covers/28_LADA_Largus_Termo_2.webp"
import ladaConditioner from '../../assets/img/covers/28_LADA_Largus_Termo_4.webp';
import deliveryMan from "../../assets/img/covers/28_LADA_Largus_Termo_3.webp"

import './why.scss';

const Why: React.FC = () => {
  return (
    <section className="why">
      <header>Почему мы?</header>
      <article className="why-card">
        <h2>
          <span>с</span>2013
        </h2>
        <header>
          Мы занимаемся доставкой радиофармпрепаратов с ультра-коротким периодом полураспада.
        </header>
        <p>
          * это диагностические и терапевтические лекарственные радиоактивные препараты которые
          теряют свою активность со временем.
        </p>
      </article>
      <div className="why__card-container">
        <article className="why-card_small">
          <figure className="why__card-icons">
            <img src={barrelIcon} alt="" />
            <img src={barrelIcon} alt="" />
          </figure>
          <p>Располагаем всем необходимым для перевозки опасных грузов на любые расстояния</p>
        </article>
        <article className="why-card_small">
          <figure className="why__card-icons">
            <img src={termometerIcon} alt="" />
          </figure>
          <p>Доставляем быстро и безопасно с соблюдением температурного режима</p>
        </article>
      </div>
      <article className="why-card">
        <img src={box3D} alt="" />
        <p>Используем качественные термоконтейнеры для наших перевозок</p>
      </article>
      <article className="why-card">
        <h3>Оборудование</h3>
        <p>
          Соответствует требованиям Приказа 646н и СП 3.3.2.3332−16, измерительные приборы внесены в
          Госреестр средств измерений.
        </p>
        <h3>Автопарк</h3>
        <p>
          Объем кузова<span>1,8 м³</span>
        </p>
        <p>
          Режим <br/>перевозки
          <span>-20°С до +12°С</span>
        </p>
        <p>
          Грузоподъемность
          <span>500 кг</span>
        </p>
      </article>
      <article className="why-card">
        <figure className="why-card__small-cover">
          <img src={ladaBack} alt="" />
          <img src={ladaConditioner} alt="" />
        </figure>
      </article>
      <article className="why-card">
        <img src={deliveryMan} alt="" className="why-card__large-cover" />
      </article>
    </section>
  );
};

export default Why;
