import React from 'react';
import Footer from '../../components/Footer';
import OurCarPark from '../../components/OurCarPark';
import OurLicense from '../../components/OurLicense';
import OurMission from '../../components/OurMission';
import OurPartners from '../../components/OurPartners';

import WhoAreWe from '../../components/WhoAreWe';

import './about.scss';

const About = () => {
  return (
    <div className="about-page">
      <WhoAreWe />
      <OurMission />
      <OurCarPark/>
      <OurPartners />
      <OurLicense/>
      <Footer />
    </div>
  );
};

export default About;
