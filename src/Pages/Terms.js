import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Lazy load components
const Loading = lazy(() => import('../Component/Loading'));

const Termsofuse = () => {
  const [loading, setLoading] = useState(true);
  const title = "Prankster Subscription Terms";

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10); // Loading timeout duration

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);


  if (loading) {
    return (
      <Suspense fallback={<div></div>}>
        <Loading />
      </Suspense>
    );
  }

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          {/* Title */}
          <title>Terms & Conditions</title>
          <meta property="og:title" content="Terms & Conditions" />
          <meta name="twitter:title" content="Terms & Conditions" />
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<div><Loading /></div>}>
        <div className='rounded-5' style={{ backgroundColor: "#F6F6F6" }}>
          <div className='title-bg d-flex align-items-center justify-content-center'>
            <div className='text-center'>
              <h1 className='title-text2 BwGradualBold m-0 px-1'>{title}</h1>
            </div>
          </div>
          <div>
            <Container className='py-5 px-4 fs-5 BwGradual'>
              <h1 className='BwGradualBold py-4'>Subscription Terms</h1>
              <p>Effective Date: 01/01/2025</p>
              <p className='BwGradual'>
                Welcome to Prankster! By using our app, you agree to the following terms and conditions. Please read them carefully.
              </p>
              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>1. Acceptance of Terms</p>
              <p>By downloading, accessing, or using Prankster ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>2. Subscription Services</p>

              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>2.1. Subscription Plans : </b><br></br>Prankster offers subscription-based access to premium features ("Subscription"). Subscription plans may vary in pricing, duration, and content. Details of the plans are provided in the App and may be updated from time to time.</p>
              </div>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>2.2. Payment and Billing : </b><br></br>Your subscription fee will be charged to your Appstore account upon confirmation of purchase. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period. Renewal charges will be applied within 24 hours prior to the end of the current period.</p>
              </div>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>2.3. Cancellation : </b><br></br>You can manage or cancel your Subscription in your Apple ID account settings. Deleting the App does not cancel your Subscription.</p>
              </div>





              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>3. User Responsibilities</p>
              <p>You agree to:</p>
              <p>Use the App only for lawful purposes.</p>
              <p>Not attempt to reverse engineer, copy, or exploit any part of the App.</p>
              <p>Keep your account information secure.</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>4. Refund Policy</p>
              <p>All subscription payments are processed through Apple. Refunds are subject to Apple’s refund policy, and requests should be directed to Apple’s support team.</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>5. Modifications to the Service</p>
              <p>We reserve the right to modify, suspend, or discontinue any part of the App at any time without notice.</p>



              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>6. Termination</p>
              <p>We may suspend or terminate your access to the App if you violate these Terms.</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>7. Disclaimers</p>
              <p>The App is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free operation of the App.</p>



              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>8. Limitation of Liability</p>
              <p>To the maximum extent permitted by law, we are not liable for any damages arising from your use or inability to use the App.</p>

              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>9. Governing Law</p>
              <p>These Terms are governed by and construed in accordance with the laws of Your Country/State.</p>

              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>10. Contact Us</p>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>help@pslink.world</p>
              <p>By using the App, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>



            </Container>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Termsofuse;