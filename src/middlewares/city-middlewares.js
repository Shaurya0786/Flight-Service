const {StatusCodes} = require("http-status-codes")

const { ErrorResponse } = require("../utils/common")

const { AppError } = require("../utils")


async function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = 'Something Went Wrong While Creating The Airplane'
        ErrorResponse.error = new AppError(["Name of the City Not Present"],StatusCodes.BAD_REQUEST)
        return res
        .status(ErrorResponse.error.StatusCode)
        .json(ErrorResponse)
    }
    next()
}

module.exports = {
    validateCreateRequest
}