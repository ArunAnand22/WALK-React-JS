//import database
const db=require('./db')
//import JWT
const jwt=require('jsonwebtoken')


//Register user
const registerUser=(username,email,password,isAdmin)=>{
    return db.User.findOne({email}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:"User already exists"
                }
            }else{
                const newUser=new db.User({
                    username,
                    email,
                    password,
                    isAdmin,
                })
                newUser.save();
                return{
                    status:true,
                    statusCode:200,
                    message:"New user updated"
                }
            }
        }
    )
}
//Login user
const loginUser=(email,password)=>{
    return db.User.findOne({email,password}).then(
        (result)=>{
            if(result){
                //token generation
                 const token=jwt.sign({ currentEmail:result.email},'superkey2023')
                return{
                    status:true,
                    statusCode:200,
                    message:"Login successful",
                    // data:result,
                    token:token,
                    currentUser:result.username,
                    currentEmail:result.email 
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Login failed"
                }
            }
        }
    )
}
//delete user
const deleteUser=(id)=>{
    return db.User.deleteOne({_id:id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Deleted successfully",
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Invalid details"
                }
            }
        }
    )
}

//get all products
const getallProducts=()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Success",
                    data:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Product not found"
                }
            }
        }
    )
}
//get particular product
const getaProduct=(category)=>{
    return db.Product.find({categories:category}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Success",
                    result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Product not found"
                }
            }
        }
    )
}
//get a product according to gender
const getaProductG=(gender)=>{
    return db.Product.find({gender:gender}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Product found",
                    result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Product not found"
                }
            }
        }
    )
}
//export
module.exports={
    registerUser,
    loginUser,
    deleteUser,
    getallProducts,
    getaProduct,
    getaProductG
}