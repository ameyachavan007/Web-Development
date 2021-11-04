const express = require("express");
const app = express();
app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>");
});
app.get("/contacts", function(req, res){
    res.send("<h1>Contact me @ chavanameya007@gmail.com</h1>");
});
app.get("/about", function(req, res){
    res.send("<h1>I'm Ameya Chavan.I'm an 2nd year engineering student at PICT, pune.</h1>");
});
app.get("/hobbies", function(req, res){
    res.send("<h1>I love sketching.</h1>")
});
app.listen(3000, function(){
    console.log("Server has started on port 3000");
});