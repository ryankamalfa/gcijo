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
const LayoutTwo = dynamic(() => import('../../../../ar/components/Layout/LayoutTwo'));

// import {
//   SectionTitleOne,
//   SectionTitleTwo
// } from "../../../../ar/components/SectionTitle";
const SectionTitleOne = dynamic(() => import('../../../../ar/components/SectionTitle/SectionTitleOne'));
const SectionTitleTwo = dynamic(() => import('../../../../ar/components/SectionTitle/SectionTitleTwo'));
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
        title="جولدن باينتس | تواصل معنا"
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
          <Container dir="rtl" style={{textAlign: 'center'}}>
            <Row>
              <Col md={12}>
                {/* <SectionTitleTwo
                  title="تواصل معنا"
                  subtitle=""
                /> */}
                <div className="space-mb-mobile-only--50" style={{ fontSize: '22px', paddingBottom: '20px'}} dir="rtl">
                  <h1>تواصل معنا</h1>
                </div>
                
              </Col>
            </Row>
            <br></br>
            <Row dir="rtl">
              <Col md={3}>
                <div className="icon-box space-mb-mobile-only--50">
                  {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                    <IoIosPin />
                  </div> */}
                  <div className="icon-box__content">
                    <h3 className="title">الأردن</h3>
                    <p className="content icon-box__icon">
                      <IoIosPin />
                      الزرقاء - الأردن
                    </p>
                    <p>هاتف: +962 79721 9999</p>
                    <p>فاكس: +962 79781 1666</p>
                    <p>البريد الإلكتروني: info@gcijo.com</p>
                  </div>
                </div>
              </Col>
              <Col md={3} >
                <div className="icon-box space-mb-mobile-only--50">
                  {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                    <IoIosPin />
                  </div> */}
                  <div className="icon-box__content">
                    <h3 className="title">مصر</h3>
                    <p className="content icon-box__icon">
                      <IoIosPin />
                      مدينة بدر ، القاهرة
                    </p>
                    <p>هاتف: +202 28 6071 22</p>
                    <p>فاكس: +202 28 6071 23</p>
                    <p>البريد الإلكتروني: egypt@gcijo.com</p>
                  </div>
                </div>
              </Col>
              <Col md={3} dir="rtl">
                  {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                    <IoIosPin />
                  </div> */}
                <div className="icon-box space-mb-mobile-only--50">
                  <div className="icon-box__content">
                    <h3 className="title">السودان</h3>
                    <p className="content icon-box__icon">
                      <IoIosPin />
                      الخرطوم
                    </p>
                    <p>هاتف: +249 912250502</p>
                    <p>فاكس: +249 123390350</p>
                    <p>البريد الإلكتروني: sudan@gcijo.com</p>
                  </div>
                </div>
              </Col>
              <Col md={3} dir="rtl" >
                  <div className="icon-box space-mb-mobile-only--50">
                    {/* <div className="icon-box__icon" style={{ position: 'relative', top: '-50px'  }}>
                      <IoIosPin />
                    </div> */}
                    <div className="icon-box__content">
                      <h3 className="title">الإمارات العربية المتحدة</h3>
                      <p className="content icon-box__icon">
                        <IoIosPin />
                        الشارقة
                      </p>
                      <p>هاتف: +971 6534 89 39</p>
                      <p>فاكس: +971 6534 89 38</p>
                      <p>البريد الإلكتروني: uae@gcijo.com</p>
                    </div>
                  </div>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row className="space-mb-mobile-only--m50" dir="rtl">
                {/* <Col md={4} className="space-mb-mobile-only--50">
                
                </Col> */}
                <Col md={4}></Col>
                <Col md={4} dir="rtl">
                  <div className="icon-box space-mb-mobile-only--50">
                      <div className="icon-box__icon">
                        {/* <IoIosClock /> */}
                      </div>
                      <div className="icon-box__content" dir="rtl">
                        <h3 className="title">ساعات العمل</h3>
                        <p className="content">
                        <IoIosClock />
                          الأحد – الخميس : 08:00 – 17:00
                          {/* <span>Sunday &amp; Saturday: 10:30 – 22:00</span> */}
                        </p>
                      </div>
                    </div>
                </Col>
                <Col md={4}></Col>
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
                <SectionTitleOne title="تواصل معنا" />
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                <div className="lezada-form contact-form" dir="rtl">
                  <form onSubmit={(e) =>{ e.preventDefault(); sendMail()}}>
                    <Row>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="الإسم *"
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
                          placeholder="البريد الإلكتروني *"
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
                          placeholder="العنوان"
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
                          placeholder="الرسالة"
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
                          إرسال
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
