const { CityRepository } = require("../repositories")
const {StatusCodes}= require("http-status-codes")
const cityrepo = new CityRepository();
const AppError = require("../utils/errors/app-error")

async function createCity(data) {
   try {
    const city = await cityrepo.create(data)
    return city
   } catch (error) {
      if(error.name == "SequelizeUniqueConstraintError"){
         let explanation = []
         error.errors.forEach((err) => {
            explanation.push(err.message)
         });
         throw new AppError(explanation,StatusCodes.BAD_REQUEST)
      }
      throw new AppError("Cannot Create City Object",StatusCodes.INTERNAL_SERVER_ERROR)
   } 
} 

async function getCities(){
   try {
      const city = await cityrepo.getAll();
      return city
   } catch (error) {
   throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


async function getCity(id){
   try {
      const city = await cityrepo.get(id);
      return city
   } catch (error) {
   if(error.StatusCode==StatusCodes.NOT_FOUND){
      throw new AppError("Not Able to Find the city in DB",StatusCodes.NOT_FOUND)
   }
   throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


async function destroycity(id){
   try {
      const response = await cityerepo.destroy(id);
      return response
   } catch (error) {
   if(error.StatusCode==StatusCodes.NOT_FOUND){
      throw new AppError("Not Able to Find the city in DB",StatusCodes.NOT_FOUND)
   }
   throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


async function updatecity(data,id){
   try {
      const response = await cityerepo.update(data,id);
      return response
   } catch (error) {
   if(error.StatusCode==StatusCodes.NOT_FOUND){
      throw new AppError("Not Able to Find the city in DB",StatusCodes.NOT_FOUND)
   }
   throw new AppError("Error in Fetching Data",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}



module.exports = {
    createCity,
    getCities,
    getCity,
    destroycity,
    updatecity
}