import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <div>
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-7719542074975419"
      data-ad-slot="3943700191"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>

    </div>
  );
};

export default AdComponent;
