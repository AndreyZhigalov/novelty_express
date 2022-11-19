import React from 'react'
import { useAppDispatch } from '../../Redux/hooks';
import { setShowForm } from '../../Redux/slices/contactFormSlice';

import manImage from '../../assets/img/covers/man-by-truck-guy-delivery-uniform-man-with-clipboard_1157-46192.webp';
import deliveryRightSnow from '../../assets/img/bgVectors/deliveri_right_snow.svg';
import deliveryLeftSnow from '../../assets/img/bgVectors/deliveri_left_snow.svg';

import "./main.scss"

const HomeMain: React.FC = () => {
    const dispatch = useAppDispatch();
  return (
    <section className="main">
      <div className="main-background">
        <div className="main-background_fill"></div>
        <div className="main-background_fill2"></div>
        <img src={deliveryRightSnow} alt="deliveryRightSnow" />
        <img src={deliveryLeftSnow} alt="deliveryLeftSnow" />
        <div className="main-background_elipse-gradient1"></div>
        <div className="main-background_elipse-gradient2"></div>
        <div className="main-background_elipse-gradient3"></div>
      </div>
      <article>
        <header>
          Экспресс <br />
          <span>доставка</span> вакцин <br />и биопрепаратов
        </header>
        <p>
          Доставка день в день после
          <br /> оставления заявки
        </p>
        <button className="form-button" onClick={() => dispatch(setShowForm())}>
          Оставить заявку
        </button>
      </article>
      <figure className="delivery-cover">
        <figcaption className="delivery-cover__icon">Экспресс доставка</figcaption>
        <span className="delivery-cover__icon_shadow"></span>
        <img src={manImage} alt="Доставщик" />
      </figure>
    </section>
  );
}

export default HomeMain