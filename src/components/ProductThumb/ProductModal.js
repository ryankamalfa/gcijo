import { useState, Fragment } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { IoIosHeartEmpty, IoIosShuffle } from "react-icons/io";
import Swiper from "react-id-swiper";
import CustomScroll from "react-custom-scroll";
import { getProductCartQuantity } from "../../lib/product";
import { ProductRating } from "../Product";

const ProductModal = (props) => {
  const {
    product,
    discountedprice,
    productprice,
    cartitems,
    wishlistitem,
    compareitem,
    addtocart,
    addtowishlist,
    deletefromwishlist,
    addtocompare,
    deletefromcompare,
    addtoast
  } = props;

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartitems,
    product,
    selectedProductColor,
    selectedProductSize
  );
  const productTDSFile = product?.productTDSFile;

  const gallerySwiperParams = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="product-quickview"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <div className="product-quickview__image-wrapper">
          <Swiper {...gallerySwiperParams}>
            {product.image &&
              product.image.map((single, key) => {
                return (
                  <div key={key}>
                    <div className="single-image">
                      <img
                        src={process.env.PUBLIC_URL + single}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
          </Swiper>
        </div>
        <Row>
          <Col md={7} sm={12} className="ml-auto">
            <CustomScroll allowOuterScroll={true}>
              <div className="product-quickview__content">
                <h2 className="product-quickview__title space-mb--20">
                  {product.name}
                </h2>
                <div className="product-quickview__description space-mb--30">
                  <p>{product.shortDescription}</p>
                </div>

                <Fragment>
                  <div className="product-content__button-wrapper d-flex align-items-center">
                    <button
                      onClick={() => window.open(productTDSFile, '_blank')}
                      className="lezada-button lezada-button--mediumes mr-2"
                      style={{
                        color: "#06205c",
                        backgroundColor: "#fff",
                      }}
                    >TDS</button>
                    <a
                      href={productTDSFile}
                      className="lezada-button lezada-button--mediumes mr-2"
                      style={{
                        color: "#06205c",
                        backgroundColor: "#fff",
                      }}
                      download
                    >
                      Download
                </a>
                  </div>
                </Fragment>
              </div>
            </CustomScroll>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
