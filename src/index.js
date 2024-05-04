const express = require('express')

const { ServerConfig , logger} = require('./config') 

const  apiRoutes  = require('./routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(ServerConfig.Port,async ()=>{
    console.log(`Server Started Successfully at Port : ${ServerConfig.Port}`)
    
    //logger.info('Server Initiated')
    //const {City,Airport} = require('./models' )
    // const city = await City.findByPk(8);
    // const response = await city.createAirport({name:'Shaheed Bhagat Singh International Airport',code:'IXC'})
    // console.log(response)
})