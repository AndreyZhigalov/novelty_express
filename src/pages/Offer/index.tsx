import React from 'react'
import Footer from '../../components/Footer'
import OurOffer from '../../components/OurOffer'
import Advantages from '../../components/Advantages'
import DangerousCargo from '../../components/DangerousCargo'

import "./offer.scss"

const Offer = () => {
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