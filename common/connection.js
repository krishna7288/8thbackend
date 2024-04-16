const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(
      "mongodb+srv://krishna43835:X1HpxVbJRiS2bESR@cluster0.of9v7me.mongodb.net/user_data"
    )
    .then(() => {
      console.log("MongoDB Connected....");
    })
    .catch((err) => {
      console.log("Connection Error : ", err.message);
    });
};

module.exports = connection;
