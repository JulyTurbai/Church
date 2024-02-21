import React from 'react';
import './Footer.scss';
import './FooterMedia.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="block">
                    <img src={process.env.PUBLIC_URL + '/img/Logo-footer.png'}alt="" />
                    <hr className='footer-line' />
                    <div className="menu">
                        <ul className='menu__items'>
                            <li className='menu__block'>
                                <p className="menu__item">Home</p>
                                <p className="menu__item">About</p>
                                <p className="menu__item">Events</p>
                            </li>
                            <li className='menu__block'>
                                <p className="menu__item">Locations</p>
                                <p className="menu__item">Church</p>
                                <p className="menu__item">Activities</p>
                            </li>
                            <li className='menu__block'>
                                <p className="menu__item">Our Donators</p>
                                <p className="menu__item">Scholarships</p>
                                <p className="menu__item">Articles</p>
                            </li>
                            <li className='menu__block'>
                                <p className="menu__item">The Team</p>
                                <p className="menu__item">Blog</p>
                                <p className="menu__item">Contuct Us</p>
                            </li>
                        </ul>
                    </div>
                    <p className="reserved-info">2021-2022NowTheFuture.AllRightsReserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;