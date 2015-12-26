var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Эксперт недвижимость' });
});

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('pages/admin_main', { title: 'Admin main' });
});

/* GET home page. */
/*router.get('/catalogue', function(req, res, next) {
  res.render('pages/catalogue', { title: 'Catalogue' });
});*/

/* GET home page. */
/*router.get('/contacts', function(req, res, next) {
  res.render('pages/contacts', { title: 'Contacts' });
});*/

/* GET home page. */
/*router.get('/send_request', function(req, res, next) {
  res.render('pages/send_request', { title: 'Send Request' });
});*/

module.exports = router;
