import React from 'react';
import MainButton from '../Component/MainBtn';


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
import instagram from "../img//Instagram.svg";
import snapchat from "../img/Snapchat.svg";
import textlogo from "../img/textlogo.svg";

const Home = () => {

  const handleInstaClick = () => {
    const instaUrl = 'https://www.instagram.com/plexus_technology/?igsh=MWdkdWZheGxrZjZkZQ%3D%3D';

    window.open(instaUrl, '_blank');
  };

  const handleSnapClick = () => {
    const snapUrl = 'https://www.snapchat.com/add/username';

    window.open(snapUrl, '_blank');
  };


  return (
    <>
      <div
        style={{
          position: 'fixed',
          color: '#000',
          zIndex: 10000,
          fontSize: '14px',
          top: "20px",
          left: "25px"
        }}
        className='mainBtn'
      >
        <img src={textlogo} alt='logo' className='img-fluid' loading="lazy" width={100} />
      </div>

      <div className='yellow-bg px-5 px-xl-0'>
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

        <div
          style={{
            position: 'fixed',
            color: '#000',
            zIndex: 10000,
            fontSize: '14px',
            top: "0px",
            right: "0px",
            height: "100%",
          }}
          className='d-flex flex-column gap-2 justify-content-center'
        >
          <div className='d-flex flex-column gap-4 justify-content-center py-3 px-2' style={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px", backgroundColor: "rgba(0 , 0 ,0 ,0.45)" }}>
            <div className="cursor" onClick={handleInstaClick}>
              <img src={instagram} alt="instgram" className="fs-4" />
            </div>

            <div className="cursor" onClick={handleSnapClick}>
              <img src={snapchat} alt='snapchat' className="fs-4" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
