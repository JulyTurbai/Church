import React from 'react';
import './ChurchSocial.scss';

const ChurchSocial = () => {

    const icons = [
        'Message.png',
        'Heart.png',
        'Star.png',
        'Envelope.png'
    ]

    return (
        <div className='church-social'>
            <div className="block">
            <img className='church-social__img' src={process.env.PUBLIC_URL + '/img/Prayer2.png'}alt="" />
                <div className="social">
                    <ul className='social__items'>
                        {
                            icons.map(icon => 
                            <li className='social__item' key={icon}> 
                                <img src={process.env.PUBLIC_URL + `/img/icons/${icon}`}alt="" />
                                <div className="social__main-text">
                                    <p className="social__title">
                                        Lorem Ipsum
                                    </p>
                                    <p className="social__descr">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Ut ducimus fugit.
                                    </p>
                                </div>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChurchSocial;