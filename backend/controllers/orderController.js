const orderModel = require("../models/orderModel")
const Stripe =require("stripe")

const stripe = new Stripe("sk_test_51OzNYKSHv2TD9oBp4EevPml8YO3ISIDzliAm2oc1VWJmOm7hOOk2aDi0CXqJsvO3WrAVfbJ8AA9IfR7dfgqUBA6c00mV6ep7uE");
const frontend_url="http://localhost:5174";

const placeorder = async(req,res)=>{

try{
    const neworder= new orderModel({
        userid:req.user.id,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address
    })
    await neworder.save();

    const line_items = req.body.items.map((item)=>({
        price_data:{
            currency:'inr',
            product_data:{
                name:item.name
            },
            unit_amount:item.price*100*80
        },
        quantity:Number(item.num)
    }))

    line_items.push({
        price_data:{
            currency:'inr',
            product_data:{
                name:"Delivery Charges"
            },
            unit_amount:2*100*80
        },
        quantity:1
    })

    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:"payment",
        success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}`
    })

    res.json({success:true,session_url:session.url})
}
catch (error){
    console.log(error);
    res.json({success:false,message:"error"})
}
}

const verifyorder = async(req,res)=>{
    const success= req.body.success;
    const orderId= req.body.orderId;

    try{
        if(success=='true')
            {
                await orderModel.findByIdAndUpdate(orderId,{payment:true});
                res.json({success:true,message:'Paid'})
            }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:'Not Paid'})
        }
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:'error'})
    }
}

const userorders= async(req,res)=>{
    try{
        const orders= await orderModel.find({userid:req.user.id});
        res.json({success:true,data:orders})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:'error'})
    }
}

const listorders = async(req,res)=>{
    try{
    const orders= await orderModel.find({});
    res.json({success:true,data:orders})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:'error'})
    }
}

const updatestatus = async(req,res)=>{
    try{
        const orders= await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:'status updated'})
        }
        catch(error){
            console.log(error)
            res.json({success:false,message:'error'})
        }
}

module.exports = {placeorder,verifyorder,userorders,listorders,updatestatus};