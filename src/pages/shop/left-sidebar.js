import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { connect } from "react-redux";
import { NextSeo } from 'next-seo';
// import { Container, Row, Col } from "react-bootstrap";
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
import Paginator from "react-hooks-paginator";
// const Paginator = dynamic(() => import(''));
import { SlideDown } from "react-slidedown";
// const SlideDown = dynamic(() => import(''));
// import { LayoutTwo } from "";
const LayoutTwo = dynamic(() => import('../../components/Layout/LayoutTwo'));

import { setActiveSort, getSortedProducts, getIndividualCategories } from "../../lib/product";
// import {
//   ShopHeader,
//   ShopFilter,
//   ShopSidebar,
//   ShopProducts
// } from "";
const ShopFilter = dynamic(() => import('../../components/Shop/ShopFilter'));
const ShopSidebar = dynamic(() => import('../../components/Shop/ShopSidebar'));
const ShopProducts = dynamic(() => import('../../components/Shop/ShopProducts'));

import { useRouter } from 'next/router'

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
        title="Golden Paints | Categories"
/>
      <div className="shop-page-content">
        {/* shop header filter */}
        <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
        </SlideDown>

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container>
            <Row>
              <Col
                lg={3}
                className="order-2 order-lg-1 space-mt-mobile-only--50"
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
    products: state.productData
  };
};

export default connect(mapStateToProps)(LeftSidebar);
