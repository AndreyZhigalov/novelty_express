import React from 'react';
import useScreenSize from '../../hooks/useScreenSize';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import licenseLeftSnow from '../../assets/img/bgVectors/licenseLeftSnow.svg';
import licenseRightSnow from '../../assets/img/bgVectors/licenseRightSnow.svg';
import licensePhoto from '../../assets/img/license/license1.webp';
import licensePhoto2 from '../../assets/img/license/license2.webp';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import './ourLicense.scss';

const OurLicense: React.FC = () => {
  const screen = useScreenSize();
  const [slidesCount, setSlidesCount] = React.useState<number>(2);

  React.useEffect(() => {
    if (screen.width <= 680 && screen.width !== 0) {
      setSlidesCount(1);
    } else {
      setSlidesCount(2);
    }
  }, [screen]);

  return (
    <section className="ourLisence">
      <div className="ourLisence__background">
        <div className="ourLisence__background_fill"></div>
        <div className="ourLisence__background_fill2"></div>
        <img src={licenseLeftSnow} alt="licenseLeftSnow" />
        <img src={licenseRightSnow} alt="licenseRightSnow" />
        <div className="ourLisence__background_elipse-gradient1"></div>
        <div className="ourLisence__background_elipse-gradient2"></div>
        <div className="ourLisence__background_elipse-gradient3"></div>
      </div>
      <article>
        <header>Наши лицензии</header>
        <p>
          Компания <strong>“Новелти диагностика и терапия”</strong> оказывает полный комплекс
          логистических услуг в сфере здравоохранения. Для осуществления такой широкой деятельности,
          не обойтись без специальных документов. <strong>“Новелти диагностика и терапия”</strong> –
          лицензированный таможенный брокер, мы имеем право оказывать услуги по таможенному
          оформлению в любом регионе России и за пределами страны.
        </p>
      </article>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={slidesCount}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <img src={licensePhoto2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={licensePhoto} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={licensePhoto2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={licensePhoto} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurLicense;
