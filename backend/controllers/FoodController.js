const foodModel = require( "../models/foodModel");
const fs =require('fs');

const addfood = async(req,res)=>{
    let imagefile =`${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:imagefile
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

const listfood = async(req,res)=>{
    try{
        const food = await foodModel.find({});
        res.json({success:true,data:food})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

const removefood = async(req,res)=>{
    try {
        const food =await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"});
    }
    catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

module.exports = {listfood,addfood,removefood};