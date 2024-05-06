const express = require('express')
const fetchuser = require("../middleware/fetchuser")
const {placeorder,verifyorder,userorders, listorders, updatestatus} = require ("../controllers/orderController")

const orderrouter=express.Router();

orderrouter.post('/place',fetchuser,placeorder);
orderrouter.post('/verify',fetchuser,verifyorder);
orderrouter.post('/userorders',fetchuser,userorders);
orderrouter.post('/list',listorders);
orderrouter.post('/status',updatestatus);

module.exports = orderrouter;