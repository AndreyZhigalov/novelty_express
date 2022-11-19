import React from 'react'

import { Footer , OurOffer, Advantages,DangerousCargo  } from '../../components';

import "./offer.scss"

const Offer: React.FC = () => {
  return (
    <div className='offer-page'>
        <OurOffer/>
        <Advantages />
        <DangerousCargo/>
        <Footer/>
    </div>
  )
}

export default Offer