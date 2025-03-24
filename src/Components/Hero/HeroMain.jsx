import { Box, Typography, useTheme } from "@mui/material";
import { imagesArray } from "../MockData/Galleryimages";
import { Donate } from "../Donate/Donate";
import TargetButton from "../TargetButton/TargetButton";
import { ImageAnimation } from "./ImageAnimation";
import { Link } from "react-router-dom";

export const Hero = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="Home">
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: 2,
          p: 2,
          background: `linear-gradient(to right, ${theme.palette.background.main}50, ${theme.palette.background.main})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: { xs: 1, md: 2 },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: '"Inknut Antiqua", serif',
              fontWeight: "600",
              fontSize: { xs: "9vw", sm: "7vw", md: "4vw" },
              width: "max-content",
            }}
          >
            Donate for a change
          </Typography>
        </Box>
        <Donate />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          py: { xs: 0, md: 3 },
          background: `linear-gradient(to right, ${theme.palette.background.main}, ${theme.palette.background.main}50)`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 0, sm: 2, md: 3 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "1rem",
              }}
            >
              <Typography
                variant="h1"
                color={theme.palette.text.primary}
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                  fontWeight: 700,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Joining hands together, we aspire to see people have food to
                eat, have clothes to cover themselves, have the access to
                education, have access to health.
              </Typography>
              <Typography
                lineHeight={"1.2"}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: ".8rem", sm: ".9rem", md: "1rem" },
                }}
              >
                We want every unheard story to be heard.
              </Typography>
              <TargetButton
                title={"Unheard stories"}
                to={"/stories"}
                setWidth={true}
              />
            </Box>
          </Box>

          {/* Image and Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
              width: { xs: "300px", md: "max-content" },
              padding: "20px",
            }}
          >
            <Link to={"/gallery"}>
              <Box
                sx={{
                  width: { xs: "100%", md: "400px" },
                  border: "1px solid black",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <ImageAnimation images={imagesArray} interval={3000} />
              </Box>
            </Link>
            <TargetButton title={"Gallery"} to={"/gallery"} setWidth={false} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
