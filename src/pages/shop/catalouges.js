import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { connect } from "react-redux";
import { NextSeo } from 'next-seo';
// import { Container, Row, Col } from "react-bootstrap";
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// import { LayoutTwo } from "";
const LayoutTwo = dynamic(() => import('../../components/Layout/LayoutTwo'));
import { getSortedProducts } from "../../lib/product";

// import CatalougeItem from "";
const CatalougeItem = dynamic(() => import('../../components/CatalougeItem'));
const LeftSidebar = ({ catalouges }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 20;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(catalouges, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, catalouges, sortType, sortValue, filterSortType, filterSortValue]);

  const headingStyle = {
    fontWeight: 'normal'
  }
  
  return (
    <LayoutTwo>
      <NextSeo
        title="Golden Paints | Catalouges"
/>
      <div className="shop-page-content">
        {/* shop page body */}
        <div className="shop-page-content__body space-mb--r130">
          <Container>
            <Row>
              <Col lg={12} className="order-1 order-lg-2">
                {/* Architecture */}
                <div id="trending-colors" className="space-mt--r100 space-mb--r130">
                  <div id="architecture" className="section-inner">
                    <div className="inner-wide streamlined tetris">
                      <div className="tetris-column tetris-right primary">
                        <div className="tetris-text">
                          <h1
                            className="title animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "normal",
                              marginBottom: '7px',
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)"
                            }}
                          >Architecture Paints Catalogue</h1>
                          <div
                            className="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              className="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar6"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#faf7f0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <Row className="pt-5 d-flex justify-content-start" style={{ padding: "0rem" }}>
                          <CatalougeItem
                            title='Aqua Paints'
                            link='/shop/catalouge-basic/architecture-aqua-paints'
                            image='/assets/images/catalouges/architecture-aqua-paints.jpg'
                            productPDFFILE='/assets/catalouges/architecture-aqua-paints.pdf'
                          />
                          <CatalougeItem
                            title='Classic Paints'
                            link='/shop/catalouge-basic/architecture-classic-paints'
                            image='/assets/images/catalouges/architecture-classic-paints.jpg'
                            productPDFFILE='/assets/catalouges/architecture-classic-paints.pdf'
                          />
                          <CatalougeItem
                            title='Kids Paints'
                            link='/shop/catalouge-basic/architecture-kids-paints'
                            image='/assets/images/catalouges/architecture-kids-paints.jpg'
                            productPDFFILE='/assets/catalouges/architecture-kids-paints.pdf'
                          />
                          <CatalougeItem
                            title='Exterior'
                            link='/shop/catalouge-basic/architecture-exterior'
                            image='/assets/images/catalouges/architecture-exterior.jpg'
                            productPDFFILE='/assets/catalouges/architecture-exterior.pdf'
                          />
                          <CatalougeItem
                            title='Interior'
                            link='/shop/catalouge-basic/architecture-interior'
                            image='/assets/images/catalouges/architecture-interior.jpg'
                            productPDFFILE='/assets/catalouges/architecture-interior.pdf'
                          />
                          <CatalougeItem
                            title='Smoky'
                            link='/shop/catalouge-basic/architecture-smoky'
                            image='/assets/images/catalouges/architecture-smoky.jpg'
                            productPDFFILE='/assets/catalouges/architecture-smoky.pdf'
                          />
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div id="trending-colors" className="space-mb--r130">
                  <div id="decorative" className="section-inner">
                    <div className="inner-wide streamlined tetris">
                      <div className="tetris-column tetris-right primary">
                        <div className="tetris-text">
                          <h1
                            className="animate-left title"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "normal",
                              marginBottom: '7px',
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)"
                            }}
                          >Decorative Paints Catalogue</h1>
                          <div
                            className="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              className="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar6"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#faf7f0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <Row className="pt-5 d-flex justify-content-start" style={{ padding: "0rem" }}>
                          <CatalougeItem
                            title="Crystal"
                            link="/shop/catalouge-basic/decorative-crystal"
                            image={"/assets/images/catalouges/decorative-crystal.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-crystal.pdf'
                          />
                          <CatalougeItem
                            title="Ice"
                            link="/shop/catalouge-basic/decorative-ice"
                            image={"/assets/images/catalouges/decorative-ice.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-ice.pdf'
                          />
                          <CatalougeItem
                            title="Novel"
                            link="/shop/catalouge-basic/decorative-novel"
                            image={"/assets/images/catalouges/decorative-novel.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-kafear.pdf'
                          />
                          <CatalougeItem
                            title="Kafear"
                            link="/shop/catalouge-basic/decorative-kafear"
                            image={"/assets/images/catalouges/decorative-kafear.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-novel.pdf'
                          />
                          <CatalougeItem
                            title="Vera"
                            link="/shop/catalouge-basic/decorative-vera"
                            image={"/assets/images/catalouges/decorative-vera.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-vera.pdf'
                          />

                        </Row>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Industrial Finish */}
                <div id="trending-colors" className="space-mt--r130 space-mb--r130">
                  <div id="industrial" className="section-inner">
                    <div className="inner-wide streamlined tetris">
                      <div className="tetris-column tetris-right primary">
                        <div className="tetris-text">
                          <h1
                            className="animate-left title"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "normal",
                              marginBottom: '7px',
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)"
                            }}
                          >Industrial Finish Catalogue</h1>
                          <div
                            className="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              className="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar6"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#faf7f0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <Row className="pt-5 d-flex justify-content-start" style={{ padding: "0rem" }}>
                          <CatalougeItem
                            title="Enamel Paint"
                            link="/shop/catalouge-basic/industrial-enamel-paint"
                            image={"/assets/images/catalouges/industrial-enamel-paint.jpg"}
                            productPDFFILE='/assets/catalouges/industrial-enamel-paint.pdf'
                          />
                          <CatalougeItem
                            title="Hammer Finish Paint"
                            link="/shop/catalouge-basic/industrial-hammer-finish-paint"
                            image={"/assets/images/catalouges/industrial-hammer-finish-paint.jpg"}
                            productPDFFILE='/assets/catalouges/industrial-enamel-paint.pdf'
                          />
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automative */}
                <div id="trending-colors" className="space-mt--r130 space-mb--r130">
                  <div id="automative" className="section-inner">
                    <div className="inner-wide streamlined tetris">
                      <div className="tetris-column tetris-right primary">
                        <div className="tetris-text">
                          <h1
                            className="animate-left title"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "normal",
                              marginBottom: '7px',
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)"
                            }}
                          >Automative Refinish Catalogue</h1>
                          <div
                            className="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              className="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar6"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#faf7f0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <Row className="pt-5 d-flex justify-content-start" style={{ padding: "0rem" }}>
                          <CatalougeItem
                            title="Automative Refinish Car Paints"
                            link="/shop/catalouge-basic/automative-refinish-car-paints"
                            image={"/assets/images/catalouges/automative-refinish-car-paints.jpg"}
                            productPDFFILE='assets/catalouges/automative-refinish-car-paints.pdf'
                          />
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wood Finish */}
                <div id="trending-colors" className="space-mt--r130 space-mb--r130">
                  <div id="wood" className="section-inner">
                    <div className="inner-wide streamlined tetris">
                      <div className="tetris-column tetris-right primary">
                        <div className="tetris-text">
                          <h1
                            className="animate-left title"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "normal",
                              marginBottom: '7px',
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)"
                            }}
                          >Wood Finish Catalogue</h1>
                          <div
                            className="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              className="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar6"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#faf7f0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <Row className="pt-5 d-flex justify-content-start" style={{ padding: "0rem" }}>
                          <CatalougeItem
                            title="Wood Stain Varnish"
                            link="/shop/catalouge-basic/wood-finish-wood-stain-varnish"
                            image={"/assets/images/catalouges/wood-finish-wood-stain-varnish.jpg"}
                            productPDFFILE='/assets/catalouges/wood-finish-wood-stain-varnish.pdf'
                          />
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powder Coatings */}
                <div id="trending-colors" className="space-mt--r130 space-mb--r130">
                  <div id="powder" className="section-inner">
                    <div className="inner-wide streamlined tetris">
                      <div className="tetris-column tetris-right primary">
                        <div className="tetris-text">
                          <h1
                            className="animate-left title"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "normal",
                              marginBottom: '7px',
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)"
                            }}
                          >Powder Coatings Catalogue</h1>
                          <div
                            className="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              className="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              className="palette-bar bar6"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#faf7f0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <Row className="pt-5 d-flex justify-content-start" style={{ padding: "0rem" }}>
                          <CatalougeItem
                            title="Powder Paint"
                            link="/shop/catalouge-basic/powder-coatings-powder-paint"
                            image={"/assets/images/catalouges/powder-coatings-powder-paint.jpg"}
                            productPDFFILE='/assets/catalouges/powder-coatings-powder-paint.pdf'
                          />
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  return {
    catalouges: state.catalougeData
  };
};

export default connect(mapStateToProps)(LeftSidebar);
