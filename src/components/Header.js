import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

export default Header;
