import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// import { IoIosPin,  IoIosClock } from "react-icons/io";
const IoIosPin = dynamic(async () => (
  (await import("react-icons/io")).IoIosPin
));
const IoIosClock = dynamic(async () => (
  (await import("react-icons/io")).IoIosClock
));
// import { LayoutTwo } from "";
const LayoutTwo = dynamic(() => import('../../../components/Layout/LayoutTwo'));

// import {
//   SectionTitleOne,
//   SectionTitleTwo
// } from "";

const SectionTitleOne = dynamic(() => import('../../../components/SectionTitle/SectionTitleOne'));
const SectionTitleTwo = dynamic(() => import('../../../components/SectionTitle/SectionTitleTwo'));

import { useState } from "react";

const Contact = () => {

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const sendMail = () => {
    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: customerName,
        customerEmail: customerEmail,
        emailSubject: emailSubject,
        emailMessage: emailMessage,
      }),
    }).then((res) => {
      console.log("Fetch: ", res);
      res.status === 200
        ?
        alert('Email sent successfully!')
        : alert('Sorry, there was an error sending your email.');
    });
  }

  return (
    <LayoutTwo>
      <NextSeo
        title="Golden Paints | Contact us"
/>
      {/* breadcrumb */}
      {/* <BreadcrumbOne
        pageTitle="Contact"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Contact</li>
        </ul>
      </BreadcrumbOne> */}
      <div className="contact-page-content-wrapper space-mt--r130 space-mb--r130">
        <div className="contact-page-top-info space-mb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitleTwo
                  title="Contact Details"
                  subtitle=""
                />
              </Col>
            </Row>
            <Row className="space-mb-mobile-only--m50">
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                    <IoIosPin />
                  </div> */}
                  <div className="icon-box__content">
                    <h3 className="title">JORDAN</h3>
                    <p className="content icon-box__icon">
                      <IoIosPin />
                      Zarqa -Jordan
                    </p>
                    <p>Tel: +962 79 721 9999</p>
                    <p>Fax: +962 79 781 1666</p>
                    <p>E-mail: info@gcijo.com</p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                    <IoIosPin />
                  </div> */}
                  <div className="icon-box__content">
                    <h3 className="title">EGYPT</h3>
                    <p className="content icon-box__icon">
                      <IoIosPin />
                      Badr City, Cairo
                    </p>
                    <p>Tel: +202 28 6071 22</p>
                    <p>Fax: +202 28 6071 23</p>
                    <p>E-mail: egypt@gcijo.com</p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                    <IoIosPin />
                  </div> */}
                  <div className="icon-box__content">
                    <h3 className="title">SUDAN</h3>
                    <p className="content icon-box__icon">
                      <IoIosPin />
                      Khartoum
                    </p>
                    <p>Tel: +249 912 250 502</p>
                    <p>Fax: +249 123 390 350</p>
                    <p>E-mail: sudan@gcijo.com</p>
                  </div>
                </div>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row className="space-mb-mobile-only--m50">
              <Col md={4} className="space-mb-mobile-only--50">
                  <div className="icon-box">
                    {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                      <IoIosPin />
                    </div> */}
                    <div className="icon-box__content">
                      <h3 className="title">UAE</h3>
                      <p className="content icon-box__icon">
                        <IoIosPin />
                        Sharjah
                      </p>
                      <p>Tel: +971 6534 89 39</p>
                      <p>Fax: +971 6534 89 38</p>
                      <p>E-mail: uae@gcijo.com</p>
                    </div>
                  </div>
                </Col>

                {/* <Col md={4} className="space-mb-mobile-only--50">
                
                </Col> */}

                <Col md={4} className="space-mb-mobile-only--50">
                  <div className="icon-box">
                    <div className="icon-box__icon">
                      <IoIosClock />
                    </div>
                    <div className="icon-box__content">
                      <h3 className="title">OPERATION HOURS</h3>
                      <p className="content">
                        Sunday – Thursday : 08:00 – 17:00
                        {/* <span>Sunday &amp; Saturday: 10:30 – 22:00</span> */}
                      </p>
                    </div>
                  </div>
                </Col>
            </Row>
          </Container>
        </div>

        <div className="contact-page-map space-mb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="google-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13510.495703602488!2d36.228128!3d32.160446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b74fd466d567d%3A0x467a93d53e7c9a47!2sGolden%20Chemical%20industries%20co.!5e0!3m2!1sen!2sus!4v1616408013187!5m2!1sen!2sus"
                    allowfullscreen=""></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-page-form">
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitleOne title="Get in touch" />
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                <div className="lezada-form contact-form">
                  <form onSubmit={(e) =>{ e.preventDefault(); sendMail()}}>
                    <Row>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="Name *"
                          name="customerName"
                          id="customerName"
                          value={customerName}
                          onChange={e => setCustomerName(e.target.value)}
                          required
                        />
                      </Col>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="email"
                          placeholder="Email *"
                          name="customerEmail"
                          id="customerEmail"
                          value={customerEmail}
                          onChange={e => setCustomerEmail(e.target.value)}
                          required
                        />
                      </Col>
                      <Col md={12} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="contactSubject"
                          id="contactSubject"
                          value={emailSubject}
                          onChange={e => setEmailSubject(e.target.value)}
                        />
                      </Col>
                      <Col md={12} className="space-mb--40">
                        <textarea
                          cols={30}
                          rows={10}
                          placeholder="Message"
                          name="contactMessage"
                          id="contactMessage"
                          defaultValue={""}
                          value={emailMessage}
                          onChange={e => setEmailMessage(e.target.value)}
                        />
                      </Col>
                      <Col md={12} className="text-center">
                        <button
                          type="submit"
                          value="submit"
                          id="submit"
                          className="lezada-button lezada-button--medium"
                          onClick={() => sendMail()}
                        >
                          submit
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

export default Contact;
