import React, { useEffect } from 'react';

// img
import cloud from "../img/cloud.svg";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon2.svg";
import icon3 from "../img/icon3.svg";
import icon4 from "../img/icon4.svg";
import icon5 from "../img/icon5.svg";
import icon6 from "../img/icon6.svg";
import face from "../img/face.svg";
import fullimg from "../img/fullimg.svg";
import MainButton from '../Component/MainBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

  const handleInstaClick = () => {
    const instaUrl = 'https://www.instagram.com/plexus_technology/?igsh=MWdkdWZheGxrZjZkZQ%3D%3D';

    window.open(instaUrl, '_blank');
  };

  const handleSnapClick = () => {
    const snapUrl = 'https://www.snapchat.com/add/username';

    window.open(snapUrl, '_blank');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const triggerAnimations = () => {
      const cloud = document.querySelector('.cloud');
      const icons = document.querySelectorAll('.icon1, .icon2, .icon3, .icon4, .icon5, .icon6');

      if (cloud) cloud.classList.add('animate-cloud');

      icons.forEach((icon, index) => {
        icon.classList.add(`animate-icon-${index + 1}`);

        // Remove animation class after animation completes
        setTimeout(() => {
          icon.classList.remove(`animate-icon-${index + 1}`);
        }, 2000); // Adjust based on your animation duration
      });

      // Remove cloud animation class after animation completes
      setTimeout(() => {
        if (cloud) cloud.classList.remove('animate-cloud');
      }, 2000);
    };

    // Initial trigger
    triggerAnimations();

    // Set interval to trigger animations every 10 seconds
    const intervalId = setInterval(triggerAnimations, 10000);

    return () => {
      document.body.style.overflow = 'auto';
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className='yellow-bg'>
        <div className='cloud-bg'>
          <img src={cloud} alt='cloud' className='img-fluid cloud' loading="lazy" />
          <div className='icon-bg'>
            <img src={icon1} alt='icon1' className='img-fluid icon1' loading="lazy" />
            <img src={icon2} alt='icon2' className='img-fluid icon2' loading="lazy" />
            <img src={icon3} alt='icon3' className='img-fluid icon3' loading="lazy" />
            <img src={icon4} alt='icon4' className='img-fluid icon4' loading="lazy" />
            <img src={icon5} alt='icon5' className='img-fluid icon5' loading="lazy" />
            <img src={icon6} alt='icon6' className='img-fluid icon6' loading="lazy" />
          </div>
          <div className='face-bg'>
            <img src={face} alt='face' className='img-fluid' loading="lazy" />
          </div>
        </div>

        <img src={fullimg} alt='PrankSters' className='fullimg img-fluid' loading="lazy" />
      </div>

      <div
        style={{
          position: 'fixed',
          color: '#000',
          zIndex: 10000,
          fontSize: '14px',
        }}
        className='mainBtn'
      >
        <MainButton />
      </div>

      <div className='rounded-1 py-1 heart d-flex align-items-center justify-content-center gap-2'>
        <span className='fs-6 px-2 fw-bold fst-italic text-decoration-underline'
          style={{ cursor: "pointer" }}
          onClick={() => window.location.href = "/privacy-policy"}>
          Privacy Policy
        </span>

        <div className="common-footer hover-box box3" onClick={handleInstaClick}>
          <FontAwesomeIcon icon={faInstagram} className="hover-box2 fs-4" />
        </div>

        <div className="common-footer hover-box box2" onClick={handleSnapClick}>
          <FontAwesomeIcon icon={faSnapchat} className="hover-box2 fs-4" />
        </div>

        
      </div>
    </>
  );
};

export default Home;
