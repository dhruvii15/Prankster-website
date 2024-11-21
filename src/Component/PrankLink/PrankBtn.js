import React from 'react';
import { Button } from 'react-bootstrap';

// img
import lol from "../../img/lol.png";

const PrankBtn = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.yourapp.package"; // Replace with your app's package name
  const playStoreUrl2 = "https://play.google.com/store/apps/details?id=com.lol.android";

  const handlePrankButtonClick = () => {
    window.open(playStoreUrl, '_blank');
  };

  const handlePrankButtonClick2 = () => {
    window.open(playStoreUrl2, '_blank');
  };

  return (
    <>
      <Button 
        className='mt-3 border-0 py-2 fs-5 text-black' 
        style={{ backgroundColor: "#F9E238", width: "95%" , fontWeight:"600"}} 
        onClick={handlePrankButtonClick} 
      >
        Make own prank 😂
      </Button>
      <Button 
        className='mt-3 border-0 py-2 fs-5 text-black overflow-hidden' 
        style={{ background: "linear-gradient(to right, #FA4F54, #FD7C41)", width: "95%", height: "50px" }}
        onClick={handlePrankButtonClick2}
      >
        <img src={lol} alt='lol' className='btnlol' width={60}/>
        <p className='btntext text-white pt-3' style={{fontWeight:"450"}}>Download!</p>
      </Button>
    </>
  );
};

export default PrankBtn;
