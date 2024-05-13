/* eslint-disable no-unused-vars */
import React from 'react';
import work from './work';
import Image from './image-scroll';

const About = () => {
    const works = work();

    return (
        <>
            <div id='Ourwork'></div>
            <section className="ourwork-section">
                <div className="ourwork">
                    <h3 className='ourwork-title'>Our Works</h3>
                    <div className="works">
                        <ul>
                            {works.map((item) => (
                                <li key={item.id} >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="work-image-scroll">
                    <Image />
                </div>
            </section>
        </>
    );
};

export default About;
