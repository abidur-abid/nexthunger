import React from 'react';
import Contactbanner from '../Components/Contactbanner';
import SectionTitle from '../Components/SectionTitle';
import Formcontact from '../Components/Formcontact';

const Contact = () => {
    return (
        <>
          <Contactbanner></Contactbanner>
          <SectionTitle title={'Contact Form'}></SectionTitle>
          <Formcontact></Formcontact>
        </>
    );
};

export default Contact;