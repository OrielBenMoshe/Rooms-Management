const mongoose = require("mongoose");
const schema = mongoose.Schema;

const RoomSchema = new mongoose.Schema(
  {
    room_name: String,
    images: [String],
    capacity: Number,
    price: Number,
    opening_hours: {
      Sunday: [[String]],
      Monday: [[String]],
      Tuesday: [[String]],
      Wednesday: [[String]],
      Thursday: [[String]],
      Friday: [[String]],
      Saturday: [[String]],
    },
    occupied: [{ type: schema.Types.ObjectId, ref: "Reservation" }],
  },
  { timesamps: true }
);

const ReservationSchema = new mongoose.Schema({
  id_room: { type: schema.Types.ObjectId, ref: "Room" },
  id_client: { type: schema.Types.ObjectId, ref: "Client" },
  date: String,
  start: String,
  end: String,
});

const ClientSchema = new mongoose.Schema({
  user_name: String,
  phone: String,
  email: String,
  password: String,
  regularCustomer: Boolean,
  credits: Number,
  client_reservation: [{ type: schema.Types.ObjectId, ref: "Reservation" }],
});

const Room = mongoose.model("Room", RoomSchema);
const Reservation = mongoose.model("Reservation", ReservationSchema);
const Client = mongoose.model("Client", ClientSchema);

const models = { Room, Reservation, Client };

module.exports = models;
