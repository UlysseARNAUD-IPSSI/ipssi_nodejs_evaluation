const express = require('express'),
    router = express.Router();

const {ajouter, home, details} = require('../../../controllers/web/annonces')

router
    .get('/', home)
    .get('/ajouter', ajouter)
    .get('/:id', details);

module.exports = router;
