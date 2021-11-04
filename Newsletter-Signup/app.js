const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;


    const data = {
        members: [
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/5ccdf80e75";

const options={
    method:"POST",
    auth: "ameya1:cb26022c2b48cef12da4fc23c3f5cde1-us8"
};

const request = https.request(url, options, function(response){
    if(response.statusCode == 200){
        res.sendFile(__dirname + "/success.html")
    }else{
        res.sendFile(__dirname + "/failure.html")
    }


    response.on("data", function(data){
      console.log(JSON.parse(data));  
    })
})

request.write(jsonData);
request.end();


});

app.post("/failure.html", function(req, res){
    res.redirect("/");
});




app.listen(process.env.PORT || 3000,function(){
    console.log("Server is started at port 3000");
})

// API KEY: cb26022c2b48cef12da4fc23c3f5cde1-us8
// Unique Id: 5ccdf80e75