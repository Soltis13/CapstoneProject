import axios from "axios";

const API = {
    // Retrieves saved user from the db
    getUser: function() {
      return axios.get("/api/saved");
    },
    // Saves a new user to the db
    saveUser: function(userObj) {
      return axios.post("/api/saved", userObj);
    },
    // Deletes a user from the db
    deleteUser: function(id) {
      return axios.delete(`/api/saved/${id}`);
    }
  };
  
  export default API;