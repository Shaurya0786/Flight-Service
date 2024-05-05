const { StatusCodes } = require("http-status-codes")
const { AppError } = require("../utils")
const { ErrorResponse } = require("../utils/common")



async function airportpostmiddleware(req,res,next){
    if(!req.body.cityid){
        ErrorResponse.error = new AppError(['Cityid not present in request'],StatusCodes.BAD_REQUEST)
        return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
    }
    if(!req.body.name){
        ErrorResponse.error = new AppError(['name not present in request'],StatusCodes.BAD_REQUEST)
        return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.error = new AppError(['AirportCode not present in request'],StatusCodes.BAD_REQUEST)
        return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
    }
    next()
}

module.exports = {
    airportpostmiddleware
}