const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors'); 


connectToMongo();
const app = express()
const port = 3000

app.use(cors({
    origin: ["https://tomato-admin-panel-mauve.vercel.app"],
    methods: ["POST","GET","DELETE"],
    credentials : true
}))

app.use(express.json())
app.use('/images',express.static('uploads'));
// Available Routes
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/items', require("./Routes/items"))
app.use('/api/food', require('./Routes/FoodRoute'))
app.use('/api/order', require('./Routes/orderRoute'))

app.listen(port||3000, () => {
  console.log(`backend listening at http://localhost:${port}`)
})