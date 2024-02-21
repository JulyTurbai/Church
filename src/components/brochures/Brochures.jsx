import React from 'react';
import './Brochures.scss';
import './BrochuresMedia.scss';

const Brochures = () => {
    return (
        <div className='brochures'>
            <div className="block">
                <div className="brochure">
                    <p className="brochure__title">
                        Lorem Ipsum
                    </p>
                    <p className="brochure__descr">
                    <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit. 
                        Ducimus rerum omnis voluptatibus, quasi ad, beatae consequatur, 
                        
                    </p>
                    <button className="brochure__button">
                        Learn more
                    </button>
                </div>
                <div className="brochure--two">
                    <img className='join-img' src={process.env.PUBLIC_URL + '/img/Prayer3.png'}alt="" />
                    <p className="brochure__title">
                        Lorem Ipsum
                    </p>
                    <p className="brochure__descr">
                        <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit. 
                        Ducimus rerum omnis voluptatibus, quasi ad, beatae consequatur, 
                        
                    </p>
                    <button className="brochure__button--white">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Brochures;