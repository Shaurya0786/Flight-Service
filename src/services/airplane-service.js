const { AirplaneRepository } = require("../repositories")

const airplanerepo = new AirplaneRepository();

async function createAirplane(data) {
   try {
    const airplane = await airplanerepo.create(data)
    return airplane
   } catch (error) {
      throw error
   } 
}

module.exports = {
    createAirplane
}