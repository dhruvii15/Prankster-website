import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Policy = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Privacy-policy</title>
          <meta property="og:title" content="Privacy-policy" />
          <meta name="twitter:title" content="Privacy-policy" />
        </Helmet>
      </HelmetProvider>
      <div className='rounded-5' style={{ backgroundColor: "#F6F6F6" }}>
        <div className='title-bg d-flex align-items-center justify-content-center'>
          <div className='text-center'>
            <h1 className='title-text BwGradualBold m-0 px-1'>Privacy Policy</h1>
          </div>
        </div>
        <div>
          <Container className='py-5 px-4 fs-5 BwGradual'>
            <h1 className='BwGradualBold py-4'>Privacy Policy for Prankster App</h1>
            <p>Last updated: 13/02/2025</p>


            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradual'>
                Prankster ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use and safeguard that information, and your rights as a user of our app. By using the Prankster app, you agree to the practices described in this policy.
              </p>
            </div>




            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>1. Information We Collect and How We Use It?</p>
            <p>We may collect and process the following types of information:</p>

            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradualBold ps-2'>Personal Information:</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p>We do not collect any personal information from users use the app.</p>
            </div>

            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradualBold ps-2'>Non-Personal Information:</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information collects and shares automatically for advertising, analytics (to provide high-quality applications), and fraud prevention purposes.</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>The app does use third party services that may collect information used to identify you.</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>Link to privacy policy of third party service providers used by the app</p>
            </div>
            <div className='d-flex flex-column py-3' style={{paddingLeft:"100px"}}>
              <a href='https://www.google.com/policies/privacy/' className='fs-6 py-1' target='_blank'>1. Google Play Services</a>
              <a href='https://support.google.com/admob/answer/6128543?hl=en' className='fs-6 py-1' target='_blank'>2. AdMob</a>
              <a href='https://firebase.google.com/policies/analytics' className='fs-6 py-1' target='_blank'>3. Google Analytics for Firebase</a>
              <a href='https://firebase.google.com/support/privacy/' className='fs-6 py-1' target='_blank'>4. Firebase Crashlytics</a>
              <a href='https://www.facebook.com/privacy/policy' className='fs-6 py-1' target='_blank'>5. Facebook (Meta)</a>
              <a href='https://www.appsflyer.com/legal/terms-of-use/' className='fs-6 py-1' target='_blank'>6. AppFlyer</a>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'><b>User-generated content such as created pranks Used for : </b> Providing and improving the App’s functionality, Personalizing user experience</p>
            </div>

            <div className='d-flex ps-4 pt-3'>
              <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradualBold ps-2 m-0'>Permissions :</p>
            </div>
            <p className='ps-4'>To enhance your experience, our App may request access to:</p>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className=' pe-2' /></p>
              <p className='m-0'><b className='BwGradualBold'>Microphone & Camera : </b>Capture to create prank.</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className=' pe-2' /></p>
              <p className='m-0'><b className='BwGradualBold'>Storage : </b>Get image, audio, video from gallery to create prank.</p>
            </div>








            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>2. Data Security</p>
            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>We take the security of your personal information seriously and use industry-standard measures to protect it. However, please note that no method of data transmission or storage is completely secure, and we cannot guarantee the absolute security of your information.</p>
            </div>



            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>3. Premium Members</p>
            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>If you choose to subscribe to Premium Membership, you gain access to additional features:</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className=' pe-2' /></p>
              <p className='m-0'><b className='BwGradualBold'>Get some premium prank : </b>You'll receive some exclusive premium pranks without Ad.</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className=' pe-2' /></p>
              <p className='m-0'><b className='BwGradualBold'>Ads free : </b>You'll receive full app without ads.</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className=' pe-2' /></p>
              <p className='m-0'><b className='BwGradualBold'>Early Access to Features : </b>Premium Members receive early access to new and experimental features.</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className=' pe-2' /></p>
              <p className='m-0'><b className='BwGradualBold'>Unlimited Spin : </b>You'll get unlimited spin and get Amazing Pranks.</p>
            </div>
            <div className='d-flex ps-4 py-3'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>Premium Membership does not require you to provide additional personal information.</p>
            </div>




            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>4. Children's Privacy</p>
            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
            </div>



            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>5. Data Deletion Policy</p>
            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>We respect your right to control your personal data. If you wish to delete your data from our app, you can request data deletion by following the steps below:</p>
            </div>

            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradualBold ps-2'>How to Request Data Deletion</p>
            </div>

            <div className='d-flex ps-5 ms-4 ps-2'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>You can submit a request to delete your personal data by:</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>Sending an email to <b>help@pslink.world</b> with the subject “Data Deletion Request.”</p>
            </div>



            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradualBold pt-2 ps-2'>Processing Time</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p>We will process your request within 3 business days and confirm the deletion via email.</p>
            </div>


            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p className='BwGradualBold ps-2'>Exceptions & Retention Policy</p>
            </div>
            <div className='d-flex ps-5 ms-4 ps-2'>
              <p><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p>Please note that we may retain certain data if required by law, for security purposes, or to comply with legal obligations. Once your data is deleted, it cannot be recovered.</p>
            </div>






            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>6. Changes to This Privacy Policy</p>
            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Your continued use of the app after any changes constitutes acceptance of the updated Privacy Policy.</p>
            </div>



            <p className='BwGradualBold py-3 m-0 fs-3 pt-4'>7. Contact Us</p>
            <div className='d-flex ps-4'>
              <p><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1 pe-2' /></p>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            </div>


            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>Developer : Plexus Technology</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>Email : help@pslink.world</p>
            </div>
            <div className='d-flex ps-5 ms-4'>
              <p className='m-0'><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "15px" }} className='pb-1 pe-2' /></p>
              <p className='m-0'>Address : 305,AR Mall Opp panvel point, Surat, Gujarat 394105, India</p>
            </div>


          </Container>
        </div>
      </div>
    </div>
  );
};

export default Policy;