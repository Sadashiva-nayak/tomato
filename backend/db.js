const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sadashivanayak17:sada@cluster0.qg9ew8t.mongodb.net/food-delivery"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;