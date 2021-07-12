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


app.post("/Verification", async (req, res) => {
  console.log(req.body);


  res.send("{bool:true}");
  

});

//get room match for customer
app.post("/get_room", async (req, res) => {
  console.log(req.body);

  let reservationForClient = {
    id_room: "",
    id_client: "",
    date: "",
    start: "",
    end: "",
  };

  //the date we make the reservation
  let date = `${req.body.reservation.theMonth}/${req.body.reservation.theDay}/${new Date().getFullYear()}`;

  //getDay() returns a number between 0-6 represents the day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = days[new Date(date).getDay()];

  /**
   * Checks if there are any rooms that open on hours selected 
   * and returns with rooms open on thoose hours 
   * and capacity greater&euqal than
   * */ 

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

  if (matchingRooms !== []) {
    //sorts rooms from smallest capacity to biggest
    matchingRooms.sort(function (a, b) {
      return a.capacity - b.capacity;
    });

    //go through each room
    for (let i = 0; i < matchingRooms.length; i++) {
      //the reservations of the room on the date we got from client
      let roomReservations = await models.Reservation.find({
        id_room: matchingRooms[i]._id,
        date: date,
      });

      console.log("roomReservation : " + roomReservations);
      //there are no reservations for this room on this day. make the reservation
      if (roomReservations.length === 0) {
        models.Reservation.create({
          id_room: matchingRooms[i]._id,
          id_client: req.body.reservation.user_id,
          date: date,
          start: req.body.reservation.startAt,
          end: req.body.reservation.endAt,
        }).then(() => {
          res
            .status(200)
            .json(
              `reservation on ${date} ${
                (req.body.reservation.startAt, req.body.reservation.endAt)
              } made succsesfully1`
            );
        });

        break;
      }
      //checks if starting hour we got matches starting/ending hour of a reservation if it its,check the next room
      let startEndEqualCheck = roomReservations.some((reservation) => {
        return (
          reservation.start === req.body.reservation.startAt,
          reservation.end === req.body.reservation.endAt
        );
      });

      if (startEndEqualCheck) {
        console.log("starting or end hour was equal to some reservation");
        res.status(406);
        // .json("there is already some reservation on the hours we got ");
        continue;
      }

      // if we didnt found , get all start hours and end hours from reservations and turn them to millesecends

      let reservationsHoursMill = roomReservations.map((reservation) => {
        let start = reservation.start
          .split("")
          .filter((x) => x !== ":")
          .join("");
        let end = reservation.end
          .split("")
          .filter((x) => x !== ":")
          .join("");
        return { start: +start, end: +end };
      });
      console.log("reservationsHoursMill  : " + reservationsHoursMill);

      let clientStartNum = req.body.reservation.startAt
        .split("")
        .filter((x) => x !== ":")
        .join("");
      let clientEndNum = req.body.reservation.endAt
        .split("")
        .filter((x) => x !== ":")
        .join("");

      //check if there are any numbers in reservationsHoursMill that bigger than convertStartEndToMill[0]
      //  and any numbers are smaller than  convertStartEndToMill[1]
      //if there are any ,go to next room
      //if not , make reservation

      let checkForHoursBetween = reservationsHoursMill.some((reservatoin) => {
        if (
          (clientStartNum >= reservatoin.start &&
            clientEndNum <= reservatoin.end) ||
          (reservatoin.start > clientStartNum &&
            clientEndNum > reservatoin.end) ||
          (reservatoin.end > clientStartNum && clientEndNum > reservatoin.end)
        ) {
          return true;
        } else {
          return false;
        }
      });

      console.log(checkForHoursBetween);

      if (checkForHoursBetween) {
        continue;
      } else {
        models.Reservation.create({
          id_room: matchingRooms[i]._id,
          id_client: req.body.reservation.user_id,
          date: date,
          start: req.body.reservation.startAt,
          end: req.body.reservation.endAt,
        })
          .then(() => {
            res
              .status(200)
              .json(
                `reservation on ${date} ${
                  (req.body.reservation.startAt, req.body.reservation.endAt)
                } made succsesfully2`
              );
          })
          .catch((err) => {
            res.send(err);
          });
        break;
      }
    }
  }
  //there are no rooms that match the hours or capacity
  else {
    res
      .status(404)
      .send("we cant find any room for u that matches hours and capacity ");
  }
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`sever is listening on pot ${port}`);
});
