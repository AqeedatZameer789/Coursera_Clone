import React, { Component } from 'react';
import "./SignUp.css";
//import GetProjects, { PostProject } from "./RESTAPI_CALLER";
import {GetProjects, PostProject} from "./RESTAPI_CALLER";
class Project_Display extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            projects:[],
            fname:"",
            email:"",
            pass:""
        };
    }
    render() { 
        return (
               <div>
                   <div>
                   <ul>
                   {this.state.projects.map((project) => {
                    return <li key={project.id}>{project.title}</li>;
                   })}
                 

                   </ul>
               </div>
               
               <div>
               <div className="main_div">
               <h1 className="main_heading">Sign up</h1>
               <p className="para">Learn on your own time from top universities and businesses.</p>
               <form onSubmit={(event)=> {
                       console.log(this.state.fname);
                       console.log(this.state.email);
                       console.log(this.state.pass);
                       console.log("Form OnSubmit called");
                       event.preventDefault();
                       PostProject({project_title:this.state.fname});
                       PostProject({project_title:this.state.email});
                       PostProject({project_title:this.state.pass});

                   }}>
                       <label className="labels" for="fname">
                           FULL NAME<br/>
                           <input className="inputs" type="text"
                           value={this.state.fname}
                           onChange={(event)=>{
                               this.setState({fname:event.target.value});
                           }}
                           ></input>
                        </label><br/>
                        <label className="labels" for="email">
                           EMAIL<br/>
                           <input  className="inputs" type="text"
                           value={this.state.email}
                           onChange={(event)=>{
                               this.setState({email:event.target.value});
                           }}
                           ></input>
                        </label>
                        <label className="labels" for="pass">
                           PASSWORD<br/>
                           <input  className="inputs" type="password"
                           value={this.state.pass}
                           onChange={(event)=>{
                               this.setState({pass:event.target.value});
                           }}
                           ></input>
                        </label>
                        <p className="para_pass_desc">Between 8 and 72 characters</p>
                        <button className="btn1">Join For Free</button>
                <button type="submit" value="Submit Project" className="btn2"><img className="img_icon" src="google.png"></img>Continue with Google</button>
                <button className="btn2"><img className="img_icon" src="facebook1.png"></img>Continue with Facebook</button>

                <div className="div_bottom">
                    <div className="inner1"><p>Already on Coursera?</p></div>
                    <div className="inner2"><a className="a_style" href="">Login</a></div></div>
                   
                    <hr/><br/>
                        <a className="a_style2" href="">Sign up with your organization</a>
                    <div className="last_div">
                    <p className="last_para">I accept Coursera's <a className="a_style3" href="">
                        Terms of Use</a> and <a className="a_style3" href="">Privacy Notice</a>. 
                        Having trouble logging in? <a className="a_style3" href="">Learner help center</a> </p>
                       <p className="last_para">    This site is protected by reCAPTCHA Enterprise and the Google<a className="a_style3" href=""> Privacy Policy</a> and 
                       <a className="a_style3" href="">Terms of Service</a> apply.</p> 
                    </div>

                        
                   </form>
                   

               </div>

               </div>
               </div>
        );
    }

    componentDidMount()
    {
        console.log("Project_Display mounted");
        this.FetchProjects();
    }
    FetchProjects(){
        GetProjects().then((response)=>{
            console.log(response.data);
            this.setState({projects:response.data});
        });
    return[];
    }
    submit_project(event){
        console.log("New Project:" + this.state.fname);
        console.log("New Project:" + this.state.email);
        console.log("New Project:" + this.state.pass);
        PostProject(
            "http://localhost:3000/addProject",
            this.state.fname, this.state.email,this.state.pass,
            ).then((response)=>{
                console.log(response.data);
                
            });
      
        event.preventDefault();
    }
}
 
export default Project_Display; 