import HeaderOne from "../Header/HeaderOne";
import { FooterTwo } from "../Footer";

const LayoutTwo = ({ children, aboutOverlay }) => {
  return (
    <div>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterTwo />
    </div>
  );
};

export default LayoutTwo;
