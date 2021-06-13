
import React,{useState,useEffect} from 'react';

import "./index.css";
import Language from "./language";
import Filter_uper from "./Filter_button"
import Level from "./Level";
import "./Dropdown.css";
import Begineer from "./Begineer";
import Intermediate from "./Intermediate";
import LessThen2Hour from './LessThen2Hour';
import Months from "./Months";
import ComputerScience from "./ComputerScience";
import Business from "./Business";
import ComputerProgramming from "./ComputerProgramming"
import WebDevelopment from "./WebDevelopment";
import CourseraProject from "./CourseraProject";
import IBM from "./IBM";
import Searches from "./Searches";
import Pagination from "./Pagination";




class Filter_bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedfilterS:"m" };
    {/**this.state = { arr: { title:"m",class:"b",project:"c"} ,};**/}
  }
  ClickHandler=()=> {this.lang()};
  
  render() { 
    if(this.selectedfilterS=="language")
    {
    
          return ( 
            <>
            <Filter_uper/>
           
            <div className="filterbtnStyle">
              {/**Language */}
              <label className="dropdown">
              <div className="dd-button">Language <i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.ClickHandler} className="btn">
              <div className="least_div">  
              <div className="least_least_div">English</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

              <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">French</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Level */}
              <label className="dropdown">
              <div className="dd-button">Level<i class="i_1_11"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.Beginr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Begineer</div> 
              <div className="least_least_div">(500)</div></div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Intermediate</div> 
              <div className="least_least_div">(427)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>

              {/**Duration */}
              <label className="dropdown">
              <div className="dd-button">Duration<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.lessthn2hr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Less Than 2 Hours</div> 
              <div className="least_least_div">(193)</div></div></button> </li>

              <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">1-3 Months</div> 
              <div className="least_least_div">(121)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Subject */}
              <label className="dropdown">
              <div className="dd-button">Subject<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerscience()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Scince</div> 
              <div className="least_least_div">(214)</div></div></button> </li>

              <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Business</div> 
              <div className="least_least_div">(88)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Skill */}
              <label className="dropdown">
              <div className="dd-button">Skills<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerprogramming()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Programming</div> 
              <div className="least_least_div">(280)</div></div></button> </li>

              <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Web Development</div> 
              <div className="least_least_div">(267)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Partner */}
              <label className="dropdown">
              <div className="dd-button">Partner<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.courseraproject()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Coursera Project Network</div> 
              <div className="least_least_div">(191)</div></div></button> </li>

              <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">IBM</div> 
              <div className="least_least_div">(32)</div></div></button> </li>
              <li className="divider"></li>
              </ul>
              </label>
              {/**Learning Product */}
              <label className="dropdown">
              <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
                <li> <button onClick={()=>this.business()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Guided Project</div> 
               </div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Courses</div> 
               </div></button> </li>
  
              <li className="divider"></li>
                </ul>
              </label>
              
            </div>
            <Language/>
            <Searches/> <Pagination/>
           </>
          );
    }





    else if(this.selectedfilterS=="begineer")
    {
    
          return ( 
            <>
            <Filter_uper/>
           
            <div className="filterbtnStyle">
              {/**Language */}
              <label className="dropdown">
              <div className="dd-button">Language<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.ClickHandler} className="btn">
              <div className="least_div">  
              <div className="least_least_div">English</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

              <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">French</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Level */}
              <label className="dropdown">
              <div className="dd-button">Level<i class="i_1_11"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.Beginr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Begineer</div> 
              <div className="least_least_div">(500)</div></div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Intermediate</div> 
              <div className="least_least_div">(427)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>

              {/**Duration */}
              <label className="dropdown">
              <div className="dd-button">Duration<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.lessthn2hr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Less Than 2 Hours</div> 
              <div className="least_least_div">(193)</div></div></button> </li>

              <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">1-3 Months</div> 
              <div className="least_least_div">(121)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Subject */}
              <label className="dropdown">
              <div className="dd-button">Subject<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerscience()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Scince</div> 
              <div className="least_least_div">(214)</div></div></button> </li>

              <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Business</div> 
              <div className="least_least_div">(88)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Skill */}
              <label className="dropdown">
              <div className="dd-button">Skills<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerprogramming()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Programming</div> 
              <div className="least_least_div">(280)</div></div></button> </li>

              <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Web Development</div> 
              <div className="least_least_div">(267)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Partner */}
              <label className="dropdown">
              <div className="dd-button">Partner<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.courseraproject()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Coursera Project Network</div> 
              <div className="least_least_div">(191)</div></div></button> </li>

              <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">IBM</div> 
              <div className="least_least_div">(32)</div></div></button> </li>
              <li className="divider"></li>
              </ul>
              </label>
              {/**Learning Product */}
              <label className="dropdown">
              <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
                <li> <button onClick={()=>this.business()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Guided Project</div> 
               </div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Courses</div> 
               </div></button> </li>
  
              <li className="divider"></li>
                </ul>
              </label>
              
            </div>
            <Begineer/>
            <Searches/> <Pagination/>
           </>
          );
    }


    else if(this.selectedfilterS=="intermediate")
    {
    
          return ( 
            <>
            <Filter_uper/>
           
            <div className="filterbtnStyle">
              {/**Language */}
              <label className="dropdown">
              <div className="dd-button">Language<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.ClickHandler} className="btn">
              <div className="least_div">  
              <div className="least_least_div">English</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

              <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">French</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Level */}
              <label className="dropdown">
              <div className="dd-button">Level<i class="i_1_11"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.Beginr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Begineer</div> 
              <div className="least_least_div">(500)</div></div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Intermediate</div> 
              <div className="least_least_div">(427)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>

              {/**Duration */}
              <label className="dropdown">
              <div className="dd-button">Duration<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.lessthn2hr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Less Than 2 Hours</div> 
              <div className="least_least_div">(193)</div></div></button> </li>

              <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">1-3 Months</div> 
              <div className="least_least_div">(121)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Subject */}
              <label className="dropdown">
              <div className="dd-button">Subject<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerscience()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Scince</div> 
              <div className="least_least_div">(214)</div></div></button> </li>

              <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Business</div> 
              <div className="least_least_div">(88)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Skill */}
              <label className="dropdown">
              <div className="dd-button">Skills<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerprogramming()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Programming</div> 
              <div className="least_least_div">(280)</div></div></button> </li>

              <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Web Development</div> 
              <div className="least_least_div">(267)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Partner */}
              <label className="dropdown">
              <div className="dd-button">Partner<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.courseraproject()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Coursera Project Network</div> 
              <div className="least_least_div">(191)</div></div></button> </li>

              <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">IBM</div> 
              <div className="least_least_div">(32)</div></div></button> </li>
              <li className="divider"></li>
              </ul>
              </label>
              {/**Learning Product */}
              <label className="dropdown">
              <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
                <li> <button onClick={()=>this.business()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Guided Project</div> 
               </div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Courses</div> 
               </div></button> </li>
  
              <li className="divider"></li>
                </ul>
              </label>
              
            </div>
            <Intermediate/>
            <Searches/> <Pagination/>
           </>
          );
    }


    if(this.selectedfilterS=="lessthan2hour")
    {
    
          return ( 
            <>
            <Filter_uper/>
           
            <div className="filterbtnStyle">
              {/**Language */}
              <label className="dropdown">
              <div className="dd-button">Language<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.ClickHandler} className="btn">
              <div className="least_div">  
              <div className="least_least_div">English</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

              <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">French</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Level */}
              <label className="dropdown">
              <div className="dd-button">Level<i class="i_1_11"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.Beginr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Begineer</div> 
              <div className="least_least_div">(500)</div></div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Intermediate</div> 
              <div className="least_least_div">(427)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>

              {/**Duration */}
              <label className="dropdown">
              <div className="dd-button">Duration<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.lessthn2hr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Less Than 2 Hours</div> 
              <div className="least_least_div">(193)</div></div></button> </li>

              <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">1-3 Months</div> 
              <div className="least_least_div">(121)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Subject */}
              <label className="dropdown">
              <div className="dd-button">Subject<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerscience()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Scince</div> 
              <div className="least_least_div">(214)</div></div></button> </li>

              <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Business</div> 
              <div className="least_least_div">(88)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Skill */}
              <label className="dropdown">
              <div className="dd-button">Skills<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerprogramming()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Programming</div> 
              <div className="least_least_div">(280)</div></div></button> </li>

              <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Web Development</div> 
              <div className="least_least_div">(267)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Partner */}
              <label className="dropdown">
              <div className="dd-button">Partner<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.courseraproject()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Coursera Project Network</div> 
              <div className="least_least_div">(191)</div></div></button> </li>

              <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">IBM</div> 
              <div className="least_least_div">(32)</div></div></button> </li>
              <li className="divider"></li>
              </ul>
              </label>
              {/**Learning Product */}
              <label className="dropdown">
              <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
                <li> <button onClick={()=>this.business()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Guided Project</div> 
               </div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Courses</div> 
               </div></button> </li>
  
              <li className="divider"></li>
                </ul>
              </label>
              
            </div>
            <LessThen2Hour/>
            <Searches/> <Pagination/>
           </>
          );
    }

