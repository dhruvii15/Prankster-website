import React from 'react';
import { Button } from 'react-bootstrap';

// img
import lol from "../../img/lol.png";

const PrankBtn = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.yourapp.package"; // Replace with your app's package name

  const handlePrankButtonClick = () => {
    window.open(playStoreUrl, '_blank');
  };

  return (
    <>
      <Button 
        className='mt-3 border-0 py-2 fs-5 text-black fw-bold' 
        style={{ backgroundColor: "#F9E238", width: "90%" }} 
        onClick={handlePrankButtonClick} 
      >
        Make own prank 😂
      </Button>
      <Button 
        className='mt-4 border-0 py-2 fs-5 text-black overflow-hidden' 
        style={{ background: "linear-gradient(to right, #FA4F54, #FD7C41)", width: "90%", height: "50px" }}
      >
        <img src={lol} alt='lol' className='btnlol'/>
        <p className='btntext text-white'>Download</p>
      </Button>
    </>
  );
};

export default PrankBtn;
