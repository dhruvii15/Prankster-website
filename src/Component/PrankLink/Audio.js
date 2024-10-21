import React, { useEffect } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

const Audio = ({ data2 }) => {
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
        // Load AdSense ad when component mounts
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <>
            <Row className="content px-3" style={{ minHeight: '100vh' }}>
                <Col className="d-flex flex-column align-items-center contentTop mt-5 mt-sm-0">
                    <div className="img-div2 position-relative">
                        <img src={data2.Image} alt='prankImage' className='img-fluid h-75 rounded-4' style={{ width: "95%" }} />
                        <audio controls muted loop autoPlay className='mt-3'>
                            <source src={data2.File} type="audio/mpeg" />
                            <track
                                kind="captions"
                                src={data2.File}
                                srcLang="en"
                                label="English"
                                default
                            />
                            Your browser does not support the audio element.
                        </audio>


                        <div className='share-btn position-absolute text-black cursor' style={{right:"15px"}}
                            onClick={handleShareClick}>
                            <FontAwesomeIcon icon={faShareFromSquare} className='fs-5 ps-1' />
                        </div>

                        <div className='position-absolute text-black cursor w-100' style={{left:"0" , top:"64%"}}>
                            <p className='m-0 mx-auto rounded-4 w-50 py-1 text-black' style={{fontWeight:"550" , backgroundColor: "rgba(255, 255, 255, 0.4)"}}>{data2.Name}</p>
                        </div>
                    </div>
                    <PrankBtn />
                    <div className='w-100 border mt-3 position-absolute bottom-0' style={{ height: "100px" }}>
                        <ins className="adsbygoogle"
                            style={{ display: 'block', height: '100px' }}
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

export default Audio;