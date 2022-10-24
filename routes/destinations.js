const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

//All routes "starts with" / (root) bc this is embedded

//POST  /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router