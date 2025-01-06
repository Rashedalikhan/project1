const mongoose = require('mongoose');
const connectdb = async (req, res)=>{
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error)
    }
    
    
}

module.exports = connectdb;