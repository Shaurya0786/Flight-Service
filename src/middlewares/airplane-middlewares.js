const {StatusCodes} = require("http-status-codes")

const { ErrorResponse } = require("../utils/common")

const { AppError } = require("../utils")

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message = 'Something Went Wrong While Creating The Airplane'
        ErrorResponse.error = new AppError(["Model Number Not Present in the req Body"],StatusCodes.BAD_REQUEST)
        return res
        .status(ErrorResponse.error.StatusCode)
        .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}