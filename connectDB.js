const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const PASSWORD = process.env.PASSWORD;
const USER_NAME = process.env.USER_NAME;


const connectDB = async () => {
  try {
    const connection = mongoose.connect(
      `mongodb+srv://ori.l.2m@gmail.com:PKiff*JJ2hEfhpH@cluster0.r3swq.mongodb.net/RoomsManagement?retryWrites=true&w=majority`,

      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`mongoDB connected `);
  } catch (error) {
    console.error(`error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;