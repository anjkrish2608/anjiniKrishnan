import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FontAwesome from 'react-fontawesome'

function Footer() {
  return (
    <footer className="footer footer-extend-lg mt-auto py-3 bg-success whiteThis" id="footer">
      Anjini Krishnan
      <br />
      <Link className="whiteThis" to="/">About </Link>
      <Link className="whiteThis" to="/portfolio"> Portfolio </Link>
      <Link className="whiteThis" to="/contact"> Contact</Link>
      <br />
      <a href="mailto:anjini.krishnan@hotmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesome className="far fa-envelope whiteThis"/> </a>
      <a href="https://www.linkedin.com/in/anjini-krishnan" target="_blank" rel="noopener noreferrer">
        <FontAwesome className="fab fa-linkedin whiteThis"></FontAwesome> </a>
      <a href="https://github.com/anjkrish2608" target="_blank" rel="noopener noreferrer"><FontAwesome className="fab fa-github whiteThis"></FontAwesome></a>
    </footer>
  );
}

export default Footer;
