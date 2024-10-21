import React, { useEffect } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

const Gallery = ({ data2 }) => {
    const handleShareClick = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this amazing content!',
                    text: 'This is an awesome website I wanted to share with you.',
                    url: window.location.href,
                });
                console.log('Content shared successfully');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            alert('Web Share API not supported in this browser.');
        }
    };

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <>
            <Row className="content px-3" style={{ minHeight: '100vh' }}>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div className="img-div position-relative">
                        <img src={data2.Image} alt='prankImage' className='img-fluid w-100 h-100 rounded-4' />
                        <div className='share-btn position-absolute text-black cursor'
                            onClick={handleShareClick}>
                            <FontAwesomeIcon icon={faShareFromSquare} className='fs-5 ps-1' />
                        </div>
                    </div>
                    <PrankBtn />
                    <div className='w-100 border mt-3 position-absolute bottom-0' style={{ height: "50px" }}>
                        <ins className="adsbygoogle"
                            style={{display: 'block', height: '50px'}}
                            data-ad-format="fluid"
                            data-ad-layout-key="-6t+ed+2i-1n-4w"
                            data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                            data-ad-slot="YOUR_AD_SLOT_ID"></ins>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Gallery;