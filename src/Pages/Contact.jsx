import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm'
import Title from '../Components/Title/Title'
import Map from '../Components/Map/Map'

const Contact = () => {
  return (
    <div>
      <Title subtitle={"Contact us"} title={"Get in Touch"} />
      <Map />
      <ContactForm />
    </div>
  );
}

export default Contact