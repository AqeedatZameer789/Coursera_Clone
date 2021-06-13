import axios from "axios";
function GetProjects(params) {
  return  axios({method:"GET",url:"http://localhost:3000/projects"} );    
}
function PostProject(params) {
  axios({method:"POST",url:"http://localhost:3000/addProject",
  data:params.fname,data:params.email,data:params.pass,
  
})
}
export { GetProjects,PostProject};