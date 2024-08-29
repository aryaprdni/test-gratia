/* eslint-disable react/prop-types */

import NavbarComponent from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
