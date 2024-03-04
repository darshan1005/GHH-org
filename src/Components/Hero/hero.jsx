/* eslint-disable no-unused-vars */
import React from 'react';


import boy from '../../assets/School_boy_img.png'
import arrow from '../../assets/Arrows.png'

const Hero = () => {
    return (
        <>
            <section className='Hero-section' id='Home'>
                <div className="title-spans">
                    <span className="title1 c-title">Humanity</span>
                    <span className="title2 c-title">Bonds</span>
                    <span className="title3 c-title">Us</span>
                    <span className="title4 c-title">Together</span>
                </div>
                <div className="subtitle">
                    <div className="subtitle-statement">
                        <p className="statement">Uniting hands, like threads weaving hope, Grace Helping Hands organization forms a tapestry of change.</p>
                        <p className='sub_statement'>Let’s collaborate to make a positive difference in the world.</p>
                        <div className="join-btn-arrows">
                            <button className="join-us">Join us</button>
                            <img src={arrow} alt="arrows image" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src={boy} alt="School boy" />
                        </div>
                        <div className="card-content">
                            <h4>Join Us in Building a Beautiful World</h4>

                            <ul>
                                <li className="heading">Every day:</li>
                                <li className='semi-content'>100 million seek education.</li>
                                <li className='semi-content'>1 billion face food insecurity.</li>
                                <li className='semi-content'>150 million need shelter.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='hero-footer'>
                    <div className="black-div">
                        <h3>Together, let’s create change-one step, one act of kindness at a time</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
