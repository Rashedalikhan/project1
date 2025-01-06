const express = require('express');
const router = express.Router();
const controller = require('./auth-controller')
const atuthmiddleware = require('../mideleware/auth-middlewere');

router.route("/login").post(controller.login);
router.route("/register").post(controller.register);
router.route("/contact").post(controller.contact);
router.route("/user").get(atuthmiddleware,controller.user);


module.exports = router;