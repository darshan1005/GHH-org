/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

import ImageAnimation from "./image-animation";
import { Box, Button, Typography } from "@mui/material";
import { imagesArray } from "../MockData/Gallery-images";

const Hero = () => {
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
            textAlign: "center",
            m: 4,
          }}
        >
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <span
              style={{
                fontFamily: "inter",
                fontWeight: "600",
                fontSize: "4.5vw",
                width: "max-content",
              }}
            >
              Humanity
            </span>
            <span
              style={{
                fontFamily: '"Inknut Antiqua", serif',
                fontSize: "4.5vw",
                width: "max-content",
              }}
            >
              Bonds
            </span>
            <span
              style={{
                fontFamily: "'Julee', cursive",
                fontSize: "4vw",
                width: "max-content",
              }}
            >
              Us
            </span>
            <span
              style={{
                fontFamily: '"Inknut Antiqua", serif',
                fontSize: "4.5vw",
                width: "max-content",
              }}
            >
              Together
            </span>
          </Box>
        </Box>
        <Box>
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
              <Typography variant="h1" id="statement_id">
                Uniting hands, like threads weaving hope, Grace Helping Hands
                organization forms a tapestry of change.
              </Typography>
              <Typography variant="subtitle1">
                Let’s collaborate to make a positive difference in the world.
              </Typography>
              <Button variant="contained" href="" sx={{ width: "max-content" }}>
                UnTold-stories
              </Button>
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
              <Button variant="contained" size="small">
                Gallery
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
