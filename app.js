/** ENV */
const dotenv = require("dotenv");
dotenv.config();
const DB_PASS = process.env.DB_PASS;
const USER_NAME = process.env.USER_NAME;


const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Utils = require('./api/utils');



/** MongoDB */
const uri = `mongodb+srv://${USER_NAME}:${DB_PASS}@cluster0.r3swq.mongodb.net/RoomsManagement?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));


/** middlewares morgan logs */
app.use(morgan('dev'));
/** middlewares route for uploads folder */
app.use(express.static('uploads'));

app.use('/uploads', express.static('uploads'));

app.use(express.json()); /** Allows me to read JSON from BODY request. */
app.use(express.urlencoded({ /** Allows me to read urlencoded OBJECT from BODY request. */
  extended: true
}));

/** middlewares CORS */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
})

//** Routes **//

const reservationsRoutes = require('./api/routes/reservations');
const roomsRoutes = require('./api/routes/rooms');
const clientsRoutes = require('./api/routes/clients');


app.use('/clients',/** checkAuth, */ clientsRoutes);
app.use('/reservations',/** checkAuth, */ reservationsRoutes);
app.use('/rooms', roomsRoutes);


// app.post("/verification", async (req, res) => {
//   res.status(200).json({
//     body: req.body
//   })
// });

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: 'Shalom Olam 4',
//     res: req.body.a
//   })
// });

// app.post("/room-match", (req, res) =>{
//   return Utils.roomMatch(req, res)
// });


/** middlewares Pass notfound */
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})
/** middlewares Errors Managing */
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message
  })
})

module.exports = app;