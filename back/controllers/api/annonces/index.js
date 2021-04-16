// Annonces controller

const Annonce = require('../../../models/Annonce');

async function getAllAnnonces (req, res) {
  const annonces = await Annonce.find();
  res.send({
    ok: true,
    message: 'Annonces récupérées',
    data: annonces,
  });
}

async function getAnnonceById (req, res) {
  const { id } = req.params;
  try {
    const annonce = await Annonce.findOne({ _id: id });
    res.send({
      ok: true,
      message: 'Annonce récupérée',
      data: annonce,
    });
  }
  catch ( error ) {
    res.send({
      ok: false,
      message: 'Erreur lors de la récupération de l\'annonce',
      data: [],
    });
  }
}

async function createAnnonce (req, res) {
  // TODO : Pourquoi req.body ne retourne pas le JSON donné ?
  const { body: values } = req;
  const annonce = new Annonce(values);
  await annonce.save();
  res.send({
    ok: true,
    message: 'Annonce créée avec succès',
    data: annonce,
  });
}

async function updateAnnonceById (req, res) {
  const { body: values } = req;
  const { id } = req.params;
  const annonce = await Annonce.updateOne({ _id: id }, values);
  res.send({
    ok: true,
    message: 'Annonce mis à jour',
    data: annonce,
  });
}

async function deleteAnnonceById (req, res) {
  const { id } = req.params;

  await Annonce.deleteOne({ _id: id });

  res.send({
    ok: true,
    message: 'Annonce supprimée',
    data: [],
  });
}

async function deleteAllAnnonces (req, res) {
  const annonces = await Annonce.find();

  for ( let annonce of annonces ) {
    const { _id } = annonce;
    await Annonce.deleteOne({ _id });
  }

  res.send({
    ok: true,
    message: 'Annonces supprimées avec succès',
    data: [],
  });
}

async function getAnnoncesByVille (req, res) {
  const { ville } = req.params;
  const annonces = await Annonce.find({ ville });
  res.send({
    ok: false,
    message: 'Annonces récuperées avec succès',
    data: annonces,
  });
}

async function putAnnonceById (req, res) {
  const { id } = req.params;
  let annonce = await getAnnonceById(id);

  if ( !annonce.data ) {
    return await createAnnonce(req.body);
  }

  return await updateAnnonceById(id, req.body);
}

module.exports = {
  getAllAnnonces,
  getAnnonceById,
  createAnnonce,
  updateAnnonceById,
  deleteAnnonceById,
  deleteAllAnnonces,
  getAnnoncesByVille,
  putAnnonceById,
};
