const express = require("express")

const router = express.Router();

const  info  = require("../../controllers")

router.get("/",info.infocontroller)

module.exports = router