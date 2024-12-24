import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';


// Lazy load components
const Loading = lazy(() => import('../Component/Loading'));

const Policy = () => {
  const [loading, setLoading] = useState(true);
  const title = "Privacy Policy";

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
      <Suspense fallback={<div><Loading /></div>}>
        <div className='rounded-5' style={{ backgroundColor: "#F6F6F6" }}>
          <div className='title-bg d-flex align-items-center justify-content-center'>
            <div className='text-center'>
              <h1 className='title-text BwGradualBold m-0 px-1'>{title}</h1>
            </div>
          </div>
          <div>
            <Container className='py-5 px-4 fs-5 BwGradual'>
              <h1 className='BwGradualBold py-4'>Privacy Policy for Prankster App</h1>
              <p>Last updated: 23/12/2024</p>
              <p className='BwGradual'>
              Prankster ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use and safeguard that information, and your rights as a user of our app. By using the Prankster app, you agree to the practices described in this policy.
              </p>
              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>1. Information We Collect</p>
              <p>We do not collect any personal information from users use the app.</p>
              <p>We collect only device id for advertising identifiers and analytics.</p>
              <p>If you’ve explicitly granted device-level permissions, device information may also include camera, photos, and microphone (like the ability to take photos, videos, view stored photos and videos, and access the microphone to record audio while recording video).</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>2. How We Use Your Information</p>
              <p>We do not collect or use personal data from third parties, such as friends, contacts, or other individuals, without their knowledge or consent</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>3. Sharing Your Information</p>
              <p>As required by law : We may disclose your information if necessary to comply with legal obligations or protect the rights, safety, or property of Prankster, its users, or others.</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>4. Data Security</p>
              <p>We take the security of your personal information seriously and use industry-standard measures to protect it. However, please note that no method of data transmission or storage is completely secure, and we cannot guarantee the absolute security of your information.</p>


              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>5. Premium Members</p>
              <p>If you choose to subscribe to Premium Membership, you gain access to additional features:</p>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>Get some premium prank : </b>You'll receive some exclusive premium pranks without Ad.</p>
              </div>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>Ads free : </b>You'll receive full app without ads.</p>
              </div>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>Early Access to Features : </b>Premium Members receive early access to new and experimental features.</p>
              </div>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'><b className='BwGradualBold'>Unlimited Spin : </b>You'll get unlimited spin and get Amazing Pranks.</p>
              </div>
              <p>Premium Membership does not require you to provide additional personal information.</p>



              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>6. Children's Privacy</p>
              <p>Prankster is not intended for users under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete that information.</p>
              

              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>7. Changes to This Privacy Policy</p>
              <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Your continued use of the app after any changes constitutes acceptance of the updated Privacy Policy.</p>



              <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>8. Contact Us</p>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'>Email : help@pslink.world</p>
              </div>
              <div className='d-flex gap-3 ps-4'>
                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-3' /></p>
                <p className='m-0'>Address : 305,AR Mall Opp panvel point, Surat, Gujarat 394105, India</p>
              </div>


            </Container>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Policy;