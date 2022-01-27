const request = require('request');
let geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoidWhhcm9vbjA2NSIsImEiOiJja3lvZzE2cXMwZGt0MnZuMm1waHg1ZjdxIn0.ZUVQTm6Lu2l01ieMWafa5w&limit=1"

const geoCode = (adr,callback)=> {
    geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adr)}.json?access_token=pk.eyJ1IjoidWhhcm9vbjA2NSIsImEiOiJja3lvZzE2cXMwZGt0MnZuMm1waHg1ZjdxIn0.ZUVQTm6Lu2l01ieMWafa5w&limit=1`
    request({ url : geoUrl , json : true},(err,{body} = {})=> {
    if(err){
        callback("unable to connect to  location service",undefined);
    } else if(body.message){
        callback("no result found",undefined);
    }  else if(body.features.length === 0){
        callback("no result found",undefined);
    } else {
        const [lon,lat] = body.features[0].center;
        const {place_name}= body.features[0];
        callback(undefined,{place_name,lon,lat});
    }
    });
    } // geo code ends
    module.exports = {geoCode}