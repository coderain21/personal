import React from "react";
import { NAME } from "../constants";
import "./Footer.css";

const Footer = () => {
  var d = new Date(); 
  let year = d.getFullYear(); 

  return(
    <div className="bg-footer">
      <p className="footer-text">&copy; Copyright {year}, {NAME}</p>
    </div>
  )
}

export default Footer;