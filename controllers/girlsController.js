var GirlModel = require("../models/girl")

var girlsController = {
  index: function(req, res){
    GirlModel.find({}, function(err, docs){
      res.render("girls/index", {girls: docs})
    })
  },
  new: function(req, res){
    res.render("girls/new")
  },
  create: function(req,res){
    var girl = new GirlModel({name: req.body.name, offense: req.body.offense, imageUrl: req.body.imageUrl})
    girl.save(function(err){
      if(!err){
        res.redirect("burnbook")
      }
    })
  },
  show: function(req, res){
    GirlModel.findById(req.params.id, function(err, doc){
      res.render("girls/show", {girl: doc})
    })
  }
}

module.exports = girlsController;
