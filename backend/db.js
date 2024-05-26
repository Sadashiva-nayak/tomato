const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sadashivanayak17:sada@cluster0.qg9ew8t.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;