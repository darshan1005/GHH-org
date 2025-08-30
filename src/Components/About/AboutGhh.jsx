import { Box, Typography, useTheme } from "@mui/material";
import { ImageAnimation } from "../Hero/ImageAnimation";

import boy from "../../assets/hands-images/School_boy_img.png";
import tree from "../../assets/hands-images/tress-removebg-preview.png";

import { TitleHeader } from "../Title-Header/TitleHeader";
import TargetButton from "../TargetButton/TargetButton";

import aboutData from "../../Content/About.json";

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
      {/* About Us */}
      <TitleHeader title={"About us"} />
      <Box sx={{ maxWidth: { xs: "100%", md: "80%" } }}>
        <Typography
          sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }}
          fontWeight={600}
        >
          {aboutData.aboutus}
        </Typography>
      </Box>
      {/* GHH Works */}
      <TitleHeader title={"GHH Works"} />
      <Box sx={{ maxWidth: { xs: "100%", md: "80%" }, mb: { xs: 1, md: 3 } }}>
        <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }} fontWeight={400}>
          {aboutData.ghhwork}
        </Typography>
      </Box>
      <TargetButton
        title={"TimeLine Series"}
        to={"/timeLine"}
        setWidth={true}
      />
      <Typography
        sx={{
          marginTop: "25px",
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          background: theme.palette.background.main,
          p: 1,
        }}
      >
        {aboutData.spent}
      </Typography>
      {/* Why Us */}
      <TitleHeader title={"Why us?"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
          }}
        >
          <Typography  sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }} textAlign={"center"} fontWeight={600}>
            {aboutData.whyus}
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: { xs: "90%", sm: "300px" },
            background: theme.palette.background.main,
            p: 1,
            boxShadow: `2px 2px 4px ${theme.palette.primary.contrastText}`,
          }}
        >
          <ImageAnimation images={images} />
          <Typography
            variant="h6"
            fontWeight={600}
            textAlign="center"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              lineHeight: 1.3,
            }}
          >
            {aboutData.donated}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
