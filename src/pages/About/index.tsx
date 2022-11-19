import React from 'react';

import {
  Footer,
  OurCarPark,
  OurLicense,
  OurMission,
  OurPartners,
  WhoAreWe,
} from '../../components';

import './about.scss';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <WhoAreWe />
      <OurMission />
      <OurCarPark />
      <OurPartners />
      <OurLicense />
      <Footer />
    </div>
  );
};

export default About;
