import React from 'react';
import './JoinChurch.scss';
import './JoinChurchMedia.scss';

const JoinChurch = () => {
    return (
        <div className='join-church'>
            <img className='join-img' src={process.env.PUBLIC_URL + '/img/JoinChurchBack.png'}alt="" />
            <div className="container">
                <div className="block">
                    <div className="main-block">
                        <div className="join-main">
                            <div className="join-main__text">
                                <p className="join-main__title">
                                    Join us in relishing<br/>
                                    his loving presence
                                </p>
                                <p className="join-main__descr">
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <p className='join-main__number'>01</p>
                        </div>
                        <hr className='main-line'/>
                        <div className="join-about">
                            <p className='join-about__descr'>
                                <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing 
                                elit. Optio mollitia, alias perspiciatis tempore 
                                magni iusto nam possimus sint eligendi? Labore 
                                maiores repellendus necessitatibus fuga ullam, 
                                rerum deleniti ea doloremque iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quam soluta nesciunt deserunt magnam omnis
                            </p>
                            <hr className='join-about__line'/>
                            <p className='join-about__main-text'>Keep your<br/>faith in Him</p>
                            <img className='join-about__img' src={process.env.PUBLIC_URL + '/img/Circle.png'}alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinChurch;