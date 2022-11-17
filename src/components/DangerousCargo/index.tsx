import React from 'react';

import cargoRightSnow from '../../assets/img/bgVectors/cargoRightSnow.svg';
import cargoLeftSnow from '../../assets/img/bgVectors/cargoLeftSnow.svg';
import cargoBottomSnow from '../../assets/img/bgVectors/cargoBottomSnow.svg';

import "./dangerousCargo.scss"

const DangerousCargo = () => {
  return (
    <section className="dangerous-cargo">
      <header>Перевозка радиоактивных грузов</header>
      <div className="dangerous-cargo__background">
        <div className="dangerous-cargo__background_fill"></div>
        <div className="dangerous-cargo__background_fill"></div>
        <div className="dangerous-cargo__background_fill"></div>
        <img src={cargoRightSnow} alt="cargoRightSnow" />
        <img src={cargoLeftSnow} alt="cargoLeftSnow" />
        <img src={cargoBottomSnow} alt="cargoBottomSnow" />
      </div>
      <article>
        <header>
          Типы <br />
          опасных грузов
        </header>
        <p>
          К данной категории относят любые материалы, вещества или отходы производства, которые
          могут нанести вред человеку и окружающей среде, привести к пожару, взрыву, гибели людей.
          Согласно международной классификации, выделяют 9 основных классов опасных грузов:
        </p>
        <ul>
          <li>Взрывчатые вещества </li>
          <li>Газы (сжиженные, под давлением)</li>
          <li>Легковоспламеняющиеся жидкости</li>
          <li>
            Легковоспламеняющиеся твердые вещества, в том числе способные к самовозгоранию и
            воспламеняющиеся при контакте с водой
          </li>
          <li>Окислители и органические пероксиды</li>
          <li>Токсичные и инфекционные вещества</li>
          <li>Коррозионные материалы </li>
          <li>Прочие опасные вещества и изделия </li>
          <li>Перевозка опасных грузов ЖД транспортом</li>
        </ul>
      </article>
      <article>
        <header>
          Как мы перевозим <br />
          опасные грузы
        </header>
        <p>
          Мы располагаем всем необходимым для перевозки опасных грузов на любые расстояния. Мы
          организуем перевозку опасных грузов железнодорожным, автомобильным, морским транспортом.
          Услуга предоставляется комплексно и включает следующие мероприятия:
        </p>
        <ul>
          <li>
            Мы поможем получить соответствующие разрешения, оформим сопроводительные документы,
            согласуем транспортировку в МВД Москвы и других городов РФ
          </li>
          <li>
            Разработаем маршрут с учетом правил перевозки, дорожной обстановки и других факторов
          </li>
          <li>
            Мы поможем быстро пройти растаможку груза, подготовить необходимые документы, рассчитать
            размер пошлин и сборов и т. д.
          </li>
          <li>
            Автомобильные перевозки осуществляются водителями с большим стажем и необходимыми
            допусками для работы с опасными грузами
          </li>
        </ul>
      </article>
    </section>
  );
};

export default DangerousCargo;
