import logo from '../../assets/Asset 10@2x.png'
import logo2 from '../../assets/GHH 9@2x.png'
import insta from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'

const footer = () => {
    return (
        <section className="section-footer" id="Getinvolved">  
            <div className="footer-head">
                <h3>Get Involved</h3>
                <div className="media">
                    <img src={insta} className="social-media insta" />
                    <img src={facebook} className="social-media facebook" />
                    <img src={youtube} className="social-media youtube" />
                </div>
            </div>
            <div className="footer-body">
                
            <div className="address">address</div>
                <div className="log-icons">
                    <img src={logo2} alt="GHH" onError={logo}/>
                </div>
                <div className="contact">
                    <div className="contact number">Phone number</div>
                    <div className="contact email">Email</div>
                    <div className="contact whatsapp">Whats App</div>
                </div>
            </div>
        </section>
    )
}

export default footer;