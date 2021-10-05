const mongoose = require("mongoose");
const schema = mongoose.Schema;

//* סכמת לקוח *//
const clientSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  client_name: String,
  phone: String,
  email: {
    type: String,
    require: true,
    unique: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: { type: String, require: true },
  regularCustomer: Boolean,
  credits: Number,
  client_reservation: [{ type: schema.Types.ObjectId, ref: "Reservation" }],
});

module.exports = mongoose.model("Client", clientSchema);
