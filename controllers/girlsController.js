var GirlModel = require("../models/girl")

var girlsController = {
  index: function(req, res){
    GirlModel.find({}, function(err, docs){
      res.render("girls/index", {girls: docs})
    })
  }
}

module.exports = girlsController;
