import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import LanguageSelector from "../../LanguageSelector"

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block" dir="rtl">
      <ul>
        <li>
          <Link
            href="/ar/pages/other/about"
            as={process.env.PUBLIC_URL + "/ar/pages/other/about"}
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
          <IoIosArrowDown />
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
          <IoIosArrowDown />
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
            as={process.env.PUBLIC_URL + "/ar/pages/other/colors"}
          >
            <a>الألوان العصرية</a>
          </Link>
        </li>

        <li>
          <Link
            href="/ar/pages/other/visualizer"
            as={process.env.PUBLIC_URL + "/ar/pages/other/visualizer"}
          >
            <a>متخيل الألوان</a>
          </Link>
        </li>

        <li>
          <Link
            href="/ar/pages/other/contact"
            as={process.env.PUBLIC_URL + "/ar/pages/other/contact"}
          >
            <a>تواصل معنا</a>
          </Link>
        </li>
        <li style={{ marginRight: '50px'}}>
          <LanguageSelector></LanguageSelector>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
