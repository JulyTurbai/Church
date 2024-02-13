import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import MainInfo from './main-info/MainInfo';
import ChurchMainInfo from './churchMainInfo/ChurchMainInfo';
import ChurchSocial from './church-social/ChurchSocial';
import BibleInfo from './bible-info/BibleInfo';
import JoinChurch from './join-church/JoinChurch';

const Main = () => {
    return (
        <div className='main'>
            
            <Header/>
            <MainInfo/>
            <ChurchMainInfo/>
            <ChurchSocial/>
            <BibleInfo/>
            <JoinChurch/>
            <Footer/>

        </div>
    );
};

export default Main;