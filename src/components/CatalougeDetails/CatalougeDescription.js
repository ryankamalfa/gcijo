import {  Fragment } from "react";
import { FaFacebookF, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const CatalougeDescription = ({
  product,
  productPDFFile
}) => {


  return (
    <div className="product-content">
      <h2 className="product-content__title space-mb--20">{product.name}</h2>
      <div className="product-content__description space-mb--30">
        <p>{product.shortDescription}</p>
      </div>
      <Fragment>
        <div className="product-content__button-wrapper d-flex align-items-center">
          <button
            onClick={() => window.open(productPDFFile, '_blank')}
            className="lezada-button lezada-button--mediumes mr-2"
            style={{
              color: "#06205c",
              backgroundColor: "#fff",
            }}
          >View</button>
          <a
            href={productPDFFile}
            className="lezada-button lezada-button--mediumes mr-2"
            style={{
              color: "#06205c",
              backgroundColor: "#fff",
            }}
            download
          >Download</a>
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
                        href={`http://twitter.com/share?text=${product?.name}&url=https://gcijo.com/shop/catalouge-basic/${product?.slug}&hashtags=gci,golden_chemical_industries`}
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=https://gcijo.com/shop/catalouge-basic/${product?.slug}`, "pop", "width=600, height=400, scrollbars=no");
                        }}
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    </div >
  );
};

export default CatalougeDescription;
