/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Emailjs from "../../Components/Emailjs/EmailForm";
import { Typography, Button, Box } from "@mui/material";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [showFullText, setShowFullText] = useState(false);
  const dummyText =
    "This is the placeholder text for the About Us section. You can replace this with a detailed description about your organization.";
  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="Aboutus"></div>
      <section className="about-section">
        <p className="adout-title">About Us</p>
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <Typography variant="body1" sx={{ width: "max-content" }}>
            {showFullText ? dummyText : `${dummyText.substring(0, 50)}...`}
            <span
              onClick={handleToggleText}
              style={{ color: "blue", cursor: "pointer", width: "max-content" }}
            >
              {showFullText ? "Read Less" : "Read More"}
            </span>
          </Typography>
        </Box>
        <div className="mission">
          <h3 className="mission-title">Our Mission</h3>
          <div className="mission-statement">
            <p className="statement">
              We have started this organization as group of friends who are
              willing to make lives of people around them better. Our mission is
              to make lives of people better by providing the basic necessities.
              We may not able to help everyone but we are trying to help because{" "}
              <b>WE BELIEVE HUMANITY DRIVES THE WORLD</b>.
            </p>
          </div>
        </div>
        <div className="Email-Form" id="Email-form">
          <Emailjs />
        </div>
      </section>
    </>
  );
};

export default About;
