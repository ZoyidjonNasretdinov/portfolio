import React from "react";
import Navbar from "./navbar"; // Navbar komponentini import qilamiz
import Footer from "./footer"; // Footer komponentini import qilamiz

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
