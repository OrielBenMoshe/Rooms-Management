const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/upload');

const {
  getAllRooms, 
  createRoom, 
  getRoom, 
  updateRoom, 
  deleteRoom 
} = require('../controllers/Rooms');

// Routes
router.get('/', getAllRooms);
router.post('/', checkAuth, upload.single('image'), createRoom)
router.get('/:roomId', getRoom);
router.patch('/:roomId', updateRoom);
router.delete('/:roomId', deleteRoom);

module.exports = router;