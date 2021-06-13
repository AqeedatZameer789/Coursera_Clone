import React from "react";
import "./index.css";

function Card(props) {
  return (
    
    <>
    <div className="Outer_Div">
      <div className="Inner_Div_1">
      <img src={props.imgsrc} alt="My img" className="img_style" />
      </div>
      <div className="Inner_Div_2">
        <h1 className="heading_style">{props.heading}</h1>
        <p className="para_style">{props.paragraph}</p>
        <button className="btn_style" >{props.btn}</button>
        <div className="Bottom">
        <div class="rating">
          <span><img src={props.imgstar1}/></span>
          <span><img src={props.imgstar2}/></span>
          <span><img src={props.imgstar3}/></span>
          <span><img src={props.imgstar4}/></span>
          <span><img src={props.imgstar5}/></span>
        </div>
       
        <span className="myspan">{props.span1}</span>
        <span className="myspan">{props.span2}</span>
        <hr className="myhr_2"/>
        <span className="myspan">{props.span3}</span>
        <span className="myspantext">{props.span4}</span>
        <hr className="myhr_2"/>
        <div>
          <img  className="myspan" src={props.imgsrc_span} />
        </div>
      </div>
      <div className="last_div">
        <span className="spanlevel_img"><img src={props.level_img}/></span>
        <span className="span_level_text">{props.level_text}</span>
      </div>
  

      </div>

    </div>
    <hr className="bottom_hr"/>
    </>
  );
}
export default Card;
