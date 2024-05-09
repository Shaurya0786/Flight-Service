const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { ErrorResponse } = require("../utils/common");
const { flightTimingCheck, flightdestinationcheck } = require("../utils/helper/flight-checks");

async function validatecreaterequest(req,res,next){
    const requiredFields = ['flightNumber', 'airplaneId', 'arrivalAirportId', 'departureAirportId','departureTime', 'arrivalTime', 'totalSeats', 'price'];    
    const validateErrors = []
    if (requiredFields.every(field => req.body[field])) {
        if(flightTimingCheck(req.body.departureTime,req.body.arrivalTime) && flightdestinationcheck(req.body.arrivalAirportId,req.body.departureAirportId)) next()
        else{
            if(!flightTimingCheck(req.body.departureTime,req.body.arrivalTime)) validateErrors.push('Enter Valid Timing Duration')
            if(!flightdestinationcheck(req.body.arrivalAirportId,req.body.departureAirportId)) validateErrors.push('Enter different airports for arrival and destination')
            ErrorResponse.error = new AppError(validateErrors,StatusCodes.BAD_REQUEST)
            return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
        }
    }
    requiredFields.forEach(field => {
        if(!req.body[field]) validateErrors.push(`${field} not present in req body`)
    })
    ErrorResponse.error = new AppError(validateErrors,StatusCodes.BAD_REQUEST)
    return res.status(ErrorResponse.error.StatusCode).json(ErrorResponse)
}

module.exports = {
    validatecreaterequest
}