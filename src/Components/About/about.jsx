/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

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
                <div className="adout-title">
                    <p className="title">About Us</p>
                </div>
                <div className="owner-details">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="lead">
                        <p className="details">Lead Name <br /> Other details</p>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="admin">
                        <p className="details">Admin Name <br /> Other details</p>
                    </div>
                </div>

                <div className="mission">
                    <h3>Our Mission</h3>
                    <div className="mission-statement">
                        <p className="statement">
                            Grace Helping Hands is an organization dedicated to assisting people, students, and the elderly by providing essential support using their own funds. Our mission is to make a positive impact on the lives of those in need by offering assistance with basic necessities and support services.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
