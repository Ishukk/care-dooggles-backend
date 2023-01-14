const { Router } = require("express");
const {register }  = require('../../controllers/auth/registerController.js')

Router.post('/register', register)
