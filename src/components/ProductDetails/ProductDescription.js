import { useState, Fragment } from "react";
import { IoIosHeartEmpty, IoIosShuffle } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import { ProductRating } from "../Product";
import { getProductCartQuantity } from "../../lib/product";

const ProductDescription = ({
  product,
  productTDSFile,
  productPrice,
  discountedPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  pdf
}) => {
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
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  return (
    <div className="product-content">
      {product.rating && product.rating > 0 ? (
        <></>
        // <div className="product-content__rating-wrap d-block d-sm-flex space-mb--20">
        //   <div className="product-content__rating space-mr--20">
        //     <ProductRating ratingValue={product.rating} />
        //   </div>
        //   <div className="product-content__rating-count">
        //     <a href="#">( {product.ratingCount} customer reviews )</a>
        //   </div>
        // </div>
      ) : (
        ""
      )}
      <h2 className="product-content__title space-mb--20">{product.name}</h2>
      {/* <div className="product-content__price space-mb--20">
        {product.discount > 0 ? (
          <Fragment>
            <span className="main-price discounted">${productPrice}</span>
            <span className="main-price">${discountedPrice}</span>
          </Fragment>
        ) : (
            <span className="main-price">${productPrice} </span>
          )}
      </div> */}
      <div className="product-content__description space-mb--30">
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
          >
            TDS
                </button>
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

        <div className="product-content__other-info space-mt--50">
          <table>
            <tbody>
              {/* <tr className="single-info">
                <td className="title">SKU: </td>
                <td className="value">{product.sku}</td>
              </tr> */}
              <tr className="single-info">
                <td className="title">Categories: </td>
                <td className="value">
                  {product.category &&
                    product.category.map((item, index, arr) => {
                      return (
                        <Link
                          href="/shop/left-sidebar"
                          as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                          key={index}
                        >
                          <a>
                            {item + (index !== arr.length - 1 ? ", " : "")}
                          </a>
                        </Link>
                      );
                    })}
                </td>
              </tr>
              <tr className="single-info">
                <td className="title">Tags: </td>
                <td className="value">
                  {product.tag &&
                    product.tag.map((item, index, arr) => {
                      return (
                        <Link
                          href="/shop/left-sidebar"
                          as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                          key={index}
                        >
                          <a>
                            {item + (index !== arr.length - 1 ? ", " : "")}
                          </a>
                        </Link>
                      );
                    })}
                </td>
              </tr>
              <tr className="single-info">
                <td className="title">Share on: </td>
                <td className="value">
                  <ul className="social-icons">
                    <li>
                      <a
                        target="_blank"
                        href={`http://twitter.com/share?text=${product?.name}&url=https://gcijo.com/shop/product-basic/${product?.slug}&hashtags=gci,golden_chemical_industries`}
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=https://gcijo.com/shop/product-basic/${product?.slug}`, "pop", "width=600, height=400, scrollbars=no");
                        }}
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="whatsappShareMobile">
                      <a
                        target="_blank"
                        href={`whatsapp://send?text=${product?.name} https://gcijo.com/shop/product-basic/${product?.slug}`}
                        data-action="share/whatsapp/share"
                      >
                        <FaWhatsappSquare />
                      </a>
                    </li>
                    <li className="whatsappSharePC">
                      <a
                        target="_blank"
                        href={`https://api.whatsapp.com/send?text=${product?.name} https://gcijo.com/shop/product-basic/${product?.slug}`}
                      >
                        <FaWhatsappSquare />
                      </a>
                    </li>
                    {/* <li>
                          <a href="https://www.youtube.com">
                            <FaYoutube />
                          </a>
                        </li> */}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    </div>
  );
};

export default ProductDescription;
