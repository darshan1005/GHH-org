import logo from '../../assets/Asset 10@2x.png'
import logo2 from '../../assets/GHH 9@2x.png'

const nav = () => {
    return (
        <div className='nav-title'>
            <div className="logo-container">
                <img src={logo} alt="GHH" onError={logo2} />
            </div>
            <div className="nav-list">
                <ul className="list">
                    <li className="navs" ><a href="#Aboutus">About Us</a></li>
                    <li className="navs" ><a href="#Ourwork">Our Works</a></li>
                    <li className="navs" ><a href="#Gallery">Gallery</a></li>
                    <li className="navs" ><a href="#Getinvolved">Get Involved</a></li>
                </ul>
            </div>
            <div className="donate-btn">
                <button className="donate">Donate</button>
            </div>
        </div>
    )
}

export default nav;