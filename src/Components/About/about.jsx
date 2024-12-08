/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Typography, Button, Box, useTheme } from "@mui/material";
import ImageAnimation from "../Hero/image-animation";
import { TruncatedText } from "../TruncatedText/TruncatedText";

import boy from "../../assets/hands-images/School_boy_img.png";
import tree from "../../assets/hands-images/tress-removebg-preview.png";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { TitleHeader } from "../Title-Header/title-header";
import { Link } from "react-router-dom";
import TargetButton from "../TargetButton/TargetButton";
import { Rotate90DegreesCcw } from "@mui/icons-material";

const AboutUs =
  " We have started this organization as group of friends who are willing to make lives of people around them better. Our mission is to make lives of people better by providing the basic necessities. We may not able to help everyone but we are trying to help because WE BELIEVE HUMANITY DRIVES THE WORLD.";

const whyUs =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const images = [
  {
    alt: "boy",
    caption: "",
    src: boy,
  },
  {
    alt: "tree",
    caption: "",
    src: tree,
  },
];

const About = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: "2rem",
        boxSizing: "border-box",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* About Us Heading */}
      <TitleHeader title={"About us"} />

      {/* About Us Text */}
      <Box sx={{ maxWidth: "700px" }}>
        <TruncatedText text={AboutUs} textAlign="center" />
      </Box>
      {/* Why Us Heading */}
      <TitleHeader title={"Why us?"} />
      {/* Why Us Text */}
      <Box
        sx={{ display: "flex", alignItems: "center", width: "70%", gap: 10 }}
      >
        <Box display={"flex"} flexDirection={"column"} justifyContent={"start"}>
          <TruncatedText text={whyUs} textAlign="left" />
          <TargetButton title={"TimeLine"} to={"/timeLine"} setWidth={true} />
        </Box>
        <Box
          sx={{
            height: "300px",
            width: "500px",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <ImageAnimation images={images} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
