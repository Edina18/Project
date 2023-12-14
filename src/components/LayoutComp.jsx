import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComp />
      <main>{children}</main>
      <FooterComp />
    </div>
  );
};

export default Layout;