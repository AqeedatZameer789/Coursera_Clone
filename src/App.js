import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MiddlePortion from "./MiddlePortion";
import Filter_bar from './Filter_bar';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar_bottom from "./Navbar_bottom";
function App(params) {
    return(
        <>
        <Navbar/>
     <Navbar_bottom/>
     <Filter_bar/>
      <MiddlePortion/> 
      <Footer/>
        </>
    );
    
}
export default App;