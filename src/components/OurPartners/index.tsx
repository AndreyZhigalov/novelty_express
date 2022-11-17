import React from 'react';

import bayerLogo from '../../assets/img/logos/bayer.png';
import novartisLogo from '../../assets/img/logos/novartis.png';
import encLogo from '../../assets/img/logos/enc.png';
import rzdMeditsinaLogo from '../../assets/img/logos/rzd_meditsina.png';
import emcLogo from '../../assets/img/logos/emc.png';
import aoMeditsinaLogo from '../../assets/img/logos/ao_meditsina.png';
import bolnitsaBaranovaLogo from '../../assets/img/logos/bolnitsa_baranova.png';
import upbuhLogo from '../../assets/img/logos/upbuh.png';

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
