const path = require('path');
const {geoCode} = require('./utils/geocode')
const {forcast} = require('./utils/weatherForcast')
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT||3000;
// paths for dirs
const publicFolderAddress = path.join(__dirname,'..','public')
const viewDirAddress = path.join(__dirname,'..', 'templates','views')
const partialsDirAddress = path.join(__dirname,'..','templates','partials')

// settings for our application
app.set('view engine','hbs')
app.set('views',viewDirAddress)
hbs.registerPartials(partialsDirAddress)
// hbs.registerPartial(partialsDirAddress)  becareful when you create a partials its hbs.partials not hbs.partial
app.use(express.static(publicFolderAddress))

app.get("/",(req,res)=> {
    // res.send(" hello express !!!")
    res.render('index.hbs',{ title : "weather app " , name : "usman"})
});

app.get("/help",(req,res)=> {
    // res.send(`<h1> this is a help page </h1>`)
    res.render("help",{ title : "this is a help page" , name : "usman"})
});

app.get("/about",(req,res)=> {
    // res.send(`<h1> this is a about page </h1>`)
res.render("about",{title : " this is a about page" , name : "usman"})
});


app.get("/weather",(req,res)=> {    
    if(!req.query.address){
        return res.send({error : ` Please provide a location `})
    } //  if ends
geoCode(req.query.address,(err,geoRes)=> {
    if(err){
        return res.send({error :  err})
    }
    forcast(geoRes,(err , { place_name ,weather_forcast })=> {
if(err){
    return res.send({error : err})
}
res.send({ location : place_name , forcast : weather_forcast , Address : req.query.address})
    }); // forcast ends
}); // geo code ends
});


app.get("/products",(req,res)=> {
    if(!req.query.search){
return         res.send({ error : " the search parameter is missing"});
    }
    res.send({ products : []})
})
app.get('/help/*',(req,res)=> {
    res.render('errors', { title : "the text you are looking for  not found"})
})
app.get('*',(req,res)=> {
    res.render('errors',{ title : "Page Not Found"})
})
app.listen(port,()=> {
    console.log("the server is running at  port " , port);
})