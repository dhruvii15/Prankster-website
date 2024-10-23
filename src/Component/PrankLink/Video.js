import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Video = ({ data2 }) => {
  const videoRef = useRef(null);
  const [needsInteraction, setNeedsInteraction] = useState(true);

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
    // Load AdSense ad when component mounts
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <div className="full-page-background">
        <Row className="content px-3" style={{ minHeight: '100vh' }}>
          <Col className="d-flex flex-column contentTop align-items-center">
            <div className="img-div position-relative rounded-4" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              {/* Video element */}
              <video
                ref={videoRef}
                loop
                playsInline
                className='w-100 h-100'
              >
                <source src={data2.File} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Click to play overlay */}
              {needsInteraction && (
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

              {/* Share button */}
              <div
                className="share-btn position-absolute text-black cursor-pointer"
                onClick={handleShareClick}
                role="button"
                aria-label="Share this content"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}
                style={{ zIndex: 3 }}
              >
                <FontAwesomeIcon icon={faShareFromSquare} className="fs-5 ps-1" />
              </div>
            </div>

            <PrankBtn />

            <div className="w-100 border mt-3 position-absolute bottom-0" style={{ height: '50px' }}>
              <ins
                className="adsbygoogle"
                style={{ display: 'block', height: '50px' }}
                data-ad-format="fluid"
                data-ad-layout-key="-6t+ed+2i-1n-4w"
                data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                data-ad-slot="YOUR_AD_SLOT_ID"
              ></ins>
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
  background-image: ${data2 && data2.CoverImage ? `url('${data2.CoverImage}')` : 'none'};
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
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
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

export default Video;