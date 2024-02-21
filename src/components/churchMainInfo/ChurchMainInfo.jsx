import React from 'react';
import './ChurchMainInfo.scss';
import './ChurchMainInfoMedia.scss';

const ChurchMainInfo = () => {
    return (
        <div className='church-info'>
            <div className="container">
                <div className="block">
                    <img className='main-img' src={process.env.PUBLIC_URL + '/img/Prayer.png'}alt="" />
                    <div className="info">
                        <img className='info__img' src={process.env.PUBLIC_URL + '/img/Bible.png'}alt="" />
                        <div className="info__about">
                            <p className='info__main-text'>
                                Lorem Ipsum
                            </p>
                            <hr className='info__line' />
                            <p className='info__text'>
                                <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. 
                                In, illo veritatis, est deserunt facere doloribus aliquid modi soluta vero.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, asperiores et quibusdam doloribus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChurchMainInfo;