const User = require('../model/user')

// Home page
exports.home =  (req, res) => {
    User.find({_id: req.userId}, {name: 1, username: 1, email: 1, _id: 0}).populate("todos")
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            result: data,
            message: "Success",
          });
        }
      });
      
  };

// Active status
exports.home =  (req, res) => {
    User.find({_id: req.userId}, {name: 1, username: 1, email: 1, _id: 0}).populate("todos")
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            result: data,
            message: "Success",
          });
        }
      });
      
  };