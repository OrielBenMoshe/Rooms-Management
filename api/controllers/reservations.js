/**
 * Calls to server for Aricles.
 */

const mongoose = require('mongoose');
const Reservation = require('../models/reservationschema');
const Room = require('../models/roomschema');

module.exports = {
  getAllReservations: (req, res) => {
    Reservation.find().populate('roomId', 'title').then((reservations) => {
      res.status(200).json({
        reservations
      })
    })
      .catch(error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
  },
  createReservation: (req, res) => {
    console.log(req.file);
    const { path: image } = req.file;
    const { title, description, content, roomId } = req.body;
    console.log(req.body);

    Room.findById(roomId).then((room) => {
      if (!room) {
        return res.status(404).json({
          message: 'Room not found'
        })
      }
      const reservation = new Reservation({
        // _id: new mongoose.Types.ObjectId(),
        title,
        description,
        content,
        roomId,
        image: image.replace('\\', '/')
      });
      return reservation.save();
    }).then(() => {
      res.status(200).json({
        message: 'Created reservation'
      })
    }).catch(error => {
      console.log('error: ', error);
      res.status(500).json({
        error
      })
    });

  },
  getReservation: (req, res) => {
    const reservationId = req.params.reservationId;
    Reservation.findById(reservationId).populate('roomId', 'title').then((reservation) => {
        res.status(200).json({
          reservation
        })
      })
      .catch(error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
  },
  updateReservation: (req, res) => {
    const reservationId = req.params.reservationId;
    const { roomId } = req.body;
    // Check if reservationId from req is exist.
    Reservation.findById(reservationId).then((reservation)=>{
      if (!reservation) {
        return res.status(404).json({
          message: 'Reservation not found'
        })
      }
    }).then(()=>{
      if (roomId) {
        return Room.findById(roomId).then((room) => {
          if (!room) {
            return res.status(404).json({
              message: 'Room not found'
            })
          }
          return Reservation.updateOne({ _id: reservationId }, req.body);
        }).then(() => {
          res.status(200).json({
            message: 'Reservation Updated'
          })
        }).catch(error => {
          console.log('error: ', error);
          res.status(500).json({
            error
          })
        });
      }
    })



    Reservation.updateOne({ _id: reservationId }, req.body)
      .then((reservation) => {
        res.status(200).json({
          message: 'Reservation Updated'
        })
      })
      .catch(error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
  },
  deleteReservation: (req, res) => {
    const reservationId = req.params.reservationId;
    // Check if the reservationId from req is exist.
    Reservation.findById(reservationId).then((reservation)=>{
      if (!reservation) {
        return res.status(404).json({
          message: 'Reservation not found'
        })
      }
    }).then(()=>{
      Reservation.deleteOne({ _id: reservationId })
        .then((reservation) => {
          res.status(200).json({
            message: `Reservation _id: ${reservationId} Deleted`
          })
        })
        .catch(error => {
          console.log('error: ', error);
          res.status(500).json({
            error
          })
        });
    })

  }
}