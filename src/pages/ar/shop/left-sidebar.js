import { useState, useEffect } from "react";
import { connect } from "react-redux";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// import Paginator from "";
const Paginator = dynamic(() => import('react-hooks-paginator'));
// import { SlideDown } from "react-slidedown";
const SlideDown = dynamic(() => import('react-slidedown'));
// import { LayoutTwo } from "../../../ar/components/Layout";
const LayoutTwo = dynamic(() => import('../../../ar/components/Layout/LayoutTwo'));
// import { BreadcrumbOne } from "../../../ar/components/Breadcrumb";
const BreadcrumbOne = dynamic(() => import('../../../ar/components/Breadcrumb/BreadcrumbOne'));
import { setActiveSort, getSortedProducts, getIndividualCategories } from "../../../ar/lib/product";
// import {
//   ShopHeader,
//   ShopFilter,
//   ShopSidebar,
//   ShopProducts
// } from "../../../ar/components/Shop";
const ShopHeader = dynamic(() => import('../../../ar/components/Shop/ShopHeader'));
const ShopFilter = dynamic(() => import('../../../ar/components/Shop/ShopFilter'));
const ShopSidebar = dynamic(() => import('../../../ar/components/Shop/ShopSidebar'));
const ShopProducts = dynamic(() => import('../../../ar/components/Shop/ShopProducts'));
import { useRouter } from 'next/router';

const LeftSidebar = ({ products }) => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedProductsFromSearch, setSortedProductsFromSearch] = useState("");
  const allCategories = getIndividualCategories(products);
  const router = useRouter()
  const { query } = router

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
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  useEffect(() => {
    if (searchTerm !== '') {
      setSortedProducts(sortedProductsFromSearch);
      setCurrentData(sortedProductsFromSearch.slice(offset, offset + pageLimit));
    }
  }, [searchTerm]);

  useEffect(() => {
    let searchQuery = (new URL(document.location)).search.substring(1);
    const query = (searchQuery) ? JSON.parse('{"' + searchQuery.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }) : null;
    for (const key in query) {
      if (key === 'category') {
        let searchedCategory = capitalizeTheFirstLetterOfEachWord(query?.category);

        if (allCategories.includes(searchedCategory)) {
          getSortParams("category", searchedCategory);
          let categoryButton = Array.from(document.querySelectorAll('button.categoryButton'))
            .filter(el => el.textContent === searchedCategory);
          setActiveSort({
            currentTarget: categoryButton[0]
          });
        }
      } else if (key === 'searchTerm') {
        if (query?.searchTerm !== '') {
          let sorted = products.filter(product => product.name.toLowerCase().includes(query?.searchTerm.toLowerCase()));
          setSortedProductsFromSearch(sorted);
          setSearchTerm(query?.searchTerm);
        }
      }
    }
  }, [query]);


  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  return (
    <LayoutTwo>
      <NextSeo
        title="جولدن باينتس | التصنيفات"
        />
      <div className="shop-page-content">
        {/* shop header filter */}
        <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
        </SlideDown>

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130" dir="rtl">
          <Container>
            <Row>
            <Col
                lg={3}
                className="order-2 order-lg-1 space-mt-mobile-only--50"
                style={{ textAlign: "right" }}
              >
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  setSortedProducts={setSortedProducts}
                  getSortParams={getSortParams}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setSortedProductsFromSearch={setSortedProductsFromSearch}
                />
              </Col>
              <Col lg={9} className="order-1 order-lg-2">
                {/* shop products */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
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
    products: state.arabicProductData
  };
};

export default connect(mapStateToProps)(LeftSidebar);
