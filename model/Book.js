const mongoose = require("mongoose");  //mongoose is a library that helps us connect to mongodb

const Schema = mongoose.Schema;  // schema is a property of mongoose that helps us to create a schema

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);  
