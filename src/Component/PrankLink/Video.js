import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faPlay } from '@fortawesome/free-solid-svg-icons';

// img
import watermark from "../../img/watermark.png"

const Video = ({ data2 }) => {
  const videoRef = useRef(null);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (data2?.CoverImage) {
      const img = new Image();
      img.src = data2.CoverImage;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [data2?.CoverImage]);

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
                    <FontAwesomeIcon icon={faShareFromSquare} style={{paddingLeft:"2px", fontSize:"14px"}} />
                  </div>

                  <div className='position-absolute text-black cursor' style={{left:"-22px", top:"-23px", zIndex: 3}}>
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
      `}</style>
    </div>
  );
};

export default Video;