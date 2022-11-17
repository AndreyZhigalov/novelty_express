import React from 'react'
import ContactInfo from '../../components/ContactInfo';
import FooterShort from '../../components/FooterShort';

import "./contacts.scss"

const Contacts = () => {
  return (
    <div className="contacts">
      <ContactInfo/>
      <FooterShort />
    </div>
  );
}

export default Contacts