const about = (req, res) => {
res.render('generic-txt', { title: 'About' });
};
module.exports = {
about
};