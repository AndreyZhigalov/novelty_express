import React from 'react';

import Main from '../../components/Main';
import OurOffer from '../../components/OurOffer';
import Why from '../../components/Why';
import HowWeWork from '../../components/HowWeWork';
import OurPartners from '../../components/OurPartners';
import Footer from '../../components/Footer';

import "./home.scss"

const Home: React.FC = () => {
  
  return (
    <div className="home-page">
      <Main/>
      <OurOffer/>
      <Why />
      <HowWeWork/>
      <OurPartners />
      <Footer/>
    </div>
  );
};

export default Home;
