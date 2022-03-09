import { useState, useEffect } from "react";
import { connect } from "react-redux";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// import { LayoutTwo } from "../../../ar/components/Layout";
const LayoutTwo = dynamic(() => import('../../../ar/components/Layout/LayoutTwo'));
import { getSortedProducts } from "../../../ar/lib/product";
// import CatalougeItem from "";
const CatalougeItem = dynamic(() => import('../../../ar/components/CatalougeItem'));
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

  return (
    <LayoutTwo>
      <NextSeo
        title="جولدن باينتس | الكتالوجات"
        />
      <div className="shop-page-content">
        {/* shop page body */}
        <div className="shop-page-content__body space-mb--r130">
          <Container>
            <Row>
              <Col lg={12} className="order-1 order-lg-2">
                {/* Architecture */}
                <div id="trending-colors" className="space-mt--r100 space-mb--r130">
                  <div id="architecture" class="section-inner">
                    <div class="inner-wide streamlined tetris">
                      <div class="tetris-column tetris-right primary">
                        <div class="tetris-text">
                          <h2
                            class="animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "lighter",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              textAlign: "center",
                              color: '#00215A',
                              fontFamily: "DIN-NEXT, sans-serif"
                            }}
                          >كتالوجات الدهانات الإنشائية</h2>
                          <div
                            class="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              class="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar6"
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
                            link='/ar/shop/catalouge-basic/architecture-aqua-paints'
                            image='/assets/images/catalouges/architecture-aqua-paints.jpg'
                            productPDFFILE='/assets/catalouges/architecture-aqua-paints.pdf'
                          />
                          <CatalougeItem
                            title='Classic Paints'
                            link='/ar/shop/catalouge-basic/architecture-classic-paints'
                            image='/assets/images/catalouges/architecture-classic-paints.jpg'
                            productPDFFILE='/assets/catalouges/architecture-classic-paints.pdf'
                          />
                          <CatalougeItem
                            title='Kids Paints'
                            link='/ar/shop/catalouge-basic/architecture-kids-paints'
                            image='/assets/images/catalouges/architecture-kids-paints.jpg'
                            productPDFFILE='/assets/catalouges/architecture-kids-paints.pdf'
                          />
                          <CatalougeItem
                            title='Exterior'
                            link='/ar/shop/catalouge-basic/architecture-exterior'
                            image='/assets/images/catalouges/architecture-exterior.jpg'
                            productPDFFILE='/assets/catalouges/architecture-exterior.pdf'
                          />
                          <CatalougeItem
                            title='Interior'
                            link='/ar/shop/catalouge-basic/architecture-interior'
                            image='/assets/images/catalouges/architecture-interior.jpg'
                            productPDFFILE='/assets/catalouges/architecture-interior.pdf'
                          />
                          <CatalougeItem
                            title='Smoky'
                            link='/ar/shop/catalouge-basic/architecture-smoky'
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
                  <div id="decorative" class="section-inner">
                    <div class="inner-wide streamlined tetris">
                      <div class="tetris-column tetris-right primary">
                        <div class="tetris-text">
                          <h2
                            class="animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "lighter",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              textAlign: "center",
                              color: '#00215A',
                              fontFamily: "DIN-NEXT, sans-serif"
                            }}
                          >كتالوجات الدهانات الديكورية</h2>
                          <div
                            class="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              class="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar6"
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
                            link="/ar/shop/catalouge-basic/decorative-crystal"
                            image={"/assets/images/catalouges/decorative-crystal.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-crystal.pdf'
                          />
                          <CatalougeItem
                            title="Ice"
                            link="/ar/shop/catalouge-basic/decorative-ice"
                            image={"/assets/images/catalouges/decorative-ice.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-ice.pdf'
                          />
                          <CatalougeItem
                            title="Novel"
                            link="/ar/shop/catalouge-basic/decorative-novel"
                            image={"/assets/images/catalouges/decorative-novel.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-kafear.pdf'
                          />
                          <CatalougeItem
                            title="Kafear"
                            link="/ar/shop/catalouge-basic/decorative-kafear"
                            image={"/assets/images/catalouges/decorative-kafear.jpg"}
                            productPDFFILE='/assets/catalouges/decorative-novel.pdf'
                          />
                          <CatalougeItem
                            title="Vera"
                            link="/ar/shop/catalouge-basic/decorative-vera"
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
                  <div id="industrial" class="section-inner">
                    <div class="inner-wide streamlined tetris">
                      <div class="tetris-column tetris-right primary">
                        <div class="tetris-text">
                          <h2
                            class="animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "lighter",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              textAlign: "center",
                              color: '#00215A',
                              fontFamily: "DIN-NEXT, sans-serif"
                            }}
                          >كتالوجات الدهانات الصناعية</h2>
                          <div
                            class="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              class="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar6"
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
                            link="/ar/shop/catalouge-basic/industrial-enamel-paint"
                            image={"/assets/images/catalouges/industrial-enamel-paint.jpg"}
                            productPDFFILE='/assets/catalouges/industrial-enamel-paint.pdf'
                          />
                          <CatalougeItem
                            title="Hammer Finish Paint"
                            link="/ar/shop/catalouge-basic/industrial-hammer-finish-paint"
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
                  <div id="automative" class="section-inner">
                    <div class="inner-wide streamlined tetris">
                      <div class="tetris-column tetris-right primary">
                        <div class="tetris-text">
                          <h2
                            class="animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "lighter",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              textAlign: "center",
                              color: '#00215A',
                              fontFamily: "DIN-NEXT, sans-serif"
                            }}
                          >كتالوجات دهان السيارات</h2>
                          <div
                            class="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              class="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar6"
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
                            link="/ar/shop/catalouge-basic/automative-refinish-car-paints"
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
                  <div id="wood" class="section-inner">
                    <div class="inner-wide streamlined tetris">
                      <div class="tetris-column tetris-right primary">
                        <div class="tetris-text">
                          <h2
                            class="animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "lighter",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              textAlign: "center",
                              color: '#00215A',
                              fontFamily: "DIN-NEXT, sans-serif"
                            }}
                          >كتالوجات دهان الأخشاب</h2>
                          <div
                            class="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              class="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar6"
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
                            link="/ar/shop/catalouge-basic/wood-finish-wood-stain-varnish"
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
                  <div id="powder" class="section-inner">
                    <div class="inner-wide streamlined tetris">
                      <div class="tetris-column tetris-right primary">
                        <div class="tetris-text">
                          <h2
                            class="animate-left"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "lighter",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              textAlign: "center",
                              color: '#00215A',
                              fontFamily: "DIN-NEXT, sans-serif"
                            }}
                          >كتالوجات البودرة الحرارية</h2>
                          <div
                            class="palette-bars animate-left"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                              backgroundColor: "#faf7f0",
                            }}
                          >
                            <div
                              class="palette-bar bar1"
                              style={{
                                opacity: 0.3881,
                                visibility: "inherit",
                                backgroundColor: "#d6e3e3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar2"
                              style={{
                                opacity: 0.7519,
                                visibility: "inherit",
                                backgroundColor: "#d3d8c0"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar3"
                              style={{
                                opacity: 0.9549,
                                visibility: "inherit",
                                backgroundColor: "#bfd0c5"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar4"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#fedce3"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar5"
                              style={{
                                opacity: 0.521,
                                visibility: "inherit",
                                backgroundColor: "#e3d2cb"
                              }}
                            ></div>
                            <div
                              class="palette-bar bar6"
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
                            link="/ar/shop/catalouge-basic/powder-coatings-powder-paint"
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
    catalouges: state.arabicCatalougeData
  };
};

export default connect(mapStateToProps)(LeftSidebar);
