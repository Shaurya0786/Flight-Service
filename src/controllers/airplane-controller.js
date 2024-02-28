//const { response } = require("express")
const {AirplaneService} = require("../services")
const { StatusCodes} = require("http-status-codes")


async function createAirplane(req,res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        return res.status(StatusCodes.CREATED).json({
            success:'true',
            message :'The Airplane was Created inside the database',
            error:{},
            data:airplane
        })
        }
     catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:'false',
            message :'Something Went Wrong inside the database',
            error:error,
            data:{}
        })
    }
}

module.exports =  createAirplane
