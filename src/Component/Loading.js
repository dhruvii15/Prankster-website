import React from 'react';

// img
import logo from "../img/textlogo.svg"

const Loading = () => (
    <div
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999 ,
            animation: "1.2s ease-out infinite zoom-in-zoom-out2"
        }}
    >
       <img src={logo} alt='loading....' style={{width:"200px"}}/>
    </div>
);

export default Loading;
