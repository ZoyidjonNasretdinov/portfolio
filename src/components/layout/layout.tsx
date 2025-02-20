import React from "react";
import Navbar from "./navbar"; // Navbar komponentini import qilamiz
import Footer from "./footer"; // Footer komponentini import qilamiz

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-grow">{children}</main> {/* Asosiy kontent */}
      <Footer />
    </div>
  );
};

export default Layout;
