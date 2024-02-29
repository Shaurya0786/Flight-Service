const express = require('express')
const router = express.Router();


const airplaneroutes = require("./airplane-routes")

const infoRouter = require("./info-controller")

router.use('/airplanes',airplaneroutes)

router.use('/info',infoRouter)

module.exports = router;