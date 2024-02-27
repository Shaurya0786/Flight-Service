const express = require('express')

const router = express.Router();
const {infocontroller} = require('../../controllers')

router.get('/info',infocontroller.info)

module.exports = router;