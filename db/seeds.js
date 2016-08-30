var mongoose = require("mongoose")

var conn = mongoose.connect("mongodb://localhost/MEANgirls")

var GirlModel = require("../models/girl")

GirlModel.remove({}, function(err){

})

var nelly = new GirlModel({name: "Nelly", offense: "Relies on cuteness instead of coding skills to get a job", imageUrl: "http://i.imgur.com/nS24iP2.png"})
var tyler = new GirlModel({name: "Tyler", offense: "Told his wife and son he was going out for cigarettes; never came home. Became a millionaire coder but doesn't pay child support.", imageUrl: "http://i.imgur.com/xkesG7g.png"})
var aubrey = new GirlModel({name: "Aubrey", offense: "Showered with gifts from admirers and never reciprocates", imageUrl: "http://pixel.nymag.com/imgs/daily/vulture/2016/05/02/02-arya-stark-game-of-thrones.w1200.h630.jpeg"})

var girls = [nelly, tyler, aubrey]

for(var i = 0; i < girls.length; i++){
  girls[i].save(function(err){
    if(!err){
      console.log("What what in the butt");
    }
  })
}
