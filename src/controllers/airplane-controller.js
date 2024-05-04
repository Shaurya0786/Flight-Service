//const { response } = require("express")
const {AirplaneService} = require("../services")
const { StatusCodes} = require("http-status-codes")

const { SuccessResponse,ErrorResponse } = require("../utils/common")
const { error } = require("../utils/common/error-response")
const { AppError } = require("../utils")

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

async function getAllAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplanes()
        SuccessResponse.data=airplane
        SuccessResponse.message="All Airplane Data Sent"
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}


async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id)
        SuccessResponse.data=airplane
        SuccessResponse.message="SuccessFully Fetched Airplane Data"
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}


async function destroy(req,res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id)
        SuccessResponse.data=airplane
        SuccessResponse.message="SuccessFully Deleted Airplane Data"
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}

async function Update(req,res){
    try {
        console.log(req.body)
        const airplane = await AirplaneService.updateAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        },req.params.id)
        SuccessResponse.data=airplane
        SuccessResponse.message="SuccessFully Fetched Airplane Data"
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error= error
        return res.status(error.StatusCode).json(ErrorResponse)
    }
}



module.exports = {
    createAirplane,
    getAllAirplane,
    getAirplane,
    destroy,
    Update
}
