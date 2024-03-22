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
                <p className="adout-title">About Us</p>

                <div className="owner-details">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="lead">
                        <p className="details">Botsa Hemalatha <br /> GHH Lead</p>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="admin">
                        <p className="details">Metta Bhanupratap <br /> GHH Administrator</p>
                    </div>
                </div>

                <div className="mission">
                    <h3>Our Mission</h3>
                    <div className="mission-statement">
                        <p className="statement">
                            We have started this organization as group of friends who are willing to make lives of people around them better. Our mission is to make lives of people better by  providing the basic necessities. We may not able to help everyone but we are trying to help because <b>WE BELIEVE HUMANITY DRIVES THE WORLD</b>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
