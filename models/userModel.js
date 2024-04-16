const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  DOB: {
    type: String,
  },
  age: {
    type: String,

  },
  profile:{
    type : String
  }
});

const userData = mongoose.model("user", userSchema);

module.exports = userData;
