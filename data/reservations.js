// const ReservationSchema = new mongoose.Schema({
//     id_room: { type: schema.Types.ObjectId, ref: "Room" },
//     id_client: { type: schema.Types.ObjectId, ref: "Client" },
//     date: String,
//     start: String,
//     end: String,
//   });

//5fde0aa680c2394150f98cf8 שופר
//5fde0aa680c2394150f98cf9 נבל
//5fde0aa680c2394150f98cfa כינור

//5fde0e3139a73524b8e31907 דוד
//5fde0e3139a73524b8e31908 שרה

const reservationArr = [
  {
    id_room: "5fde0aa680c2394150f98cf8",
    id_client: "5fde0e3139a73524b8e31907",
    date: "12/17/20",
    start: "9:00",
    end: "12:00",
  },
  {
    id_room: "5fde0aa680c2394150f98cf8",
    id_client: "5fde0e3139a73524b8e31908",
    date: "12/16/20",
    start: "16:00",
    end: "18:00",
  },
  {
    id_room: "5fde0aa680c2394150f98cfa",
    id_client: "5fde0e3139a73524b8e31907",
    date: "12/20/20",
    start: "13:00",
    end: "17:00",
  },
];

module.exports = reservationArr;
