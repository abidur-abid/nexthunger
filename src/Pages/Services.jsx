import React from 'react';
import ServicesBanner from '../Components/ServicesBanner';
import SectionTitle from '../Components/SectionTitle';
import SingleService from '../Components/SingleService';


const Services = () => {
    return (
        <>
          <ServicesBanner></ServicesBanner>
          <SectionTitle title={'Our Services'}></SectionTitle>
          <SingleService></SingleService>
        </>
    );
};

export default Services;