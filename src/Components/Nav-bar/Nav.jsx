import { useEffect } from 'react';
import logo from '../../assets/Asset 10@2x.png';
import logo2 from '../../assets/GHH 9@2x.png';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='nav-title'>
            <div data-aos='fade-down' data-aos-duration="1000" data-aos-once='true' className="logo-container">
                <img src={logo} alt="GHH" onError={(e) => { e.target.src = logo2; }} />
            </div>
            <div data-aos='fade-down' data-aos-duration="1000" data-aos-once='true' className="nav-list">
                <ul className="list">
                    <li className="navs" ><a href="#Aboutus">ABOUT US</a></li>
                    <li className="navs" ><a href="#Ourwork">OUR WORKS</a></li>
                    <li className="navs" ><a href="#Gallery">GALLERY</a></li>
                    <li className="navs" ><a href="#Getinvolved">GET INVOLVED</a></li>
                </ul>
            </div>
            <div data-aos='fade-down' data-aos-duration="1000" data-aos-once='true' className="donate-btn">
                <button className="donate">Donate</button>
            </div>
        </div>
    );
};

export default Nav;