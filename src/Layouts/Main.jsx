import React from 'react';
import Header from '../Shared Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared Components/Footer';

const Main = () => {
    return (
        <>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
    );
};

export default Main;