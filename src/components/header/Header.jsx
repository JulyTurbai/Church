import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="block">
                    <div className="main-block">
                        <div className="part-one">
                            <div className="part-one__img">
                                <img src={process.env.PUBLIC_URL + '/img/icons/HomeIcon.png'}alt="" />
                            </div>
                            <form className='part-one__form'>
                                <p>Search...</p>
                                <input className='part-one__input' type="text" />
                                <img src={process.env.PUBLIC_URL + '/img/icons/Search.png'}alt="" />
                            </form>
                        </div>
                        <div className="part-two">
                            <div className="part-two__main-text">
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="part-two__text">
                                <p>
                                    <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. 
                                    In, illo veritatis, est deserunt facere doloribus aliquid modi soluta vero 
                                    laudantium possimus voluptates laborum dolorem iure sapiente? Illo porro nisi aliquam.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="main-block__cloud1">
                            <img src={process.env.PUBLIC_URL + '/img/Cloud1.png'}alt="" />
                        </div>
                        <div className="main-block__cloud2">
                            <img src={process.env.PUBLIC_URL + '/img/Cloud2.png'}alt="" />
                        </div>
                    </div>
                        <img className='main-img' src={process.env.PUBLIC_URL + '/img/Main-img.png'} alt="" />   
                </div>
            </div>
        </div>
    );
};

export default Header;