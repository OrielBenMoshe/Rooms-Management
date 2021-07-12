// const ClientSchema = new mongoose.Schema({
//     user_name: String,
//     phone: String,
//     email: String,
//     password: String,
//     regularCustomer: Boolean,
//     credits: Number,
//     client_reservation: [{ type: schema.Types.ObjectId, ref: "Reservation" }],
//   });

const clientsArr = [
  {
    user_name: "david",
    phone: "0527323002",
    email: "david@gmail.com",
    password: "1234",
    regularCustomer: true,
    credits: 12,
    client_reservation: [
      "5fde101ac903a4405c7a321d",
      "5fde101ac903a4405c7a321f",
    ],
  },
  {
    user_name: "sara",
    phone: "0502327002",
    email: "sara@gmail.com",
    password: "12345",
    regularCustomer: true,
    credits: 4,
    client_reservation: ["5fde101ac903a4405c7a321e"],
  },
];

module.exports = clientsArr;
