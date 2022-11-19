import React from 'react';

import deliveryCover from '../../assets/img/covers/man-by-truck-guy-delivery-uniform-man-with-clipboard_1157-461921.webp';
import deliveryRightSnow from '../../assets/img/bgVectors/deliveri_right_snow.svg';
import deliveryLeftSnow from '../../assets/img/bgVectors/deliveri_left_snow.svg';
import useScreenSize from '../../hooks/useScreenSize';
import './whoAreWe.scss';

const WhoAreWe: React.FC = () => {
  const [showText, setShowText] = React.useState<boolean>(false);
  const screen = useScreenSize();
  
  React.useEffect(() => {
    if (screen.width > 680) {
      setShowText(true);
    }
  }, [screen]);

  return (
    <section className="whoAreWe">
      <div className="whoAreWe__background">
        <div className="whoAreWe__background_fill"></div>
        <div className="whoAreWe__background_fill2"></div>
        <img src={deliveryRightSnow} alt="deliveryRightSnow" />
        <img src={deliveryLeftSnow} alt="deliveryLeftSnow" />
        <div className="whoAreWe__background_elipse-gradient1"></div>
        <div className="whoAreWe__background_elipse-gradient2"></div>
        <div className="whoAreWe__background_elipse-gradient3"></div>
      </div>
      <article>
        <header>Кто мы?</header>
        <p>
          <strong>Компания “Новелти диагностика и терапия”</strong> была создана как фарм.
          дистрибьютор зарубежных производителей радиофармпрепаратов и её основной задачей был вывод
          на российский рынок импортной продукции для ядерной медицины.
          <span onClick={() => setShowText(!showText)}>
            {showText ? 'свернуть' : 'читать далее...'}
          </span>
        </p>
        {showText && (
          <p>
            Далее мы преобразовались в сервисный центр, который обеспечивает таможенное оформление,
            доставку, сертификацию, логистические решение, мультимодальные перевозки медицинских
            грузов, в том числе новых препаратов для проведения клинических исследований.
          </p>
        )}
      </article>
      <img src={deliveryCover} alt="" />
    </section>
  );
};

export default WhoAreWe;
