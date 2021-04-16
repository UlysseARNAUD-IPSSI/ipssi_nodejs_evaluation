const express = require('express'),
    router = express.Router();

const {
  getAllAnnonces,
  getAnnonceById,
  createAnnonce,
  updateAnnonceById,
  deleteAnnonceById,
  deleteAllAnnonces,
  getAnnoncesByVille,
  putAnnonceById
} = require('../../../controllers/api/annonces')


router
    .get('/', getAllAnnonces)

    .post('/', createAnnonce)

    .delete('/', deleteAllAnnonces)

    .get('/:id', getAnnonceById)

    .post('/:id', updateAnnonceById)

    .put('/:id', putAnnonceById)

    .delete('/:id', deleteAnnonceById)

module.exports = router;
