import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const userSchema =new mongoose.Schema({
    first:{
        type:String,
        require:true,
        validate:{
            validator:function(value){
                const regex = /^[A-Za-z\s]+$/;
                return regex.test(value);
            },
            message:"Invalid username"
        }
    },
    last:{
        type:String,
        require:true,
        validate:{
            validator:function(value){
                const regex = /^[A-Za-z\s]+$/;
                return regex.test(value);
            },
            message:"Invalid username"
        }
    },  
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return regex.test(value);
            },
            message:"Invalid email"
        }
    },
    password:{
            type:String,
            required:true,
    },
    image: {
      type:String
      },
    Dod:{
        type:Date,
    }
    
})


const storage = multer.memoryStorage()

export const upload = multer({storage})


export const user=new mongoose.model("Users",userSchema);