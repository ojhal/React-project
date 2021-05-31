import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink activeClassName="active_class" to="/">
        About US
      </NavLink>
      <NavLink activeClassName="active_class" to="/contact">
        Contact US
      </NavLink>
      <br />
      <a href="/"> AboutUS</a>
      <a href="/Contact"> ContactUS</a>
    </>
  );
};

export default Menu;
