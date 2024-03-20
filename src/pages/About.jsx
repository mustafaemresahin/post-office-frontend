import React, { useState, useEffect } from 'react';
import '../css/About.css';

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const image = new Image();
    image.src = process.env.PUBLIC_URL + '/mail_open.png'; // Assuming image is in public folder
    image.onload = handleImageLoad;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <div className="about-us-container">
      {isLoading && <div className="loading-animation"></div>}
      <img
        src={process.env.PUBLIC_URL + '/mail_open.png'}
        alt="About Us"
        className="background-image"
      />
      <div className="text-overlay">
        <h1>Hello, this is the home screen!</h1>
        <p>More content</p>
      </div>
    </div>
  );
};

export default AboutUs;
