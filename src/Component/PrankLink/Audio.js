import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faTimes } from '@fortawesome/free-solid-svg-icons';
import watermark from "../../img/watermark.png";
import AudioVisualizer from './AudioVisualizer';
import Share from './Share';
import InterstitialAd from './displayads';
import share from "../../img/share.png";
import AdComponent from './AdSenseAd';

const Audio = ({ data2 }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [totalTime, setTotalTime] = useState('0:00');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [duration, setDuration] = useState(0);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCoverImage, setShowCoverImage] = useState(true);
    const [showAd, setShowAd] = useState(false);
    const [currentImage, setCurrentImage] = useState(data2?.Image);
    const handleAdError = () => {
        setShowAd(false); // Hide the ad if there's an error
        setIsShareOpen(true); // Directly show the share component
    };


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
    };

    const startAudioWithSound = async () => {
        if (audioRef.current) {
            try {
                audioRef.current.volume = 1;
                audioRef.current.muted = false;
                await audioRef.current.play();
                setIsPlaying(true);
                if (data2?.Image) {
                    setCurrentImage(data2.Image);
                }
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        }
    };

    const handleCloseClick = () => {
        setShowCoverImage(false);
        startAudioWithSound();
    };



    useEffect(() => {
        if (data2?.Image) {
            const img = new Image();
            img.src = data2.Image;
            img.onload = () => {
                setIsImageLoaded(true);
                setCurrentImage(data2.Image);
            };
        }

        // Set a timeout to trigger the error handler in case the ad doesn't load in time
        const adTimeout = setTimeout(() => {
            if (showAd) {
                handleAdError(); // Fallback to share if ad loading fails
            }
        }, 500); // 5 seconds timeout for ad

        return () => clearTimeout(adTimeout); // Clean up timeout on component unmount
    }, [data2?.Image, showAd]);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            const current = audio.currentTime;
            const total = audio.duration;
            setCurrentTime(formatTime(current));
            setTotalTime(formatTime(total));
            setDuration(total);
        };

        if (audio) {
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateTime);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', updateTime);
            };
        }
    }, []);

    const onShareClick = () => {
        setShowAd(true);
    };

    const handleAdComplete = () => {
        setShowAd(false);
        setIsShareOpen(true);
    };

    const getCurrentBackgroundImage = () => {
        if (!isImageLoaded) return 'none';
        if (isPlaying && data2?.Image) {
            return `url('${data2.Image}')`;
        }
        return `url('${data2.Image}')`;
    };

    return (
        <div className="full-page-background">
            {showAd && <InterstitialAd onAdComplete={handleAdComplete} onAdError={handleAdError} />}
            <div className="content-container">
                <Row className="content p-0 overflow-hidden flex-grow-1">
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <div className="img-div mt-2 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center border border-white">
                            <div className="blurred-bg"></div>
                            <audio ref={audioRef} loop
                                onEnded={() => setIsPlaying(false)}
                            >
                                <source src={data2.File} type="audio/mp3" />
                                Your browser does not support the audio tag.
                            </audio>

                            {!isImageLoaded && (
                                <div className="rounded-4" style={{
                                    width: "100%",
                                    height: "100%",
                                    aspectRatio: "16/9",
                                    background: 'rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto'
                                }}>
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}

                            {isImageLoaded && (
                                <>
                                    <img
                                        src={currentImage}
                                        alt='prankImage'
                                        className='img-fluid w-100 position-absolute'
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
                                            style={{
                                                right: "12px",
                                                bottom: "12px",
                                                zIndex: 3
                                            }}
                                        >
                                            <img src={share} alt="share" width={18} style={{ paddingRight: "2px" }} />
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

                                    <div className='position-absolute text-black cursor w-100 px-2'
                                        style={{
                                            backgroundColor: "rgba(217, 217, 217, 0.4)",
                                            backdropFilter: "blur(20px)",
                                            WebkitBackdropFilter: "blur(20px)",
                                            left: "0",
                                            bottom: "0px"
                                        }}>
                                        <p className='m-0 mx-auto w-100 pt-2 text-black justify-content-center gap-2' >
                                            <span>{data2.Name}</span>
                                        </p>

                                        <div className='d-flex align-items-center gap-3 justify-content-center'>
                                            {isPlaying && (
                                                <div style={{ width: "40px" }}>
                                                    <div className='pause-btn'>
                                                        <FontAwesomeIcon icon={faPause} className='fs-5' style={{ paddingTop: "10px" }} />
                                                    </div>
                                                </div>
                                            )}
                                            <AudioVisualizer
                                                currentTime={audioRef.current?.currentTime || 0}
                                                totalDuration={duration}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className='mt-3'>
                            <PrankBtn />
                        </div>

                        <AdComponent />
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

                .blurred-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: ${getCurrentBackgroundImage()};
                    background-size: cover;
                    background-position: center;
                    filter: blur(${isPlaying ? '12px' : '8px'});
                    transition: filter 0.01s ease, background-image 0.01s ease;
                    z-index: 0;
                }

                .content {
                    color: white;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Audio;