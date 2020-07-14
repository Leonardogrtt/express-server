const express = require('express')
const route = express.Router()
const usersRoute = require('./users')
const postsRoute = require('./posts')

const introJSON = [{ 
    "title":"express-server-api-0.0.1", 
    "description": "my-api", 
    "author": "Leonardo Girotto <leonardogrtt@gmail.com>" 
}]

route.use('/users', usersRoute)
route.use('/posts', postsRoute)

route.get('/', (req, res) => {
    res.status(200).json(introJSON)
})

module.exports = route