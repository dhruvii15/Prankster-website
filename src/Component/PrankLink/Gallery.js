import React, { useEffect, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

// img
import watermark from "../../img/watermark.png"

const Gallery = ({ data2 }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Handle image preloading
    useEffect(() => {
        if (data2?.File) {
            const img = new Image();
            img.src = data2.File;
            img.onload = () => setIsImageLoaded(true);
        }
    }, [data2?.File]);

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
            <div className="full-page-background">
                <Row className="content px-3 overflow-hidden" style={{ minHeight: '100vh' }}>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div className="img-div position-relative">
                            {/* Main Image - only show when loaded */}
                            <img 
                                src={data2.File} 
                                alt='prankImage' 
                                className='img-fluid w-100 h-100 rounded-4' 
                                style={{ display: isImageLoaded ? 'block' : 'none' }}
                            />

                            {/* Loading state */}
                            {!isImageLoaded && (
                                <div className="loading-placeholder rounded-4" style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}

                            {/* Share button and watermark - only show when image is loaded */}
                            {isImageLoaded && (
                                <>
                                    <div className='share-btn position-absolute text-black cursor'
                                        onClick={handleShareClick}
                                        role="button"
                                        aria-label="Share this content"
                                        tabIndex={0}
                                        onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}>
                                        <FontAwesomeIcon icon={faShareFromSquare} className='fs-5 ps-1' />
                                    </div>
                                    
                                    <div className='position-absolute text-black cursor' style={{left:"10px", top:"10px"}}>
                                        <img src={watermark} alt='prankster' width={40}/>
                                    </div>
                                </>
                            )}
                        </div>
                        <PrankBtn />
                        <div className='w-100 border mt-3' style={{ height: "50px" }}>
                            <ins className="adsbygoogle"
                                style={{ display: 'block', height: '50px' }}
                                data-ad-format="fluid"
                                data-ad-layout-key="-6t+ed+2i-1n-4w"
                                data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                                data-ad-slot="YOUR_AD_SLOT_ID"></ins>
                        </div>
                    </Col>
                </Row>
                <style>{`
                    .full-page-background {
                        position: relative;
                        min-height: 100vh;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        background-color: #808080;
                    }
                    .full-page-background::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: ${isImageLoaded && data2?.File ? `url('${data2.File}')` : 'none'};
                        background-size: cover;
                        background-position: center;
                        z-index: 0;
                    }
                    .full-page-background::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(27, 26, 26, 0.2);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        z-index: 1;
                    }
                    .content {
                        position: relative;
                        z-index: 2;
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    .centered-image {
                        max-width: 100%;
                        max-height: 80vh;
                        object-fit: contain;
                    }
                `}</style>
            </div>
        </>
    );
};

export default Gallery;