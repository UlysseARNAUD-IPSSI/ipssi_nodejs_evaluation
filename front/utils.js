function renderPage (res, page, variables = {}) {
  page = `../pages/${page}`;
  res.render('partials/page', { page, variables });
}

module.exports = {
  renderPage
};
