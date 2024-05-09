const {AirportRepository} = require('../repositories')
const { AppError } = require('../utils')
const { StatusCodes } = require('http-status-codes')


const airportInstance = new AirportRepository()

async function createAirport(data){
    try {
        const airport = await airportInstance.create(data)
        return airport
    } catch (error) {
    if(error.name == "SequelizeUniqueConstraintError" || error.name== "SequelizeValidationError"  ){
        let explanation = []
        error.errors.forEach((err) => {
            explanation.push(err.message)
        });
        throw new AppError(explanation,StatusCodes.BAD_REQUEST)
    }
    if(error.name=='SequelizeForeignKeyConstraintError'){
        let explanation = []
        explanation.push('City Does Not Exists Please Create CityObject Before')
        throw new AppError(explanation,StatusCodes.BAD_REQUEST)
    }
        throw new AppError("Cannot Create Airport Object",StatusCodes.INTERNAL_SERVER_ERROR)
    }    
}


async function getAirports(){
    try {
        const airports = await airportInstance.getAll()
        return airports
    } catch (error) {
        throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(data){
    try {
        const airports = await airportInstance.get(data)
        return airports
    } catch (error) {
        throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function destroyAirport(data){
    try {
        const response = await airportInstance.destroy(data)
        return response
    } catch (error) {
        throw new AppError("Error in destroying Airport Data",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateAirport(data,id){
    try {
        const response = await airportInstance.update(data,id)
        return response
    } catch (error) {
        if(error.name == "SequelizeUniqueConstraintError" || error.name== "SequelizeValidationError"  ){
            let explanation = []
            error.errors.forEach((err) => {
                explanation.push(err.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        if(error.name=='SequelizeForeignKeyConstraintError'){
            let explanation = []
            explanation.push('City Does Not Exists Please Create CityObject Before')
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
            throw new AppError("Cannot Create Airport Object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}