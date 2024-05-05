const { StatusCodes } = require('http-status-codes')
const { AirportServices } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')


async function createAirportController(req,res){
    try {
        const airport = await AirportServices.createAirport({
            name:req.body.name,
            cityid:req.body.cityid,
            code:req.body.code,
            address:req.body.address
        })
        SuccessResponse.data=airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
    }   
}

async function getAllAirports(req,res){
    try {
        const airports = await AirportServices.getAirports()
        SuccessResponse.data=airports
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
    }
}

async function getAirport(req,res){
    try {
        const airport = await AirportServices.getAirport(req.params.id)
        SuccessResponse.data=airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {    
    ErrorResponse.error = error
    return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
    }
}



module.exports = {
    createAirportController,
    getAllAirports,
    getAirport
}