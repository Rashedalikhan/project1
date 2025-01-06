
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        console.log(error)
    }
})

userSchema.methods.generateAuthToken = function () {
    try {
        const key = process.env.JWT_SECRET_key;
        const token = jwt.sign({ 
            username: this.username, 
            email: this.email,
            isAdmin: this.isAdmin 
        }, 
            key, {
            expiresIn: "1h"
        });
        return token;
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        console.log(error)
    }
}

const User = new mongoose.model('User', userSchema);

module.exports = User;