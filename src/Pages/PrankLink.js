import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Audio from '../Component/PrankLink/Audio';
import Video from '../Component/PrankLink/Video';
import Gallery from '../Component/PrankLink/Gallery';

const PrankLink = () => {
  const { prankName } = useParams();
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData2 = useCallback(async () => {
    try {
      const res = await axios.post('https://pslink.world/api/prank/open-link', { prankName });
      if (res.data && res.data.data) {
        setData2(res.data.data);
      } else {
        setData2(null); 
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch data.");
      setData2(null); 
    } finally {
      setLoading(false); 
    }
  }, [prankName]);

  useEffect(() => {
    if (prankName) {
      getData2();
    }
  }, [prankName, getData2]);


  if (loading) {
    return <div className="content">Loading...</div>;
  }

  if (!data2) {
    return <div className="content">No Data Found...</div>; 
  }

  const renderContent = () => {
    switch (data2.Type) {
      case 'audio':
        return <Audio data2={data2} />;
      case 'video':
        return <Video data2={data2} />;
      case 'gallery':
        return <Gallery data2={data2} />;
      default:
        return <div className="content">No content available.</div>;
    }
  };

  return (
    <div className="full-page-background">
      {renderContent()}
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
          background-image: ${data2 && data2.Image ? `url('${data2.Image}')` : 'none'};
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
          background: rgba(27, 26, 26, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
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
  );
};

export default PrankLink;
