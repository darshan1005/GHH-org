"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { imagesArray } from "../MockData/Gallery-images";
import { TitleHeader } from "../Title-Header/TitleHeader";
import { Box } from "@mui/material";

export const GridImages = () => {
  return (
    <>
      <Box component={"section"}>
        <TitleHeader title={"Gallery"} />
        <Box px={4}>
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
