const mongoose = require('mongoose');

require('dotenv').config();

const {MONGO_URI} = process.env;


//Connect DB 

const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {
        console.log("MongoDB connected successfully!");
    }).catch((error)=> {
        console.log(error.message);

        //Exit with failure 
        process.exit(1);
    })
}

module.exports = connectDB;