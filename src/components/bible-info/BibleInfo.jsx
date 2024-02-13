import React from 'react';
import './BibleInfo.scss';

const BibleInfo = () => {
    return (
        <div className='bible-info'>
            <div className="container">
                <div className="block">
                    <div className="articals">
                        <div className="articals__lines">
                            <hr className='articals__line1'/>
                            <hr className='articals__line2'/>
                        </div>
                        <ul className='articals__items'>
                            <li className='articals__item'>
                                <p className='articals__title'>
                                    Lorem Ipsum
                                </p>
                                <p className='articals__descr'>
                                    <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. 
                                    Facilis cumque tempora commodi qui iste neque nesciunt sint 
                                    numquam eum. Blanditiis, enim neque. Eveniet placeat nesciunt 
                                    odit illum dolor eius quia.
                                </p>
                            </li>
                            <li className='articals__item'>
                                <p className='articals__title'>
                                    Lorem Ipsum
                                </p>
                                <p className='articals__descr'>
                                    <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. 
                                    Facilis cumque tempora commodi qui iste neque nesciunt sint 
                                    numquam eum. Blanditiis, enim neque. Eveniet placeat nesciunt 
                                    odit illum dolor eius quia.
                                </p>
                            </li>
                        </ul>
                        <img src={process.env.PUBLIC_URL + '/img/Bible2.png'}alt="" />
                    </div>
                    <img className='bible-info__img' src={process.env.PUBLIC_URL + '/img/AnnaDoe.png'}alt="" />
                </div>
            </div>
        </div>
    );
};

export default BibleInfo;