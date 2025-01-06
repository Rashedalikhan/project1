const User = require("../database/userSchema");
const Contact = require('../database/contactSchema');



const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({msg: "User does not exist"});
        }
        const isMatch = await userExist.matchPassword(password);
        console.log(isMatch);
        if(isMatch){
            return res.status(200).json({
                message:"login successfull", 
                token: userExist.generateAuthToken()
            });
        }
    } catch (error) {
        console.log(error)
        
    }
    res.status(200).json({ msg: "login" })
}

const register = async(req, res) => {

    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({email});
        // console.log(userExist);

        if (userExist) {
            return res.status(400).json({ msg: "User already exist" })
        };
        // console.log(userExist)
        const user = await User.create({username,email,phone,password});
        console.log(user)
        if (user) {
            return res.status(201).json({
                msg: "User created successfully",
                token: user.generateAuthToken()
            })
        }
    } catch (error) {
       console.log(error)
    }
}

const contact = async(req, res) => {
    try {
        const {username, email, message} = req.body;
        const contact = await Contact.create({username,email,message});
        console.log(contact);
        if(contact){
            return res.status(201).json({msg: "Contact created successfully"})
        }
    } catch (error) {
        console.log(error)
    }
}

const user = async(req, res) => {  
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: "No user found"})
        }
        
        return res.status(200).json({ msg: "user is valid",users : user })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { login, register,contact,user }