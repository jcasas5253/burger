var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// router.get('/*', function (req, res) {
//     res.redirect('/');
// });

// Index Page 
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var MyObject = { burgers: data };
        res.render('index', MyObject);
    });
});

// Burger Creation
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

// Devour a created burger
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router;