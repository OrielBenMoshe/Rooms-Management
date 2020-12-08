
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const dotenv = require("dotenv");
// MongoDB
const connectDB = require('./connectDB');
const mongoose = require("mongoose");
const models = require("./models/schems");

const roomsArray = require('./data/rooms')
connectDB()

dotenv.config();
const app = express();


models.Room.insertMany(roomsArray)



app.get('/',(req,res)=>{

    res.send('hello from server ~!')
})





const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`sever is listening on pot ${port}`);
});