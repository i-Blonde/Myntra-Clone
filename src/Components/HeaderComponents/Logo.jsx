import React from "react";
// import { isCompositeComponentWithType } from "react-dom/test-utils";
import './Logo.css';

let styles = {
  background : "url(myntra.png)",
  padding : "14px 27px",
  color : "white",
  backgroundSize : "1406px 123px",
  width : 57,
  height : 42,
  backgroundPosition : "-462px 0"
}
const Logo = () => {
  return (
    <div className="logo">
      <a href="https://www.myntra.com/" style ={styles}></a>
    </div>
  );
};

export default Logo;
