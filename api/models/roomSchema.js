const mongoose = require('mongoose');
const schema = mongoose.Schema;

//* סכמת חדרים *//
const roomSchema = mongoose.Schema({
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
}, { timesamps: true }
);

module.exports = mongoose.model('Room', roomSchema);