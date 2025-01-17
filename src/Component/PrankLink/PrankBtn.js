import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// img
import lol from "../../img/lol.png";
import pranklogo from "../../img/pranklogo.png";

const PrankBtn = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.prank.android"; // Replace with your app's package name
  const appStoreUrl = "https://apps.apple.com/us/app/prankster-digital-funny-pranks/id6739135275"; // Replace with your app's ID
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
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <Button
        className='mt-3 border-0 py-2 fs-5 text-black overflow-hidden'
        style={{ backgroundColor: "#F9E238", width: "130%", fontWeight: "600", height: "50px" }}
        onClick={handlePrankButtonClick}
      >
        <p className='btnlol'>Make your own pranks!</p>
        <p className='btntext pt-4' style={{ fontWeight: "450" }}>Download</p>
        <img src={pranklogo} alt='lol' className='btnimg' width={130} />
      </Button>
      <Row className='d-flex align-items-center' style={{ width: "130%" }}>
        <Col xs={4} className='p-0'><hr style={{ border: "1px solid #ffffff" }}></hr></Col><Col xs={4} className='p-0' style={{fontSize:"14px",fontWeight:"300" , color:"#c1c1c1"}}>More App</Col><Col xs={4} className='p-0'><hr style={{ border: "1px solid white" }}></hr></Col>
      </Row>
      <Button
        className='border-0 py-2 fs-5 text-black overflow-hidden'
        style={{ background: "linear-gradient(to right, #FA4F54, #FD7C41)", width: "130%", height: "50px" }}
        onClick={handlePrankButtonClick2}
      >
        <img src={lol} alt='lol' width={60} />
      </Button>
    </div>
  );
};

export default PrankBtn;