else if(this.selectedfilterS=="month"){
           return ( 
            <>
            <Filter_uper/>
           
            <div className="filterbtnStyle">
              {/**Language */}
              <label className="dropdown">
              <div className="dd-button">Language<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.ClickHandler} className="btn">
              <div className="least_div">  
              <div className="least_least_div">English</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

              <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">French</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Level */}
              <label className="dropdown">
              <div className="dd-button">Level<i class="i_1_11"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.Beginr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Begineer</div> 
              <div className="least_least_div">(500)</div></div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Intermediate</div> 
              <div className="least_least_div">(427)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>

              {/**Duration */}
              <label className="dropdown">
              <div className="dd-button">Duration<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.lessthn2hr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Less Than 2 Hours</div> 
              <div className="least_least_div">(193)</div></div></button> </li>

              <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">1-3 Months</div> 
              <div className="least_least_div">(121)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Subject */}
              <label className="dropdown">
              <div className="dd-button">Subject<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerscience()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Scince</div> 
              <div className="least_least_div">(214)</div></div></button> </li>

              <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Business</div> 
              <div className="least_least_div">(88)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Skill */}
              <label className="dropdown">
              <div className="dd-button">Skills<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerprogramming()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Programming</div> 
              <div className="least_least_div">(280)</div></div></button> </li>

              <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Web Development</div> 
              <div className="least_least_div">(267)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Partner */}
              <label className="dropdown">
              <div className="dd-button">Partner<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.courseraproject()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Coursera Project Network</div> 
              <div className="least_least_div">(191)</div></div></button> </li>

              <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">IBM</div> 
              <div className="least_least_div">(32)</div></div></button> </li>
              <li className="divider"></li>
              </ul>
              </label>
              {/**Learning Product */}
              <label className="dropdown">
              <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
                <li> <button onClick={()=>this.business()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Guided Project</div> 
               </div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Courses</div> 
               </div></button> </li>
  
              <li className="divider"></li>
                </ul>
              </label>
              
            </div>
            <Months/>
            <Searches/> <Pagination/>
            </>
       );
      }
      else if(this.selectedfilterS=="computerscience"){
        return ( 
         <>
         <Filter_uper/>
        
         <div className="filterbtnStyle">
              {/**Language */}
              <label className="dropdown">
              <div className="dd-button">Language<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.ClickHandler} className="btn">
              <div className="least_div">  
              <div className="least_least_div">English</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

              <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">French</div> 
              <div className="least_least_div">(929)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Level */}
              <label className="dropdown">
              <div className="dd-button">Level<i class="i_1_11"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.Beginr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Begineer</div> 
              <div className="least_least_div">(500)</div></div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Intermediate</div> 
              <div className="least_least_div">(427)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>

              {/**Duration */}
              <label className="dropdown">
              <div className="dd-button">Duration<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.lessthn2hr()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Less Than 2 Hours</div> 
              <div className="least_least_div">(193)</div></div></button> </li>

              <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">1-3 Months</div> 
              <div className="least_least_div">(121)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Subject */}
              <label className="dropdown">
              <div className="dd-button">Subject<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerscience()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Scince</div> 
              <div className="least_least_div">(214)</div></div></button> </li>

              <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Business</div> 
              <div className="least_least_div">(88)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Skill */}
              <label className="dropdown">
              <div className="dd-button">Skills<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.computerprogramming()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Computer Programming</div> 
              <div className="least_least_div">(280)</div></div></button> </li>

              <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Web Development</div> 
              <div className="least_least_div">(267)</div></div></button> </li>

             
              <li className="divider"></li>
              </ul>
              </label>
              {/**Partner */}
              <label className="dropdown">
              <div className="dd-button">Partner<i class="i_1_1"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
              <li> <button onClick={()=>this.courseraproject()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Coursera Project Network</div> 
              <div className="least_least_div">(191)</div></div></button> </li>

              <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">IBM</div> 
              <div className="least_least_div">(32)</div></div></button> </li>
              <li className="divider"></li>
              </ul>
              </label>
              {/**Learning Product */}
              <label className="dropdown">
              <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                
                <li> <button onClick={()=>this.business()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Guided Project</div> 
               </div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Courses</div> 
               </div></button> </li>
  
              <li className="divider"></li>
                </ul>
              </label>
              
            </div>
            <ComputerScience/>
            <Searches/> <Pagination/>


          </>
         )}
         else if(this.selectedfilterS=="business"){
          return ( 
           <>
           <Filter_uper/>
          
           <div className="filterbtnStyle">
                {/**Language */}
                <label className="dropdown">
                <div className="dd-button">Language <i class="i_1_1"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                <li> <button onClick={()=>this.ClickHandler} className="btn">
                <div className="least_div">  
                <div className="least_least_div">English</div> 
                <div className="least_least_div">(929)</div></div></button> </li>
  
                <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">French</div> 
                <div className="least_least_div">(929)</div></div></button> </li>
  
               
                <li className="divider"></li>
                </ul>
                </label>
                {/**Level */}
                <label className="dropdown">
                <div className="dd-button">Level <i class="i_1_11"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                <li> <button onClick={()=>this.Beginr()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Begineer</div> 
                <div className="least_least_div">(500)</div></div></button> </li>
  
                <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Intermediate</div> 
                <div className="least_least_div">(427)</div></div></button> </li>
  
               
                <li className="divider"></li>
                </ul>
                </label>
  
                {/**Duration */}
                <label className="dropdown">
                <div className="dd-button">Duration <i class="i_1_1"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                <li> <button onClick={()=>this.lessthn2hr()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Less Than 2 Hours</div> 
                <div className="least_least_div">(193)</div></div></button> </li>
  
                <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">1-3 Months</div> 
                <div className="least_least_div">(121)</div></div></button> </li>
  
               
                <li className="divider"></li>
                </ul>
                </label>
                {/**Subject */}
                <label className="dropdown">
                <div className="dd-button">Subject<i class="i_1_1"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                <li> <button onClick={()=>this.computerscience()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Computer Scince </div> 
                <div className="least_least_div">(214)</div></div></button> </li>
  
                <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Business</div> 
                <div className="least_least_div">(88)</div></div></button> </li>
  
               
                <li className="divider"></li>
                </ul>
                </label>
                {/**Skill */}
                <label className="dropdown">
                <div className="dd-button">Skills <i class="i_1_1"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                <li> <button onClick={()=>this.computerprogramming()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Computer Programming</div> 
                <div className="least_least_div">(280)</div></div></button> </li>
  
                <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">Web Development</div> 
                <div className="least_least_div">(267)</div></div></button> </li>
  
               
                <li className="divider"></li>
                </ul>
                </label>
                {/**Partner */}
                <label className="dropdown">
                <div className="dd-button">Partner <i class="i_1_1"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                <li> <button onClick={()=>this.courseraproject()} className="btn">
                <div className="least_div">  
                <div className="least_least_div">Coursera Project Network</div> 
                <div className="least_least_div">(191)</div></div></button> </li>
  
                <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
                <div className="least_least_div">IBM</div> 
                <div className="least_least_div">(32)</div></div></button> </li>
                <li className="divider"></li>
                </ul>
                </label>
                {/**Learning Product */}
                <label className="dropdown">
                <div className="dd-button">Learning Product <i class="i_1_12"></i></div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                  
                  <li> <button onClick={()=>this.business()} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">Guided Project</div> 
                 </div></button> </li>
    
                  <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">Courses</div> 
                 </div></button> </li>
    
                <li className="divider"></li>
                  </ul>
                </label>
                
              </div>
              <Business/>
              <Searches/> <Pagination/>
  
  
            </>
           )}


           else if(this.selectedfilterS=="computerprogramming"){
            return ( 
             <>
             <Filter_uper/>
            
             <div className="filterbtnStyle">
                  {/**Language */}
                  <label className="dropdown">
                  <div className="dd-button">Language <i class="i_1_1"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                  <li> <button onClick={()=>this.ClickHandler} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">English</div> 
                  <div className="least_least_div">(929)</div></div></button> </li>
    
                  <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">French</div> 
                  <div className="least_least_div">(929)</div></div></button> </li>
    
                 
                  <li className="divider"></li>
                  </ul>
                  </label>
                  {/**Level */}
                  <label className="dropdown">
                  <div className="dd-button">Level <i class="i_1_11"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                  <li> <button onClick={()=>this.Beginr()} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">Begineer</div> 
                  <div className="least_least_div">(500)</div></div></button> </li>
    
                  <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">Intermediate</div> 
                  <div className="least_least_div">(427)</div></div></button> </li>
    
                 
                  <li className="divider"></li>
                  </ul>
                  </label>
    
                  {/**Duration */}
                  <label className="dropdown">
                  <div className="dd-button">Duration <i class="i_1_1"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                  <li> <button onClick={()=>this.lessthn2hr()} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">Less Than 2 Hours</div> 
                  <div className="least_least_div">(193)</div></div></button> </li>
    
                  <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">1-3 Months</div> 
                  <div className="least_least_div">(121)</div></div></button> </li>
    
                 
                  <li className="divider"></li>
                  </ul>
                  </label>
                  {/**Subject */}
                  <label className="dropdown">
                  <div className="dd-button">Subject<i class="i_1_1"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                  <li> <button onClick={()=>this.computerscience()} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">Computer Scince</div> 
                  <div className="least_least_div">(214)</div></div></button> </li>
    
                  <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">Business</div> 
                  <div className="least_least_div">(88)</div></div></button> </li>
    
                 
                  <li className="divider"></li>
                  </ul>
                  </label>
                  {/**Skill */}
                  <label className="dropdown">
                  <div className="dd-button">Skills<i class="i_1_1"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                  <li> <button onClick={()=>this.computerprogramming()} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">Computer Programming</div> 
                  <div className="least_least_div">(280)</div></div></button> </li>
    
                  <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">Web Development</div> 
                  <div className="least_least_div">(267)</div></div></button> </li>
    
                 
                  <li className="divider"></li>
                  </ul>
                  </label>
                  {/**Partner */}
                  <label className="dropdown">
                  <div className="dd-button">Partner <i class="i_1_1"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                  <li> <button onClick={()=>this.courseraproject()} className="btn">
                  <div className="least_div">  
                  <div className="least_least_div">Coursera Project Network</div> 
                  <div className="least_least_div">(191)</div></div></button> </li>
    
                  <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
                  <div className="least_least_div">IBM</div> 
                  <div className="least_least_div">(32)</div></div></button> </li>
                  <li className="divider"></li>
                  </ul>
                  </label>
                  {/**Learning Product */}
                  <label className="dropdown">
                  <div className="dd-button">Learning Product <i class="i_1_12"></i></div>
                  <input type="checkbox" className="dd-input" id="test"/>
                  <ul className="dd-menu">
                    
                    <li> <button onClick={()=>this.business()} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">Guided Project</div> 
                   </div></button> </li>
      
                    <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">Courses</div> 
                   </div></button> </li>
      
                  <li className="divider"></li>
                    </ul>
                  </label>
                  
                </div>
                <ComputerProgramming/>
                <Searches/> <Pagination/>
    
    
              </>
             )}
             else if(this.selectedfilterS=="webdevelopment"){
              return ( 
               <>
               <Filter_uper/>
              
               <div className="filterbtnStyle">
                    {/**Language */}
                    <label className="dropdown">
                    <div className="dd-button">Language<i class="i_1_1"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                    <li> <button onClick={()=>this.ClickHandler} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">English</div> 
                    <div className="least_least_div">(929)</div></div></button> </li>
      
                    <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">French</div> 
                    <div className="least_least_div">(929)</div></div></button> </li>
      
                   
                    <li className="divider"></li>
                    </ul>
                    </label>
                    {/**Level */}
                    <label className="dropdown">
                    <div className="dd-button">Level <i class="i_1_11"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                    <li> <button onClick={()=>this.Beginr()} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">Begineer</div> 
                    <div className="least_least_div">(500)</div></div></button> </li>
      
                    <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">Intermediate</div> 
                    <div className="least_least_div">(427)</div></div></button> </li>
      
                   
                    <li className="divider"></li>
                    </ul>
                    </label>
      
                    {/**Duration */}
                    <label className="dropdown">
                    <div className="dd-button">Duration <i class="i_1_1"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                    <li> <button onClick={()=>this.lessthn2hr()} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">Less Than 2 Hours</div> 
                    <div className="least_least_div">(193)</div></div></button> </li>
      
                    <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">1-3 Months</div> 
                    <div className="least_least_div">(121)</div></div></button> </li>
      
                   
                    <li className="divider"></li>
                    </ul>
                    </label>
                    {/**Subject */}
                    <label className="dropdown">
                    <div className="dd-button">Subject <i class="i_1_1"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                    <li> <button onClick={()=>this.computerscience()} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">Computer Scince </div> 
                    <div className="least_least_div">(214)</div></div></button> </li>
      
                    <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">Business</div> 
                    <div className="least_least_div">(88)</div></div></button> </li>
      
                   
                    <li className="divider"></li>
                    </ul>
                    </label>
                    {/**Skill */}
                    <label className="dropdown">
                    <div className="dd-button">Skills <i class="i_1_1"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                    <li> <button onClick={()=>this.computerprogramming()} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">Computer Programming</div> 
                    <div className="least_least_div">(280)</div></div></button> </li>
      
                    <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">Web Development</div> 
                    <div className="least_least_div">(267)</div></div></button> </li>
      
                   
                    <li className="divider"></li>
                    </ul>
                    </label>
                    {/**Partner */}
                    <label className="dropdown">
                    <div className="dd-button">Partner <i class="i_1_1"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                    <li> <button onClick={()=>this.courseraproject()} className="btn">
                    <div className="least_div">  
                    <div className="least_least_div">Coursera Project Network</div> 
                    <div className="least_least_div">(191)</div></div></button> </li>
      
                    <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
                    <div className="least_least_div">IBM</div> 
                    <div className="least_least_div">(32)</div></div></button> </li>
                    <li className="divider"></li>
                    </ul>
                    </label>
                    {/**Learning Product */}
                    <label className="dropdown">
                    <div className="dd-button">Learning Product <i class="i_1_12"></i></div>
                    <input type="checkbox" className="dd-input" id="test"/>
                    <ul className="dd-menu">
                      
                      <li> <button onClick={()=>this.business()} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">Guided Project</div> 
                     </div></button> </li>
        
                      <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">Courses</div> 
                     </div></button> </li>
        
                    <li className="divider"></li>
                      </ul>
                    </label>
                    
                  </div>
                  <WebDevelopment/>
                  <Searches/> <Pagination/>
      
      
                </>
               )}












               
               else if(this.selectedfilterS=="courseraproject"){
                return ( 
                 <>
                 <Filter_uper/>
                
                 <div className="filterbtnStyle">
                      {/**Language */}
                      <label className="dropdown">
                      <div className="dd-button">Language<i class="i_1_11"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                      <li> <button onClick={()=>this.ClickHandler} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">English</div> 
                      <div className="least_least_div">(929)</div></div></button> </li>
        
                      <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">French</div> 
                      <div className="least_least_div">(929)</div></div></button> </li>
        
                     
                      <li className="divider"></li>
                      </ul>
                      </label>
                      {/**Level */}
                      <label className="dropdown">
                      <div className="dd-button">Level <i class="i_1_1"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                      <li> <button onClick={()=>this.Beginr()} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">Begineer</div> 
                      <div className="least_least_div">(500)</div></div></button> </li>
        
                      <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">Intermediate</div> 
                      <div className="least_least_div">(427)</div></div></button> </li>
        
                     
                      <li className="divider"></li>
                      </ul>
                      </label>
        
                      {/**Duration */}
                      <label className="dropdown">
                      <div className="dd-button">Duration <i class="i_1_1"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                      <li> <button onClick={()=>this.lessthn2hr()} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">Less Than 2 Hours</div> 
                      <div className="least_least_div">(193)</div></div></button> </li>
        
                      <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">1-3 Months</div> 
                      <div className="least_least_div">(121)</div></div></button> </li>
        
                     
                      <li className="divider"></li>
                      </ul>
                      </label>
                      {/**Subject */}
                      <label className="dropdown">
                      <div className="dd-button">Subject <i class="i_1_1"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                      <li> <button onClick={()=>this.computerscience()} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">Computer Scince </div> 
                      <div className="least_least_div">(214)</div></div></button> </li>
        
                      <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">Business</div> 
                      <div className="least_least_div">(88)</div></div></button> </li>
        
                     
                      <li className="divider"></li>
                      </ul>
                      </label>
                      {/**Skill */}
                      <label className="dropdown">
                      <div className="dd-button">Skills <i class="i_1_1"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                      <li> <button onClick={()=>this.computerprogramming()} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">Computer Programming</div> 
                      <div className="least_least_div">(280)</div></div></button> </li>
        
                      <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">Web Development</div> 
                      <div className="least_least_div">(267)</div></div></button> </li>
        
                     
                      <li className="divider"></li>
                      </ul>
                      </label>
                      {/**Partner */}
                      <label className="dropdown">
                      <div className="dd-button">Partner <i class="i_1_1"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                      <li> <button onClick={()=>this.courseraproject()} className="btn">
                      <div className="least_div">  
                      <div className="least_least_div">Coursera Project Network</div> 
                      <div className="least_least_div">(191)</div></div></button> </li>
        
                      <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
                      <div className="least_least_div">IBM</div> 
                      <div className="least_least_div">(32)</div></div></button> </li>
                      <li className="divider"></li>
                      </ul>
                      </label>
                      {/**Learning Product */}
                      <label className="dropdown">
                      <div className="dd-button">Learning Product <i class="i_1_12"></i></div>
                      <input type="checkbox" className="dd-input" id="test"/>
                      <ul className="dd-menu">
                        
                        <li> <button onClick={()=>this.business()} className="btn">
                        <div className="least_div">  
                        <div className="least_least_div">Guided Project</div> 
                       </div></button> </li>
          
                        <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                        <div className="least_least_div">Courses</div> 
                       </div></button> </li>
          
                      <li className="divider"></li>
                        </ul>
                      </label>
                      
                    </div>
                    <CourseraProject/>
                    <Searches/> <Pagination/>
        
        
                  </>
                 )}


                 if(this.selectedfilterS=="one")
                 {
                 
                       return ( 
                         <>
                         <Filter_uper/>
                        
                         <div className="filterbtnStyle">
                           {/**Language */}
                           <label className="dropdown">
                           <div className="dd-button">Language <i class="i_1_1"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                           <li> <button onClick={()=>this.ClickHandler} className="btn">
                           <div className="least_div">  
                           <div className="least_least_div">English</div> 
                           <div className="least_least_div">(929)</div></div></button> </li>
             
                           <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
                           <div className="least_least_div">French</div> 
                           <div className="least_least_div">(929)</div></div></button> </li>
             
                          
                           <li className="divider"></li>
                           </ul>
                           </label>
                           {/**Level */}
                           <label className="dropdown">
                           <div className="dd-button">Level<i class="i_1_11"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                           <li> <button onClick={()=>this.Beginr()} className="btn">
                           <div className="least_div">  
                           <div className="least_least_div">Begineer</div> 
                           <div className="least_least_div">(500)</div></div></button> </li>
             
                           <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                           <div className="least_least_div">Intermediate</div> 
                           <div className="least_least_div">(427)</div></div></button> </li>
             
                          
                           <li className="divider"></li>
                           </ul>
                           </label>
             
                           {/**Duration */}
                           <label className="dropdown">
                           <div className="dd-button">Duration<i class="i_1_1"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                           <li> <button onClick={()=>this.lessthn2hr()} className="btn">
                           <div className="least_div">  
                           <div className="least_least_div">Less Than 2 Hours</div> 
                           <div className="least_least_div">(193)</div></div></button> </li>
             
                           <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
                           <div className="least_least_div">1-3 Months</div> 
                           <div className="least_least_div">(121)</div></div></button> </li>
             
                          
                           <li className="divider"></li>
                           </ul>
                           </label>
                           {/**Subject */}
                           <label className="dropdown">
                           <div className="dd-button">Subject<i class="i_1_1"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                           <li> <button onClick={()=>this.computerscience()} className="btn">
                           <div className="least_div">  
                           <div className="least_least_div">Computer Scince</div> 
                           <div className="least_least_div">(214)</div></div></button> </li>
             
                           <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
                           <div className="least_least_div">Business</div> 
                           <div className="least_least_div">(88)</div></div></button> </li>
             
                          
                           <li className="divider"></li>
                           </ul>
                           </label>
                           {/**Skill */}
                           <label className="dropdown">
                           <div className="dd-button">Skills<i class="i_1_1"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                           <li> <button onClick={()=>this.computerprogramming()} className="btn">
                           <div className="least_div">  
                           <div className="least_least_div">Computer Programming</div> 
                           <div className="least_least_div">(280)</div></div></button> </li>
             
                           <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
                           <div className="least_least_div">Web Development</div> 
                           <div className="least_least_div">(267)</div></div></button> </li>
             
                          
                           <li className="divider"></li>
                           </ul>
                           </label>
                           {/**Partner */}
                           <label className="dropdown">
                           <div className="dd-button">Partner<i class="i_1_1"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                           <li> <button onClick={()=>this.courseraproject()} className="btn">
                           <div className="least_div">  
                           <div className="least_least_div">Coursera Project Network</div> 
                           <div className="least_least_div">(191)</div></div></button> </li>
             
                           <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
                           <div className="least_least_div">IBM</div> 
                           <div className="least_least_div">(32)</div></div></button> </li>
                           <li className="divider"></li>
                           </ul>
                           </label>
                           {/**Learning Product */}
                           <label className="dropdown">
                           <div className="dd-button">Learning Product<i class="i_1_12"></i></div>
                           <input type="checkbox" className="dd-input" id="test"/>
                           <ul className="dd-menu">
                             
                             <li> <button onClick={()=>this.business()} className="btn">
                             <div className="least_div">  
                             <div className="least_least_div">Guided Project</div> 
                            </div></button> </li>
               
                             <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
                             <div className="least_least_div">Courses</div> 
                            </div></button> </li>
               
                           <li className="divider"></li>
                             </ul>
                           </label>
                           
                         </div>
                         <Language/>
                         <Searches/> <Pagination/>
                        </>
                       );
                 }

else
  
  {
  
        return ( 
          <>
          <Filter_uper/>
          <div className="filterbtnStyle">
            {/**Language */}
            <label className="dropdown">
            <div className="dd-button">Language  <i class="i_1_1"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
            <li> <button onClick={()=>this.ClickHandler} className="btn">
            <div className="least_div">  
            <div className="least_least_div">English</div> 
            <div className="least_least_div">(929)</div></div></button> </li>

            <li><button onClick={()=>{this.ClickHandler()}}  className="btn"><div className="least_div">  
            <div className="least_least_div">French</div> 
            <div className="least_least_div">(929)</div></div></button> </li>

           
            <li className="divider"></li>
            </ul>
            </label>
            {/**Level */}
            <label className="dropdown">
            <div className="dd-button">Level <i class="i_1_11"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
            <li> <button onClick={()=>this.Beginr()} className="btn">
            <div className="least_div">  
            <div className="least_least_div">Begineer</div> 
            <div className="least_least_div">(500)</div></div></button> </li>

            <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
            <div className="least_least_div">Intermediate</div> 
            <div className="least_least_div">(427)</div></div></button> </li>

           
            <li className="divider"></li>
            </ul>
            </label>

            {/**Duration */}
            <label className="dropdown">
            <div className="dd-button">Duration <i class="i_1_1"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
            <li> <button onClick={()=>this.lessthn2hr()} className="btn">
            <div className="least_div">  
            <div className="least_least_div">Less Than 2 Hours</div> 
            <div className="least_least_div">(193)</div></div></button> </li>

            <li><button onClick={()=>{this.months()}}  className="btn"><div className="least_div">  
            <div className="least_least_div">1-3 Months</div> 
            <div className="least_least_div">(121)</div></div></button> </li>

           
            <li className="divider"></li>
            </ul>
            </label>
            {/**Subject */}
            <label className="dropdown">
            <div className="dd-button">Subject <i class="i_1_1"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
            <li> <button onClick={()=>this.computerscience()} className="btn">
            <div className="least_div">  
            <div className="least_least_div">Computer Scince</div> 
            <div className="least_least_div">(214)</div></div></button> </li>

            <li><button onClick={()=>{this.business()}}  className="btn"><div className="least_div">  
            <div className="least_least_div">Business</div> 
            <div className="least_least_div">(88)</div></div></button> </li>

           
            <li className="divider"></li>
            </ul>
            </label>
            {/**Skill */}
            <label className="dropdown">
            <div className="dd-button">Skills <i class="i_1_1"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
            <li> <button onClick={()=>this.computerprogramming()} className="btn">
            <div className="least_div">  
            <div className="least_least_div">Computer Programming</div> 
            <div className="least_least_div">(280)</div></div></button> </li>

            <li><button onClick={()=>{this.webdevelopment()}}  className="btn"><div className="least_div">  
            <div className="least_least_div">Web Development</div> 
            <div className="least_least_div">(267)</div></div></button> </li>

           
            <li className="divider"></li>
            </ul>
            </label>
            {/**Partner */}
            <label className="dropdown">
            <div className="dd-button">Partner <i class="i_1_1"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
            <li> <button onClick={()=>this.courseraproject()} className="btn">
            <div className="least_div">  
            <div className="least_least_div">Coursera Project Network</div> 
            <div className="least_least_div">(191)</div></div></button> </li>

            <li><button onClick={()=>{this.ibm()}}  className="btn"><div className="least_div">  
            <div className="least_least_div">IBM</div> 
            <div className="least_least_div">(32)</div></div></button> </li>
            <li className="divider"></li>
            </ul>
            </label>
            {/**Learning Product */}
            <label className="dropdown">
            <div className="dd-button">Learning Product <i class="i_1_12"></i></div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
              
              <li> <button onClick={()=>this.business()} className="btn">
              <div className="least_div">  
              <div className="least_least_div">Guided Project</div> 
             </div></button> </li>

              <li><button onClick={()=>{this.intermd()}}  className="btn"><div className="least_div">  
              <div className="least_least_div">Courses</div> 
             </div></button> </li>

            <li className="divider"></li>
              </ul>
            </label>
            
          </div>
          <Language/>
          <Searches/> <Pagination/>
         </>
        );
  }

  }

    /**Defining function */
    lang() {
      this.setState({selectedfilterS:"language"});
      this.selectedfilterS="language";
      console.log("This is lang button");
      console.log(this.selectedfilterS);
    }
    Skill(){
      this.setState({selectedfilterS:"skill"});
      this.selectedfilterS="skill";
      console.log("This is skill button");
      console.log(this.selectedfilterS);
    }
    
  
    Level(){
  
      this.setState({selectedfilterS:"level"});
      this.selectedfilterS="level";
      console.log("This is level button");
      console.log(this.selectedfilterS);
    }
    Lang(){
      this.setState({selectedfilterS:"language"});
      this.selectedfilterS="language";
      console.log("This is language button");
      console.log(this.selectedfilterS);
    }
    Beginr(){
      this.setState({selectedfilterS:"begineer"});
      this.selectedfilterS="begineer";
      console.log("This is begineer button");
      console.log(this.selectedfilterS);
    }
    intermd(){
      this.setState({selectedfilterS:"intermediate"});
      this.selectedfilterS="intermediate";
      console.log("This is intermediate button");
      console.log(this.selectedfilterS);
    }
    lessthn2hr(){
      this.setState({selectedfilterS:"lessthan2hour"});
      this.selectedfilterS="lessthan2hour";
      console.log("This is lessthan2hour button");
      console.log(this.selectedfilterS);
    }
    months(){
      this.setState({selectedfilterS:"months"});
      this.selectedfilterS="months";
      console.log("This is months button");
      console.log(this.selectedfilterS);
    }
    computerscience(){
      this.setState({selectedfilterS:"computerscience"});
      this.selectedfilterS="computerscience";
      console.log("This is computerscience button");
      console.log(this.selectedfilterS);
    }
    business(){
      this.setState({selectedfilterS:"business"});
      this.selectedfilterS="business";
      console.log("This is business button");
      console.log(this.selectedfilterS);
    }
    computerprogramming(){
      this.setState({selectedfilterS:"computerprogramming"});
      this.selectedfilterS="computerprogramming";
      console.log("This is computerprogramming button");
      console.log(this.selectedfilterS);
    }
    webdevelopment(){
      this.setState({selectedfilterS:"webdevelopment"});
      this.selectedfilterS="webdevelopment";
      console.log("This is webdevelopment button");
      console.log(this.selectedfilterS);
    }
    courseraproject(){
      this.setState({selectedfilterS:"courseraproject"});
      this.selectedfilterS="courseraproject";
      console.log("This is courseraproject button");
      console.log(this.selectedfilterS);
    }
    ibm(){
      this.setState({selectedfilterS:"ibm"});
      this.selectedfilterS="ibm";
      console.log("This is ibm button");
      console.log(this.selectedfilterS);
    }
    one(){
      this.setState({selectedfilterS:"one"});
      this.selectedfilterS="one";
      console.log("This is one button");
      console.log(this.selectedfilterS);

    }
}
 
export default Filter_bar;
