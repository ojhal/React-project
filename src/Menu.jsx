import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/">About US</Link>
      <Link to="/contact">Contact US</Link>
      <br />
      <a href="/"> AboutUS</a>
      <a href="/Contact"> ContactUS</a>
    </>
  );
};

export default Menu;
