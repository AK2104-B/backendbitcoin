import mongoose from "mongoose";

const Dbconnect = () => {
    mongoose.connect(process.env.Url, {
        dbName: 'crypto_app'
    }).then(console.log('connecting to database')).catch((err) => { console.log(err); })

}

export default Dbconnect;