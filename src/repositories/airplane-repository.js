const { Airplane } = require("../models/index")
const  CrudRepository   = require("./crud-repository")

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }
}

module.exports = AirplaneRepository