var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Эксперт недвижимость' });
});

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('pages/admin_main', { title: 'Admin main' });
});

router.get('/admin_create', function(req, res, next) {
  res.render('pages/admin_create', { title: 'Admin create' });
});

router.get('/admin_edit', function(req, res, next) {
  res.render('pages/admin_edit', { title: 'Admin edit' });
});

router.post('/admin', function(req, res) {
  db.catalogueItems.create({
    tradeType: req.body.tradeType,
    areaType: req.body.areaType,
    numOfRooms: req.body.numOfRooms,
    nameOfDistrict: req.body.nameOfDistrict,
    nameOfStreet: req.body.nameOfStreet,
    buildingNum: req.body.buildingNum,
    floor: req.body.numOfFloor,
    totalFloorsInBuilding: req.body.totalFloorsInBuilding,
    area: req.body.area,
    price: req.body.price,
    oneSquareMeterPrice: req.body.oneSquareMeterPrice,
    year: req.body.year,
    roomType: req.body.roomType,
    livability: req.body.livability,
    description: req.body.description,
    contactPhones: req.body.contactPhones,
    checkDate: req.body.checkDate,
    comment: req.body.commentToItem
  }).success(function(text) {

  });
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
