import React from 'react';
import './Articals.scss';
import './ArticalsMedia.scss';

const Articals = () => {
    return (
        <div className='articals'>
            <div className="container">
                <div className="block">
                    <div className="artical">
                        <img className='artical__img' src={process.env.PUBLIC_URL + '/img/AnnaDoeLittle.png'}alt="" />
                        <div className="artical__main">
                            <p className="artical__title">
                                Lorem Ipsum<br/> dolor sit
                            </p>
                            <p className='artical__text'>
                                <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. 
                                Recusandae sunt aliquid tempore excepturi tempora veniam nam! 
                                Dolores ullam hic illum nisi. 
                            </p>
                        </div>
                    </div>
                    <div className="artical">
                        <img className='artical__img' src={process.env.PUBLIC_URL + '/img/BibleLittle.png'}alt="" />
                        <div className="artical__main">
                            <p className="artical__title">
                                Lorem Ipsum<br/> dolor sit
                            </p>
                            <p className='artical__text'>
                                <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. 
                                Recusandae sunt aliquid tempore excepturi tempora veniam nam! 
                                Dolores ullam hic illum nisi. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articals;