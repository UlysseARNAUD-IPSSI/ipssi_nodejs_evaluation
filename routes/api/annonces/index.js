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

    /*.get('/:id', async function (req, res) {
      const { id } = req.params;
      const bike = await getAnnonceById(id);
      res.send(bike);
    })*/

    .post('/:id', updateAnnonceById)

    /*.post('/:id', async function (req, res) {
      const { id } = req.params;
      const bike = await updateAnnonceById(id, req.body);
      res.send(bike);
    })*/

    .put('/:id', putAnnonceById)

    /*.put('/:id', async function (req, res) {
      const { id } = req.params;
      let bike = await getAnnonceById(id);

      if ( !bike ) {
        bike = await createAnnonce(req.body);
      }
      else {
        bike = await updateAnnonceById(id, req.body);
      }

      res.send(bike);
    })*/

    .delete('/:id', deleteAnnonceById)

    /*.delete('/:id', async function (req, res) {
      const { id } = req.params;
      const bike = await deleteAnnonceById(id);
      res.send(bike);
    });*/

module.exports = router;
