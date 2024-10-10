import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


const MainButton = () => {
    const handleAppstoreClick = () => {
        const appstore = 'https://apps.apple.com/us/app/lol-anonymous-funny-card/id6670788272';

        window.open(appstore, '_blank');
    };


    const handlePlaystoreClick = () => {
        const playstore = 'https://play.google.com/store/apps/details?id=com.lol.android';

        window.open(playstore, '_blank');
    };
    return (
        <>
            <div className='rounded-pill p-2 bg-white d-flex align-items-center justify-content-center ms-3 ms-lg-0' style={{ width: "120px" }}>
                <div className='border-end border-light border-2 cursor playstore' onClick={handlePlaystoreClick} >
                    <FontAwesomeIcon icon={faGooglePlay} className='pe-3 fs-3 picon' />
                </div>
                <div className='cursor appstore' onClick={handleAppstoreClick}>
                    <FontAwesomeIcon icon={faAppStore} className='ps-3 fs-3 aicon' />
                </div>

            </div>
        </>
    );
};

export default MainButton;