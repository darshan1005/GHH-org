/* eslint-disable react/no-unknown-property */
import work from './work';

import Image from './image-scroll'

const about = () => {

    const works = work();

    return (
        <>
            <div id='Ourwork'></div>
            <section className="ourwork-section" >
                <div className="ourwork">
                    <h3>Our Works</h3>
                    <div className="works">
                        <ul>
                            {works.map((item) => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Image />
            </section>
        </>

    );
};

export default about;
