import express from "express";
import { upload, user } from "../Model/UserModel.js";
import { register } from "../Components/Users.js";
import { authenticator, tokensend } from "../Utils/cookies.js";
import { errorhandler } from "../Utils/errorhanler.js";
import bcrypt from 'bcrypt';

export const route = express.Router();

route.post('/register', upload.single('img'),register)

route.post('/login',authenticator,async(req, res, next) =>{
    const {email ,password}=req.body;
    const userfind=await user.findOne({email: email});
    if(!userfind) return next(new errorhandler('User not found',404)); 
    const compare = await bcrypt.compare(password, userfind.password)
    if (!compare) return next(new errorhandler('Password provided by the user does not match', 404))
    return tokensend(res, userfind, 200,`welcome back to ${userfind.first}`);
})

