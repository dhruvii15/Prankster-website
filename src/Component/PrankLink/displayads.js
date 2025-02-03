import { useEffect, useState } from "react";

const InterstitialAd = ({ onAdComplete, onAdError, onAdClose }) => {
  const [adClosed, setAdClosed] = useState(false);

  useEffect(() => {
    try {
      // This will push the ad to the adsbygoogle array, ensuring it loads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      
      // Simulating successful ad load completion (you would replace this with actual logic)
      setTimeout(() => {
        if (onAdComplete) onAdComplete(); // Trigger onAdComplete after the ad is shown
      }, 500); // assuming the ad takes 3 seconds to complete
    } catch (e) {
      console.error("Adsense error", e);
      if (onAdError) onAdError(); // If there is an error loading the ad, trigger onAdError
    }
  }, [onAdComplete, onAdError]);

  // Function to handle ad close (just for UI simulation)
  const handleCloseAd = () => {
    setAdClosed(true);  // Simulate closing by changing state
    if (onAdClose) onAdClose();  // Trigger onAdClose callback when ad is manually closed
  };

  if (adClosed) {
    return null;  // Remove the ad UI from the DOM after closing
  }

  return (
    <div style={{ position: "relative" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7719542074975419"
        data-ad-slot="3943700191"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      {/* Manually Added Close Button */}
      <button
        style={{
          position: "absolute", // Positioned on top of the ad
          top: "10px",
          right: "10px",
          background: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={handleCloseAd}
      >
        Close
      </button>
    </div>
  );
};

export default InterstitialAd;
