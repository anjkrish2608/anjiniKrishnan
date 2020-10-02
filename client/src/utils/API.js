import axios from "axios";

export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  }
};
