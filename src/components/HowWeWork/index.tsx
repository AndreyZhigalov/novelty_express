import React from 'react';

import howRightSnow from '../../assets/img/bgVectors/howRightSnow.svg';
import howLeftSnow from '../../assets/img/bgVectors/howLeftSnow.svg';
import roadTrack from '../../assets/img/bgVectors/roadTrack.svg';
import cardBgSnow from '../../assets/img/bgVectors/cardBgSnow.svg';
import taskListCover from '../../assets/img/covers/task_list.webp';
import mapPointCover from '../../assets/img/covers/map_point.webp';
import carWithBoxiesCover from '../../assets/img/covers/car_with_boxies.webp';
import carOnARoadCover from '../../assets/img/covers/car_on_a_road.webp';

import './howWeWork.scss';

const howWeWork: React.FC = () => {
  return (
    <section className="how">
      <div className="how-background">
        <div className="how-background_fill"></div>
        <div className="how-background_fill2"></div>
        <img src={howRightSnow} alt="howRightSnow" />
        <img src={howLeftSnow} alt="howLeftSnow" />
        <img src={roadTrack} alt="roadTrack" />
      </div>
      <header>Как мы работаем?</header>
      <figure className="how-card">
        <img src={taskListCover} alt="" />
        <p>
          <span>01</span>Вы размещаете <br />
          <strong>заявку</strong>
        </p>
      </figure>
      <figure className="how-card">
        <img src={mapPointCover} alt="" />
        <p>
          <span>02</span>Вместе согласуем <br />
          <strong>маршрут</strong>
        </p>
      </figure>
      <figure className="how-card">
        <img src={carWithBoxiesCover} alt="" />
        <p>
          <span>03</span>Мы осуществляем <br />
          <strong>перевозку</strong>
        </p>
      </figure>
      <figure className="how-card">
        <div className="how-card__background">
          <img src={cardBgSnow} alt="cardBgSnow" />
        </div>
        <div className="how-card__background_shadow"></div>
        <img src={carOnARoadCover} alt="" />
        <p>
          Вы можете отследить движение вашего груза с помощью <strong>gps</strong>
        </p>
      </figure>
    </section>
  );
};

export default howWeWork;
