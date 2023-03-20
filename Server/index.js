//import express
const express = require('express')
//import service.js
const service=require('./service')
//import JWT
const jwt=require('jsonwebtoken')
//import stripe
const stripe=require("stripe")(process.env.STRIPE_KEY)
//Create app using express
const app=express()
//import cors
const cors=require('cors')
//Using cors
app.use(cors({
    origin:"http://localhost:3000"
}))
//json parse
app.use(express.json())
//Setup a port number
app.listen(8000,(req,res)=>{
    console.log("Connected to backend 8000");
})
//Router specific middleWare
const jwtRouterMiddleware=(req,res,next)=>{
    try{
        console.log("Router specific middleware");
    const token=req.headers['x-access-token'];
    const data=jwt.verify(token,'superkey2023')
    console.log(data);
    next();
    }catch{
        //422 unprocessable entity
        res.status(422).json({
            statusCode:422,
            status:false,
            message:"Please login"
        })
    }
}
//--------------------------------User-------------------------
//API call to register new user
app.post('/register-user',(req,res)=>{
    service.registerUser(req.body.username,req.body.email,req.body.password,req.body.isAdmin).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to login
app.post('/login-user',(req,res)=>{
    service.loginUser(req.body.email,req.body.password).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to delete user
app.delete('/delete-user/:id',(req,res)=>{
    service.deleteUser(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//--------------------------------Products-------------------------
//API call to get all products
app.get('/getall-products',(req,res)=>{
    service.getallProducts().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to get according to category
app.post('/getparticular-product',(req,res)=>{
    service.getaProduct(req.body.category).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to get according to gender
app.get('/getproductGender',(req,res)=>{
    service.getaProductG(req.body.gender).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call for stripe payment
app.post("/payment",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})
