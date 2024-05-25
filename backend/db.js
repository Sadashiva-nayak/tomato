const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sadashivanayak17:<password>@cluster0.qg9ew8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;