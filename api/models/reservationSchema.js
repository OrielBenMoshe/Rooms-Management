const mongoose = require('mongoose');
const schema = mongoose.Schema;

//* סכמת הזמנות *//
const reservationSchema = mongoose.Schema({
  id_room: { type: schema.Types.ObjectId, ref: "Room" },
  id_client: { type: schema.Types.ObjectId, ref: "Client" },
  date: String,
  start: String,
  end: String,
})

module.exports = mongoose.model('Reservation', reservationSchema);