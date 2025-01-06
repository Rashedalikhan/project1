const jwt = require('jsonwebtoken'); 
const User = require('../database/userSchema');   

const atuthmiddleware = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" })
        }
        // console.log(token);
        newtoken = token.replace("Bearer ", "").trim();

        let decoded = jwt.verify(newtoken, process.env.JWT_SECRET_key);
        // console.log(decoded);
        if(!decoded){
            return res.status(200).json({msg: "Token is not valid"})
        }
        req.body = decoded;
        decoded = req.body;
        console.log(decoded);
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports = atuthmiddleware;