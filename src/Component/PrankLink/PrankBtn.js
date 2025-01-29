import React from 'react';
import { Button } from 'react-bootstrap';

// img
import pranklogo from "../../img/pranklogo.png";

const PrankBtn = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.prank.android";
  const appStoreUrl = "https://apps.apple.com/us/app/prankster-digital-funny-pranks/id6739135275"; 

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handlePrankButtonClick = () => {
    if (isAndroid) {
      window.open(playStoreUrl, '_blank');
    } else if (isiOS) {
      window.open(appStoreUrl, '_blank');
    } else {
      window.open(playStoreUrl, '_blank');
    }
  };


  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <Button
        className='mt-3 border-0 py-2 fs-5 text-black overflow-hidden'
        style={{ backgroundColor: "#F9E238", width: "130%", fontWeight: "600", height: "50px" }}
        onClick={handlePrankButtonClick}
      >
        <p className='btnlol'>Make your own pranks 😀</p>
        <p className='btntext pt-4' style={{ fontWeight: "450" }}>Download</p>
        <img src={pranklogo} alt='lol' className='btnimg' width={130} />
      </Button>
    </div>
  );
};

export default PrankBtn;
