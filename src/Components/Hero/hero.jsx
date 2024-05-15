/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';

import boy from '../../assets/hands-images/School_boy_img.png';
import foodhelp from '../../assets/hands-images/Food-help.jpg';
import tree from '../../assets/hands-images/tress-removebg-preview.png';
import sunshine from '../../assets/hands-images/sunshine.jpg';
import heart from '../../assets/hands-images/heart.jpg';
import arrow from '../../assets/Arrows.png';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageAnimation from './image-animation';

const Hero = () => {

    const images = [
        boy, sunshine, foodhelp, tree, heart
    ]

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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
                        <p className="statement" id='statement_id'>Uniting hands, like threads weaving hope, Grace Helping Hands organization forms a tapestry of change.</p>
                        <p  className='sub_statement'>Let’s collaborate to make a positive difference in the world.</p>
                        <div className="join-btn-arrows">
                            <a href="#Email-form">
                                <div className="join-us">Email Us</div>
                            </a>
                            <img data-aos='fade-left' data-aos-duration="1000" data-aos-delay="100" src={arrow} alt="arrows image"
                            className='arrow-image' />
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="card">
                        <div className="img-box">
                            <ImageAnimation images={images}  />
                        </div>
                        <div className="card-content">
                            <p>Join Us in Building a Beautiful World</p>
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
                    <div data-aos='fade-in' data-aos-duration="2000" data-aos-delay="80" className="black-div">
                        <h3>Together, let’s create change-one step, one act of kindness at a time</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
