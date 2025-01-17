import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PrankBtn from './PrankBtn';
import watermark from "../../img/watermark.png";
import share from "../../img/share.png";
import Share from './Share';
import InterstitialAd from './InterstitialAd'; // Import the InterstitialAd component

const Gallery = ({ data2 }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [showAd, setShowAd] = useState(false);

    const onShareClick = () => {
        setShowAd(true); // Show interstitial ad first
    };

    const handleAdComplete = () => {
        setShowAd(false); // Hide the ad
        setIsShareOpen(true); // Show the share component
    };

    useEffect(() => {
        if (data2?.File) {
            const img = new Image();
            img.src = data2.File;
            img.onload = () => setIsImageLoaded(true);
        }
    }, [data2?.File]);

    return (
        <div className="full-page-background">
            {/* Show the InterstitialAd when showAd is true */}
            {showAd && <InterstitialAd onAdComplete={handleAdComplete} />}

            <div className="content-container">
                <Row className="content px-3 overflow-hidden flex-grow-1">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div className="img-div position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center border border-white">
                            <div className="blurred-bg" />

                            <img
                                src={data2.File}
                                alt="prankImage"
                                className="img-fluid position-absolute"
                                style={{ display: isImageLoaded ? 'block' : 'none' }}
                            />

                            {/* Loading Placeholder */}
                            {!isImageLoaded && (
                                <div
                                    className="loading-placeholder rounded-4"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}

                            {isImageLoaded && (
                                <>
                                    <div>
                                        <div
                                            className="share-btn position-absolute text-black cursor"
                                            onClick={onShareClick}
                                            role="button"
                                            aria-label="Share this content"
                                            tabIndex={0}
                                            onKeyPress={(e) => e.key === 'Enter' && onShareClick()}
                                            style={{ zIndex: 2 }}
                                        >
                                            <img src={share} alt="share" width={18} style={{ paddingRight: "2px" }} />
                                        </div>
                                        <Share
                                            show={isShareOpen}
                                            onHide={() => setIsShareOpen(false)}
                                            data2={data2}
                                        />
                                    </div>

                                    <div
                                        className="position-absolute text-black"
                                        style={{
                                            top: '-23px',
                                            left: '-22px',
                                            zIndex: 2,
                                        }}
                                    >
                                        <img src={watermark} alt="Prankster" width={110} />
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mt-3">
                            <PrankBtn />
                        </div>
                    </Col>
                </Row>

                {/* Advertisement div */}
                <div className='ad-container py-2 ads-div mx-auto'>
                    {/* <ins className="adsbygoogle border"
                        style={{ display: 'block', height: '50px', width: '99%' }}
                        data-ad-format="rectangle"
                        data-ad-layout-key="-6t+ed+2i-1n-4w" //optional
                        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                        data-ad-slot="YOUR_AD_SLOT_ID">
                    </ins> */}
                </div>
            </div>

            <style>{`
                .full-page-background {
                    position: relative;
                    min-height: 100vh;
                    width: 100%;
                    display: flex;
                    overflow: hidden;
                    background-color: #1c1c1c;
                }

                .content-container {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .img-div {
                    position: relative;
                    background-color: transparent;
                }

                .blurred-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: ${isImageLoaded && data2?.File ? `url('${data2.File}')` : 'none'};
                    background-size: cover;
                    background-position: center;
                    filter: blur(15px); 
                    backdrop-filter: blur(15px); 
                    -webkit-backdrop-filter: blur(15px); 
                    z-index: 0;
                }

                .img-fluid {
                    position: relative;
                    z-index: 1;
                }

                .content {
                    color: white;
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Gallery;