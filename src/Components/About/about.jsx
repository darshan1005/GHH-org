/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Emailjs from '../../Components/Emailjs/EmailForm'

import Lead from '../../assets/leads/Lead.jpg'
import Admin from '../../assets/leads/Admin.jpg'

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div id="Aboutus"></div>
            <section className="about-section" >
                <p className="adout-title">About Us</p>

                <div className="owner-details">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="lead">
                        <img src={Admin} alt="Admin" />
                        <p className="Lead-name"> Dasetti Hema latha</p>
                        <p className='lead-title'> Grace Helping Hands - Lead</p>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="admin">
                        <img src={Lead} alt="Lead" />
                        <p className="Admin-name">Metta Bhanupratap</p>
                        <p className='admin-title'> Grace Helping Hands - Admin</p>
                    </div>
                </div>

                <div className="mission">
                    <h3 className='mission-title'>Our Mission</h3>
                    <div className="mission-statement">
                        <p className="statement">
                            We have started this organization as group of friends who are willing to make lives of people around them better. Our mission is to make lives of people better by  providing the basic necessities. We may not able to help everyone but we are trying to help because <b>WE BELIEVE HUMANITY DRIVES THE WORLD</b>.
                        </p>
                    </div>
                </div>
                <div className='Email-Form' id='Email-form'>
                    <Emailjs />
                </div>
            </section>
        </>
    )
}

export default About;
