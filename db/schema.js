var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var GirlSchema = new Schema({
  name: String,
  offense: String,
  imageUrl: String
})

mongoose.model("Girl", GirlSchema)
