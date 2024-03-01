//const { response } = require("express")
const {AirplaneService} = require("../services")
const { StatusCodes} = require("http-status-codes")

const { SuccessResponse,ErrorResponse } = require("../utils/common")

async function createAirplane(req,res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data=airplane
        SuccessResponse.message='The Airplane was Created inside the database'
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
        }
     catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)

    }
}

module.exports =  createAirplane
