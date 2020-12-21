const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const dotenv = require("dotenv");
// MongoDB
const connectDB = require("./connectDB");
const mongoose = require("mongoose");
const models = require("./models/schems");

const roomsArray = require("./data/rooms");
const clientssArray = require("./data/clients");
const reservationArr = require("./data/reservations");
connectDB();

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
// models.Room.insertMany(roomsArray);
// models.Client.insertMany(clientssArray);
// models.Reservation.insertMany(reservationArr);

app.get("/", (req, res) => {
  res.send("hello from server ~!");
});

//get room match for customer

app.post("/get_room", async (req, res) => {
  console.log(req.body);

  //the date we make the reservation
  let date = `${req.body.reservation.theMonth}/${
    req.body.reservation.theDay
  }/${new Date().getFullYear()}`;

  //getDay() returns a number between 0-6 represents the day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = days[new Date(date).getDay()];

  //checks if there are any rooms that open on hours selected and returns with rooms open on thoose hours and capacity greater&euqal than

  const roomsFound = await models.Room.find({
    capacity: { $gte: req.body.reservation.capacity },
  });
  const matchingRooms = roomsFound.filter((room) => {
    return Date.parse(`01/01/2011 ${room.opening_hours[`${dayName}`][0][0]}`) <=
      Date.parse(`01/01/2011 ${req.body.reservation.startAt}`) &&
      Date.parse(`01/01/2011 ${room.opening_hours[`${dayName}`][0][1]}`) >=
        Date.parse(`01/01/2011 ${req.body.reservation.endAt}`)
      ? room
      : null;

    {
    }
  });

  // if we found rooms that can match
  if (matchingRooms !== []) {
    //sorts rooms from smallest capacity to biggest
    matchingRooms.sort(function (a, b) {
      return a.capacity - b.capacity;
    });

    matchingRooms.forEach(async (room) => {
      //the reservations of the room on the date we got from client

      let roomReservations = await models.Reservation.find({
        id_room: room._id,
        date: date,
      });

      if (roomReservations.length === 0) {
        console.log(
          "there are no reservations for this day,make the reservation"
        );
      }

      //checks if starting hour we got matches starting hour of a reservation if it its,check the next room
      if (
        req.body.reservation.startAt ===
        roomReservations.forEach((reservation) => {
          return reservation.start;
        })
      ) {
        return;
      }
      // if we didnt found , get all start hours and end hours from reservations and turn them to millesecends

      let reservationsHoursMill = roomReservations.map((reservation) => {
        return [
          Date.parse(`01/01/2011 ${reservation.start}`),
          Date.parse(`01/01/2011 ${reservation.end}`),
        ];
      });
      console.log("reservationsHoursMill  : " + reservationsHoursMill);

      let convertStartEndToMill = [
        Date.parse(`01/01/2011 ${req.body.reservation.startAt}`),
        Date.parse(`01/01/2011 ${req.body.reservation.endAt}`),
      ];
      console.log("convertStartEndToMill : " + convertStartEndToMill);

      //check if there are any numbers in reservationsHoursMill that bigger than convertStartEndToMill[0]
      //  and any numbers are smaller than  convertStartEndToMill[1]
      //if there are any ,go to next room
      //if not , make reservation
    });
  }
  //there are no rooms that match the hours
  else {
    res
      .status(404)
      .json("we cant find any room for u that matches hours and capacity ");
  }

  res.send("hello from serversasas ~!");
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`sever is listening on pot ${port}`);
});
