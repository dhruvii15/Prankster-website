import React from 'react';

// img
import lol from "../../img/lol.png"
import { Button } from 'react-bootstrap';

const PrankBtn = () => {
 
  return (
    <>
     <Button className='mt-3 border-0 py-2 fs-5 text-black fw-bold' style={{ backgroundColor: "#F9E238", width: "90%" }}>
            Make own prank 😂
          </Button>
          <Button className='mt-4 border-0 py-2 fs-5 text-black fw-bold' style={{ background: "linear-gradient(to right, #FA4F54, #FD7C41)", width: "90%" }}>
            <img src={lol} alt='lol' />
          </Button>
    </>
  );
};

export default PrankBtn;
