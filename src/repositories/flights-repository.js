const { Flight , Airport,Airplane,City} = require("../models/index")
const db = require('../models/index')
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
        const t = db.sequelize.transaction()
        try {
        const flights = await Flight.findByPk(id)
        await db.sequelize.query(`SELECT * FROM flights WHERE flights.id=${id} FOR UPDATE`) // implementing a row level lock for update 
        if(Number(dec)){
            await flights.decrement('totalSeats',{by:Seats},{transaction:t})
        }
        else{
            await flights.increment('totalSeats',{by:Seats},{transaction:t})
        }
        await t.commit()
        return flights
        } catch (error) {
            t.rollback()
            throw error
        }
    }



}

module.exports = FlightRepository