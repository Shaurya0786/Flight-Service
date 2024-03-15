const { AirplaneRepository } = require("../repositories")
const {StatusCodes}= require("http-status-codes")
const airplanerepo = new AirplaneRepository();
const AppError = require("../utils/errors/app-error")

async function createAirplane(data) {
   try {
    const airplane = await airplanerepo.create(data)
    return airplane
   } catch (error) {
      if(error.name == "SequelizeValidationError"){
         let explanation = []
         error.errors.forEach((err) => {
            explanation.push(err.message)
         });
         throw new AppError(explanation,StatusCodes.BAD_REQUEST)
      }
      throw new AppError("Cannot Create Airplane Object",StatusCodes.INTERNAL_SERVER_ERROR)
   } 
} 

async function getAirplanes(){
   try {
      const airplane = await airplanerepo.getAll();
      return airplane
   } catch (error) {
   throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


async function getAirplane(id){
   try {
      const airplane = await airplanerepo.get(id);
      return airplane
   } catch (error) {
   if(error.StatusCode==StatusCodes.NOT_FOUND){
      throw new AppError("Not Able to Find the Airplane in DB",StatusCodes.NOT_FOUND)
   }
   throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}