import { Box, Typography, useTheme } from "@mui/material";
import { TruncatedText } from "../TruncatedText/TruncatedText";
import { ImageAnimation } from "../Hero/ImageAnimation";

import boy from "../../assets/hands-images/School_boy_img.png";
import tree from "../../assets/hands-images/tress-removebg-preview.png";

import { TitleHeader } from "../Title-Header/TitleHeader";
import TargetButton from "../TargetButton/TargetButton";

const AboutUs =
  "We are a group of friends who have lived 40 years of our lives, who are not content with just having a life for us and our children. We saw people struggling for livelihood in villages from different corners of Andhra Pradesh. We heard stories of people who are left unheard, where NGOs did not reach. Mostly the slums of India are seen where the poor people live. But every village has people who suffer from poverty, waiting for help. So, we wanted to help the people in the villages nearby. This is the thought that brought us together to form Grace helping hands organization. We started by 1 lakh rupees which, I, the founder of Grace helping hands, Dasetti Hema Latha have saved from my earning. From there we collected donations from our friends. So know we are a family of100, who are continuously trying to do the best to provide peoplewith basic needs. Our family increases with people joining us to make lives better";

const whyUs =
  "There are many organizations, few are very big and sound, financiallyand expansion wise. There are many people who are willing to donate. So, these people donate to these organizations but what about those people who are left unheard. We help them, we help people around us, we help people you see daily struggling to live. We try to make society around us better by providing basic necessities to the needy. We are not big and sound financially but not in our actions";

const GhhWorks =
  "We work for helping people to live life. We donated groceries for many so people can eat, we donated clothes and blankets so they can cover themselves, we paid fees for many so they can study and earn their own livelihood, we helped many by paying their hospital fees so they can be cured from illness and live lives";

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
      <Box sx={{ maxWidth: "700px" }}>
        <TruncatedText text={AboutUs} textAlign="center" truncatedValue={500} />
      </Box>
      {/* GHH Works */}
      <TitleHeader title={"GHH Works"} />
      <Box sx={{ maxWidth: "700px", mb: { xs: 1, md: 3 } }}>
        <TruncatedText text={GhhWorks} textAlign="center" />
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
        Money spend on cancer patients hospital expenses: 4 lakh rupees.
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
            width: { xs: "100%", md: "50%" },
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
          }}
        >
          <TruncatedText text={whyUs} truncatedValue={500} />
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: { xs: "90%", sm: "300px" },
            border: "1px solid black",
            background: theme.palette.background.main,
            py: 1,
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
            Money donated by us to the needy till the date 1,500,000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
