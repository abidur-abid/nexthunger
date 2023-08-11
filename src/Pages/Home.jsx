import React from 'react';
import Banner from '../Shared Components/Banner';
import Counter from '../Components/Counter';
import SectionTitle from '../Components/SectionTitle';
import Goals from '../Components/Goals';
import Fq from '../Components/Fq';



const Home = () => {
    return (
       <>
        <Banner></Banner>
        <SectionTitle title={"Company's Overview"}></SectionTitle>
        <Counter></Counter>
        <SectionTitle title={"Our Goals"}></SectionTitle>
        <Goals></Goals>
        <SectionTitle title={"FAQ"}></SectionTitle>
        <Fq></Fq>
       </>
    );
};

export default Home;