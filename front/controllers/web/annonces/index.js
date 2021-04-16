// Annonces controller

//const { renderPage } = require('../../../utils');

async function home (req, res) {
  let annonces = []

  await fetch('http://localhost:3000/api/v1/annonces')
      .then(response => response.json())
      .then(response => {
        annonces = response.data
        Promise.resolve(true)
      })

  renderPage(res, 'annonces/index', {annonces})
}

async function details (req, res) {
  const {id} = req.params

  console.log({id})

  let annonce = {}
  await fetch(`http://localhost:3000/api/v1/annonces/${ id }`)
      .then(response => response.json())
      .then(response => {
        annonce = response.data
        Promise.resolve(true)
      })
  console.log({annonce})
  renderPage(res, 'annonces/details', {annonce})
}

async function ajouter (req, res) {
  renderPage(res, 'annonces/ajouter')
}


async function editer (req, res) {
  const {id} = req.params

  let annonce = {}
  await fetch(`http://localhost:3000/api/v1/annonces/${ id }`)
      .then(response => response.json())
      .then(response => {
        annonce = response.data
        Promise.resolve(true)
      })

  renderPage(res, 'annonces/editer', {annonce})
}

module.exports = {
  ajouter,
  details,
  home,
  editer
}
