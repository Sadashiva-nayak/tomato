const express = require('express')
const {addfood,listfood,removefood} = require('../controllers/FoodController');
const multer = require('multer');
const FoodRouter=express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

FoodRouter.post('/add',upload.single('image'),addfood)
FoodRouter.get('/list',listfood)
FoodRouter.post('/remove',removefood)

module.exports = FoodRouter;