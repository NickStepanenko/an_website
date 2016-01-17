var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Эксперт недвижимость' });
});

/* GET home page. */
router.get('/admin', function(req, res, next) {
    db.Catalogue.findAll().success(function(Catalogue) {
        res.render('pages/admin_main',{ catalogue: Catalogue, title: 'Admin main' });
    });
});

router.get('/admin_create', function(req, res, next) {
  res.render('pages/admin_create', { title: 'Admin create' });
});

router.get('/admin_edit', function(req, res, next) {
  res.render('pages/admin_edit', { title: 'Admin edit' });
});

router.post('/admin_create', function(req, res) {
  console.log(
      "Trade type: " + req.body.tradeType + "\n",
      "Area type: " + req.body.areaType + "\n",
      "Num of rooms: " + req.body.numOfRooms + "\n",
      "Name of district: " + req.body.nameOfDistrict + "\n",
      "Name of street: " + req.body.nameOfStreet + "\n",
      "Building num: " + req.body.buildingNum + "\n",
      "Num of floor: " + req.body.numOfFloor + "\n",
      "Total floors in Building: " + req.body.totalFloorsInBuilding + "\n",
      "Area: " + req.body.area + "\n",
      "Price: " + req.body.price + "\n",
      "One square meter price: " + req.body.oneSquareMeterPrice + "\n",
      "Year: " + req.body.year + "\n",
      "Room type: " + req.body.roomType + "\n",
      "Livability: " + req.body.livability + "\n",
      "Description: " + req.body.description + "\n",
      "Contact phones: " + req.body.contactPhones + "\n",
      "Check date: " + req.body.checkDateDay + "-" + req.body.checkDateMonth + "-" + req.body.checkDateYear + "\n",
      "Comment: " + req.body.commentToItem
  );

  db.Catalogue.create({
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
    checkDate: req.body.checkDateDay + "-" + req.body.checkDateMonth + "-" + req.body.checkDateYear,
    comment: req.body.commentToItem
  }).success(function(text) {
        res.redirect('/admin');
      }
  );
});

module.exports = router;
