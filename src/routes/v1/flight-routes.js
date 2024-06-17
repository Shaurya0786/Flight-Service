const express = require('express')
const router = express.Router()

const {FlightsController} = require('../../controllers')
const {Flightmiddlewares} = require('../../middlewares')

router.post('/',Flightmiddlewares.validatecreaterequest,FlightsController.createflightcontroller)

router.get('/',FlightsController.getallflightscontroller)

router.get('/:id',FlightsController.getflightcontroller)

router.patch('/:id/seats',FlightsController.updateSeats)

module.exports = router