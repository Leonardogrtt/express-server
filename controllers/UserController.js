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

exports.get = (req, res) => {
    res.status(200).send(users)
}