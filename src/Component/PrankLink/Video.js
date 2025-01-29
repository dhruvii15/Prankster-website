import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faTimes } from '@fortawesome/free-solid-svg-icons';
import watermark from "../../img/watermark.png";
import share from "../../img/share.png";
import Share from './Share';
import InterstitialAd from './displayads';

const Video = ({ data2 }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const frameCaptureTries = useRef(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [capturedFrame, setCapturedFrame] = useState(null);
  const [showCoverImage, setShowCoverImage] = useState(true);

  useEffect(() => {
    canvasRef.current = document.createElement('canvas');
  }, []);

  const handleAdError = () => {
    setShowAd(false); // Hide the ad if there's an error
    setIsShareOpen(true); // Directly show the share component
  };

  useEffect(() => {
    if (data2?.CoverImage) {
      const img = new Image();
      img.src = data2.CoverImage;
      img.onload = () => setIsImageLoaded(true);
    }

    // Set a timeout to trigger the error handler in case the ad doesn't load in time
    const adTimeout = setTimeout(() => {
      if (showAd) {
        handleAdError(); // Fallback to share if ad loading fails
      }
    }, 500); // 5 seconds timeout for ad

    return () => clearTimeout(adTimeout); // Clean up timeout on component unmount
  }, [data2?.CoverImage, showAd]);



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
      setShowCoverImage(false);

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
      return `url('http://localhost:5001/api/proxy?url=${encodeURIComponent(data2.CoverImage)}')`;
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
      {showAd && <InterstitialAd onAdComplete={handleAdComplete} onAdError={handleAdError} />}
      <div className="content-container">
        <Row className="content px-3 overflow-hidden flex-grow-1">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="img-div3 position-relative rounded-4 overflow-hidden border border-white">
              <div className="blurred-bg" style={blurredBgStyle}></div>

              <video
                ref={videoRef}
                loop
                playsInline
                className='w-100 h-100 position-absolute'
                style={{ display: showCoverImage ? 'none' : 'block' }}
              >
                <source src={`http://localhost:5001/api/proxy?url=${encodeURIComponent(data2.File)}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

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
                  {showCoverImage && (
                    <div className="cover-image-overlay">
                      <button
                        className="close-button"
                        onClick={startVideoWithSound}
                        aria-label="Close cover image"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                      <img
                        src={`http://localhost:5001/api/proxy?url=${encodeURIComponent(data2.CoverImage)}`}
                        alt="Cover"
                        className="full-cover-image"
                      />
                    </div>
                  )}

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
                      <img src={share} alt='share' width={20} style={{ paddingRight: "2px" }} />
                    </div>
                    <Share
                      show={isShareOpen}
                      onHide={() => setIsShareOpen(false)}
                      data2={data2}
                    />
                  </div>

                  <div className='position-absolute text-black' style={{ left: "-22px", top: "-23px", zIndex: 3 }}>
                    <img src={watermark} alt='Prankster' width={120} />
                  </div>

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
                </>
              )}
            </div>

            <div className="mt-3">
              <PrankBtn />
            </div>
          </Col>
        </Row>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
};

export default Video;