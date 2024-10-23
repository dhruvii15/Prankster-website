import React from 'react';
import { Col, Row } from 'react-bootstrap';

// img
import Nouser from "../img/fullimg.svg"

const NoDataFound = ({ style }) => {

    return (
        <div style={{ height: "100vh" }}>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <img src={Nouser} alt='NoDataFound' className='img-fluid pb-5' width={250} />
                    <p className='fw-bold fs-5 m-0'>No data found.</p>
                    <p className='m-0 text-center' style={{ color: "#AAAAAA" }}>No data found.No data found.</p>
                </Col>
            </Row>
        </div>
    );
};

export default NoDataFound;
