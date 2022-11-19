import React from 'react';

import { Main, OurOffer, Why, HowWeWork, OurPartners, Footer } from '../../components';

import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Main />
      <OurOffer />
      <Why />
      <HowWeWork />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Home;
