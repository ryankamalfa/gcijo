import { HeaderOne } from "../Header";
import { FooterTwo } from "../Footer";

const LayoutOne = ({ children, aboutOverlay }) => {
  return (
    <div>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterTwo />
    </div>
  );
};

export default LayoutOne;
