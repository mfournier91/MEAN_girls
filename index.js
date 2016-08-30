var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var girlsController = require("./controllers/girlsController")
mongoose.connect('mongodb://localhost/MEANgirls')

var app = express()
app.set("view engine", "hbs")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.listen(4000, function(){
  console.log("app listening on port 4000");
})

app.get("/", function(req, res){
  res.render("girls")
})
app.get("/burnbook", girlsController.index)

app.get("/girls/new", girlsController.new)
app.post("/burnbook", girlsController.create)
app.get("/girls/:id", girlsController.show)
app.get("/girls/:id/edit", girlsController.edit)
app.put("/girls/:id", girlsController.update)
app.delete("/girls/:id", girlsController.delete)

app.use(require("better-express-errors")(app))
