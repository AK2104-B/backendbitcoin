import jwt from "jsonwebtoken";


export const tokensend = (res, user, status = 200, message) => {
    const token = jwt.sign({ _id: user._id }, "jsonwebtoken")
    res.status(status).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    }).json({
        success: true,
        message: message,
        user:user
    })
}

export const authenticator=(req,res,next) => {
    const token = req.cookies
    if (!token) return res.json('login required');
    next();
}


export const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}