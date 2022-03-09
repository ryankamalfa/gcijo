import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import LanguageSelector from "../../../components/LanguageSelector"

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link
            href="/pages/other/about"
            as={process.env.PUBLIC_URL + "/pages/other/about"}
          >
            <a>About Us</a>
          </Link>
        </li>

        <li className="position-relative">
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Categories</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link
                href="/shop/left-sidebar?category=architecture"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
              >
                <a>Architecture</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/left-sidebar?category=decorative"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=decorative"}
              >
                <a>Decorative</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/left-sidebar?category=industrial-and-wood-finish"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=industrial%20%26%20wood%20finish"}
              >
                <a>Industrial & Wood Finish</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/left-sidebar?category=automative"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=automative"}
              >
                <a>Automative Refinish</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/left-sidebar?category=powder-coatings"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=powder%20coatings"}
              >
                <a>Powder Coatings</a>
              </Link>
            </li>
          </ul>
        </li>

        {/* Catalouges */}
        <li className="position-relative">
          <Link
            href="/shop/catalouges"
            as={process.env.PUBLIC_URL + "/shop/catalouges"}
          >
            <a>Catalouges</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link
                href="/shop/catalouges#architecture"
                as={process.env.PUBLIC_URL + "/shop/catalouges#architecture"}
              >
                <a>Architecture</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/catalouges#decorative"
                as={process.env.PUBLIC_URL + "/shop/catalouges#decorative"}
              >
                <a>Decorative</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/catalouges#automative"
                as={process.env.PUBLIC_URL + "/shop/catalouges#automative"}
              >
                <a>Automative  Refinish</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/catalouges#wood"
                as={process.env.PUBLIC_URL + "/shop/catalouges#wood"}
              >
                <a>Wood FInish</a>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/catalouges#industrial"
                as={process.env.PUBLIC_URL + "/shop/catalouges#industrial"}
              >
                <a>Industrial Finish</a>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            href="/pages/other/colors"
            as={process.env.PUBLIC_URL + "/pages/other/colors"}
          >
            <a>Trending Colors</a>
          </Link>
        </li>

        <li>
          <Link
            href="/pages/other/visualizer"
            as={process.env.PUBLIC_URL + "/pages/other/visualizer"}
          >
            <a>Visualizer</a>
          </Link>
        </li>

        <li>
          <Link
            href="/pages/other/contact"
            as={process.env.PUBLIC_URL + "/pages/other/contact"}
          >
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          {/* <Link
            href="/ar"
            as={process.env.PUBLIC_URL + "/ar"}
          >
            <a>Arabic</a>
          </Link> */}
          <LanguageSelector></LanguageSelector>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
