const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, prettyPrint } = format;

const  myformat = printf(({level, message, timestamp })=>{
    return `${timestamp}:${level}:${message}`
})


const logger = createLogger({
    level:'info',
    format : combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}), 
        myformat,
        prettyPrint() // this pretty printfunction that makes the prints pretty format that is much more readable 
    ),
    transports : [
        new transports.Console(),
        new transports.File({filename: 'combine.log'})
    ]
})

module.exports = logger