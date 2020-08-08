const posts = [
    {
        title:'title1',
        id: 1,
        userId: 1,
        body: 'corpo'
    },
    {
        title:'title2',
        id: 2,
        userId: 1,
        body: 'corpo2'
    }
]

exports.get = (req, res) => {
    res.status(200).json(posts)
}