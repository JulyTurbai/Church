import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import MainInfo from './main-info/MainInfo';
import ChurchMainInfo from './churchMainInfo/ChurchMainInfo';
import ChurchSocial from './church-social/ChurchSocial';
import BibleInfo from './bible-info/BibleInfo';
import JoinChurch from './join-church/JoinChurch';
import Articals from './articals/Articals';
import Brochures from './brochures/Brochures';
import Comment from './comment/Comment';
import Newsletter from './newsletter/Newsletter';

const Main = () => {
    return (
        <div className='main'>
            
            <Header/>
            <MainInfo/>
            <ChurchMainInfo/>
            <ChurchSocial/>
            <BibleInfo/>
            <JoinChurch/>
            <Articals/>
            <Brochures/>
            <Comment/>
            <Newsletter/>
            <Footer/>

        </div>
    );
};

export default Main;