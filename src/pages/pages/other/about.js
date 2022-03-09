import { useState } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// const IoMdAdd = dynamic(() => import('react-icons/io')).IoMdAdd;
const IoMdAdd = dynamic(async () => (
  (await import("react-icons/io")).IoMdAdd
));
// import { IoMdAdd } from "react-icons/io";
// import ModalVideo from 'react-modal-video';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
const LayoutTwo = dynamic(() => import('../../../components/Layout/LayoutTwo'));
const BrandLogoOne = dynamic(() => import('../../../components/BrandLogo/BrandLogoOne'));
import brandLogoData from "../../../data/brand-logos/brand-logo-one.json";

const About = () => {
  const [modalStatus, isOpen] = useState(false);

  const headingStyle = {
    fontWeight: 'normal'
  }
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <NextSeo
        title="Golden Paints | About us"
      />
      {/* about content */}
      <div className="about-content space-mt--r130 space-mb--r130">
        <div className="section-title-container space-mb--40">
          <Container>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                {/* section title */}
                <div className="about-title-container text-center">
                  <p className="dark-title space-mb--35">About Us</p>
                  <h2 className="title space-mb--15" style={headingStyle}>
                    Golden Chemical Industries
                  </h2>
                  <p
                    className="title-text"
                    style={{
                      textAlign: "left",
                      textJustify: "inter-word",
                    }}
                  >
                    Golden Chemical Industries is one of the leading integrated paint and coating manufacturing companies, established in Zarqa-Jordan in 2009 through the joint efforts of Eng. Ghassan AlKilani and Mr. Ahmad AlKilani, as a result of several years of experience in Kilani paints Industrial Commercial Establishments. Apart from Jordan, GCI manufactures in Egypt, Sudan and trades in the U.A.E. <br /> <br />
Our company is motivated by the desire to deliver superior painting services that inspire life and offer a fresh and creative view of the spaces in which we live and work.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* about video content */}
        <div className="about-video-content space-mb--r100">
          <Container>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                {/*=======  about video area  =======*/}
                <div
                  className="about-video-bg space-mb--60"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL +
                      "/assets/images/backgrounds/about-video-bg.jpg"
                      })`
                  }}
                >
                  {/* <p className="video-text video-text-left">
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a>LEZADA STORE</a>
                    </Link>
                  </p> */}

                  <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center mt-5">
                    <div className="play-icon text-center space-mb--40">
                      <ModalVideo
                        // channel="youtube"
                        // videoId="feOScd2HdiU"
                        channel="custom"
                        url='http://127.0.0.1:3000/assets/videos/home-video.mp4'
                        isOpen={modalStatus}
                        onClose={() => isOpen(false)}
                      />
                      <button onClick={() => isOpen(true)}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-play-100x100.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    {/* <h1>OUR STORY</h1> */}
                  </div>
                  {/* <p className="video-text video-text-right">
                    <Link
                      href="/pages/other/about"
                      as={process.env.PUBLIC_URL + "/pages/other/about"}
                    >
                      <a>OUR STORY</a>
                    </Link>
                  </p> */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                <Row>
                  <Col md={6}>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>Objectives</h2>
                      <p className="widget-content">
                        We strive to be a leading and competitive paint company in the Hashmiate Kingdom of Jordan , the Gulf region, the Middle East and Africa.
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>Vision</h2>
                      <p className="widget-content">
                        We always look forward to new perspectives in paint industries as well as optimizing the benefits of our goods to enrich the lives and prosperity of people.
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>Mission</h2>
                      <p className="widget-content">
                        Providing products and services in the sector of paint manufacturing in a way that satisfies the needs and development of consumers in the field in order to satisfy their expectations.
                      </p>
                    </div>
                    <div className="about-widget">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>Values</h2>
                      <p className="widget-content">
                        Commitment and dedication towards collaboration and  fostering of innovation and intellectual diversity in order to build creativity and regeneration.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="about-page-text">
                      <p className="space-mb--35">
                        <b className="text-primary-1">What differentiate us than others?</b><br />
                        Because our motto is to keep our promises to whom who rely on our high-quality products.
We aim to function in the most ethical, transparent way !
Thus We are continuously striving to find new and innovative ways to fulfill the needs of our customers and meet their desires.

We are continuously striving to find new and innovative ways to fulfill the needs of our customers and meet their desires. Your trust is what matters most to us, which is why, by constantly enhancing our workflow and cost structure, we will provide the greatest quality.
                      </p>
                      <Link
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                      >
                        <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                          <IoMdAdd /> View Products
                        </a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* testimonial */}
        {/* <TestimonialOne
          testimonialData={testimonialData}
        // backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
        /> */}
        <div className="space-mb--r100"></div>
        {/* brand logo */}
        <BrandLogoOne brandLogoData={brandLogoData} />
      </div>
    </LayoutTwo>
  );
};

export default About;
