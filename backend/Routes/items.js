const express = require('express');
const router = express.Router();
 const fetchuser = require('../middleware/fetchuser');
 const Item = require('../models/Item');
 const { validationResult } = require('express-validator');

 // ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallitems". Login required
 router.get('/fetchallitems', fetchuser, async (req, res) => {
     try {
         const Items = await Item.find({ user: req.user.id });
         res.json(Items)
     } catch (error) {
         console.error(error.message);
         res.status(500).send("Internal Server Error");
     }
 })

 router.post('/additem', fetchuser, async (req, res) => {
        try {
            const { name, price} = req.body;

            const items = await Item.find({name:name , user: req.user.id});
                if(items.length==0){
                const numb="1";
                const item = await Item.create({
                    name, price, num:numb, user: req.user.id
                })
                
                res.json(item)
            }
            else{
                const numb = (Number(items[0].num)+1) + "";
                const item = await Item.findByIdAndUpdate(items[0]._id, { num : numb})
                res.json(item)
            }

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    router.delete('/deleteitem', fetchuser, async (req, res) => {
        try {
            const {name} =req.body;

            const item = await Item.find({ name: name, user: req.user.id});

            if (item.length ==0) { return res.status(404).send("Not Found") }
            
            if (item[0].user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            if(item[0].num ==1)
            {
            const itm = await Item.findByIdAndDelete(item[0]._id)
            res.json(itm);
            }
            else{
                const numb = (Number(item[0].num)-1) + "";
                const itm = await Item.findByIdAndUpdate(item[0]._id, { num : numb})
                res.json(itm)
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    router.delete('/clearcart',fetchuser, async(req,res)=>{
        Item.deleteMany({ user: req.user.id }).then(() => { 
        });
        res.send(req.user.id);
    })
module.exports= router;
