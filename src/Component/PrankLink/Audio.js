import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faPlay } from '@fortawesome/free-solid-svg-icons';

// import gif from "../../img/MuSAo94ViS.gif";
import watermark from "../../img/watermark.png";
import AudioVisualizer from './AudioVisualizer';

const Audio = ({ data2 }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [totalTime, setTotalTime] = useState('0:00');
    const [needsInteraction, setNeedsInteraction] = useState(true);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [duration, setDuration] = useState(0);

    // Existing useEffect and event handlers remain the same...
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
                setNeedsInteraction(false);
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        }
    };

    useEffect(() => {
        if (data2?.CoverImage) {
            const img = new Image();
            img.src = data2.CoverImage;
            img.onload = () => setIsImageLoaded(true);
        }
    }, [data2?.CoverImage]);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            const current = audio.currentTime;
            const total = audio.duration;
            setCurrentTime(formatTime(current));
            setTotalTime(formatTime(total));
            setDuration(total); // Add this line
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

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className="full-page-background">
            <div className="content-container">
                <Row className="content p-0 overflow-hidden flex-grow-1">
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <div className="img-div2 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                            <audio ref={audioRef} loop >
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
                                        src={data2.CoverImage}
                                        alt='prankImage'
                                        className='img-fluid h-100'
                                    />

                                    {needsInteraction && (
                                        <div
                                            onClick={startAudioWithSound}
                                            className="rounded-4"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: '0%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'rgba(0, 0, 0, 0.3)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                zIndex: 2
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
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
                                                        fontSize: '20px',
                                                        color: '#000',
                                                        marginLeft: '3px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className='share-btn position-absolute text-black cursor'
                                        style={{ right: "12px", zIndex: 3 }}
                                        onClick={handleShareClick}
                                        role="button"
                                        aria-label="Share this content"
                                        tabIndex={0}
                                        onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}>
                                        <FontAwesomeIcon icon={faShareFromSquare} style={{ paddingLeft: "2px", fontSize: "14px" }} />
                                    </div>

                                    <div className='position-absolute text-black cursor' style={{ left: "-22px", top: "-23px", zIndex: 3 }}>
                                        <img src={watermark} alt='prankster' width={110} />
                                    </div>

                                    <div className='position-absolute text-black cursor w-100' style={{ left: "0", bottom: "5px" }}>
                                        <p className='m-0 mx-auto rounded-4 w-75 py-1 text-black' style={{ fontWeight: "550", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                            {data2.Name}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* <img src={gif} alt='gif' className='ads-div' style={{ height: "50px" }} /> */}

                        <AudioVisualizer
                            currentTime={audioRef.current?.currentTime || 0}
                            totalDuration={duration}
                            className="ads-div px-1"
                        />

                        <div className='d-flex justify-content-between align-items-start px-1 ads-div mt-2'>
                            <p className='m-0'>{currentTime}</p>
                            <p className='m-0'>{totalTime}</p>
                        </div>

                        <div className='mt-3'>
                            <PrankBtn />
                        </div>
                    </Col>
                </Row>

                {/* Advertisement div moved to bottom */}
                {/* <div className='ad-container ads-div mx-auto py-2'>
                    <ins
                        className="adsbygoogle border"
                        style={{ display: 'block', height: '120px', width: '100%' }}
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
                }

                .ad-container {
                    margin-top: auto;
                }
            `}</style>
        </div>
    );
};

export default Audio;