import React, { useEffect, useRef, useState } from 'react';
import PrankBtn from './PrankBtn';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

const Audio = ({ data2 }) => {

    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [totalTime, setTotalTime] = useState('0:00');

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            const current = audio.currentTime;
            const total = audio.duration;

            // Update current time and total time
            setCurrentTime(formatTime(current));
            setTotalTime(formatTime(total));
        };

        if (audio) {
            audio.muted = false; // Ensure the audio is not muted
            audio.play().catch((error) => {
                console.error('Error playing audio:', error);
            });

            // Add event listeners for time updates and when metadata is loaded (total time)
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateTime);

            return () => {
                // Clean up event listeners
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', updateTime);
            };
        }
    }, []);

    // Helper function to format time (mm:ss)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
    };

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
            <Row className="content p-0" style={{ minHeight: '100vh' }}>
                <Col className="d-flex flex-column align-items-center contentTop mt-5 mt-sm-0">
                    <div className="img-div2 position-relative">
                        <img src={data2.Image} alt='prankImage' className='img-fluid h-100 rounded-4' style={{ width: "89%" }} />
                        <audio ref={audioRef} loop className='w-100 h-100'>
                            <source src={data2.File} type="audio/mp3" />
                            Your browser does not support the audio tag.
                        </audio>
                        <div className='share-btn position-absolute text-black cursor' style={{ right: "25px" }}
                            onClick={handleShareClick}
                            role="button"
                            aria-label="Share this content"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleShareClick()}
                        >
                            <FontAwesomeIcon icon={faShareFromSquare} className='fs-5 ps-1' />
                        </div>

                        <div className='position-absolute text-black cursor w-100' style={{ left: "0", top: "85%" }}>
                            <p className='m-0 mx-auto rounded-4 w-50 py-1 text-black' style={{ fontWeight: "550", backgroundColor: "rgba(255, 255, 255, 0.4)" }}>{data2.Name}</p>
                        </div>
                    </div>

                    <div className='d-flex border w-100 justify-content-between align-items-center py-2 mt-3'>
                        <p className='m-0'>{currentTime}</p>
                        <p className='m-0'>{totalTime}</p>
                    </div>

                    <div className='pb-5'>
                        <PrankBtn />
                    </div>

                    <div className='w-100 border position-absolute bottom-0' style={{ height: "100px" }}>
                        <ins className="adsbygoogle"
                            style={{ display: 'block', height: '100px' }}
                            data-ad-format="fluid"
                            data-ad-layout-key="-6t+ed+2i-1n-4w"
                            data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                            data-ad-slot="YOUR_AD_SLOT_ID"></ins>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Audio;