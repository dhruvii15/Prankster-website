import React from 'react';


const Policy = () => {
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this amazing content!',
          text: 'This is an awesome website I wanted to share with you.',
          url: window.location.href, // You can use any URL
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      alert('Web Share API not supported in this browser.');
    }
  };
  return (
    <>
     <button onClick={handleShareClick}>
      Share
    </button>
    </>
  );
};

export default Policy;
