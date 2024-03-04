
const about = () => {
    return (
        <>
            <div id="Aboutus"></div>
            <section className="about-section" >
                <div className="adout-title">
                    <p className="title">About Us</p>
                </div>
                <div className="owner-details">
                    <div className="lead">
                        <p className="details">Lead Name <br /> Other details</p>
                    </div>
                    <div className="admin">
                        <p className="details">Admin Name <br /> Other details</p>
                    </div>
                </div>

                <div className="mission">
                    <h3>Our Mission</h3>
                    <div className="mission-statement">
                        <p className="statement">Our mission to help the people in need, provide education</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about;