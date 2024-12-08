/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

import ImageAnimation from "./image-animation";
import { Box, Typography, useTheme } from "@mui/material";
import { imagesArray } from "../MockData/Gallery-images";
import { Donate } from "../Donate/Donate";
import TargetButton from "../TargetButton/TargetButton";

const Hero = () => {
  const theme = useTheme();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box component={"section"} id="Home">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            gap: 2,
            p: 2,
            background: `linear-gradient(to right, ${theme.palette.background.main}50,  ${theme.palette.background.main})`,
          }}
        >
          <Box
            display="flex"
            alignItems={"baseline"}
            justifyContent={"center"}
            gap={2}
          >
            <span
              style={{
                fontFamily: "inter",
                fontWeight: "600",
                fontSize: "4vw",
                width: "max-content",
              }}
            >
              Humanity
            </span>
            <span
              style={{
                fontFamily: '"Inknut Antiqua", serif',
                fontSize: "4vw",
                width: "max-content",
              }}
            >
              Bonds
            </span>
            <span
              style={{
                fontFamily: "'Julee', cursive",
                fontSize: "3vw",
                width: "max-content",
              }}
            >
              Us
            </span>
            <span
              style={{
                fontFamily: '"Inknut Antiqua", serif',
                fontSize: "4vw",
                width: "max-content",
              }}
            >
              Together
            </span>
          </Box>
          <Donate />
        </Box>
        <Box
          sx={{
            py: 5,
            background: `linear-gradient(to right, ${theme.palette.background.main},  ${theme.palette.background.main}50)`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "60%",
              }}
            >
              <Typography variant="h1" color={theme.palette.text.primary}>
                Uniting hands, like threads weaving hope, Grace Helping Hands
                organization forms a tapestry of change.
              </Typography>
              <Typography variant="subtitle1">
                Let’s collaborate to make a positive difference in the world.
              </Typography>
              <TargetButton
                title={"UnTold-stories"}
                to={"/stories"}
                setWidth={true}
              />
            </Box>
            <Box sx={{ height: "max-content", width: "max-content" }}>
              <Box
                sx={{
                  height: "300px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              >
                <ImageAnimation images={imagesArray} interval={3000} />
              </Box>
              <Typography variant="h6" fontWeight={600}>
                Join Us in Building a Beautiful World
              </Typography>
              <TargetButton
                title={"Gallery"}
                to={"/gallery"}
                setWidth={false}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
