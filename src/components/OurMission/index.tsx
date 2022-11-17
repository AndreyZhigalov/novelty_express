import React from 'react';

import trackIcon from '../../assets/img/icons/track.svg';
import lightningIcon from '../../assets/img/icons/lightning.svg';
import handshakingCover from '../../assets/img/covers/handshaking.jpg';

import useScreenSize from '../../hooks/useScreenSize';

import './ourMission.scss';

const OurMission = () => {
  const [showMissionText, setShowMissionText] = React.useState<boolean>(false);
  const screen = useScreenSize();

  React.useEffect(() => {
    if (screen.width > 680) {
      setShowMissionText(true);
    }
  }, [screen]);

  return (
    <section className="ourMission">
      <article>
        <figure>
          <img src={lightningIcon} alt="lightning" />
          <img src={trackIcon} alt="track" />
        </figure>
        <header>Наша миссия</header>
        <p>
          Миссия <strong>Новелти</strong> – создание максимально эффективной логистической компании,
          лидера по скорости и надёжности предоставления полного комплекса логистических услуг.
          {showMissionText || (
            <span onClick={() => setShowMissionText(!showMissionText)}>читать ещё...</span>
          )}
          {showMissionText &&
            `Каждый день благодаря нашей работе мир становится лучше: мы спасаем и улучшаем качество
          жизни пациентов, больше людей получает доступ к самым современным и эффективным
          разработкам. Мы любим то, что мы делаем!`}
          {showMissionText && (
            <span onClick={() => setShowMissionText(!showMissionText)}>свернуть</span>
          )}
        </p>
      </article>
      <article>
        <div>
          <header>Наши ценности</header>
          <ul>
            <li>Клиентоориентиро-ванность</li>
            <li>Эффективность</li>
            <li>Результативность</li>
            <li>Честность и открытость</li>
          </ul>
        </div>
        <img src={handshakingCover} alt="" />
      </article>
    </section>
  );
};

export default OurMission;
