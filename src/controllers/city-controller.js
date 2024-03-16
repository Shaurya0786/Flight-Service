const {CityService} = require("../services")
const { StatusCodes} = require("http-status-codes")

const { SuccessResponse,ErrorResponse } = require("../utils/common")
const { error } = require("../utils/common/error-response")
const { AppError } = require("../utils")


async function createCity(req,res){
    try {
        const city = await CityService.createCity({
            name:req.body.name
        })
        SuccessResponse.data = city
        SuccessResponse.message="Successfully added a new City"
        return res.status(StatusCodes.CREATED).json(SuccessResponse)    
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}


async function getCitiesData(req,res){
    try {
        const cities = await CityService.getCities()
        SuccessResponse.data = cities
        SuccessResponse.message="Successfully fetched All Cities"
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}


async function getCity(req,res){
    try {
        const city = await CityService.getCity(req.params.id)
        SuccessResponse.data = city
        SuccessResponse.message="Successfully fetched City Data"
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }

}

async function deleteCity(req,res){
    try {
        const city = await CityService.destroycity(req.params.id)
        SuccessResponse.data = city
        SuccessResponse.message="Successfully Deleted City Data"
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}

async function UpdateCity(req,res){
    try {
        const city = await CityService.updatecity({
            name:req.body.name
        },req.params.id)
        SuccessResponse.data = city
        SuccessResponse.message="Successfully Updated City Data"
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}


module.exports = {
    createCity,
    getCitiesData,
    getCity,
    deleteCity,
    UpdateCity
}