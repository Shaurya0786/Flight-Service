const express = require('express')

const { ServerConfig , logger} = require('./config') 

const  apiRoutes  = require('./routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(ServerConfig.Port,()=>{
    console.log(`Server Started Successfully at Port : ${ServerConfig.Port}`)
    //logger.info('Server Initiated')
})