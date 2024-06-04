const {FlightRepository} = require('../repositories')
const AppError = require('../utils')
const {Op} = require('sequelize')
const {StatusCodes} = require('http-status-codes')

const Flightinstance = new FlightRepository();


async function createflights(data){
    try {
        const flight = await Flightinstance.create(data)
        return flight 
    } catch (error) {
        console.log(error)
        if(error.name == "SequelizeUniqueConstraintError" || error.name== "SequelizeValidationError"  ){
            let explanation = []
            error.errors.forEach((err) => {
                explanation.push(err.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        if(error.name=='SequelizeForeignKeyConstraintError'){
            let explanation = []
            explanation.push('Cannot Create flight Object')
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot Create flight Object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getflights(query){
    const filter = {}
    const sortorder = []
    const EndingTimeString = ' 23:59:59'
    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split('-')
        filter.arrivalAirportId=arrivalAirportId
        filter.departureAirportId=departureAirportId
    }
    if(query.price){
        [minprice,maxprice] = query.price.split('-')
        filter.price = {
            [Op.between] : [minprice, (maxprice==undefined) ? 20000:maxprice ]
        }
    }
    if(query.passengers){
        filter.totalSeats={
            [Op.gte]:query.passengers
        }
    }
    if(query.sort){
        sortorder.push(query.sort.split("_"))
    }
    if(query.tripDate){
        filter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+EndingTimeString]
        }
    }
    try {
        const flights = await Flightinstance.getallflights(filter,sortorder);
        return flights
    } catch (error) {
        console.log(error)
        throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getflight(data){
    try {
        const response = await Flightinstance.get(data)
        return response
    } catch (error) {
        throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateSeats(id,seats,change){
    try {
        const response = await Flightinstance.updateremainingSeats(id,seats,change)
        return response
    } catch (error) {
        console.log(error)
        throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createflights,
    getflights,
    getflight,
    updateSeats
}