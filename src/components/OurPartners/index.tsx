import React from 'react';

import bayerLogo from '../../assets/img/logos/bayer.webp';
import novartisLogo from '../../assets/img/logos/novartis.webp';
import encLogo from '../../assets/img/logos/enc.webp';
import rzdMeditsinaLogo from '../../assets/img/logos/rzd_meditsina.webp';
import emcLogo from '../../assets/img/logos/emc.webp';
import aoMeditsinaLogo from '../../assets/img/logos/ao_meditsina.webp';
import bolnitsaBaranovaLogo from '../../assets/img/logos/bolnitsa_baranova.webp';
import upbuhLogo from '../../assets/img/logos/upbuh.webp';

import "./ourPartners.scss"

const OurPartners: React.FC = () => {
  return (
    <section className="our-partners">
      <header>С кем работаем</header>
      <img src={bayerLogo} alt="" />
      <img src={novartisLogo} alt="" />
      <img src={encLogo} alt="" />
      <img src={rzdMeditsinaLogo} alt="" />
      <img src={emcLogo} alt="" />
      <img src={aoMeditsinaLogo} alt="" />
      <img src={bolnitsaBaranovaLogo} alt="" />
      <img src={upbuhLogo} alt="" />
    </section>
  );
};

export default OurPartners;
