import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PrankBtn from './PrankBtn';
import watermark from "../../img/watermark.png";
import share from "../../img/share.png";
import Share from './Share';
import InterstitialAd from './displayads'; // Import the InterstitialAd component
import AdComponent from './AdSenseAd';

const Gallery = ({ data2 }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [showCoverImage, setShowCoverImage] = useState(true);
    const [showAd, setShowAd] = useState(false);

    const onShareClick = () => {
        setShowAd(true); // Show interstitial ad first
    };

    const handleAdComplete = () => {
        setShowAd(false); // Hide the ad
        setIsShareOpen(true); // Show the share component
    };

    const handleAdError = () => {
        setShowAd(false); // Hide the ad if there's an error
        setIsShareOpen(true); // Directly show the share component
        setShowCoverImage(false); // Hide the cover image if ad fails
    };

    const handleCloseClick = () => {
        setShowCoverImage(false);
    };

    useEffect(() => {
        if (data2?.File) {
            const img = new Image();
            img.src = data2.File;
            img.onload = () => setIsImageLoaded(true);
        }

        // Set a timeout to trigger the error handler in case the ad doesn't load in time
        const adTimeout = setTimeout(() => {
            if (showAd) {
                handleAdError(); // Fallback to share if ad loading fails
            }
        }, 500); // 5 seconds timeout for ad

        return () => clearTimeout(adTimeout); // Clean up timeout on component unmount
    }, [data2?.File, showAd]);

    return (
        <div className="full-page-background">
            {/* Show the InterstitialAd when showAd is true */}
            {showAd && <InterstitialAd onAdComplete={handleAdComplete} onAdError={handleAdError} />}

            <div className="content-container">
                <Row className="content px-3 overflow-hidden flex-grow-1">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div className="img-div mt-2 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center border border-white">
                            <div className="blurred-bg" />

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
                                    <img
                                        src={data2.File}
                                        alt="prankImage"
                                        className="img-fluid position-absolute"
                                    />

                                    {showCoverImage && (
                                        <div className="cover-image-overlay">
                                            <div
                                                className="close-button position-absolute text-black cursor"
                                                onClick={handleCloseClick}
                                                role="button"
                                                aria-label="Close cover image"
                                                tabIndex={0}
                                                onKeyPress={(e) => e.key === 'Enter' && handleCloseClick()}
                                                style={{ zIndex: 2 }}
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </div>
                                            <img
                                                src={data2.CoverImage}
                                                alt="Cover"
                                                className="full-cover-image"
                                            />
                                        </div>
                                    )}

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
                                        <img src={watermark} alt="Prankster" width={120} />
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mt-3">
                            <PrankBtn />
                        </div>

                        <AdComponent />
                    </Col>
                </Row>
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

                .cover-image-overlay::before {
                    content: "";
                    position: absolute;
                    top: -10%;
                    left: -10%;
                    right: -10%;
                    bottom: -10%;
                    background-image: ${data2?.CoverImage ? `url('${data2.CoverImage}')` : 'none'};
                    background-size: cover;
                    background-position: center;
                    filter: blur(20px); /* Increase blur effect */
                    opacity:0.6;
                    transform: scale(1.1); /* Scale the image slightly to remove black shadow */
                    z-index: -1;
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
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Gallery;