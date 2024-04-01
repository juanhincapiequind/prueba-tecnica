import React from "react";

import { SearchButtonProps } from "../models/Interfaces";
import {  Navbar } from "react-bootstrap";
import "../styles/NavBar.css";


const NavBar: React.FC<SearchButtonProps> = ({ onSearch }) => {
  return (
    <Navbar className="navbar-color" expand="lg">     
    </Navbar>
  );
};

export default NavBar;
