const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/peopleDB",{useNewUrlParser: true, useUnifiedTopology: true})
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const People = mongoose.model("People", peopleSchema);
const people = new People({
    name: "John",
    age: 37
})
const ameya = new People({
    name: "Ameya",
    age: 19
})
const aryan = new People({
    name: "Aryan",
    age: 13
})
const shruti = new People({
    name: "Shruti",
    age:20
})

// People.insertMany([ameya, aryan, shruti], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully added the data.")
//     }
// })
People.deleteOne({name: "Shruti"}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Successfully deleted")
    }
})

People.deleteMany(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Successfully deleted all.")
    }
})

People.find(function(err, peoples){
    if(err){
        console.log(err)
    }else{
        mongoose.connection.close()
        peoples.forEach(people => {
            console.log(people.name)
        });
    }
})


