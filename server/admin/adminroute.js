const express = require('express');
const adminrouter = express.Router();
const admincontroller = require('./admincontroller');
const atuthmiddleware = require('../mideleware/auth-middlewere');
const adminmiddlewere = require('../mideleware/adminmiddlewere');

adminrouter.route("/user").get(atuthmiddleware,adminmiddlewere,admincontroller.users);
adminrouter.route("/contact").get(atuthmiddleware,adminmiddlewere,admincontroller.contacts);
adminrouter.route("/product").post(atuthmiddleware,adminmiddlewere,admincontroller.products);


module.exports = adminrouter;