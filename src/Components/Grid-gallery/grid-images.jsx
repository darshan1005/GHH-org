"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { imagesArray } from "../MockData/Gallery-images";
import { TitleHeader } from "../Title-Header/title-header";
import { Box } from "@mui/material";

export default function gridimages() {
  return (
    <>
      <Box component={"section"}>
        <TitleHeader title={"Gallery"} />
        <ImageGallery
          imagesInfoArray={imagesArray}
          columnWidth={230}
          gapSize={14}
          className="images"
        />
      </Box>
    </>
  );
}
