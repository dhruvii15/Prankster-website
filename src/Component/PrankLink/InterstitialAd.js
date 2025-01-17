import React, { useEffect, useState } from 'react';

const InterstitialAd = ({ onAdComplete }) => {
    const [adFailed, setAdFailed] = useState(false);

    useEffect(() => {
        // Simulate ad loading and display
        const adLoadTimeout = setTimeout(() => {
            setAdFailed(true); // Mark the ad as failed to load after 3 seconds
        }, 0);

        const adCompleteTimeout = setTimeout(() => {
            if (typeof onAdComplete === 'function' && !adFailed) {
                onAdComplete();
            }
        }, 0); // Ad duration (3 seconds)

        return () => {
            clearTimeout(adLoadTimeout);
            clearTimeout(adCompleteTimeout); // Cleanup on unmount
        };
    }, [onAdComplete, adFailed]);

    if (adFailed) {
        return null; // Do not display anything if the ad fails
    }

    return (
        <div className="interstitial-overlay">
            <div className="interstitial-ad-container">
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block', width: '100vw', height: '100vh' }}
                    data-ad-client={process.env.REACT_APP_ADSENSE_CLIENT}
                    data-ad-slot={process.env.REACT_APP_ADSENSE_SLOT}
                    data-ad-format="fluid"
                    data-full-width-responsive="true"
                />
                <p>Ad is loading...</p>
            </div>
            <style>{`
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
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: white;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default InterstitialAd;
