import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className="block">
                <div className="container">
                    <div className="send">
                        <h2>Newslatter</h2>
                        <form className='news' id='news'>
                            <div className="form-main">
                                <div className="name-send">
                                    <label for="name">First Name*</label>
                                    <input className='name' id='name' type="text" name='name'/>
                                </div>
                                <div className="last-send">
                                    <label for="last">Last Name*</label>
                                    <input className='last' id='last' type="text" name='last'/>
                                </div>
                            </div>
                            <div className="send-email">
                                <label for="email">Email Subject*</label>
                                <input className='email' id='email' type="text" name='email'/>
                            </div>
                            <div className="send-messege">
                                <label for="message">Type your message here...</label>
                                <input className='message' id='message' type="text" name='message'/>
                            </div>
                        </form>
                    </div>
                    <button type='submit' form="news" value="Submit">Submit Email</button>
                </div>
                <img  src={process.env.PUBLIC_URL + '/img/Newsletter-img.png'}alt="" />
            </div>
        </div>
    );
};

export default Newsletter;