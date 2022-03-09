import { useEffect } from "react";
import Link from "next/link";
import LanguageSelector from "../../../components/LanguageSelector"

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        e.stopPropagation();
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", (e) => {
        e.stopPropagation();
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item">
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a readOnly >Home</a>
          </Link>
        </li>

        <li readOnly className="menu-item">
          <Link href="/pages/other/about" as={process.env.PUBLIC_URL + "/pages/other/about"}>
            <a>About Us</a>
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a readOnly >Categories</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item">
              <Link
                href="/shop/left-sidebar?category=architecture"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
              >
                <a>Architecture</a>
              </Link>
            </li>
            <li className="menu-item">
              <a
                href="/shop/left-sidebar?category=decorative"
              >Decorative</a>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/left-sidebar?category=automative"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=automative"}
              >
                <a>Automative Refinish</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/left-sidebar?category=wood finish"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=wood finish"}
              >
                <a>Wood Finish</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/left-sidebar?category=industrial finish"
              >
                <a href="/shop/left-sidebar?category=industrial finish">Industrial Finish</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link
            href="/shop/catalouges"
            as={process.env.PUBLIC_URL + "/shop/catalouges"}
          >
            <a>Catalouges</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item">
              <Link
                href="/shop/catalouges#architecture"
                as={process.env.PUBLIC_URL + "/shop/catalouges#architecture"}
              >
                <a>Architecture</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/catalouges#decorative"
                as={process.env.PUBLIC_URL + "/shop/catalouges#decorative"}
              >
                <a>Decorative</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/catalouges#automative"
                as={process.env.PUBLIC_URL + "/shop/catalouges#automative"}
              >
                <a>Automative Refinish</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/catalouges#wood"
                as={process.env.PUBLIC_URL + "/shop/catalouges#wood"}
              >
                <a>Wood Finish</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/catalouges#industrial"
                as={process.env.PUBLIC_URL + "/shop/catalouges#industrial"}
              >
                <a>Industrial Finish</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="/shop/catalouges#powder"
                as={process.env.PUBLIC_URL + "/shop/catalouges#powder"}
              >
                <a>Powder Coatings</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link href="/pages/other/colors" as={process.env.PUBLIC_URL + "/pages/other/colors"}>
            <a>Trending Colors</a>
          </Link>
        </li>

        <li className="menu-item">
          <Link href="/pages/other/visualizer" as={process.env.PUBLIC_URL + "/pages/other/visualizer"}>
            <a>Visualizer</a>
          </Link>
        </li>

        <li className="menu-item">
          <Link href="/pages/other/contact" as={process.env.PUBLIC_URL + "/pages/other/contact"}>
            <a>Contact Us</a>
          </Link>
        </li>
          <LanguageSelector></LanguageSelector>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
