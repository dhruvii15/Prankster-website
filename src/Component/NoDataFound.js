import React from 'react';
import { Col, Row } from 'react-bootstrap';

// lottie
import Lottie from "lottie-react";
import animationData from "../assets/nodata.json"


const NoDataFound = () => {

    return (
        <div style={{ height: "100vh" }}>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <Lottie
                        loop={true}
                        animationData={animationData}
                        style={{ width: '300px', height: '300px' }} />
                    <p className='fw-bold fs-5 m-0 pt-4'>No data found.</p>
                    <p className='m-0 text-center' style={{ color: "#AAAAAA"}}>
                        Request failed! Please try again <br />
                        with a different link...
                    </p>

                </Col>
            </Row>
        </div>
    );
};

export default NoDataFound;
