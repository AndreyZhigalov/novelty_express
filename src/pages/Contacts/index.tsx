import React from 'react'

import { ContactInfo ,FooterShort } from '../../components';

import "./contacts.scss"

const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <ContactInfo/>
      <FooterShort />
    </div>
  );
}

export default Contacts