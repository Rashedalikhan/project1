const Contact = require("../database/contactSchema");
const User = require("../database/userSchema");
const Post = require("../database/postSchema");



const users = async(req, res) => {
    try {
        const user = await User.find();
        if(!user){
            return res.status(400).json({msg: "No user found"})
        }
        return res.status(200).json({ msg: "admin",users : user })
    } catch (error) {
        console.log(error)
    }
    
}


const contacts = async(req, res) => {
    try {
        const contact = await Contact.find();
        if(!contact){
            return res.status(400).json({msg: "No contact found"})
        }

        return res.status(200).json({ msg: "admin",contcts : contact })
    } catch (error) {
        console.log(error)
    }
    
}


const products = async(req, res) => {
    try {
        const {title,prise,description,image,category,rattings} = req.body;
        console.log(req.body);
        // const product = await Post.fineOne({title});
        // console.log("hi this is post page")
        // if(!product){
        //     return res.status(400).json({msg: "No product found"})
        // }
        const Posts = await Post.create({
            title,
            prise,
            description,
            image,
            category,
            rattings
        })

        if(res.status(200)){
            return res.status(200).json({ msg: "admin",products : Posts })
        }

       
    } catch (error) {
        console.log(error)
    }
}

module.exports = {contacts,users,products};