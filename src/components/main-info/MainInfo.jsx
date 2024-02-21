import React from 'react';
import './MainInfo.scss';
import './MainInfoMedia.scss';

const MainInfo = () => {
    return (
        <div className='main-info'>
            <div className="container">
                <div className="block">
                    <div className="block-info">
                        <div className="block-info__main-text">
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="block-info__text">
                            <p>
                                <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. 
                                In, illo veritatis, est deserunt facere doloribus aliquid modi soluta vero.
                            </p>
                        </div>
                        <button className='block-info__button'>
                            <p>Learn More</p>
                        </button>
                    </div>
                    <div className="block-info">
                        <div className="block-info__main-text">
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="block-info__text">
                            <p>
                                <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. 
                                In, illo veritatis, est deserunt facere doloribus aliquid modi soluta vero.
                            </p>
                        </div>
                        <button className='block-info__button--white'>
                            <p>Learn More</p>
                        </button>
                    </div>
                    <div className="block-info">
                        <div className="block-info__main-text">
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="block-info__text">
                            <p>
                                <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. 
                                In, illo veritatis, est deserunt facere doloribus aliquid modi soluta vero.
                            </p>
                        </div>
                        <button className='block-info__button'>
                            <p>Learn More</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;