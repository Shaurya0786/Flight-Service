const { StatusCodes } = require("http-status-codes");
const { logger }  = require("../config");
const { AppError } = require("../utils");

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        const response = await this.model.create(data)
        return response
    }

    async destroy(data){
        const response = await this.model.destroy({
            where:{
                id:data
            }
        })
        if(!response) throw new AppError("Not Able To Find The Resource",StatusCodes.NOT_FOUND)
        return response
    }

    async get(data){
        const response = await this.model.findByPk(data)
        if(!response){
            throw new AppError("Not Able To Find The Resource",StatusCodes.NOT_FOUND)
        }
        return response
    }

    async getAll(){
        const response = await this.model.findAll()
        return response
    }
    
    async update(data,id){
        const response = await this.model.update(data,{
            where:{
                id:id
            }
        })
        if(!response) throw new AppError("Not Able To Find The Resource",StatusCodes.NOT_FOUND)
         return response
    }
}

module.exports = CrudRepository