import logo from '../../assets/Asset 10@2x.png'
import logo2 from '../../assets/GHH 9@2x.png'
import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const footer = () => {
    return (
        <section className="section-footer" id="Getinvolved">  
            <div className="footer-head">
                <h3>Get Involved</h3>
            </div>
            <div className="footer-body">
                <div className="log-icons">
                    <div className="media">
                        <img src={insta} className="social-media" />
                        <img src={facebook} className="social-media" />
                        <img src={twitter} className="social-media" />
                    </div>
                    <img src={logo} alt="GHH" onError={logo2}/>
                </div>
                <div className="address">address</div>
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