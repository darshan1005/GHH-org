/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import work from './work';
import Image from './image-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const works = work();

    return (
        <>
            <div id='Ourwork'></div>
            <section className="ourwork-section">
                <div className="ourwork">
                    <h3>Our Works</h3>
                    <div className="works">
                        <ul>
                            {works.map((item) => (
                                <li key={item.id} data-aos="flip-right" data-aos-duration="800">
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Image />
            </section>
        </>
    );
};

export default About;
