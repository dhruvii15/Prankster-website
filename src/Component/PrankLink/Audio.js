import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import gif from "../../img/MuSAo94ViS.gif";

const Audio = ({ data2 }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [totalTime, setTotalTime] = useState('0:00');
    const [needsInteraction, setNeedsInteraction] = useState(true);

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
        const audio = audioRef.current;

        const updateTime = () => {
            const current = audio.currentTime;
            const total = audio.duration;
            setCurrentTime(formatTime(current));
            setTotalTime(formatTime(total));
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
        <>
            <div className="full-page-background">
                <Row className="content p-0" style={{ minHeight: '100vh' }}>
                    <Col className="d-flex flex-column align-items-center contentTop mt-5 mt-sm-0">
                        <div className="img-div2 position-relative">
                            <img
                                src={data2.CoverImage}
                                alt='prankImage'
                                className='img-fluid h-100 rounded-4'
                                style={{ width: "89%" }}
                            />
                            <audio ref={audioRef} loop className='w-100 h-100'>
                                <source src={data2.File} type="audio/mp3" />
                                Your browser does not support the audio tag.
                            </audio>

                            {/* Play button overlay */}
                            {needsInteraction && (
                                <div
                                    onClick={startAudioWithSound}
                                    className="rounded-4"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '5.5%',
                                        width: '89%',
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

                            <div
                                className='share-btn position-absolute text-black cursor'
                                style={{ right: "25px", zIndex: 3 }}
                                onClick={handleShareClick}
                                role="button"
                                aria-label="Share this content"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}
                            >
                                <FontAwesomeIcon icon={faShareFromSquare} className='fs-5 ps-1' />
                            </div>

                            <div className='position-absolute text-black cursor w-100' style={{ left: "0", top: "85%" }}>
                                <p className='m-0 mx-auto rounded-4 w-50 py-1 text-black' style={{ fontWeight: "550", backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                                    {data2.Name}
                                </p>
                            </div>
                        </div>

                        <img src={gif} alt='gif' style={{ width: "90%", height: "50px" }} />

                        <div className='d-flex w-100 justify-content-between align-items-start px-3 pb-5'>
                            <p className='m-0'>{currentTime}</p>
                            <p className='m-0'>{totalTime}</p>
                        </div>

                        <div className='pb-5'>
                            <PrankBtn />
                        </div>

                        <div className='w-100 border position-absolute bottom-0' style={{ height: "100px" }}>
                            <ins
                                className="adsbygoogle"
                                style={{ display: 'block', height: '100px' }}
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

export default Audio;