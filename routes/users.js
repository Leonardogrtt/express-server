const express = require('express')
const route = express.Router()
const controller = require('../controllers/UserController.js')

route.get('/', controller.get)

module.exports = route