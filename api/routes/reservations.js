const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');
const checkAuth = require('../middlewares/checkAuth');

const {
  getAllReservations, 
  createReservation, 
  getReservation,
  updateReservation, 
  deleteReservation 
} = require('../controllers/reservations');

// Routes
router.get('/', getAllReservations);
router.get('/:reservationId', getReservation);

router.patch('/:reservationId', checkAuth, updateReservation);
router.delete('/:reservationId', checkAuth, deleteReservation);

module.exports = router;