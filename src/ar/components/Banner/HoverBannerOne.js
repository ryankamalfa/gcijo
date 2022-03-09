import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import Image from "next/image";
const HoverBannerOne = ({ spaceBottomClass }) => {
  const params = {
    loop: true,
    loopAdditionalSlides: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 1,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <div
      className={`hover-banner-area`}
      style={{ marginTop: "4rem" }}
    >
      <Container className="wide">
        <div className="page-content">
          <div className="divider-text__container" style={{ marginBottom: "5rem" }}>
            <h1 style={{ textAlign: 'center' }}>تصنيفاتنا</h1>
          </div>
        </div>
        <Swiper {...params}>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
              <div className="img-fluid" style={{width: '100%', height:'200px', position: 'relative'}}>
                        <Image
                            src={"/assets/images/category/architecture.jpg"}
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </div>
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/ar/shop/left-sidebar?category=architecture"
                      as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=architecture"}
                    >
                      <a>
                        دهانات إنشائية
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/ar/shop/left-sidebar?category=architecture"
                    as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=architecture"}
                    >
                    <a>ألقي نظرة</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/ar/shop/left-sidebar?category=architecture"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=architecture"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
              <div className="img-fluid" style={{width: '100%', height:'200px', position: 'relative'}}>
                        <Image
                            src={"/assets/images/category/automative.jpg"}
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </div>
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/ar/shop/left-sidebar?category=automative"
                      as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=automative"}
                    >
                      <a>
                        دهان سيارات
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/ar/shop/left-sidebar?category=automative"
                    as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=automative"}
                  >
                    <a>ألقي نظرة</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/ar/shop/left-sidebar?category=automative"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=automative"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
              <div className="img-fluid" style={{width: '100%', height:'200px', position: 'relative'}}>
                        <Image
                            src={"/assets/images/category/decorative.jpg"}
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </div>
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/ar/shop/left-sidebar?category=decorative"
                      as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=decorative"}
                    >
                      <a>
                        دهانات ديكورية
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/ar/shop/left-sidebar?category=decorative"
                    as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=decorative"}
                  >
                    <a>ألقي نظرة</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/ar/shop/left-sidebar?category=decorative"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=decorative"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
              <div className="img-fluid" style={{width: '100%', height:'200px', position: 'relative'}}>
                        <Image
                            src={"/assets/images/category/industrial-finish.jpg"}
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </div>
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/ar/shop/left-sidebar?category=industrial finish"
                      as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=industrial finish"}
                    >
                      <a>
                        دهانات صناعية
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/ar/shop/left-sidebar?category=industrial finish"
                    as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=industrial finish"}
                  >
                    <a>ألقي نظرة</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/ar/shop/left-sidebar?category=industrial finish"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=industrial finish"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
              <div className="img-fluid" style={{width: '100%', height:'200px', position: 'relative'}}>
                        <Image
                            src={"/assets/images/category/wood-finish.jpg"}
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </div>
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/ar/shop/left-sidebar?category=wood finish"
                      as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=wood finish"}
                    >
                      <a>
                        أخشاب وصناعي <span>دهان</span>
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/ar/shop/left-sidebar?category=wood finish"
                    as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=wood finish"}
                  >
                    <a>ألقي نظرة</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/ar/shop/left-sidebar?category=wood finish"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=wood finish"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
        </Swiper>
      </Container>
    </div>
  );
};

export default HoverBannerOne;
