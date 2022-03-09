import { useState } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
// import ModalVideo from 'react-modal-video';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// const IoMdAdd = dynamic(() => import('react-icons/io'));
// import { IoMdAdd } from "react-icons/io";
const IoMdAdd = dynamic(async () => (
  (await import("react-icons/io")).IoMdAdd
));
const LayoutTwo = dynamic(() => import('../../../../ar/components/Layout/LayoutTwo'));
const BrandLogoOne = dynamic(() => import('../../../../ar/components/BrandLogo/BrandLogoOne'));
import brandLogoData from "../../../../data/brand-logos/brand-logo-one.json";

const About = () => {
  const [modalStatus, isOpen] = useState(false);

  return (
    <LayoutTwo>
      {/* breadcrumb */}

      {/* about content */}
      <NextSeo
        title="جولدن باينتس | من نحن"
      />
      <div className="about-content space-mt--r130 space-mb--r130">
        <div className="section-title-container space-mb--40">
          <Container>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                {/* section title */}
                <div className="about-title-container text-center">
                  {/* <h2 className="dark-title space-mb--35">من نحن</h2> */}
                  <h2 className="title space-mb--15">
                  الشركة الذهبية للصناعات الكيماوية
                  </h2>
                  <p
                    className="title-text"
                    dir="rtl"
                    style={{
                      textAlign: "center",
                      textJustify: "inter-word",
                      fontSize: '20px'
                    }}
                  >
                    الشركة الذهبية للصناعات الكيماوية هي واحدة من الشركات الرائدة في تصنيع الطلاء والطلاء المتكاملة ، تأسست في الزرقاء-الأردن في عام 2009 من خلال الجهود المشتركة بين المهندس. غسان الكيلاني والسيد أحمد الكيلاني نتيجة سنوات عديدة من الخبرة في المنشآت الصناعية والتجارية دهانات الكيلاني. بصرف النظر عن الأردن ، تصنع GCI في مصر والسودان وتتاجر بالدهانات  في الإمارات العربية المتحدة.
                  </p>
                  <p
                    className="title-text"
                    dir="rtl"
                    style={{
                      textAlign: "center",
                      textJustify: "inter-word",
                      fontSize: "20px"
                    }}
                  >
تحفز شركتنا الرغبة في تقديم خدمات طلاء فائقة تلهم الحياة وتقدم رؤية جديدة ومبتكرة للمساحات التي نعيش ونعمل فيها.                  </p>
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
                      href="/ar/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar"}
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
                      href="/ar/pages/other/about"
                      as={process.env.PUBLIC_URL + "/ar/pages/other/about"}
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
                <Col md={6} dir="rtl" style={{textAlign: 'center'}}>
                    <div className="about-page-text">
                      <p className="space-mb--35">
                        <b className="text-primary-1">ما الذي يميزنا عن غيرنا؟</b><br />
                        لأن شعارنا هو الوفاء بوعودنا لمن يعتمدون على منتجاتنا عالية الجودة. نهدف إلى العمل بأكثر الطرق أخلاقية وشفافية! وبالتالي نحن نسعى باستمرار لإيجاد طرق جديدة ومبتكرة لتلبية احتياجات عملائنا وتلبية رغباتهم. نسعى باستمرار لإيجاد طرق جديدة ومبتكرة لتلبية احتياجات عملائنا وتلبية رغباتهم. ثقتك هي أكثر ما يهمنا ، ولهذا ، من خلال تحسين سير العمل وهيكل التكلفة لدينا باستمرار ، سوف نقدم أفضل جودة
                      </p>
                      <Link
                        href="/ar/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar"}
                      >
                        <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                          <IoMdAdd /> منتجاتنا
                        </a>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6} dir="rtl" style={{textAlign: 'center'}}>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>أهدافنا</h2>
                      <p className="widget-content">
                      نسعى جاهدين لنكون شركة طلاء رائدة وتنافسية في المملكة الأردنية الهاشمية والشرق الأوسط وأفريقيا.
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>رؤيتنا</h2>
                      <p className="widget-content">
                      نتطلع دائمًا إلى وجهات نظر جديدة في صناعات الطلاء بالإضافة إلى تحسين فوائد سلعنا لإثراء حياة الناس وازدهارها.
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>مهمتنا</h2>
                      <p className="widget-content">
                      تقديم المنتجات والخدمات في قطاع صناعة الدهانات بما يرضي حاجات المستهلكين وتنميتهم في هذا المجال بما يرضي تطلعاتهم.                      </p>
                    </div>
                    <div className="about-widget">
                      <h2 className="widget-title" style={{ fontWeight: 'bold' }}>قيمنا</h2>
                      <p className="widget-content">
                      الالتزام والتفاني تجاه التعاون وتعزيز الابتكار والتنوع الفكري من أجل بناء الإبداع والتجديد.                      </p>
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
