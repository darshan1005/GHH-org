// eslint-disable-next-line no-unused-vars
import React from 'react';
import image1 from '../../assets/Gallery/image1.jpg';
import image2 from '../../assets/Gallery/image2.jpg';
import image3 from '../../assets/Gallery/image3.jpg';
import image4 from '../../assets/Gallery/image4.jpg';
import image5 from '../../assets/Gallery/image5.jpg';
import image6 from '../../assets/Gallery/image6.jpg';
import image7 from '../../assets/Gallery/image7.jpg';
import image8 from '../../assets/Gallery/image8.jpg';
import image9 from '../../assets/Gallery/image9.jpg';
import image10 from '../../assets/Gallery/image10.jpg';
import image11 from '../../assets/Gallery/image11.jpg';
import image12 from '../../assets/Gallery/image12.jpg';


const Image = () => {
    const images = [image1, image2, image3, image4, image5, 
        image6, image7, image8, image9, image10, image11, image12];

    return (
        <div className="images">
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

export default Image;
