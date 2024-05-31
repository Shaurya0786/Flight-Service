const { Flight , Airport,Airplane,City} = require("../models/index")
const  CrudRepository   = require("./crud-repository")

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }

    async getallflights(filter,sort){
        const allflights = await Flight.findAll({
            include:[
            {
                model:Airport,
                required:true,
                as:'ArrivalAirport',
                include:[
                    {
                        model:City,
                         required:true
                    }
                ]
            },
            {
                model:Airport,
                required:true,
                as: 'DepartureAirport',
                include:[
                    {
                        model:City,
                        required:true
                    }
                ]
            },
            {
                model:Airplane,
                required:true
            }
            ],
            where:filter,
            order:sort,
        })
        return allflights 
    }


    async updateremainingSeats(id,Seats,dec=true){
        const flights = await Flight.findByPk(id)
        if(dec){
            const response = flights.decrement('totalSeats',{by:Seats})
            return response
        }
        else{
            const response = flights.increment('totalSeats',{by:Seats})
            return response
        }
    }



}

module.exports = FlightRepository