import React, { useState, useEffect, useCallback, lazy, Suspense, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Component/Loading';
import NoDataFound from '../Component/NoDataFound';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Component/firebase-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';


// Lazy load components
const Audio = lazy(() => import('../Component/PrankLink/Audio'));
const Video = lazy(() => import('../Component/PrankLink/Video'));
const Gallery = lazy(() => import('../Component/PrankLink/Gallery'));

const PrankLink = () => {

  const { prankName } = useParams();
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const eventLogged = useRef(false);  // Track if the event has been logged

  console.log(data2);
  

  const getData2 = useCallback(async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/prank/open-link', { prankName });

      if (res.data && res.data.status === 0) {
        setData2(null); // Show NoDataFound component
        return;
      }

      if (res.data && res.data.data) {
        setData2(res.data.data);

        // Check if the event has already been logged
        if (res.data.data.Type && !eventLogged.current) {
          let eventType = '';
          if (res.data.data.Type === 'video') eventType = 'video_prank';
          else if (res.data.data.Type === 'gallery') eventType = 'image_prank';
          else if (res.data.data.Type === 'audio') eventType = 'audio_prank';

          logEvent(analytics, eventType, {
            page_location: window.location.href,
            page_path: window.location.pathname,
            debug: 'true'
          });

          console.log(`Logged event: ${eventType}`, {
            page_location: window.location.href,
            page_path: window.location.pathname,
          });

          // Mark that the event has been logged
          eventLogged.current = true;
        }
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
    return <div className="content"><Loading /></div>;
  }

  if (!data2) {
    return <div className="content"><NoDataFound /></div>;
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

  const getTitle = () => {
    switch (data2.Type) {
      case 'audio':
        return 'Audio';
      case 'video':
        return 'Video';
      case 'gallery':
        return 'Gallery';
      default:
        return 'No Content';
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{getTitle()}</title>
          <meta property="og:title" content={getTitle()} />
          <meta name="twitter:title" content={getTitle()} />
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<div className="content"><Loading /></div>}>
        {renderContent()}
      </Suspense>
    </>
  );
};

export default PrankLink;
