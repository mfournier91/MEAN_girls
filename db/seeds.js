var mongoose = require("mongoose")

var conn = mongoose.connect("mongodb://localhost/MEANgirls")

var GirlModel = require("../models/girl")

GirlModel.remove({}, function(err){

})

var nelley = new GirlModel({name: "Nelley", offense: "Relies on cuteness instead of coding skills to get a job", imageUrl: "http://i.imgur.com/nS24iP2.png"})
var tyler = new GirlModel({name: "Tyler", offense: "Told his wife and son he was going out for cigarettes; never came home. Became a millionaire coder but doesn't pay child support.", imageUrl: "http://i.imgur.com/xkesG7g.png"})
var aubrey = new GirlModel({name: "Aubrey", offense: "Hasn't cleaned contact lenses in 5 years", imageUrl: "http://pixel.nymag.com/imgs/daily/vulture/2016/05/02/02-arya-stark-game-of-thrones.w1200.h630.jpeg"})
var james = new GirlModel({name: "James", offense: "Has perfect jaw line but hides it behind a shaggy beard. Looks like Jesus but is a satanists who pretends to be a scientologist", imageUrl: "http://cdn.pinknews.co.uk/images/2016/01/B5JeGbxIAAABkc1_640x345_acf_cropped.png"})
var andy = new GirlModel({name: "MEAN-girl Andy", offense: "Thought his students could learn MEAN stack in three days. Broke his secret santa present", imageUrl: "http://vignette2.wikia.nocookie.net/steven-universe/images/4/42/Cartman(1).jpg/revision/latest?cb=20140605184628"})
var nayana = new GirlModel({name: "Nayana", offense: "Discriminates against scientologists. T-shirt game puts everyone to shame", imageUrl: "http://a1.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxOTg1MDQ1MDA1.jpg"})
var marc = new GirlModel({name: "Marc", offense: "", imageUrl: ""})

var girls = [nelley, tyler, aubrey, james, andy, nayana]

for(var i = 0; i < girls.length; i++){
  girls[i].save(function(err){
    if(!err){
      console.log("What what in the butt");
    }
  })
}
