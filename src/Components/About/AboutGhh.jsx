import { Box, useTheme } from "@mui/material";
import { TruncatedText } from "../TruncatedText/TruncatedText";
import { ImageAnimation } from "../Hero/ImageAnimation";

import boy from "../../assets/hands-images/School_boy_img.png";
import tree from "../../assets/hands-images/tress-removebg-preview.png";

import { TitleHeader } from "../Title-Header/TitleHeader";
import TargetButton from "../TargetButton/TargetButton";

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

export const About = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: "1rem",
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
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Text and Button Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
          }}
        >
          <TruncatedText text={whyUs} textAlign="left" />
          <TargetButton
            title={"TimeLine Series"}
            to={"/timeLine"}
            setWidth={true}
          />
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: { xs: "90%", md: "300px" },
            border: "1px solid black",
          }}
        >
          <ImageAnimation images={images} />
        </Box>
      </Box>
    </Box>
  );
};