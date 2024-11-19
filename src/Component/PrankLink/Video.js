import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

// img
import watermark from "../../img/watermark.png"

const Video = ({ data2 }) => {
  const videoRef = useRef(null);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    if (data2?.CoverImage) {
      const img = new Image();
      img.src = data2.CoverImage;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [data2?.CoverImage]);

  const handleShareClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
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

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowShareMenu(false);
    if (showShareMenu) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showShareMenu]);

  const startVideoWithSound = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.volume = 1;
        videoRef.current.muted = false;
        await videoRef.current.play();
        setNeedsInteraction(false);
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="full-page-background">
      <div className="content-container">
        <Row className="content px-3 overflow-hidden flex-grow-1">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="img-div position-relative rounded-4 overflow-hidden" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              {(!needsInteraction || isImageLoaded) && (
                <video
                  ref={videoRef}
                  loop
                  playsInline
                  className='w-100 h-100'
                  style={{ display: needsInteraction ? 'none' : 'block' }}
                >
                  <source src={data2.File} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {needsInteraction && isImageLoaded && (
                <div
                  className='rounded-4'
                  onClick={startVideoWithSound}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url('${data2.CoverImage}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 2
                  }}
                >
                  <div
                    className="play-button"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.8)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{
                        fontSize: '30px',
                        color: '#000',
                        marginLeft: '6px'
                      }}
                    />
                  </div>
                </div>
              )}

              {!isImageLoaded && (
                <div className="loading-placeholder rounded-4" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2
                }}>
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              {isImageLoaded && (
                <>
                  <div
                    className="share-btn position-absolute text-black cursor-pointer"
                    onClick={handleShareClick}
                    role="button"
                    aria-label="Share this content"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}
                    style={{ zIndex: 3 }}
                  >
                    <FontAwesomeIcon icon={faShareFromSquare} style={{ paddingLeft: "2px", fontSize: "14px" }} />

                    {showShareMenu && (
                      <div className="share-menu" onClick={e => e.stopPropagation()}>
                        <div className="share-menu-header">
                          <span>Share via</span>
                          <button onClick={() => setShowShareMenu(false)} className="close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                        <div className="share-options">
                          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                          </a>
                          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faTwitter} /> Twitter
                          </a>
                          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                          </a>
                          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='position-absolute text-black cursor' style={{ left: "-22px", top: "-23px", zIndex: 3 }}>
                    <img src={watermark} alt='prankster' width={110} />
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
        {/* <div className="ad-container py-2 ads-div mx-auto">
          <ins
            className="adsbygoogle border"
            style={{ display: 'block', height: '50px' }}
            data-ad-format="fluid"
            data-ad-layout-key="-6t+ed+2i-1n-4w"
            data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
            data-ad-slot="YOUR_AD_SLOT_ID"
          ></ins>
        </div> */}
      </div>

      <style>{`
        .full-page-background {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          overflow: hidden;
          background-color: #808080;
        }

        .content-container {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .full-page-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: ${isImageLoaded && data2?.CoverImage ? `url('${data2.CoverImage}')` : 'none'};
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
          color: white;
          text-align: center;
          flex: 1;
          display: flex;
          align-items: center;
        }

        .ad-container {
          margin-top: auto;
        }

        /* New styles for share menu */
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

export default Video;