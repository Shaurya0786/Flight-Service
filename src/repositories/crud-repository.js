const { logger }  = require("../config")

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const response = await this.model.create(data)
            return response
            
        } catch (error) {
            logger.error("Something went Wrong in Crud Repo : Create")
            throw error
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id
                }
            })
            return response
            
        } catch (error) {
            logger.error("Something went Wrong in Crud Repo : Destroy")
            throw error
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response
            
        } catch (error) {
            logger.error("Something went Wrong in Crud Repo : get")
            throw error
        }
    }

    async getAll(data){
        try {
            const response = await this.model.findAll()
            return response
            
        } catch (error) {
            logger.error("Something went Wrong in Crud Repo : getAll")
            throw error
        }
    }
    
    async update(data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id
                }
            })
            return response
            
        } catch (error) {
            logger.error("Something went Wrong in Crud Repo : update")
            throw error
        }
    }
}

module.exports = CrudRepository