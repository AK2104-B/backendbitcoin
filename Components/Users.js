
import { callfirebase } from "../Data/firebase.js";
import { user } from "../Model/UserModel.js";
import { giveCurrentDateTime } from "../Utils/cookies.js";
import { errorhandler } from "../Utils/errorhanler.js";
import bcrypt from 'bcrypt';
import {  ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";

callfirebase();
const fstorage = getStorage();


export const register=async (req, res, next) => {
    const { first, last, email, password, Dob } = req.body;
    const pre = await user.findOne({ email: email })
    if (pre) return next(new errorhandler('User already registered', 409))
    const dateTime = giveCurrentDateTime();
    const npass = await bcrypt.hash(password, 10);
    const storageRef = ref(fstorage, `files/${req.file.originalname + "       " + dateTime}`);
    const metadata = {
        contentType: req.file.mimetype,
    };
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    await user.create({
        first,
        last,
        email,
        password: npass,
        image: downloadURL,
        Dob
    })
    res.status(200).json({
        success: true,
        message: 'User registered successfully'
    })
}