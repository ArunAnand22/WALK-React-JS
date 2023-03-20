//import mongoose
const mongoose=require('mongoose')
//connect using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Walk-ecommerce').then(()=>{
    console.log("DB connection success");
}).catch(console.log("DB connection error"))

//Creating model for users in db
const User=mongoose.model('User',{
    //schema creation
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    isAdmin:{type:Boolean,default:false}
})

//creating schema for products
const Product=mongoose.model('Product',{
    //schema creation
    title:{type:String},
    brand:{type:String},
    desc:{type:String},
    img:{type:String},
    categories:{type:String},
    gender:{type:String},
    size:{type:Array},
    color:{type:Array},
    prize:{type:Number},
})

//Creating schema for cart
const Cart=mongoose.model('Cart',{
    //schema
    userId:{type:String,required:true,unique:true},
    Products:[
        {
            productId:{type:String},
            quantity:{type:Number,default:1}
        }
    ]
})
//Creating schema for order
const Order=mongoose.model('Order',{
    //schema creation
    userId:{type:String,required:true,unique:true},
    Products:[
        {
            productId:{type:String},
            quantity:{type:Number,default:1}
        }
    ],
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Pending"}
})

//export schema
module.exports={
    User,
    Product,
    Cart,
    Order
}

