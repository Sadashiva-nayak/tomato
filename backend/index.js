const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/items', require("./Routes/items"))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})