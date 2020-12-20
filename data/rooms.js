// const RoomSchema = new mongoose.Schema({
//     room_name: String,
//     images: [String],
//     capacity: Number,
//     price: Number,
//     opening_hours: {
//       Sunday: [[String]],
//       Monday: [[String]],
//       Tuesday: [[String]],
//       Wednesday: [[String]],
//       Thursday: [[String]],
//       Friday: [[String]],
//       Saturday: [[String]],
//     },

//     occupied: [{ type: schema.Types.ObjectId, ref: "Reservation" }],
//   },
//     {timestamps: true}
//   );

const roomsArray = [
  {
    room_name: "שופר",
    images: [],
    capacity: 6,
    price: 3,
    opening_hours: {
      Sunday: [["8:00", "18:00"]],
      Monday: [["8:00", "18:00"]],
      Tuesday: [["8:00", "18:00"]],
      Wednesday: [["8:00", "18:00"]],
      Thursday: [["8:00", "18:00"]],
      Friday: [],
      Saturday: [],
    },

    occupied: [],
  },
  {
    room_name: "נבל",
    images: [],
    capacity: 8,
    price: 4,
    opening_hours: {
      Sunday: [["8:00", "18:00"]],
      Monday: [["8:00", "18:00"]],
      Tuesday: [["8:00", "18:00"]],
      Wednesday: [["8:00", "18:00"]],
      Thursday: [["8:00", "18:00"]],
      Friday: [],
      Saturday: [],
    },

    occupied: [],
  },
  {
    room_name: "כינור",
    images: [],
    capacity: 4,
    price: 2,
    opening_hours: {
      Sunday: [["8:00", "18:00"]],
      Monday: [["8:00", "18:00"]],
      Tuesday: [["8:00", "18:00"]],
      Wednesday: [["8:00", "18:00"]],
      Thursday: [["8:00", "18:00"]],
      Friday: [],
      Saturday: [],
    },

    occupied: [],
  },
];

module.exports = roomsArray;
