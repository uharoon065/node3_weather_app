const request = require('request');
const weatherKey  = "caa21f6e84afbdedc85bfc6e347b80dd";
const  forcast  = ({lat=74.0060,lon = 40.7128,place_name="USA"}={},callback)=> {
    const url  = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${lat},${lon}&units=m`
    request({
        url ,
    json : true
},(err,{body})=> {
    if(err){
        callback("unable to connect to weather  service",undefined);
    }  else if (body.error){
        callback("invalid location",undefined);
    }
    else {
        // const {current} = JSON.parse(res.body); you dont need to parse json if you provide json option in request   opition object
        const {current : {temperature , feelslike , weather_descriptions}} = body;
        callback(undefined,{ weather_forcast : `in ${place_name} it is ${weather_descriptions}. It is currently ${temperature} , it feels like ${feelslike}` , place_name });
    }
});
    } // forcast ends
    module.exports = {forcast};