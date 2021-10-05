/**
 * Calls to server for Rooms.
 */

const Room = require('../models/roomschema');
const mongoose = require('mongoose');

module.exports = {

  getAllRooms: (req, res) => {
    Room.find().then((rooms)=>{
        res.status(200).json({
          rooms
        })
      }).catch( error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
  },
  createRoom: (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);
    const category = new Room({
      _id: new mongoose.Types.ObjectId(),
      title,
      description
    });
    category.save()
    .then(() => {
      res.status(200).json({
        message: 'Created Room'
      })
    })
    .catch( error => {
      console.log('error: ', error);
      res.status(500).json({
        error
      })
    });

  },
  getRoom: (req, res) => {
    const categoryId = req.params.categoryId;
    Room.findById(categoryId)
      .then((category)=>{
        res.status(200).json({
          category
        })
      })
      .catch( error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
  }, 
  updateRoom:  (req, res) => {
    const categoryId = req.params.categoryId;

    Room.findById(categoryId).then((category)=>{
      if (!category) {
        return res.status(404).json({
          message: 'Room not found'
        })
      }
    }).then(() => {
      Room.updateOne({_id: categoryId}, req.body)
      .then(()=>{
        res.status(200).json({
          message: 'category Updated'
        })
      })
      .catch( error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
    });

  }, 
  deleteRoom:  (req, res) => {
    const categoryId = req.params.categoryId;

    Room.findById(categoryId).then((category)=>{
      if (!category) {
        return res.status(404).json({
          message: 'Room not found'
        })
      }
    }).then(() => {
      Room.deleteOne({_id: categoryId}).then(()=>{
        res.status(200).json({
          message: `Room _id: ${categoryId} Deleted`
        })
      }).catch( error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
    });

  }
}