import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const HoverBannerTwo = ({ spaceBottomClass }) => {
  return (
    <div
      className={`hover-banner-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container className="wide">
        <Row>
          <Col lg={6} className="space-mb-mobile-only--30">
            <div className="single-banner single-banner--hoverborder">
              <Link
                href="/pages/other/about"
                as={process.env.PUBLIC_URL + "/pages/other/about"}
              >
                <a className="banner-link" />
              </Link>
              <div className="img-fluid" style={{width: '100%', height: '200px', position: 'relative'}}>
                <Image
                    src={"/assets/images/banners/1.jpg"}
                    alt=""
                    layout='fill'
                    objectFit='cover'
                />
              </div>
              {/* <div className="banner-content banner-content--middle-white banner-content--middle-dark">
                <p>
                  <span className="bold-white">10%</span> off your
                  <span className="d-block">next purchase</span>
                </p>
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <div className="single-banner single-banner--hoverborder">
              <Link
                href="/pages/other/colors"
                as={process.env.PUBLIC_URL + "/pages/other/colors"}
              >
                <a className="banner-link" />
              </Link>
              <div className="img-fluid" style={{width: '100%', height: '200px', position: 'relative'}}>
                <Image
                    src={"/assets/images/banners/2.jpg"}
                    alt=""
                    layout='fill'
                    objectFit='cover'
                />
              </div>
              {/* <div className="banner-content banner-content--black-left">
                <p>
                  <span className="big-text">Free shipping</span>
                  <span className="small-text d-block">
                    Free shipping on domestic orders
                  </span>
                </p>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HoverBannerTwo;
