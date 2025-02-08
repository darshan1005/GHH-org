"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { imagesArray } from "../MockData/Galleryimages";
import { TitleHeader } from "../Title-Header/TitleHeader";
import { Box } from "@mui/material";

export const GridImages = () => {
  return (
    <>
      <Box component="section">
        <TitleHeader title={"Gallery"} />
        <Box sx={{ padding: "0 10px 10px" }}>
          <ImageGallery
            imagesInfoArray={imagesArray}
            columnWidth={230}
            gapSize={14}
            className="images"
          />
        </Box>
      </Box>
    </>
  );
};
