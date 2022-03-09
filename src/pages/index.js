import { connect } from "react-redux";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { getProducts } from "../lib/product";

import { getCategories } from "../lib/category";
const LayoutOne = dynamic(() => import('../components/Layout/LayoutOne'));
const HeroSliderOne = dynamic(() => import('../components/HeroSlider/HeroSliderOne'));
const ImageCtaTwo = dynamic(() => import('../components/Cta/ImageCtaTwo'));
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
const HoverBannerOne = dynamic(() => import('../components/Banner/HoverBannerOne'));
const HoverBannerTwo = dynamic(() => import('../components/Banner/HoverBannerTwo'));
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const ProductGridWrapper = dynamic(() => import('../components/ProductThumb/ProductGridWrapper'));
import Link from "next/link";
import Image from "next/image";

const Home = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <LayoutOne aboutOverlay={false}>
      <NextSeo
        title="Golden Paints | Home"
        description="GOLDEN CHEMICAL INDUSTRIES COMPANY “GCI” is one of the Jordan leading integrated Paints and coatings manufacturing companies"
      />
      {/* hero slider */}

      {/* New Slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* Category Slider */}
      <HoverBannerOne spaceBottomClass="space-mb--r100" />

      <div id="trending-colors">
        <Container className="wide p-0 m-0 pr-0 mr-0 w-100 mw-100">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "5rem 0" }}>
              <h1 className="title" style={{ textAlign: 'center', fontWeight: 'normal' }}>Quality Till Last Drop</h1>
            </div>
            <div className="divider-video_container w-100">
              <video autoPlay={true}  muted={true} loop="loop" playsInline={true} >
                <source src="/assets/videos/home-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Container>
      </div>

      <div id="trending-colors">
        <Container className="">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "6rem 0" }}>
              <h1 className="title" style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '5px' }}>Your Style in Any Place</h1>
              <div className="d-flex justify-content-center">
                <Link
                  href="/pages/other/visualizer"
                  as={process.env.PUBLIC_URL + "/pages/other/visualizer"}
                >
                  <a
                    className="lezada-button lezada-button--medium lezada-button--icon--left"
                    style={{
                      marginTop: "1rem",
                      textTransform: "unset"
                    }}
                  >
                    Try Our Visualizer
                    </a>
                </Link>
              </div>
            </div>
            <div className="color-grid">
              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#d6e5d4" }}>
                  <div className="color-chip__code">
                    <h4>GP-G032</h4>
                  </div>
                  <div className="color-chip__detail">
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/fresh-green.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow" >
                    </div>
                  </div>
                </div>
                <div className="color-chip__title">FRESH GREEN</div>
                {/* <div className="color-chip__desc">الأخضر المنعش</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#becccf" }}>
                  <div className="color-chip__code">
                    <h4>GP-F021</h4>
                  </div>
                  <div className="color-chip__detail">
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/affectionate-blue.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">AFFECTIONATE BLUE</div>
                {/* <div className="color-chip__desc">الأزرق الحنون</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#92b3bc" }}>
                  <div className="color-chip__code">
                    <h4>GP-H018</h4>
                  </div>
                  <div className="color-chip__detail">
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/distinguished-blue.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">DISTINGUISHED BLUE</div>
                {/* <div className="color-chip__desc">الأزرق المميز</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#a7afa0" }}>
                  <div className="color-chip__code">
                    <h4>GP-H050</h4>
                  </div>
                  <div className="color-chip__detail" >
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/delicious-apples.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">DELICIOUS APPLES</div>
                {/* <div className="color-chip__desc">التفاح اللذيذ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#77879b" }}>
                  <div className="color-chip__code">
                    <h4>GP-K018</h4>
                  </div>
                  <div className="color-chip__detail">
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/calm-blue.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">CALM BLUE</div>
                {/* <div className="color-chip__desc">الأزرق الهادئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#33707d" }}>
                  <div className="color-chip__code">
                    <h4>GP-K031</h4>
                  </div>
                  <div className="color-chip__detail" >
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/greenish-blue.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">GREENISH BLUE</div>
                {/* <div className="color-chip__desc">الأزرق المخضر</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#676e5c" }}>
                  <div className="color-chip__code">
                    <h4>GP-Y087</h4>
                  </div>
                  <div className="color-chip__detail" >
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/warm-oily.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">WARM OILY</div>
                {/* <div className="color-chip__desc">الزيتي الدافئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#3d4b59" }}>
                  <div className="color-chip__code">
                    <h4>GP-L027</h4>
                  </div>
                  <div className="color-chip__detail" >
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/royal-rasasi.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">ROYAL RASASI</div>
                {/* <div className="color-chip__desc">الرصاصي الملوكي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#4a4844" }}>
                  <div className="color-chip__code">
                    <h4>GP-L0168</h4>
                  </div>
                  <div className="color-chip__detail" >
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image src="/assets/images/colors/charcoal-lead.jpg" alt="" layout='fill'
                        objectFit='cover'/>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">CHARCOAL LEAD</div>
                {/* <div className="color-chip__desc">الرصاصي الفحمي</div> */}
              </div>

            </div>
          </div>
        </Container>
      </div>

      <div id="trending-colors">
        <Container className="wide p-0 m-0 pr-0 mr-0 w-100 mw-100">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "5rem 0" }}>
              <h1 className="title" style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '5px' }}>Our Products</h1>
              <div className="d-flex justify-content-center">
                <Link
                  href="/shop/left-sidebar"
                  as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                >
                  <a
                    className="lezada-button lezada-button--medium lezada-button--icon--left"
                    style={{
                      marginTop: "1rem",
                      textTransform: "unset"
                    }}
                  >
                    View All
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="product-grid-container space-mb--r100 mt-4">
        <Container>
          <Row className="space-mb--rm50">
            <ProductGridWrapper
              products={popularProducts}
              bottomSpace="space-mb--r50"
              column={4}
            />
          </Row>
        </Container>
      </div>

      {/* image cta */}
      <ImageCtaTwo spaceBottomClass="space-mb--r100" />


      {/* banner */}
      <HoverBannerTwo spaceBottomClass="space-mb--r100" />

      {/* image cta
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      /> */}
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  const arabicProducts = state.arabicProductData;
  const categories = state.categoryData;

  return {
    categories: getCategories(categories, "decor", "new", 9),
    newProducts: getProducts(products, "decor", "new", 9),
    popularProducts: getProducts(products, "", "", 12),
    saleProducts: getProducts(products, "decor", "sale", 9)
  };
};

export default connect(mapStateToProps)(Home);
