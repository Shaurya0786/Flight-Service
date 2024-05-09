function flightTimingCheck(departureTime,arrivalTime){
    const time1 = new Date(departureTime)
    const time2 = new Date(arrivalTime)
    return time2.getTime()> time1.getTime()
}

function flightdestinationcheck(departureAirportId,arrivalAirportId){
    return (departureAirportId==arrivalAirportId) ? false : true  
}

module.exports = {
    flightTimingCheck,
    flightdestinationcheck
}