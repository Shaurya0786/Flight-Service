// This is the folder that is used to keep difffenrent routes in a single file   
// For this we use router which is an express class that is used to create modules for your routes
// and we exprort this router object and use it with app.use which can also be used to mount my router 


const express = require('express')
const router = express.Router();

const  v1Routes  = require('./v1');

router.use('/v1',v1Routes)

module.exports = router;