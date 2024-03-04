
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
                        <p className="statement">
                            Grace Helping Hands is an organization dedicated to assisting people, students, and the elderly by providing essential support using their own funds. Our mission is to make a positive impact on the lives of those in need by offering assistance with basic necessities and support services.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about;