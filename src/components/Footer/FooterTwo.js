import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";
import { SubscribeEmailTwo } from "../Newsletter";

const FooterTwo = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer className="bg-color--grey space-pt--100 space-pb--50">
      <Container className="wide">
        <Row>
          <Col className="footer-single-widget space-mb--50">
            {/* logo */}
            <div className="logo space-mb--35">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                className="img-fluid"
                alt=""
              />
            </div>

            {/*=======  copyright text  =======*/}
            <div className="footer-single-widget__copyright">
              &copy; {new Date().getFullYear() + " "}
              <a href="https://www.sensejo.com" target="_blank">
                Sense Creative Agency
              </a>
              <span>All Rights Reserved</span>
            </div>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">USEFUL LINKS</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/pages/other/about">About us</a>
                </li>
                <li>
                  <a href="/other/contact">Contact</a>
                </li>
                <li>
                  <a href="/pages/other/visualizer">Visualizer</a>
                </li>
                <li>
                  <a href="/shop/catalouges">Catalouges</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">CATEGORIES</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="/shop/left-sidebar">Architecture</a>
                </li>
                <li>
                  <a href="/shop/left-sidebar">Automative</a>
                </li>
                <li>
                  <a href="/shop/left-sidebar">Wood Finish</a>
                </li>
                <li>
                  <a href="/shop/left-sidebar">Industrial Finish</a>
                </li>
                <li>
                  <a href="/shop/left-sidebar">Powder Coatings</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">FOLLOW US ON</h5>
            <nav className="footer-single-widget__nav footer-single-widget__nav--social">
              <ul>
                <li>
                  <a href="https://twitter.com/paintsgci" target="_blank">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/golden-jordan-4840a1176/" target="_blank">
                    <FaLinkedinIn /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/GCI.GOLDEN.PAINTS/" target="_blank">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gci_paints/?hl=el" target="_blank">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCsR6F4NmdMYo9n832rcovNw" target="_blank">
                    <FaYoutube /> Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <div className="footer-subscribe-widget">
              <h2 className="footer-subscribe-widget__title">Subscribe.</h2>
              <p className="footer-subscribe-widget__subtitle">
                Subscribe to our newsletter to receive news on update.
              </p>
              {/* email subscription */}
              <SubscribeEmailTwo mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
            </div>
          </Col>
        </Row>
      </Container>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
        }}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
    </footer>
  );
};

export default FooterTwo;
