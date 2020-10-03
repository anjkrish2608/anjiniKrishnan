import axios from "axios";

export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  //gets specific project
  getSpecific:function(id){
    return axios.get("/api/projects/"+id)
  }
};
