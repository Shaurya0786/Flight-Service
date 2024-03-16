const express = require("express")
const router = express.Router()

const {CityControllers} = require("../../controllers")

const {Citymiddlewares} = require("../../middlewares")

router.post("/",Citymiddlewares.validateCreateRequest, CityControllers.createCity)

router.get("/",CityControllers.getCitiesData)

router.get("/:id",CityControllers.getCity)

router.delete("/:id",CityControllers.deleteCity)

router.patch("/:id",CityControllers.UpdateCity)



module.exports = router