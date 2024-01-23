import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SingleNavbar from "./SingleNavbar";

const Layout = ({ children, showNavbar, showFooter, showSingleNavbar }) => {
  return (
    <>
      {showNavbar ? <Navbar  /> : null}
      {showSingleNavbar ? <SingleNavbar  /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </>
  );
};

export default Layout;
