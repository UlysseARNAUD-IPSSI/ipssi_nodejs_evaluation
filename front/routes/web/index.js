
const express = require('express'),
    router = express.Router()

// const { renderPage } = require('../../utils');

router
    .get('/', function(req, res){
      renderPage(res, 'home')
    })

    .use('/annonces', require('./annonces'))

module.exports = router;
