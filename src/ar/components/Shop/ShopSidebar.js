import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import {
  getIndividualCategories,
  getIndividualColors,
  getIndividualTags,
  setActiveSort,
  getProducts,
  getDiscountPrice
} from "../../../ar/lib/product";
import { ProductRating } from "../Product";

const ShopSidebar = ({ products, getSortParams, setSortedProducts, searchTerm, setSearchTerm, setSortedProductsFromSearch }) => {
  const categories = getIndividualCategories(products);
  const colors = getIndividualColors(products);
  const tags = getIndividualTags(products);
  // const popularProducts = getProducts(products, "decor", "popular", 3);
  const popularProducts = getProducts(products, "decor", "popular", 3);

  useEffect(() => {
    if (searchTerm !== '') {
      let sorted = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setSortedProductsFromSearch(sorted);
    }
  }, [searchTerm]);

  return (
    <div className="shop-sidebar" dir="rtl">
      <div className="single-sidebar-widget space-mb--40">
        {/* search widget */}
        <div className="search-widget">
          <input type="search" placeholder="إبحث عن منتج.." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <button type="button">
            <IoIosSearch />
          </button>
        </div>
      </div>

      {/* category list */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          التصنيفات
        </h2>
        {categories.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("category", "");
                  setActiveSort(e);
                }}
                className="active"
              >
                جميع التصنيفات
              </button>
            </li>
            {categories.map((category, i) => {
              return (
                <li key={i}>
                  <button
                    style={{ paddingBottom: '2px'}}
                    className="categoryButton"
                    onClick={(e) => {
                      getSortParams("category", category);
                      setActiveSort(e);
                    }}
                  >
                      {category}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
            "No categories found"
          )}
      </div>

      {/* tag list */}
      <div className="single-sidebar-widget">
        <h2 className="single-sidebar-widget__title space-mb--30">العلامات</h2>
        {tags.length > 0 ? (
          <div className="tag-container">
            {tags.map((tag, i) => {
              return (
                <button
                  key={i}
                  onClick={(e) => {
                    getSortParams("tag", tag);
                    setActiveSort(e);
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        ) : (
            "No tags found"
          )}
      </div>
    </div>
  );
};

export default ShopSidebar;
