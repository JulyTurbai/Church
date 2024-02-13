import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import MainInfo from './main-info/MainInfo';

const Main = () => {
    return (
        <div className='main'>
            
            <Header/>
            <MainInfo/>
            <Footer/>

        </div>
    );
};

export default Main;