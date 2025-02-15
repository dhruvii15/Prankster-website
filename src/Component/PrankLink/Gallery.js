import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PrankBtn from './PrankBtn';
import watermark from "../../img/watermark.png";
import share from "../../img/share.png";
import Share from './Share';
import InterstitialAd from './displayads';
import AdComponent from './AdSenseAd';

const Gallery = ({ data2 }) => {
    const [imageStates, setImageStates] = useState({
        main: { loaded: false, error: false },
        cover: { loaded: false, error: false }
    });
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [showCoverImage, setShowCoverImage] = useState(true);
    const [showAd, setShowAd] = useState(false);

    const proxyUrl = "http://localhost:5001/api/proxy";

    const loadImage = (url, type) => {
        if (!url) return;

        const img = new Image();
        
        img.onload = () => {
            setImageStates(prev => ({
                ...prev,
                [type]: { loaded: true, error: false }
            }));
        };

        img.onerror = () => {
            setImageStates(prev => ({
                ...prev,
                [type]: { loaded: false, error: true }
            }));
        };

        img.src = `${proxyUrl}?url=${encodeURIComponent(url)}`;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    };

    useEffect(() => {
        const mainCleanup = loadImage(data2?.File, 'main');
        const coverCleanup = loadImage(data2?.CoverImage, 'cover');

        const adTimeout = setTimeout(() => {
            if (showAd) {
                handleAdError();
            }
        }, 5000); // Increased timeout to 5 seconds for better reliability

        return () => {
            mainCleanup?.();
            coverCleanup?.();
            clearTimeout(adTimeout);
        };
    }, [data2?.File, data2?.CoverImage, showAd]);

    const onShareClick = () => {
        setShowAd(true);
    };

    const handleAdComplete = () => {
        setShowAd(false);
        setIsShareOpen(true);
    };

    const handleAdError = () => {
        setShowAd(false);
        setIsShareOpen(true);
        setShowCoverImage(false);
    };

    const handleCloseClick = () => {
        setShowCoverImage(false);
    };

    const getProxiedUrl = (url) => `${proxyUrl}?url=${encodeURIComponent(url)}`;

    return (
        <div className="full-page-background">
            {showAd && <InterstitialAd onAdComplete={handleAdComplete} onAdError={handleAdError} />}

            <div className="content-container">
                <Row className="content px-3 overflow-hidden flex-grow-1">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div className="img-div mt-2 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center border border-white">
                            <div className="blurred-bg" />

                            {!imageStates.main.loaded && !imageStates.main.error && (
                                <div className="loading-placeholder rounded-4">
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}

                            {imageStates.main.error && (
                                <div className="error-message text-light">
                                    Failed to load image
                                </div>
                            )}

                            {imageStates.main.loaded && (
                                <>
                                    <img
                                        src={getProxiedUrl(data2.File)}
                                        alt="prankImage"
                                        className="img-fluid position-absolute"
                                    />

                                    {showCoverImage && imageStates.cover.loaded && (
                                        <div className="cover-image-overlay">
                                            <div
                                                className="close-button position-absolute cursor"
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
                                                src={getProxiedUrl(data2.CoverImage)}
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

                                    <div className="position-absolute text-black watermark">
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
                    background-image: url('${data2?.CoverImage ? getProxiedUrl(data2.CoverImage) : ''}');
                    background-size: cover;
                    background-position: center;
                    filter: blur(20px);
                    opacity: 0.6;
                    transform: scale(1.1);
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
                    background-image: ${imageStates.main.loaded && data2?.File ? `url('${getProxiedUrl(data2.File)}')` : 'none'};
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

                .loading-placeholder {
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .error-message {
                    padding: 1rem;
                    text-align: center;
                }

                .watermark {
                    top: -23px;
                    left: -22px;
                    z-index: 2;
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