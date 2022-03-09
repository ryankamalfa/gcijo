import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const ImageCtaTwo = ({ spaceBottomClass }) => {
  return (
    <div
      className={`image-cta-two ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40" dir="rtl" style={{ fontSize: '20px', textAlign: 'center'}}>
              <h3 className="subtitle space-mb--30">منتجات مميزة</h3>
              <h2 className=" space-mb--30">مجموعة متنوعة من الكتالوجات</h2>
              <p className="text space-mb--30">
                إستوحي إختيارك من ألواننا المتنوعة
              </p>
              <Link
                href="/ar/shop/catalouges"
                as={process.env.PUBLIC_URL + "/ar/shop/catalouges"}
              >
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                عرض الكتالوجات
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
            <div style={{width: '100%', height: '300px', position: 'relative'}}>
            <Image
                src={"/assets/images/cta/catalouge-main.jpg"}
                alt=""
                layout='fill'
                objectFit='cover'
              />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaTwo;
