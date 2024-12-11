import { Box, Typography, useTheme } from "@mui/material";
import { imagesArray } from "../MockData/Galleryimages";
import { Donate } from "../Donate/Donate";
import TargetButton from "../TargetButton/TargetButton";
import { ImageAnimation } from "./ImageAnimation";

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
            gap: 1,
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "inter",
              fontWeight: "600",
              fontSize: { xs: "6vw", sm: "6vw", md: "4vw" },
              width: "max-content",
            }}
          >
            Humanity
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: '"Inknut Antiqua", serif',
              fontSize: { xs: "6vw", sm: "6vw", md: "4vw" },
              width: "max-content",
            }}
          >
            Bonds
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: "'Julee', cursive",
              fontSize: { xs: "6vw", sm: "5vw", md: "3vw" },
              width: "max-content",
            }}
          >
            Us
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: '"Inknut Antiqua", serif',
              fontSize: { xs: "6vw", sm: "6vw", md: "4vw" },
              width: "max-content",
            }}
          >
            Together
          </Typography>
        </Box>
        <Donate />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          py: 3,
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
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "2rem" },
                  fontWeight: 700,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Uniting hands, like threads weaving hope, Grace Helping Hands
                organization forms a tapestry of change.
              </Typography>
              <Typography
                variant="subtitle2"
                lineHeight={"1.2"}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                Let’s collaborate to make a positive difference in the world.
              </Typography>
              <TargetButton
                title={"UnTold-stories"}
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
              width: "max-content",
              padding: "20px",
            }}
          >
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
            <Typography
              variant="h6"
              fontWeight={600}
              textAlign="center"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              Join Us in Building a Beautiful World
            </Typography>
            <TargetButton title={"Gallery"} to={"/gallery"} setWidth={false} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
