import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoMdPerson,
  IoLogoLinkedin,
  IoLogoYoutube
} from "react-icons/io";

import Link from "next/link";

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets">
      <div className="contact-widget space-mb--30">
        <ul>
          {/* <li>
            <IoMdPerson />
            <Link
              href="/other/login-register"
              as={process.env.PUBLIC_URL + "/other/login-register"}
            >
              <a>Login / Register</a>
            </Link>
          </li> */}
          <li>
            <IoIosPhonePortrait />
            <a href="tel:+962">+962 79 721 9999 </a>
          </li>
          <li>
            <IoMdMail />
            <a href="mailto:info@gcijo.com">info@gcijo.com</a>
          </li>
        </ul>
      </div>

      <div className="social-widget">
        <a href="https://www.twitter.com/paintsgci" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/in/golden-jordan-4840a1176" target="_blank">
          <IoLogoLinkedin />
        </a>
        <a href="https://www.facebook.com/GCI.GOLDEN.PAINTS" target="_blank">
          <IoLogoFacebook />
        </a>
        <a href="https://www.instagram.com/gci_paints/?hl=el" target="_blank">
          <IoLogoInstagram />
        </a>
        <a href="https://www.youtube.com/channel/UCsR6F4NmdMYo9n832rcovNw" target="_blank">
          <IoLogoYoutube />
        </a>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
