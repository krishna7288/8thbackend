const express = require("express");
const cors = require("cors");
const connect = require('./common/connection');
const router = require('./routes/userRoute');


const app = express();
app.use(express.json());
app.use(cors())
app.use(router);
connect();


app.use("/", (req, res) => {
  res.send("I'm alive");
});

const Port = 5000;
app.listen(Port, () => {
  console.log("server is running on:", Port);
});
