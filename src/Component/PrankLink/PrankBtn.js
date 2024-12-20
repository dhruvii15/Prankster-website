import React from 'react';
import { Button } from 'react-bootstrap';

// img
import lol from "../../img/lol.png";

const PrankBtn = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.prank.android"; // Replace with your app's package name
  const appStoreUrl = "https://apps.apple.com/us/app/prankster/id6739135275"; // Replace with your app's ID
  const lolplayStoreUrl = "https://play.google.com/store/apps/details?id=com.lol.android";
  const lolappStoreUrl = "https://apps.apple.com/us/app/lol-anonymous-funny-card/id6670788272";

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

  const handlePrankButtonClick2 = () => {
    if (isAndroid) {
      window.open(lolplayStoreUrl, '_blank');
    } else if (isiOS) {
      window.open(lolappStoreUrl, '_blank');
    } else {
      window.open(lolplayStoreUrl, '_blank');
    }
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
