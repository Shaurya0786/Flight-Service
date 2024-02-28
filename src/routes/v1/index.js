const express = require('express')

const router = express.Router();

const {infocontroller} = require('../../controllers')

const airplaneroutes = require("./airplane-routes")

router.get('/info',infocontroller.info)

router.use('/airplanes',airplaneroutes)

module.exports = router;