import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Audio from '../Component/PrankLink/Audio';
import Video from '../Component/PrankLink/Video';
import Gallery from '../Component/PrankLink/Gallery';


const PrankLink = () => {
  const { prankName } = useParams();
  const [data2, setData2] = useState({});

  const getData2 = useCallback(() => {
    axios.post('http://localhost:5000/api/prank/open-link', { prankName })
      .then((res) => {
        if (res.data && res.data.data) {
          setData2(res.data.data);
        } else {
          setData2({});
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch data.");
      })
  }, [prankName]);

  useEffect(() => {
    if (prankName) {
      getData2();
    }
  }, [prankName, getData2]);

  const renderContent = () => {
    switch (data2.Type) {
      case 'audio':
        return <Audio data2={data2} />;
      case 'video':
        return <Video data2={data2} />;
      case 'gallery':
        return <Gallery data2={data2} />;
      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <div className="full-page-background">

      {renderContent()}

      <style>{`
        .full-page-background {
          position: relative;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #808080; /* Grey background */
        }

        .full-page-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: ${data2.Image ? `url('${data2.Image}')` : 'none'};
          background-size: cover;
          background-position: center;
          filter: ${data2.Image ? 'blur(30px)' : 'none'};
          z-index: 0;
        }

        .full-page-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          color: white; /* Ensure text is visible on dark background */
        }

        .centered-image {
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default PrankLink;