import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Component/Loading';
import NoDataFound from '../Component/NoDataFound';

// Lazy load the components
const Audio = lazy(() => import('../Component/PrankLink/Audio'));
const Video = lazy(() => import('../Component/PrankLink/Video'));
const Gallery = lazy(() => import('../Component/PrankLink/Gallery'));

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

  return (
    <Suspense fallback={<div className="content"><Loading /></div>}>
      {renderContent()}
    </Suspense>
  );
};

export default PrankLink;
