const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://morena1001:FEB.jf.A.0227033926528@bookstore.5dog08i.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore'

module.exports = {
    connectToDb: (cb) => {
        // MongoClient.connect('mongodb://localhost:27017/Bookstore') // Only for a local database
        MongoClient.connect(uri) // Using MongoDB Atlas
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}
