import React from 'react';

import fullframeCarCover from '../../assets/img/covers/28_LADA_Largus_Termo_2.webp';
import conditionerCover from '../../assets/img/covers/28_LADA_Largus_Termo_4_full.webp';
import trunkCover from '../../assets/img/covers/28_LADA_Largus_Termo_5.webp';
import conditionerCoverSmall from '../../assets/img/covers/28_LADA_Largus_Termo_4.webp';
import trunkCoverSmall from '../../assets/img/covers/28_LADA_Largus_Termo_7.webp';

import './ourCarPark.scss';

const OurCarPark: React.FC = () => {
  return (
    <section className="ourCarPark">
      <header>Наш автопарк</header>
      <img src={fullframeCarCover} alt="" />
      <img src={conditionerCover} alt="" />
      <img src={trunkCover} alt="" />
      <img src={conditionerCoverSmall} alt="" />
      <img src={trunkCoverSmall} alt="" />
      <article className="ourCarPark__card">
        <div className="ourCarPark__card-wrapper">
          <p>Объем кузова</p>
          <div className="ourCarPark__card-divider"></div>
          <span>1,8 м³</span>
        </div>
        <div className="ourCarPark__card-wrapper">
          <p>Режим перевозки</p>
          <div className="ourCarPark__card-divider"></div>
          <span>-20°С до +12°С</span>
        </div>
        <div className="ourCarPark__card-wrapper">
          <p>Грузоподъемность</p>
          <div className="ourCarPark__card-divider"></div>
          <span>500 кг</span>
        </div>
        <div className="ourCarPark__card-wrapper">
          <p>Итальянская холодильная установка</p>
          <div className="ourCarPark__card-divider"></div>
          <span>Zanotti</span>
        </div>
      </article>
    </section>
  );
};

export default OurCarPark;
