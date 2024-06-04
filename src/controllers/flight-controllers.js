const { StatusCodes } = require('http-status-codes')
const {FlightServices} = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')


async function createflightcontroller(req,res){
    try {
        const flight = await FlightServices.createflights({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureAirportId:req.body.departureAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            totalSeats:req.body.totalSeats,
            price:req.body.price,
            boardingGate:req.body.boardingGate
        })
        SuccessResponse.data = flight
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}


async function getallflightscontroller(req,res){
    try {
        const flights = await FlightServices.getflights(req.query)
        SuccessResponse.data = flights
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.StatusCode).json(ErrorResponse)   
    }
}

async function getflightcontroller(req,res){
    try {
        const flight = await FlightServices.getflight(req.params.id)
        SuccessResponse.data = flight
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.StatusCode).json(ErrorResponse)   
    }
}


async function updateSeats(req,res){
    try {
        const flight = await FlightServices.updateSeats(req.params.id,req.body.seats,req.body.decrease)
        SuccessResponse.data = flight
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}

module.exports = {
    createflightcontroller,
    getallflightscontroller,
    getflightcontroller,
    updateSeats
}