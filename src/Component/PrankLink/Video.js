import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import watermark from "../../img/watermark.png";
import share from "../../img/share.png";
import Share from './Share';
import InterstitialAd from './InterstitialAd';

const Video = ({ data2 }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const frameCaptureTries = useRef(0);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [capturedFrame, setCapturedFrame] = useState(null);

  useEffect(() => {
    canvasRef.current = document.createElement('canvas');
  }, []);

  useEffect(() => {
    if (data2?.CoverImage) {
      const img = new Image();
      img.src = data2.CoverImage;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [data2?.CoverImage]);

  const captureVideoFrame = () => {
    if (!videoRef.current || frameCaptureTries.current >= 5) return;

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video.videoWidth === 0 || video.videoHeight === 0) {
        frameCaptureTries.current++;
        setTimeout(captureVideoFrame, 200);
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Could not get 2D context');
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const frameDataUrl = canvas.toDataURL('image/jpeg', 0.5);

      if (frameDataUrl !== 'data:,' && frameDataUrl.length > 100) {
        setCapturedFrame(frameDataUrl);
      } else {
        frameCaptureTries.current++;
        setTimeout(captureVideoFrame, 200);
      }
    } catch (error) {
      console.error('Frame capture error:', error);
      frameCaptureTries.current++;
      setTimeout(captureVideoFrame, 200);
    }
  };

  const onShareClick = () => {
    setShowAd(true);
  };

  const handleAdComplete = () => {
    setShowAd(false);
    setIsShareOpen(true);
  };

  const startVideoWithSound = async () => {
    if (!videoRef.current) return;

    try {
      const video = videoRef.current;
      video.volume = 1;
      video.muted = false;

      frameCaptureTries.current = 0;

      video.addEventListener('loadedmetadata', () => {
        captureVideoFrame();
      }, { once: true });

      await video.play();
      setIsPlaying(true);
      setNeedsInteraction(false);

      const captureDelays = [100, 300];
      captureDelays.forEach(delay => {
        setTimeout(() => {
          if (!capturedFrame) {
            captureVideoFrame();
          }
        }, delay);
      });

    } catch (error) {
      console.error('Error playing video:', error);
      if (data2?.CoverImage) {
        setCapturedFrame(data2.CoverImage);
      }
    }
  };

  const getBackgroundStyle = () => {
    if (capturedFrame) {
      return `url('${capturedFrame}')`;
    }
    if (isImageLoaded && data2?.CoverImage) {
      return `url('${data2.CoverImage}')`;
    }
    return 'none';
  };

  const blurredBgStyle = {
    backgroundImage: getBackgroundStyle(),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(8px)',
    transform: 'scale(1.1)',
    width: '100%',
    height: '100%'
  };

  return (
    <div className="full-page-background">
      {showAd && <InterstitialAd onAdComplete={handleAdComplete} />}

      <div className="content-container">
        <Row className="content px-3 overflow-hidden flex-grow-1">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="img-div3 position-relative rounded-4 overflow-hidden border border-white">
              <div className="blurred-bg" style={blurredBgStyle}></div>
              {(!needsInteraction || isImageLoaded) && (
                <video
                  ref={videoRef}
                  loop
                  playsInline
                  className='w-100 h-100 position-absolute'
                  style={{ display: needsInteraction ? 'none' : 'block' }}
                >
                  <source src={data2.File} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {needsInteraction && isImageLoaded && (
                <div
                  className="rounded-4"
                  onClick={startVideoWithSound}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url('${data2.CoverImage}')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      filter: 'blur(10px)',
                      zIndex: -1,
                    }}
                  ></div>

                  <img
                    src={data2.CoverImage}
                    alt="Cover"
                    style={{
                      width: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      zIndex: 1,
                    }}
                  />

                  <div
                    className="play-button"
                    style={{
                      position: 'absolute',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#F9E238',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: "2px solid black",
                      zIndex: 2,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{
                        fontSize: '28px',
                        color: '#000',
                        marginLeft: '5px',
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
                  <div>
                    <div
                      className="share-btn position-absolute text-black cursor-pointer"
                      onClick={onShareClick}
                      role="button"
                      aria-label="Share this content"
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && onShareClick()}
                      style={{ zIndex: 3 }}
                    >
                      <img src={share} alt='share' width={18} style={{ paddingRight: "2px" }} />
                    </div>
                    <Share
                      show={isShareOpen}
                      onHide={() => setIsShareOpen(false)}
                      data2={data2}
                    />
                  </div>

                  <div className='position-absolute text-black' style={{ left: "-22px", top: "-23px", zIndex: 3 }}>
                    <img src={watermark} alt='Prankster' width={110} />
                  </div>
                </>
              )}

              {isPlaying && (
                <div
                  className='share-btn2 position-absolute'
                  style={{
                    left: "5px",
                    bottom: "10px",
                    zIndex: 3,
                    cursor: 'pointer'
                  }}
                >
                  <FontAwesomeIcon icon={faPause} className='fs-5 text-black' />
                </div>
              )}
            </div>

            <div className="mt-3">
              <PrankBtn />
            </div>
          </Col>
        </Row>

        {/* <div className="ad-container py-2 ads-div mx-auto">
          <ins
            className="adsbygoogle border"
            style={{ display: 'block', height: '50px' }}
            data-ad-format="rectangle"
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

        .blurred-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          filter: blur(8px);
          z-index: 0;
          transition: background-image 0.01s ease;
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