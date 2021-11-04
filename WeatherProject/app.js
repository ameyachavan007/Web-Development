const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
 
    });
    app.post("/", function(req, res){
        console.log(req.body.cityName);
        const city = req.body.cityName;
        const units = "metric";
const key = "eb4645110a9a321def75dc4ffd0e888e";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" +key +"&units="+ units;

https.get(url, function(response){
    console.log(response.statusCode);
    
    response.on("data", function(data){
        console.log(data);

        const weatherData = JSON.parse(data);
        console.log(weatherData);

        const temp = weatherData.main.temp;
        console.log(temp);

        const description = weatherData.weather[0].description;
        console.log(description);

        const icon = weatherData.weather[0].icon;
        const urlIcon = "http://openweathermap.org/img/wn/" + icon +"@2x.png"

        res.write("<h1>The temperatue in "+city +" is " + temp + " C. </h1>");
        res.write("<imag src=" + urlIcon + ">");
        res.send();
        
    })
});

    });


app.listen(3000, function(){
    console.log("Weather web-app started at server 3000.");
});