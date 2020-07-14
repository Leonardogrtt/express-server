const express = require('express')
const route = express.Router()
const controller = require('../controllers/PostController')

route.use('/', controller.get)

module.exports = route