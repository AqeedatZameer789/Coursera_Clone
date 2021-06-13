import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MiddlePortion from "./MiddlePortion";
import Filter_bar from './Filter_bar';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar_bottom from "./Navbar_bottom";


ReactDOM.render(
      <>
      <Navbar/>
     <Navbar_bottom/>
     <Filter_bar/>
      <MiddlePortion/> 
      <Footer/>
      </>

,document.getElementById("root")
);
