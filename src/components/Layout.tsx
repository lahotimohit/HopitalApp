import React, { FC } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-tr from-red-300 to-yellow-100">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
