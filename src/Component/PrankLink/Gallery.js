import React, { useEffect, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

// img
import watermark from "../../img/watermark.png"

const Gallery = ({ data2 }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);

    // Handle image preloading
    useEffect(() => {
        if (data2?.File) {
            const img = new Image();
            img.src = data2.File;
            img.onload = () => setIsImageLoaded(true);
        }
    }, [data2?.File]);

    const handleShareClick = (e) => {
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: 'Check out this amazing content!',
                url: window.location.href,
            }).catch(error => console.error('Error sharing content:', error));
        } else {
            setShowShareMenu(!showShareMenu);
        }
    };

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out this amazing content!')}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('Check out this amazing content!')}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this amazing content! ')}${encodeURIComponent(window.location.href)}`
    };

    useEffect(() => {
        const handleClickOutside = () => setShowShareMenu(false);
        if (showShareMenu) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showShareMenu]);

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className="full-page-background">
            <div className="content-container">
                <Row className="content px-3 overflow-hidden flex-grow-1">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div className="img-div position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center">
                            <div className="blurred-bg"></div>

                            {/* Main Image */}
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

                            {/* Share Button and Watermark */}
                            {isImageLoaded && (
                                <>
                                    {/* Share Button */}
                                    <div
                                        className="share-btn position-absolute text-black cursor"
                                        onClick={handleShareClick}
                                        role="button"
                                        aria-label="Share this content"
                                        tabIndex={0}
                                        onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}
                                        style={{
                                            zIndex: 2, // Ensure it appears above the image
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faShareFromSquare}
                                            style={{ paddingLeft: '2px', fontSize: '14px' }}
                                        />
                                        {showShareMenu && (
                                            <div
                                                className="share-menu"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    right: 0,
                                                    zIndex: 3,
                                                    background: '#fff',
                                                    borderRadius: '4px',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                                }}
                                            >
                                                <div className="share-menu-header">
                                                    <span>Share via</span>
                                                    <button
                                                        onClick={() => setShowShareMenu(false)}
                                                        className="close-btn"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </button>
                                                </div>
                                                <div className="share-options">
                                                    <a
                                                        href={shareLinks.facebook}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="share-option"
                                                    >
                                                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                                                    </a>
                                                    <a
                                                        href={shareLinks.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="share-option"
                                                    >
                                                        <FontAwesomeIcon icon={faTwitter} /> Twitter
                                                    </a>
                                                    <a
                                                        href={shareLinks.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="share-option"
                                                    >
                                                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                                                    </a>
                                                    <a
                                                        href={shareLinks.whatsapp}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="share-option"
                                                    >
                                                        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Watermark */}
                                    <div
                                        className="position-absolute text-black"
                                        style={{
                                            top: '-23px',
                                            left: '-22px',
                                            zIndex: 2,
                                        }}
                                    >
                                        <img src={watermark} alt="prankster" width={110} />
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
                {/* <div className='ad-container py-2 ads-div mx-auto'>
                    <ins className="adsbygoogle border"
                        style={{ display: 'block', height: '50px', width: '100%' }}
                        data-ad-format="fluid"
                        data-ad-layout-key="-6t+ed+2i-1n-4w"
                        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                        data-ad-slot="YOUR_AD_SLOT_ID">
                    </ins>
                </div> */}
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
                    filter: blur(8px);
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

                .share-menu {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    width: 200px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    z-index: 1000;
                    margin-top: 10px;
                }

                .share-menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 15px;
                    border-bottom: 1px solid #eee;
                }

                .close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #666;
                }

                .share-option {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 0px 0px 0px 10px;
                    width: 100%;
                    border: none;
                    background: none;
                    color: #333;
                    text-decoration: none;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .share-option:hover {
                    background-color: #f5f5f5;
                    color: #333;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
};

export default Gallery;