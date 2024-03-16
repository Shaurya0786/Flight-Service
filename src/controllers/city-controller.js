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





module.exports = {
    createCity
}