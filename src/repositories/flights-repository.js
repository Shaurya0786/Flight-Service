const { Flight } = require("../models/index")
const  CrudRepository   = require("./crud-repository")

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }

    async getallflights(filter,sort){
        const allflights = await Flight.findAll({
            where:filter,
            order:sort
        })
        return allflights 
    }
}

module.exports = FlightRepository