# Grace Helping Hands
## Grace Helping Hands is an organization dedicated to assisting people, students, and the elderly by providing essential support using their own funds. Our mission is to make a positive impact on the lives of those in need by offering assistance with basic necessities and support services.
# [Visit](https://gracehelpinghandsorg.netlify.app)
## Desktop
![image](https://github.com/user-attachments/assets/be15c184-80ac-48ad-b343-e6eaf4316af8)
## Mobile
![image](https://github.com/user-attachments/assets/e692160b-895b-4fcb-850f-4721c49a087c)

React + Vite Template
This template offers a minimal setup to enable React development in Vite with Hot Module Replacement (HMR) and incorporates some ESLint rules for code quality. It provides a streamlined environment for building React applications with Vite, ensuring rapid development and efficient workflows.

Official Plugins
Currently, there are two official plugins available for integrating React with Vite:

@vitejs/plugin-react: This plugin utilizes Babel for Fast Refresh, enabling seamless updates to your React components during development.

Plugin Repository
@vitejs/plugin-react-swc: This alternative plugin uses SWC for Fast Refresh, offering another option for efficient component reloading.

Install dependencies using npm or yarn:
```
bash
Copy code
npm install
# or
yarn install
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
```
Begin coding your React application using Vite, taking advantage of the fast refresh and efficient development environment provided by the template.

Deployment
Once your React application is ready for deployment, you can host it on platforms like Netlify, Vercel, or any other hosting provider of your choice. Ensure that you configure your deployment settings appropriately to build and serve your application files.

Live Demo
Explore a live demo of the Grace Helping Hands React + Vite template at https://gracehelpinghandsorg.netlify.app. Witness the simplicity and efficiency of React development with Vite in action!

For any questions, feedback, or support inquiries, feel free to reach out to Grace Helping Hands via our website or contact information provided.

# About AOS

AOS (Animate On Scroll) is a small library that allows you to animate elements on your website as you scroll down the page. It provides a simple and lightweight way to add animations to your site without the need for complex JavaScript or CSS animations.

With AOS, you can easily create engaging and dynamic user experiences by animating elements such as text, images, and backgrounds as they come into view. This can help draw attention to important content, improve user engagement, and make your website more visually appealing.

To use AOS in your React application developed with the Grace Helping Hands React + Vite template, you can simply include the AOS library in your project and configure it to animate elements as desired. AOS provides flexible options for customizing animations, including duration, easing, offset, and more, allowing you to tailor the animation effects to suit your design preferences.

For more information on how to integrate and use AOS in your React application, refer to the official documentation and examples provided by the AOS project.

Official Website: [AOS - Animate On Scroll Library](https://michalsnik.github.io/aos/)

# React Grid Image
React Grid Image is a React component that displays a grid of images in a responsive layout. It is designed to make it easy to create visually appealing image grids for displaying galleries, portfolios, or any other collection of images.

Installation
You can install React Grid Image via npm or yarn:
```
bash
Copy code
npm install react-grid-image
or

bash
Copy code
yarn add react-grid-image
```
Usage
To use React Grid Image, simply import the component and pass in the necessary props:

## javascript
Copy code
```
import React from 'react';
import GridImage from 'react-grid-image';

const MyComponent = () => {
  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <div>
      <GridImage images={images} />
    </div>
  );
};

export default MyComponent;
```
Props
React Grid Image accepts the following props:

images: An array of objects, each representing an image to be displayed in the grid. Each object should have the following properties:

src: The URL of the image.
alt: The alternative text for the image.
columns: (Optional) The number of columns in the grid. Defaults to 3.

gap: (Optional) The gap between images in the grid, in pixels. Defaults to 10.

onClick: (Optional) A function to be called when an image in the grid is clicked. Receives the clicked image object as an argument.

className: (Optional) Additional CSS class names to be applied to the grid container.

Example
javascript
Copy code
```
import React from 'react';
import GridImage from 'react-grid-image';

const MyComponent = () => {
  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  const handleImageClick = (image) => {
    console.log('Clicked image:', image);
  };

  return (
    <div>
      <GridImage
        images={images}
        columns={4}
        gap={5}
        onClick={handleImageClick}
        className="custom-grid"
      />
    </div>
  );
};

export default MyComponent;
```
