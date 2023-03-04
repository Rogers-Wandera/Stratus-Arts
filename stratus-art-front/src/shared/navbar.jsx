import React from "react";
import CategoriesNav from "../components/navbar/categoriesNav";
import HeaderNav from "../components/navbar/header";

const NavBar = () => {
  return (
    <div>
      <HeaderNav />
      <CategoriesNav />
    </div>
  );
};

export default NavBar;
