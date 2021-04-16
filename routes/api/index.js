
const express = require('express'),
    router = express.Router()

router
    .get('/', function(req, res){
        res.send('API home !')
    })

    .use('/annonces', require('./annonces'))

module.exports = router;
