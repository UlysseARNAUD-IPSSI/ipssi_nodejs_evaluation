const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

global.fetch = require('node-fetch')
global.renderPage = require('./utils').renderPage;

startApp()


function startApp() {

    const app = express()
    const port = 3001

    app.use(express.static('public'))

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cors())

    app.set('view engine', 'ejs');

    app.use('/', require('./routes/web'));

    app.listen(port, () => {
        // const postmanUrl = "https://documenter.getpostman.com/view/2652537/TzJoDfZ1"

        console.log(`Example app listening at http://localhost:${port}`)

        // console.log(`Documentation postman disponible ici : ${postmanUrl}`)
    })
}
