import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import Blogbanner from '../Components/Blogbanner';
import Tabblog from '../Components/Tabblog';

const Blogs = () => {
    return (
        <>
          <Blogbanner></Blogbanner>
          <SectionTitle title={'Latest Blogs'}></SectionTitle>
          <Tabblog></Tabblog>
        
        </>
    );
};

export default Blogs;