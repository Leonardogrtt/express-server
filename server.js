const express = require('express')
const indexRoute = require('./routes/index')
const apiRoute = require('./routes/api')

const app = express ()
const port = process.env.PORT || 4000

const users = [
    {
        name:'Leo',
        id: 1,
        company: {
            name:"Some Group"
        }
    },
    {
        name:'Elo',
        id: 2,
        company: {
            name:"Another Group"
        }
    }
]

const introJSON = [{ 
    "title":"express-server-api-0.0.1", 
    "description": "my-api", 
    "author": "Leonardo Girotto <leonardogrtt@gmail.com>" 
}]

app.use('/', indexRoute)
app.use('/api', apiRoute)



app.get('/api/users/:id', (req, res) => {
    
    const user = users.find(c => c.id === parseInt(req.params.id))
    
    if (!user) {
        res.status(404).send({message:'resource not found'})
    }
    res.status(200).json(user)

})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})