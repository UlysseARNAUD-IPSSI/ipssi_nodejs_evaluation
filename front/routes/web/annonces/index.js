const express = require('express'),
    router = express.Router();

const {ajouter, home, details, editer} = require('../../../controllers/web/annonces')

router
    .get('/', home)
    .get('/ajouter', ajouter)
    .get('/:id/editer', editer)
    .get('/:id', details)

module.exports = router;
