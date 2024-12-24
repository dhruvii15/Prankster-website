import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faSnapchat
} from '@fortawesome/free-brands-svg-icons';

// img
import watermark from "../../img/watermark.png"
import share from "../../img/share.png";

const Video = ({ data2 }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const frameCaptureTries = useRef(0);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isShowingAd, setIsShowingAd] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [adCompleted, setAdCompleted] = useState(false);
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

      // Wait for video metadata to be loaded
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        frameCaptureTries.current++;
        setTimeout(captureVideoFrame, 200);
        return;
      }

      // Set canvas dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Could not get 2D context');
        return;
      }

      // Clear canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw current video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert to data URL with lower quality for better performance
      const frameDataUrl = canvas.toDataURL('image/jpeg', 0.5);
      
      if (frameDataUrl !== 'data:,' && frameDataUrl.length > 100) {
        setCapturedFrame(frameDataUrl);
      } else {
        // If capture failed, retry
        frameCaptureTries.current++;
        setTimeout(captureVideoFrame, 200);
      }
    } catch (error) {
      console.error('Frame capture error:', error);
      frameCaptureTries.current++;
      setTimeout(captureVideoFrame, 200);
    }
  };


  const handleShareClick = (e) => {
    e.stopPropagation();
    // Show interstitial ad if not completed
    if (!adCompleted) {
      showInterstitialAd();
    } else {
      if (navigator.share) {
        navigator.share({
          title: data2.Name,
          text: `${data2.Name}\n`, // Add line break after Name
          url: data2.ShareURL,
        }).catch(error => console.error('Error sharing content:', error));
      } else {
        // Fallback to custom share menu if navigator.share is not supported
        setShowShareMenu(!showShareMenu);
      }
    }
  };

  const startVideoWithSound = async () => {
    if (!videoRef.current) return;

    try {
      const video = videoRef.current;
      video.volume = 1;
      video.muted = false;
      
      // Reset frame capture counter
      frameCaptureTries.current = 0;

      // Add loadedmetadata listener
      video.addEventListener('loadedmetadata', () => {
        // Try to capture frame after metadata is loaded
        captureVideoFrame();
      }, { once: true });

      await video.play();
      setIsPlaying(true);
      setNeedsInteraction(false);

      // Multiple capture attempts with increasing delays
      const captureDelays = [100, 300];
      // const captureDelays = [200];
      captureDelays.forEach(delay => {
        setTimeout(() => {
          if (!capturedFrame) {
            captureVideoFrame();
          }
        }, delay);
      });

    } catch (error) {
      console.error('Error playing video:', error);
      // Fallback to cover image if video fails
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

  // Update blur view with proper error handling
  const blurredBgStyle = {
    backgroundImage: getBackgroundStyle(),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(8px)',
    transform: 'scale(1.1)', // Prevent blur edges
    width: '100%',
    height: '100%'
  };
  

  const showInterstitialAd = () => {
    setIsShowingAd(true);

    const adContainer = document.getElementById('interstitial-ad');
    if (adContainer) {
      const adElement = document.createElement('ins');
      adElement.className = 'adsbygoogle';
      adElement.style.display = 'block';
      adElement.setAttribute('data-ad-client', 'ca-pub-3940256099942544'); // Test client ID
      adElement.setAttribute('data-ad-slot', '1234567890'); // Replace with the test ad slot ID
      adElement.setAttribute('data-ad-format', 'fluid');
      adElement.setAttribute('data-full-width-responsive', 'true');

      adContainer.innerHTML = ''; // Clear previous ad if any
      adContainer.appendChild(adElement);

      try {
        // Push ad to Google Ads container
        (window.adsbygoogle = window.adsbygoogle || []).push({
          callback: () => {
            console.log('Ad loaded successfully');

            // After 3 seconds, hide the ad and trigger sharing logic
            setTimeout(() => {
              setIsShowingAd(false); // Hide the ad
              setAdCompleted(true); // Mark ad as completed

              // Invoke share logic immediately
              handleShareAfterAd();
            }, 3000); // Show the ad for 3 seconds
          },
        });
      } catch (err) {
        console.error('Ad failed to load:', err);
        setIsShowingAd(false); // Hide the ad in case of failure
        setAdCompleted(true);
        handleShareAfterAd(); // Trigger share options even if the ad fails
      }
    }

    // Set fallback timeout in case the ad is not loaded or fails
    setTimeout(() => {
      setIsShowingAd(false); // Hide the ad
      setAdCompleted(true); // Mark ad as completed
      handleShareAfterAd(); // Trigger share options
    }, 3000); // 3 seconds timeout to trigger share options
  };

  const handleShareAfterAd = () => {
    if (navigator.share) {
      navigator.share({
        title: data2.Name,
        text: `${data2.Name}\n`, // Add line break after Name
        url: data2.ShareURL,
      }).catch(error => console.error('Error sharing content:', error));
      setAdCompleted(false);
    } else {
      setShowShareMenu(!showShareMenu);
      setAdCompleted(false);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data2.ShareURL)}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(data2.ShareURL)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${data2.Name}\n`)}${encodeURIComponent(data2.ShareURL)}`,
    snapchat: `https://www.snapchat.com/share?url=${encodeURIComponent(data2.ShareURL)}&title=${encodeURIComponent(data2.Name)}`
  };

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowShareMenu(false);
    if (showShareMenu) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showShareMenu]);

  return (
    <div className="full-page-background">
      {isShowingAd && (
        <div className="interstitial-overlay">
          <div id="interstitial-ad" className="interstitial-ad-container">
            <div className="ad-loading">Loading advertisement...</div>
          </div>
        </div>
      )}
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
                  {/* Blurred Background */}
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
                      filter: 'blur(10px)', // Apply blur effect
                      zIndex: -1, // Ensure this stays behind the clear image
                    }}
                  ></div>

                  {/* Clear Main Image */}
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

                  {/* Play Button */}
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
                      zIndex: 2, // Ensure button is on top
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
                  <div
                    className="share-btn position-absolute text-black cursor-pointer"
                    onClick={handleShareClick}
                    role="button"
                    aria-label="Share this content"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}
                    style={{ zIndex: 3 }}
                  >
                    <img src={share} alt='share' width={18} style={{ paddingRight: "2px" }} />

                    {showShareMenu && (
                      <div className="share-menu" onClick={e => e.stopPropagation()}>
                        <div className="share-menu-header">
                          <span>Share</span>
                          <button onClick={() => setShowShareMenu(false)} className="close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                        <div className="share-options">
                          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                          </a>
                          <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                          </a>
                          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                          </a>
                          <a href={shareLinks.snapchat} target="_blank" rel="noopener noreferrer" className="share-option">
                            <FontAwesomeIcon icon={faSnapchat} /> Snapchat
                          </a>
                        </div>
                      </div>
                    )}
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

        {/* Advertisement div */}
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
          transition: background-image 0.3s ease;
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
                    
                .interstitial-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }

                .interstitial-ad-container {
                    background: white;
                    width: 100%;
                    max-width: 100vw;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .ad-loading {
                    color: #666;
                    font-size: 16px;
                    text-align: center;
                }
      `}</style>
    </div>
  );
};

export default Video;