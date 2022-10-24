var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

/* GET all flights. */
router.get('/', flightsCtrl.index)

//GET ADD NEW FLIGHT form page
router.get('/new', flightsCtrl.new)

//Get single flight
router.get('/:id', flightsCtrl.show)

//POST REQUEST AFTER FORM SUBMISSION
router.post('/', flightsCtrl.create)

module.exports = router;
