const User = require("../model/User");

module.exports = {
  // this method handles finding all Users in the db
  find: function(req, res) {
    console.log("Gathering saved Users from the db");
    User.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles adding new Users to the db
  insert: function(req, res) {
    console.log("Adding saved user to the db");
    console.log("req.body: ", req.body);
    User.create(req.body).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting Users from the db
  delete: function(req, res) {
    console.log("Deleting a saved User from the db");
    User.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};