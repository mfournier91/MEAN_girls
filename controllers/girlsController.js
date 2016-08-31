var GirlModel = require("../models/girl")

var girlsController = {
  index: function(req, res){
    GirlModel.find({}, function(err, docs){
      // res.render("girls/index", {girls: docs})
      res.json(docs);
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
  },
  edit: function(req, res){
    GirlModel.findById(req.params.id, function(err, doc){
      res.render("girls/edit", {girl: doc})
    })
  },
  update: function(req, res){
    GirlModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.offense = req.body.offense
      docs.imageUrl = req.body.imageUrl
      docs.save(function(err){
        if(!err){
          res.redirect("/girls/" + req.params.id)
        }
      })
    })
  },
  delete: function(req, res){
    GirlModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/burnbook")
      }
    })
  }
}

module.exports = girlsController;
