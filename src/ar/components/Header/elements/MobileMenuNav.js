import { useEffect } from "react";
import Link from "next/link";
import LanguageSelector from "../../LanguageSelector"

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
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
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
      dir="rtl"
    >
      <ul >
        <li>
          <Link
            href="/ar/pages/other/about"
            as={process.env.PUBLIC_URL + "/ar/other/about"}
          >
            <a>من نحن</a>
          </Link>
        </li>

        <li className="position-relative">
          <Link
            href="/ar/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar"}
          >
            <a>التصنيفات</a>
          </Link>
          {/* <IoIosArrowDown /> */}
          <ul className="sub-menu sub-menu--one-column" style={{textAlign: 'center'}}>
            <li>
              <Link
                href="/ar/shop/left-sidebar?category=دهانات%20إنشائية"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=دهانات%20إنشائية"}
              >
                <a>دهانات إنشائية</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/left-sidebar?category=دهانات%20ديكورية"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=دهانات%20ديكورية"}
              >
                <a>دهانات ديكورية</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/left-sidebar?category=دهانات%20صناعية%20ودهانات%20أخشاب"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=دهانات%20صناعية%20ودهانات%20أخشاب"}
              >
                <a>دهانات صناعية ودهانات أخشاب</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/left-sidebar?category=دهان%20سيارات"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=دهان%20سيارات"}
              >
                <a>دهانات سيارات</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/left-sidebar?category=بودر%20كوتينج"
                as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar?category=بودر%20كوتينج"}
              >
                <a>بودرة حرارية</a>
              </Link>
            </li>
          </ul>
        </li>

        {/* Catalouges */}
        <li className="position-relative">
          <Link
            href="/ar/shop/catalouges"
            as={process.env.PUBLIC_URL + "/ar/shop/catalouges"}
          >
            <a>كتالوجات</a>
          </Link>
          {/* <IoIosArrowDown /> */}
          <ul className="sub-menu sub-menu--one-column" style={{textAlign: 'center'}}>
            <li>
              <Link
                href="/ar/shop/catalouges#architecture"
                as={process.env.PUBLIC_URL + "/ar/shop/catalouges#architecture"}
              >
                <a>دهانات إنشائية</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/catalouges#decorative"
                as={process.env.PUBLIC_URL + "/ar/shop/catalouges#decorative"}
              >
                <a>دهانات ديكورية</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/catalouges#automative"
                as={process.env.PUBLIC_URL + "/ar/shop/catalouges#automative"}
              >
                <a>دهان سيارات</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/catalouges#wood"
                as={process.env.PUBLIC_URL + "/ar/shop/catalouges#wood"}
              >
                <a>دهان أخشاب</a>
              </Link>
            </li>
            <li>
              <Link
                href="/ar/shop/catalouges#industrial"
                as={process.env.PUBLIC_URL + "/ar/shop/catalouges#industrial"}
              >
                <a>دهانات صناعية</a>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            href="/ar/pages/other/colors"
            as={process.env.PUBLIC_URL + "/ar/other/colors"}
          >
            <a>الألوان العصرية</a>
          </Link>
        </li>

        <li>
          <Link
            href="/ar/pages/other/visualizer"
            as={process.env.PUBLIC_URL + "/ar/other/visualizer"}
          >
            <a>متخيل الألوان</a>
          </Link>
        </li>

        <li>
          <Link
            href="/ar/pages/other/contact"
            as={process.env.PUBLIC_URL + "/ar/other/contact"}
          >
            <a>تواصل معنا</a>
          </Link>
        </li>
        <li>
          <LanguageSelector></LanguageSelector>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
