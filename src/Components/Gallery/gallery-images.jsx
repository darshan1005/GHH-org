// eslint-disable-next-line no-unused-vars
import React from 'react';
import image1 from '../../assets/Hands-holding.jpg';
import image2 from '../../assets/Hands-holding.jpg';
import image3 from '../../assets/Hands-holding.jpg';
import image4 from '../../assets/Hands-holding.jpg';
import image5 from '../../assets/Hands-holding.jpg';
import image6 from '../../assets/Hands-holding.jpg';
import image7 from '../../assets/Hands-holding.jpg';
import image8 from '../../assets/Hands-holding.jpg';
import image9 from '../../assets/Hands-holding.jpg';
import image10 from '../../assets/Hands-holding.jpg';
import image11 from '../../assets/Hands-holding.jpg';
import image12 from '../../assets/Hands-holding.jpg';

const galleryimages = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

    return (
        <div className="gallery-images">
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

export default galleryimages;
