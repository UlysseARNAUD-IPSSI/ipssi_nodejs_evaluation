const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.Promise = global.Promise;

connectDatabase(false)
startApp()


function startApp() {

    const app = express()
    const port = 3000

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cors())

    app.set('view engine', 'ejs');

    app.use('/api/v1', require('./routes/api'));

    app.listen(port, () => {
        // const postmanUrl = "https://documenter.getpostman.com/view/2652537/TzJoDfZ1"

        console.log(`Example app listening at http://localhost:${port}`)

        // console.log(`Documentation postman disponible ici : ${postmanUrl}`)
    })
}

function connectDatabase(isMongoUsed = true) {
    const databaseName = 'immo'

    const mongooseParams = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    };

    let host = 'localhost:27017'
    if (isMongoUsed) {
        host = 'mongo'
    }

    mongoose.connect(
        `mongodb://${host}/${databaseName}`,
        mongooseParams
    ).then(response => {
        console.log('Database connected successfully !')
    }).catch(error => {
        console.error('Error while connecting database', error)
    })
}

function renderPage(page) {
    res.render('views/partials/page', {page})
}
