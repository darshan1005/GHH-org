"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { imagesArray } from "../MockData/Gallery-images";

export default function gridimages() {
  return (
    <>
      <div id="Gallery"></div>
      <section className="section-gallery">
        <p className="gallery-title">Gallery</p>
        <div className="grid-gallery">
          <ImageGallery
            imagesInfoArray={imagesArray}
            columnWidth={230}
            gapSize={24}
            className="images"
          />
        </div>
      </section>
    </>
  );
}
